import { Middleware } from "../common/interface";

let cache: any = {};

export const putCache: Middleware = async (req, res, next) => {
  if (req?.cacheData && req?.cacheKey) {
    // add data to cache
    console.log(req.cacheData);
    console.log(req.url);
    cache[req.url] = req.cacheData;
  }
  next();
};

export const checkCache: Middleware = async (req, res, next) => {
  let responseData = cache?.[req.url];
  if (responseData) {
    console.log(`cache exists in key ${req.url}`);
    res.send(responseData);
  } else {
    console.log(`cache miss in key ${req.url}`);
    next();
  }
};
