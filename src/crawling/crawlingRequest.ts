import axiosInstance from "../config/axios";
import RedisUtil from "../utils/RedisUtils";
import url from "./url";
import crawling from "./crawling";
import { checkIfItsRecentlyAdded } from "./common";

async function crawlingRequest(target: any) {
  let key = url[target];
  let cachedDataArray = (await RedisUtil.getObject(key)) ?? [];
  let { data } = await axiosInstance.get(key);
  let newestInfo = crawling(target, data);
  const [mutatedDataArray, isMutated] = checkIfItsRecentlyAdded(
    cachedDataArray,
    newestInfo,
  );
  if (isMutated) {
    await RedisUtil.setObject(key, mutatedDataArray);
    console.log(`new data crawled: ${newestInfo?.name}`);
  }
}

export default crawlingRequest;
