import target from "./target";
let { ALGUMON, COOLENJOY, QUASARZONE } = target;
import cheerio from "cheerio";

export default function crawling(target: any, body: any) {
  let $ = null;
  try {
    $ = cheerio.load(body);
  } catch (e) {
    return { name: "", link: "" };
  } finally {
    if ($ == null) return { name: "", link: "" };
    switch (target) {
      case ALGUMON: {
        let newestInfo = $("a.product-link").first();
        let name = newestInfo.attr("data-label");
        let link = "https://algumon.com" + newestInfo.attr("href");
        let price =
          $("div.post-group")
            .first()
            .find("small.product-price")
            .text()
            .trim() +
            $("div.post-group")
              .first()
              .find("small.product-per-price")
              .text()
              .trim() ?? "";
        return { name, link, price };
      }
      case COOLENJOY: {
        let newestInfo = $("td.td_subject").children().first();
        let name = newestInfo.text().trimLeft().split("댓글")[0];
        let link = newestInfo.attr("href");
        return { name, link };
      }
      case QUASARZONE: {
        let newestInfoName = $("p.tit").first();
        let newestInfoPrice = $("div.market-info-sub").first();
        let temp = newestInfoName
          ?.find("a.subject-link")
          ?.attr("href")
          ?.split("/");
        let link =
          "https://quasarzone.com/bbs/qb_saleinfo" +
          `/${temp?.[3]}/${temp?.[4]}`;
        let name = newestInfoName.find("span.ellipsis-with-reply-cnt").text();
        let price = newestInfoPrice.find("span.text-orange").text();
        return { name, link, price };
      }
      default:
        break;
    }
  }
}
