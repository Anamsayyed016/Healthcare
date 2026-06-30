/**
 * PharmEFC PM2 — standalone server.js (isolated from Naukrimili).
 * Production: port 3001 | Staging health check during deploy: port 3002
 */
module.exports = {
  apps: [
    {
      name: 'pharmefc-healthcare',
      cwd: process.env.PHARMEFC_RELEASE_DIR || '/var/www/pharmefc-healthcare/current',
      script: 'server.js',
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
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || '3001',
        HOSTNAME: '0.0.0.0',
      },
    },
    {
      name: 'pharmefc-healthcare-staging',
      cwd: process.env.PHARMEFC_RELEASE_DIR || '/var/www/pharmefc-healthcare/staging-test',
      script: 'server.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: '3002',
        HOSTNAME: '127.0.0.1',
      },
    },
  ],
};
