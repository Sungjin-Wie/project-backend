import { Router } from "express";
const router = Router();

import UserRouter from "./user/UserRouter";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/user", UserRouter);

export default router;
