import { HTTP_STATUS } from '../helper/https.status';
import { transfromToHttpHandler } from '../helper/transfrom.model';
import Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import lodash from 'lodash';

export const validateParams = (paramSchema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const ajv = new Ajv({ $data: true });
    const paramSchemaKeys = Object.keys(paramSchema.properties);
    let requestParamObj: any = {};
    for (let key of paramSchemaKeys) {
      requestParamObj[key] = lodash.get(req.body, key);
    }
    const validated = ajv.validate(paramSchema, requestParamObj);
    if (!validated) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send(transfromToHttpHandler(getCustomMessage(ajv.errors![0])));
    }
    next();
  };
};

const getCustomMessage = (errorObject: any) => {
  return errorObject.message;
};
