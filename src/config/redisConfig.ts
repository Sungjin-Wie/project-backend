import Redis from "ioredis";
import dotenv from "dotenv";
const env = process.env.NODE_ENV ?? "production";
dotenv.config({ path: `./.env.${env}` });
const host = process.env.REDIS_HOST as string;
const port = 6379;
console.log(host, port);
const redisUrl = process.env.REDIS_URL as string;
export const redisClient = new Redis(redisUrl);
