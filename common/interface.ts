import { Request, Response, NextFunction } from "express";

const get = "get" as const;
const post = "post" as const;
export type Method = typeof get | typeof post;

export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

export type Controller = {
  route: string;
  method: Method;
  handler: Middleware;
  middleware?: Middleware[];
};
