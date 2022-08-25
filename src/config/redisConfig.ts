import * as redis from "redis";
export const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
});
export const init = async () => {
  try {
    await redisClient.connect();
  } catch (e) {
    throw e;
  }
};
