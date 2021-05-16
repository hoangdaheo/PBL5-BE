var dataString = "";
module.exports = function (db, id,callback) {
  let sql = `SELECT temperature,DATE_FORMAT(createAtTime,'%H:%i:%s') TIMEONLY FROM result WHERE idUser = ${id} `;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
