import { validateParams } from "../middlewares/validator.middleware";
import { insertUserToDB, findDeviceID } from "../services/auth.service";
import { Request, Response, Router } from "express";
import { generateJWT } from "../helper/func";

export default (router: Router) => {
  router.post(
    "/create-users",
    validateParams({
      type: "object",
      properties: {
        deviceID: {
          type: "string",
        },
      },
      required: ["deviceID"],
    }),
    async function (req: Request, res: Response<any>) {
      let token = "";
      let rsFindID: any = await findDeviceID(req.body.deviceID).catch(async e => {});
      if (rsFindID && rsFindID.length === 0) {
        let crUser = await insertUserToDB(req.body.deviceID).catch(async e => {
          res.status(200).json({
            status: true,
            data: e,
            error: "",
          });
        });
        if (!crUser) return;
      }
      token = generateJWT(req.body.deviceID);
      res.status(200).json({
        status: true,
        data: token,
        error: "",
      });
    }
  );
};
