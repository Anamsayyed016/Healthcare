# PharmEFC Healthcare — Hostinger VPS Deployment Guide

> **Isolation guarantee:** This guide deploys PharmEFC into its own directory, PM2 process, logs, env file, Nginx server block, and SSL certificate. It does **not** modify Naukrimili configuration.

---

## Phase 1 — Project Audit Summary

| Item | Value |
|------|-------|
| **Project type** | Next.js marketing / product catalogue site (static + SSG) |
| **Next.js** | 16.2.6 |
| **React** | 19.x |
| **Router** | App Router only (`app/`) — no `pages/` directory |
| **Package manager** | pnpm (`pnpm-lock.yaml`; no `package-lock.json`) |
| **Build command** | `pnpm run build` |
| **Start command** | `pnpm start` → `next start` (listens on `PORT`, default 3000) |
| **Output mode** | Default (not `standalone`, not `export`) |
| **Standalone enabled** | No |
| **Middleware** | None |
| **API routes** | None |
| **Environment variables** | None required (only `NODE_ENV` used for Vercel Analytics toggle) |
| **Image domains** | `res.cloudinary.com` (`images.unoptimized: true` in `next.config.mjs`) |
| **Static assets** | `public/` (icons, placeholders, local product images) |
| **Dynamic routes** | `/products/[slug]` — SSG via `generateStaticParams` (7 products) |
| **Contact form** | Client-side UI only — no backend submission |
| **Production ready** | Yes — build passes locally |
| **Missing prod configs** | PM2, Nginx, env template, deployment docs (this file + `ecosystem.config.js` added) |

### Routes (all static / SSG)

```
○ /                  ○ /about           ○ /contact
○ /leadership        ○ /products        ○ /services
○ /why-pharmefc      ● /products/[slug] (7 product pages)
```

### Deployment risks

1. **Port conflict** — Naukrimili may already use port 3000. PharmEFC must use a different `PORT`.
2. **No `standalone` output** — VPS needs full `node_modules` + `.next` after build (not a single binary).
3. **`typescript.ignoreBuildErrors: true`** — Type errors are skipped at build time; monitor builds on VPS.
4. **pnpm required** — Use `pnpm install --frozen-lockfile`, not `npm install` (lockfile mismatch).
5. **Node version** — Tested with Node 22.x; use Node 20 LTS or 22 LTS on VPS.
6. **Zero-downtime deploy** — Use `pm2 reload pharmefc-healthcare` after building in a release directory; never `pm2 restart all`.

---

## Phase 2 — Safe VPS Deployment Plan

### Directory layout (isolated from Naukrimili)

```
/var/www/pharmefc-healthcare/
├── current/          → symlink to latest release
├── releases/
│   └── <timestamp>/  → git clone + build artifacts
├── shared/
│   └── .env.production
└── logs/
    ├── out.log
    └── err.log
```

Naukrimili should remain in its own path (e.g. `/var/www/naukrimili/`). **Do not share directories.**

### Identify a free port (do not assume 3001)

On the VPS:

```bash
# See what is listening
sudo ss -tlnp | grep LISTEN

# Or
sudo lsof -i -P -n | grep LISTEN

# Check PM2 apps and their ports
pm2 list
pm2 show <naukrimili-app-name>
```

Pick a port **not** listed (common alternatives: 3001, 3002, 3010 — verify first).

Set in `/var/www/pharmefc-healthcare/shared/.env.production`:

```env
NODE_ENV=production
PORT=<chosen-free-port>
```

### PM2 isolation

| Resource | Naukrimili | PharmEFC |
|----------|------------|----------|
| Process name | (existing — do not change) | `pharmefc-healthcare` |
| Working directory | (existing path) | `/var/www/pharmefc-healthcare/current` |
| Logs | (existing logs) | `/var/www/pharmefc-healthcare/logs/` |
| Env file | (existing) | `/var/www/pharmefc-healthcare/shared/.env.production` |

---

## Phase 3 — Deployment Commands

### One-time VPS setup

