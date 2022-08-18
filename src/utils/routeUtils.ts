import { Router } from "express";
import { Controller } from "../common/interface";

export const createRouter = (controller: Controller[]) => {
  const router = Router();
  controller.forEach((element) => {
    const { route, method, handler, preMiddleware, postMiddleware } = element;
    router[method](route, [...preMiddleware, handler, ...postMiddleware]);
  });
  return router;
};
