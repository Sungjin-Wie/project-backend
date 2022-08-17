import { Router } from "express";
const router = Router();

import UserRouter from "./user/UserRouter";

router.use("/user", UserRouter);

export default router;
