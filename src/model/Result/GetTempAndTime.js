var dataString = "";
module.exports = function (db, id,time,callback) {
  let sql = `SELECT
    temperature,
    DATE_FORMAT(createAtTime, '%H:%i:%s') TIMEONLY
FROM
    (
    SELECT
        *
    FROM
        result
    WHERE
        createAtTime LIKE '%${time}%'
) AS DMY
WHERE
    idUser = ${id} ORDER BY TIMEONLY asc`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
