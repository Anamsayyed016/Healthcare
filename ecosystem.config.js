/**
 * PM2 process definition for PharmEFC Healthcare (isolated from Naukrimili).
 *
 * PORT is NOT hardcoded. Set it before starting:
 *   export PORT=<free-port>   # Linux/macOS
 *   $env:PORT=<free-port>     # PowerShell
 *
 * Or create /var/www/pharmefc-healthcare/shared/.env.production on the VPS:
 *   PORT=<free-port>
 *   NODE_ENV=production
 *
 * Start (from project root on VPS):
 *   pm2 start ecosystem.config.js --env production
 *
 * Never run `pm2 restart all` — only manage this app by name:
 *   pm2 restart pharmefc-healthcare
 */
module.exports = {
  apps: [
    {
      name: 'pharmefc-healthcare',
      cwd: process.env.PHARMEFC_APP_DIR || '/var/www/pharmefc-healthcare/current',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      out_file: '/var/www/pharmefc-healthcare/logs/out.log',
      error_file: '/var/www/pharmefc-healthcare/logs/err.log',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        // PORT must be supplied via shell or .env on the VPS (see deployment.md).
      },
    },
  ],
};
