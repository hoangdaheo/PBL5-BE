var dataString = "";
module.exports = function (
  db,
  id,
  name,
  age,
  sex,
  
  idFaculty,
  address,
  callback
) {
  var sql = `UPDATE
    user
SET
    NAME = '${name}',
    age = '${age}',
    sex = '${sex}',
    
    address = '${address}',
    idFaculty = '${idFaculty}'
WHERE
        id = '${id}'`;
  sql;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    dataString = "Success";
    callback(dataString);
  });
};
