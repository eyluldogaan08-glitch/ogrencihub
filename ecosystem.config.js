module.exports = {
  apps: [
    {
      name: "nextjs-projem",
      script: "server.js",
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
        PORT: 5800,
      },
    },
  ],
};
