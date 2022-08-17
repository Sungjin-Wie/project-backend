import * as UserService from "./UserService";
import { Controller } from "../../common/interface";
import { checkAuth, testMiddleware } from "../../middlewares/auth";
import { cachePut, checkCache } from "../../utils/cacheUtils";
import { delay } from "../../utils/commonUtils";

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
      await delay(10000); // wait for 10 seconds
      let responseData = "You need 10 seconds to see this response.";
      req.cacheData = responseData;
      req.cacheKey = req.url;
      res.send(responseData);

      next();
    } catch (e) {
      next(e);
    }
  },
  postMiddleware: [cachePut],
};

const template: Controller = {
  route: "/test",
  method: "get",
  preMiddleware: [],
  handler: async (req, res, next) => {
    try {
      // controller logic here
      res.send({ name: "template api" });
      next();
    } catch (e) {
      next(e);
    }
  },
  postMiddleware: [],
};

export default [fetchMyInfo, expensiveRoute, template];
