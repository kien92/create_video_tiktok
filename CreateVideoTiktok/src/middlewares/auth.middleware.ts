import { HTTP_STATUS } from '../helper/https.status';
import { transfromToHttpHandler } from '../helper/transfrom.model';
import { findDeviceID } from '../services/auth.service';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')!.replace('Bearer ', '');
    const data: any = jwt.verify(token, process.env.JWT_KEY!);
    await findDeviceID(data._id).catch(e => {
      res.status(HTTP_STATUS.OK).send(transfromToHttpHandler(e));
    });
    next();
  } catch (e) {
    res.status(HTTP_STATUS.UN_AUTHORIZE).send(transfromToHttpHandler('Invalid authorization header'));
  }
};
