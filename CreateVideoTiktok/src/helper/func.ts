import jwt from "jsonwebtoken";

export const generateJWT = (deviceID: string) => {
  return jwt.sign({ _id: deviceID }, process.env.JWT_KEY!);
};

export const instanceOfType = <T>(obj: any, key: string = "error"): obj is T => {
  return obj[key] !== undefined;
};
