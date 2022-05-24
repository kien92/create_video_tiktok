import { ENotifyType } from "@src/enum/notification.enum";
import admin from "firebase-admin";
import { MulticastMessage } from "firebase-admin/lib/messaging/messaging-api";
import connection from "../config/db";
import { Notify, NotiToken } from "../models/notify.model";

const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kien-625aa.firebaseio.com",
});

export const pushNoti = async (notiType: ENotifyType) =>
  new Promise(async (rs, rj) => {
    let results: any = await getTokens();
    results = results.map((v: NotiToken) => Object.assign({}, v));
    let tokens = results.map((notify: NotiToken) => notify.token);
    let resultsNotiContent: any = await contentToken(notiType);
    let content: any = resultsNotiContent.map((notify: Notify) => Object.assign({}, notify));
    const message: MulticastMessage = {
      data: { content: content[0].content },
      tokens: tokens,
    };
    admin
      .messaging()
      .sendMulticast(message)
      .then((res: any) => {
        rs("success");
      })
      .catch(err => {
        rj(err);
        return;
      });
  });

async function getTokens() {
  return new Promise((rs, rj) => {
    const rq = `select * from NotiToken`;
    connection.query(rq, (error, result) => {
      if (error) {
        rj(error);
        return;
      }
      rs(result);
    });
  });
}

async function contentToken(notiType: ENotifyType) {
  return new Promise((rs, rj) => {
    const rq = `select * from Noti where idNotiType = ${notiType}`;
    connection.query(rq, (error, result) => {
      if (error) {
        rj(error);
        return;
      }
      rs(result);
    });
  });
}

export const signToken = async (token: String) =>
  new Promise((rs, rj) => {
    const rq = `Insert into NotiToken(token,dateCreate) values('${token}',NOW())`;
    connection.query(rq, (error, result) => {
      if (error) {
        rj(error);
        return;
      }
      rs(result);
    });
  });
