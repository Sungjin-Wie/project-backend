import * as redis from "redis";
// import Redis from "ioredis";
export const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
});
// export const redisClient = new Redis({
//   host: process.env.REDIS_HOST,
//   port: 6379,
//   password: process.env.REDIS_PASSWORD,
// });
export const init = async () => {
  try {
    await redisClient.connect();
  } catch (e) {
    throw e;
  }
};
