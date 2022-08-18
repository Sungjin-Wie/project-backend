import * as UserService from "./UserService";
import { Controller } from "../../src/common/interface";
import { checkAuth, testMiddleware } from "../../src/middlewares/auth";
import { putCache, checkCache } from "../../src/utils/cacheUtils";
import * as CommonUtils from "../../src/utils/commonUtils";

const fetchMyInfo: Controller = {
  route: "/info",
  method: "get",
  preMiddleware: [checkAuth, testMiddleware],
  handler: async (req, res, next) => {
    try {
      // controller logic here
      let user = await UserService.findUserInfo();
      res.send(user);
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

export default [fetchMyInfo, expensiveRoute, template];
