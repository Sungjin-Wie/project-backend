import { Router } from "express";
import CrawlingController from "./CrawlingController";
import { checkCache, putCache } from "../../utils/cacheUtils";
const router = Router();

router.get("/", CrawlingController.fetchCrawlingData);
router.get(
  "/expensive-route",
  checkCache,
  CrawlingController.expensiveRoute,
  putCache,
);
router.get("/test", CrawlingController.template);

export default router;
