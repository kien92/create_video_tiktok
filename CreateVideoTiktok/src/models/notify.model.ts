export class NotiToken {
  idNotiToken: number;
  token: string;
  dateCreate: any;

  constructor(idNotiToken: number, token: string, dateCreate: any) {
    this.idNotiToken = idNotiToken;
    this.token = token;
    this.dateCreate = dateCreate;
  }
}

export class Notify {
  idNoti: number;
  idNotiType: number;
  content: string;

  constructor(idNoti: number, idNotiType: number, content: string) {
    this.idNoti = idNoti;
    this.idNotiType = idNotiType;
    this.content = content;
  }
}
