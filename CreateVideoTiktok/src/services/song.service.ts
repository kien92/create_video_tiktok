import { Const } from "../helper/const.variable";
import connection from "../config/db";

export const getSongs = async (searchKey: string, pageNumb: number) =>
  new Promise((resolve, reject) => {
    let maxPage = pageNumb ? Const.MAX_PAGE : 0;
    let start = pageNumb ? maxPage * (pageNumb - 1) : 0;
    let sql_p = `Select * from song`;
    if (searchKey && searchKey != "") {
      sql_p = sql_p + ` where nameVideo LIKE '%${searchKey}%' `;
    }
    sql_p = sql_p + ` Order by songID DESC ` + `limit ${start},${maxPage}`;
    connection.query(sql_p, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
