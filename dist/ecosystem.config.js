module.exports = {
  apps: [
    {
      name: 'swm-portal-monitor',
      script: './monitor-nginx.sh',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'swm-portal-health',
      script: './health-checker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        SITE_URL: 'https://swm.org.in'
      }
    }
  ]
};
