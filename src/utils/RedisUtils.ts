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
  setObject: async (key: string, value: Object | any[], seconds?: number) => {
    await redisClient.set(key, JSON.stringify(value));
    if (seconds) {
      await redisClient.expire(key, seconds);
    }
  },
  getObject: async (key: string) => {
    let data = await redisClient.get(key);
    if (data) return JSON.parse(data);
    else return undefined;
  },
};

export default RedisUtil;