```bash
# 1. Create isolated directories
sudo mkdir -p /var/www/pharmefc-healthcare/{releases,shared,logs}
sudo chown -R $USER:$USER /var/www/pharmefc-healthcare

# 2. Install Node 22 LTS (if not present) and pnpm
node -v    # expect v20+ or v22+
corepack enable
corepack prepare pnpm@latest --activate

# 3. Clone (first release)
RELEASE_DIR=/var/www/pharmefc-healthcare/releases/$(date +%Y%m%d%H%M%S)
git clone <YOUR_REPO_URL> "$RELEASE_DIR"
cd "$RELEASE_DIR"

# 4. Link shared env
ln -sf /var/www/pharmefc-healthcare/shared/.env.production .env.production

# 5. Install and build
pnpm install --frozen-lockfile
export $(grep -v '^#' /var/www/pharmefc-healthcare/shared/.env.production | xargs)
pnpm run build

# 6. Activate release
ln -sfn "$RELEASE_DIR" /var/www/pharmefc-healthcare/current

# 7. Start PM2 (first time only)
cd /var/www/pharmefc-healthcare/current
export $(grep -v '^#' /var/www/pharmefc-healthcare/shared/.env.production | xargs)
pm2 start ecosystem.config.js --env production
pm2 save
```

### Subsequent deploys (zero impact on Naukrimili)

```bash
RELEASE_DIR=/var/www/pharmefc-healthcare/releases/$(date +%Y%m%d%H%M%S)
git clone --depth 1 -b main <YOUR_REPO_URL> "$RELEASE_DIR"
cd "$RELEASE_DIR"
ln -sf /var/www/pharmefc-healthcare/shared/.env.production .env.production
pnpm install --frozen-lockfile
export $(grep -v '^#' /var/www/pharmefc-healthcare/shared/.env.production | xargs)
pnpm run build
ln -sfn "$RELEASE_DIR" /var/www/pharmefc-healthcare/current
export $(grep -v '^#' /var/www/pharmefc-healthcare/shared/.env.production | xargs)
pm2 reload pharmefc-healthcare --update-env
```

### PM2 commands (PharmEFC only)

```bash
pm2 status pharmefc-healthcare
pm2 logs pharmefc-healthcare
pm2 reload pharmefc-healthcare
pm2 stop pharmefc-healthcare
pm2 delete pharmefc-healthcare   # only if removing this app entirely
```

**Never run:** `pm2 restart all`, `pm2 delete all`, or `pm2 kill` (would affect Naukrimili).

---

## Nginx — NEW server block only

Create a **new** file (do not edit Naukrimili config):

`/etc/nginx/sites-available/pharmefc-healthcare`

Replace `pharmefc.example.com` with your real domain and `<PHARMEFC_PORT>` with the port from `.env.production`.

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name pharmefc.example.com www.pharmefc.example.com;

    access_log /var/log/nginx/pharmefc-healthcare.access.log;
    error_log  /var/log/nginx/pharmefc-healthcare.error.log;

    location / {
        proxy_pass http://127.0.0.1:<PHARMEFC_PORT>;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /_next/static {
        proxy_pass http://127.0.0.1:<PHARMEFC_PORT>;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

Enable and test:

```bash
sudo ln -s /etc/nginx/sites-available/pharmefc-healthcare /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## SSL — Certbot commands (do not run until DNS points to VPS)

```bash
sudo certbot --nginx -d pharmefc.example.com -d www.pharmefc.example.com
```

Certbot will create a **separate** certificate for PharmEFC. It does not modify Naukrimili certificates if domains differ.

Renewal test:

```bash
sudo certbot renew --dry-run
```

---

## Rollback procedure

```bash
# 1. List releases
ls -lt /var/www/pharmefc-healthcare/releases/

# 2. Point current to previous release
ln -sfn /var/www/pharmefc-healthcare/releases/<PREVIOUS_TIMESTAMP> /var/www/pharmefc-healthcare/current

# 3. Reload PM2 (PharmEFC only)
export $(grep -v '^#' /var/www/pharmefc-healthcare/shared/.env.production | xargs)
pm2 reload pharmefc-healthcare --update-env

# 4. Verify
curl -I http://127.0.0.1:$PORT
pm2 logs pharmefc-healthcare --lines 50
```

To fully remove PharmEFC (Naukrimili untouched):

```bash
pm2 delete pharmefc-healthcare
pm2 save
sudo rm /etc/nginx/sites-enabled/pharmefc-healthcare
sudo nginx -t && sudo systemctl reload nginx
# Optionally: sudo certbot delete --cert-name pharmefc.example.com
```

---

## Build verification (local)

```bash
pnpm install --frozen-lockfile
pnpm run build   # exit 0, 16 static pages
pnpm start       # test on http://localhost:3000
```

Last verified build: **success** — Next.js 16.2.6, 16 pages generated, all routes static/SSG.

---

## Confirmations

- Naukrimili configuration is **never** modified by this guide.
- No duplicate `next.config`, `tsconfig`, or `package.json` scripts were created.
- Port, PM2 name, logs, Nginx server block, env file, and SSL are **isolated** from Naukrimili.
- Only **new** files added to the repo: `ecosystem.config.js`, `deployment.md`.
