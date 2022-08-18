import axiosInstance from "../config/axios";
import RedisUtil from "../utils/RedisUtils";
import url from "./url";
import crawling from "./crawling";
import { checkIfItsRecentlyAdded } from "./common";

async function crawlingRequest(target: any) {
  let key = url[target];
  let cachedData = await RedisUtil.getObject(key);
  if (!cachedData) {
    await RedisUtil.setObject(key, []);
  }
  let { data } = await axiosInstance.get(key);
  let newestInfo = crawling(target, data);
  if (cachedData?.length >= 10) {
    cachedData.splice(0, cachedData.length - 9);
    console.log(cachedData.length);
  }
  const [mutatedData, isMutated] = checkIfItsRecentlyAdded(
    cachedData,
    newestInfo,
  );
  if (isMutated) await RedisUtil.setObject(key, mutatedData);
}

export default crawlingRequest;
