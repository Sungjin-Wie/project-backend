import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import router from "./src/routes";
import dotenv from "dotenv";
import { init } from "./src/config/redis";
import crawling from "./src/crawling";
import scheduler from "node-schedule";
import cors from "cors";
import { measureRequestMiddleware } from "./src/middlewares";
scheduler.scheduleJob("*/5 * * * * *", crawling);
const env = process.env.NODE_ENV ?? "production";
dotenv.config({ path: `./.env.${env}` });
console.log(env, "mode");
console.log("starting server at port", process.env.PORT);
init();
const app = express();
const whiteList = [process.env.FRONT_URL];
console.log(`whiteList: ${whiteList}`);
const corsOptions = {
  origin: (origin: any, callback: any) => {
    console.log(origin);
    let allowed = false;
    whiteList.forEach((url) => {
      if (!origin || origin.includes(url)) allowed = true;
    });
    if (allowed) {
      callback(null, true);
    } else {
      callback(new Error("not allowed"));
    }
  },
};

app.use(cors(corsOptions));
app.use(measureRequestMiddleware);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", router);

export default app;
