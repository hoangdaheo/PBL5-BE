var dataString = "";
module.exports = function (db, callback) {
  let sql = `
SELECT User.NAME, User.id, faculty.description,CASE WHEN USER.sex = 1 THEN 'Nam' WHEN USER.sex = 0 THEN 'Nữ' END, USER.address,USER.age from User inner join faculty on User.idFaculty = faculty.id  where User.idRole = '2'`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    
    dataString = "Success";
    callback(dataString, data);
  });
};
