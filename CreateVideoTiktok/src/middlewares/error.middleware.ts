import HttpException from '../helper/http-exception';
import { Request, Response, NextFunction } from 'express';
import { transfromToHttpHandler } from '../helper/transfrom.model';

export const errorHandler = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
  const status = error.statusCode || 500;
  const message = error.message || "It's not you. It's us. We are having some problems.";

  response.status(status).send(transfromToHttpHandler(message));
};
