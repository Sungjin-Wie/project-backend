import { Router } from "express";
const router = Router();

import UserController from "./UserController.js";
/* GET users listing. */
UserController.forEach((element) => {
  const { route, method, controller } = element;
  if (element?.middleware) {
    router[method](route, element.middleware, controller);
  } else {
    router[method](route, controller);
  }
});

router.get("/", function (req, res, next) {
  res.send("user");
});

export default router;
