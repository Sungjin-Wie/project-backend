import * as redis from "redis";
export const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_URL ?? "localhost",
    port: 6379,
  },
});
export const init = async () => {
  try {
    await redisClient.connect();
  } catch (e) {
    throw e;
  }
};
