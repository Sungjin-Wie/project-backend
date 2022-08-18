import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import router from "./src/routes";
import dotenv from "dotenv";
import { init } from "./src/config/redis";
const env = process.env.NODE_ENV ?? "production";
console.log(env, "mode");
dotenv.config({ path: `./.env.${env}` });
console.log("port", process.env.PORT);
init();
const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", router);

export default app;
