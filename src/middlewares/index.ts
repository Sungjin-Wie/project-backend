import { checkAuthMiddleware, testMiddleware } from "./auth";
import measureRequestMiddleware from "./measure";

const middlewares = {
  checkAuthMiddleware,
  testMiddleware,
  measureRequestMiddleware,
};

export default middlewares;
export { checkAuthMiddleware, testMiddleware, measureRequestMiddleware };
