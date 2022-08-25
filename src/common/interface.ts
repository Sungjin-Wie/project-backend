import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  cacheKey?: string;
  cacheData?: any;
}

export type Middleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => void;
