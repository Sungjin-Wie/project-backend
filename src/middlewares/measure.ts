import { Middleware } from "../common/interface";

const getDurationInMilliseconds = (start: [number, number]) => {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

const measureRequestMiddleware: Middleware = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} [STARTED]`);
  const start = process.hrtime();

  res.on("finish", () => {
    const durationInMilliseconds = getDurationInMilliseconds(start);
    console.log(
      `${req.method} ${
        req.originalUrl
      } [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`,
    );
  });

  res.on("close", () => {
    const durationInMilliseconds = getDurationInMilliseconds(start);
    console.log(
      `${req.method} ${
        req.originalUrl
      } [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`,
    );
  });

  next();
};

export default measureRequestMiddleware;
