import { IResponse } from "../interfaces/response.interface";
import { Request, Response, Router } from "express";
import { authToken } from "../middlewares/auth.middleware";
import { transfromToResponse } from "../helper/transfrom.model";
import { pushNoti, signToken } from "../services/notification.service";

export default (router: Router) => {
  router.post("/pushNotiDevices", authToken, async function (req: Request, res: Response<IResponse>) {
    const rs = await pushNoti(req?.body.type).catch(e => {
      res.status(200).json(transfromToResponse(e));
    });
    if (rs) {
      res.status(200).json(transfromToResponse(rs));
    }
  });

  router.post("/signToken", authToken, async function (req: Request, res: Response<IResponse>) {
    const rs = await signToken(req?.body.tokenFCM).catch(e => {
      res.status(200).json(transfromToResponse(e));
    });
    if (rs) {
      res.status(200).json(transfromToResponse(""));
    }
  });
};
