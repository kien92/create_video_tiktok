import { IError } from "../interfaces/response.interface";
import { instanceOfType } from "./func";

export const transfromToResponse = (e: any) => {
  if (!instanceOfType<IError>(e, "sqlMessage")) {
    return {
      status: true,
      data: e,
      error: "",
    };
  } else {
    return {
      status: false,
      data: [],
      error: e.sqlMessage,
    };
  }
};

export const transfromToHttpHandler = (msg: string) => {
  return {
    status: false,
    data: [],
    error: msg,
  };
};
