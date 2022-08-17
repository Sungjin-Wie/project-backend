import { Middleware } from "../common/interface";

let cache: any = {};

export const cachePut: Middleware = async (req, res, next) => {
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
  console.log(`responseData: ${responseData}`);
  if (responseData) {
    res.send(responseData);
  } else {
    next();
  }
};
