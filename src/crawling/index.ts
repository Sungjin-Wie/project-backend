import crawlingRequest from "./crawlingRequest";
import target from "./target";
let { ALGUMON, COOLENJOY, QUASARZONE } = target;

var flag = 1;
const crawling = () => {
  switch (flag) {
    case 1:
      crawlingRequest(ALGUMON);
      break;
    default:
      break;
  }
};

export default crawling;
