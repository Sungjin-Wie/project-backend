import { Middleware } from "../common/interface";

export const authenticateMiddleware: Middleware = async (req, res, next) => {
  //auth logic here
  console.log("auth middleware");
  next();
};

export const testMiddleware: Middleware = async (req, res, next) => {
  //middleware logic here
  console.log("test middleware");
  next();
};
