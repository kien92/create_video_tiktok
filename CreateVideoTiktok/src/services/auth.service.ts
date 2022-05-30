import connection from "../config/db";

export const findDeviceID = async (id: string) =>
  new Promise((resolve, reject) => {
    const sql_p = `Select * from USERS where deviceIdentity='${id}'`;
    connection.query(sql_p, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });

export const insertUserToDB = async (id: string) =>
  new Promise((rs, rj) => {
    const sql_p = `Insert USERS(deviceIdentity) values('${id}')`;
    connection.query(sql_p, (error, result) => {
      if (error) {
        rj(error);
        return;
      }
      rs(result);
    });
  });
