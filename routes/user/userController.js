import UserService from "./UserService.js";
import { method } from "../../common/types.js";
import {
  authenticateMiddleware,
  testMiddleware,
} from "../../middlewares/auth.js";

const fetchMyInfo = {
  route: "/info",
  method: method.get,
  controller: async (req, res, next) => {
    try {
      // controller logic here
      await UserService.findUserInfo();
      res.send({ name: "Jhon doe" });
    } catch (e) {
      next(e);
    }
  },
  middleware: [authenticateMiddleware, testMiddleware],
};

const test = {
  route: "/test",
  method: method.get,
  controller: async (req, res, next) => {
    try {
      // controller logic here
      await UserService.findUserInfo();
      res.send({ name: "test api" });
    } catch (e) {
      next(e);
    }
  },
};

export default [fetchMyInfo, test];
