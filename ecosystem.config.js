module.exports = {
  apps: [
    {
      name: "project-backend",
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
