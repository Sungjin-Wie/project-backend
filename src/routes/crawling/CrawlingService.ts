import target from "../../crawling/target";
let { ALGUMON } = target;
import url from "../../crawling/url";
import RedisUtil from "../../utils/RedisUtils";

export async function findCrawlingData(target: string) {
  //service logic here
  let key = "foo";
  switch (target) {
    case "algumon":
      key = url[ALGUMON];
      break;
    default:
      break;
  }
  let crawlingData = await RedisUtil.getObject(key);
  return crawlingData;
}
