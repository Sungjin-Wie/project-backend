import { Router } from "express";
const router = Router();

import crawlingService from "./crawlingService.js";

/* GET users listing. */
router.get("/", function (req, res, next) {
  crawlingService();
  res.send("crawling");
});

export default router;
