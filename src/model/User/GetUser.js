var dataString = "";
module.exports = function (db, callback) {
  let sql = `SELECT * from User`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    console.log(data);
    dataString = "Success";
    callback(dataString, data);
  });
};
