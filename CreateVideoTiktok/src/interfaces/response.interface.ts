export interface IResponse {
  status: boolean;
  data: any;
  error: string;
}

export interface IError {
  code: string;
  errno: number;
  sqlMessage: string;
  sqlState: string;
  index: number;
  sql: string;
}
