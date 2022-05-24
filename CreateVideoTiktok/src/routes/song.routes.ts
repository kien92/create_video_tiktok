import { transfromToResponse } from "../helper/transfrom.model";
import { IResponse } from "../interfaces/response.interface";
import { authToken } from "../middlewares/auth.middleware";
import { Request, Response, Router } from "express";
import { getSongs } from "../services/song.service";

export default (router: Router) => {
  router.post("/getSongs", authToken, async function (req: Request, res: Response<IResponse>) {
    const rs = await getSongs(req.body.searchKey, req.body.pageNumb).catch(e => {
      res.status(200).json(transfromToResponse(e));
    });
    if (rs) {
      res.status(200).json(transfromToResponse(rs));
    }
  });
};
