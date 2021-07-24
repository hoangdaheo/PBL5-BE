var dataString = "";
module.exports = function (db, callback) {
  let sql = `SELECT
    USER.id,
    USER.NAME,
    temperature,
    CASE WHEN USER.sex = 1 THEN 'Nam' WHEN USER.sex = 0 THEN 'Nữ' END,
    DATE_FORMAT(createAtTime, '%M %d %Y %H:%i:%s') 

FROM
    result
INNER JOIN USER ON USER.id = result.idUser `;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
