var dataString = "";
module.exports = function (db, id, callback) {
  let sql = `SELECT user.id,user.NAME,user.age,user.sex,user.address,user.idFaculty,user.idRole,user.image,faculty.description FROM user INNER JOIN faculty WHERE user.id = ${id}`;
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
