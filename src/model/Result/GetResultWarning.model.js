var dataString = "";
module.exports = function (db, callback) {
  let sql = `SELECT user.id,user.NAME ,temperature,user.sex,DATE_FORMAT(createAtTime,'%M %d %Y %H:%i:%s')  FROM result INNER JOIN user ON user.id = result.idUser where isQualified = true and temperature >= 37`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
