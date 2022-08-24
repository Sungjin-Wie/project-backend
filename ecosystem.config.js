module.exports = {
  apps: [
    {
      name: "project-backend",
      script: "dist/index.js",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
