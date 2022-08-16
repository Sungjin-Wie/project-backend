import UserService from "./UserService";
import { Controller } from "../../common/interface";
import { authenticateMiddleware, testMiddleware } from "../../middlewares/auth";

const fetchMyInfo: Controller = {
  route: "/info",
  method: "get",
  handler: async (req, res, next) => {
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

const test: Controller = {
  route: "/test",
  method: "get",
  handler: async (req, res, next) => {
    try {
      // controller logic here
      res.send({ name: "test api" });
    } catch (e) {
      next(e);
    }
  },
};

export default [fetchMyInfo, test];
