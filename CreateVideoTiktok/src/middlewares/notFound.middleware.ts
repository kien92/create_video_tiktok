import { transfromToHttpHandler } from '../helper/transfrom.model';
import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '../helper/https.status';

export const notFoundHandler = (request: Request, response: Response, next: NextFunction) => {
  const message = 'Resource not found';
  response.status(HTTP_STATUS.NOT_FOUND).send(transfromToHttpHandler(message));
};
