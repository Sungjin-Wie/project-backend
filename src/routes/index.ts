import { Router } from "express";
const router = Router();

import UserRouter from "./user/UserRouter";
import CrawlingRouter from "./crawling/CrawlingRouter";

router.use("/user", UserRouter);
router.use("/crawling", CrawlingRouter);

export default router;
