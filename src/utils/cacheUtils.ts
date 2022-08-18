import { Middleware } from "../common/interface";
import RedisUtil from "./RedisUtils";

export const putCache: Middleware = async (req, res, next) => {
  if (req?.cacheData && req?.cacheKey) {
    // add data to cache
    console.log(req.cacheData);
    console.log(req.url);
    await RedisUtil.set(req.url, req.cacheData);
  }
  next();
};

export const checkCache: Middleware = async (req, res, next) => {
  let cachedData = await RedisUtil.get(req.url);
  if (cachedData) {
    console.log(`cache exists in key ${req.url}`);
    res.send(cachedData);
  } else {
    console.log(`cache miss in key ${req.url}`);
    next();
  }
};
