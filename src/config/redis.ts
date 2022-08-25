import * as redis from "redis";
export const redisClient = redis.createClient();
export const init = async () => {
  try {
    await redisClient.connect();
  } catch (e) {
    throw e;
  }
};
