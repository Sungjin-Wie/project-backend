import express, { json, urlencoded } from "express";
import path, { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import router from "./routes/index.js";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
const __dirname = path.resolve();
app.use(express.static(join(__dirname, "public")));

app.use("/", router);

export default app;
