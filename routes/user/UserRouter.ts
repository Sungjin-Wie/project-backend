import { Router } from "express";
const router = Router();

import UserController from "./UserController";
/* GET users listing. */
UserController.forEach((element) => {
  const { route, method, handler } = element;
  if (element?.middleware) {
    router[method](route, element.middleware, handler);
  } else {
    router[method](route, handler);
  }
});

router.get("/", function (req, res, next) {
  res.send("user");
});

export default router;
