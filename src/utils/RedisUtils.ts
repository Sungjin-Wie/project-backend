import { redisClient } from "../config/redis";

const RedisUtil = {
  set: async (key: string, value: string, seconds?: number) => {
    await redisClient.set(key, value);
    if (seconds) {
      await redisClient.expire(key, seconds);
    }
  },
  get: async (key: string) => {
    return await redisClient.get(key);
  },
  del: async (key: string) => {
    await redisClient.del(key);
  },
};

export default RedisUtil;
