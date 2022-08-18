import * as redis from "redis";
export const redisClient = redis.createClient();
export const init = async () => {
  await redisClient.connect();
};
