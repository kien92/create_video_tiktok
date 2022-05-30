#! /app/.heroku/node

import { ENotifyType } from "./enum/notification.enum";
import { pushNoti } from "./services/notification.service";

function pushDaily() {
  pushNoti(ENotifyType.DAILY);
}

pushDaily();
