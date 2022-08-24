import * as redis from "redis";
export const redisClient = redis.createClient({
  host: "192.168.0.16",
  port: 6379,
});
export const init = async () => {
  try {
    await redisClient.connect();
  } catch (e) {
    throw e;
  }
};
