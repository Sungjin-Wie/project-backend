import * as CrawlingService from "./CrawlingService";
import { Middleware } from "../../common/interface";
import * as CommonUtils from "../../utils/commonUtils";


const fetchCrawlingData: Middleware = async (req, res, next) => {
  try {
    // controller logic here
    let target = req.query.target ?? "algumon";
    let data = await CrawlingService.findCrawlingData(target as string);
    res.send(data);
  } catch (e) {
    next(e);
  }
};

const expensiveRoute: Middleware = async (req, res, next) => {
  try {
    await CommonUtils.delay(10000); // wait for 10 seconds
    let responseData = "Very expensive response";
    req.cacheData = responseData;
    req.cacheKey = req.url;
    res.send(responseData);
    next();
  } catch (e) {
    next(e);
  }
};

const template: Middleware = async (req, res, next) => {
  try {
    // controller logic here
    res.send({ name: "template api" });
    // next(); //if you need to use postMiddleware
  } catch (e) {
    next(e);
  }
};

export default { fetchCrawlingData, expensiveRoute, template };
