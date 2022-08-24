module.exports = {
  apps: [
    {
      name: "project-backend",
      script: "./dist/index.js",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
