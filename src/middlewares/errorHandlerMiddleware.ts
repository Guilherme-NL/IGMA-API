import { NextFunction, Request, Response } from "express";
import {
  AppError,
  errorTypeToStatusCode,
  isAppError,
} from "../utils/errorUtils.js";
import logger from "../logger.js";

export function errorHandlerMiddleware(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error(err);

  if (isAppError(err)) {
    return res.status(errorTypeToStatusCode(err.type)).send(err.message);
  }

  return res.sendStatus(500);
}
