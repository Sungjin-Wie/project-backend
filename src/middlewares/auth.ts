import { Middleware } from "../common/interface";

export const checkAuthMiddleware: Middleware = async (req, res, next) => {
  //auth logic here
  console.log("auth middleware");
  let unAuthorized = true;
  if (unAuthorized) {
    res.sendStatus(401);
  } else {
    next();
  }
};

export const testMiddleware: Middleware = async (req, res, next) => {
  //middleware logic here
  console.log("test middleware");
  next();
};
