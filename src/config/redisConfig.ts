import * as redis from "redis";
export const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_URL}:6379`,
});
export const init = async () => {
  try {
    await redisClient.connect();
  } catch (e) {
    throw e;
  }
};
