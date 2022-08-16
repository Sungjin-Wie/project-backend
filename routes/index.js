import { Router } from "express";
const router = Router();

import userController from "./user/userController.js";
import crawlingController from "./crawling/crawlingController.js";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/user", userController);
router.use("/crawling", crawlingController);

export default router;
