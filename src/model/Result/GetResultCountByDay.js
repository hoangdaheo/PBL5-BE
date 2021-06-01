var dataString = "";
module.exports = function (db, callback) {
  let sql = `SELECT date,COUNT(date) as result FROM (SELECT DATE_FORMAT(createAtTime,'%M %d %Y') as date FROM result) as X GROUP BY date`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
