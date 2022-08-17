import { Request, Response, NextFunction } from "express";

const get = "get" as const;
const post = "post" as const;
export type RequestMethod = typeof get | typeof post;

interface CustomRequest extends Request {
  cacheKey?: string;
  cacheData?: any;
}

export type Middleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => void;

export type Controller = {
  route: string;
  method: RequestMethod;
  handler: Middleware;
  preMiddleware: Middleware[];
  postMiddleware: Middleware[];
};
