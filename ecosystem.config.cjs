module.exports = {
  apps: [
    {
      name: "dg-komputer-prod",
      script: "server.cjs",
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 8081,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
    },
    {
      name: "dg-komputer-dev",
      script: "node_modules/vite/bin/vite.js",
      exec_mode: "fork",
      env: {
        NODE_ENV: "development",
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
    }
  ],
};
