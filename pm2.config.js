module.exports = {
  apps: [
    {
      name: 'crm-profile',
      script: './dist/main.js',
      watch: false,
      wait_ready: true,
      stop_exit_codes: [0],
      env: {
        PORT: 5012,
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
