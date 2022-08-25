import UserController from "./UserController";
import { Router } from "express";
import { checkAuthMiddleware } from "../../middlewares";
import { checkCache, putCache } from "../../utils/cacheUtils";
const router = Router();

router.get("/info", checkAuthMiddleware, UserController.fetchMyInfo);
router.get(
  "/expensive-route",
  checkCache,
  UserController.expensiveRoute,
  putCache,
);
router.get("/test", UserController.template);

export default router;
