import { NextFunction, Request, Response } from "express";

type RequestHandlerType = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<void>;

const asyncHandler = (requestHandler: RequestHandlerType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)); // pass error to the next middleware
  };
};

export { asyncHandler };
