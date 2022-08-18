import * as CrawlingService from "./CrawlingService";
import { Controller } from "../../common/interface";
import { putCache, checkCache } from "../../utils/cacheUtils";
import * as CommonUtils from "../../utils/commonUtils";

const fetchCrawlingData: Controller = {
  route: "/",
  method: "get",
  preMiddleware: [],
  handler: async (req, res, next) => {
    try {
      // controller logic here
      let target = req.query.target ?? "algumon";
      let data = await CrawlingService.findCrawlingData(target as string);
      res.send(data);
    } catch (e) {
      next(e);
    }
  },
  postMiddleware: [],
};

const expensiveRoute: Controller = {
  route: "/expensive-route",
  method: "get",
  preMiddleware: [checkCache],
  handler: async (req, res, next) => {
    try {
      await CommonUtils.delay(10000); // wait for 10 seconds
      let responseData = "Very expensive response";
      req.cacheData = responseData;
      req.cacheKey = req.url;
      res.send(responseData);
      next();
    } catch (e) {
      next(e);
    }
  },
  postMiddleware: [putCache],
};

const template: Controller = {
  route: "/test",
  method: "get",
  preMiddleware: [],
  handler: async (req, res, next) => {
    try {
      // controller logic here
      res.send({ name: "template api" });
      // next(); //if you need to use postMiddleware
    } catch (e) {
      next(e);
    }
  },
  postMiddleware: [],
};

export default [fetchCrawlingData, expensiveRoute, template];
