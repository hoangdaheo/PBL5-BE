var dataString = "";
module.exports = function (db, callback) {
  let sql = `
  SELECT result.temperature,BB.studentID,BB.name,BB.address,BB.age,DATE_FORMAT(BB.recentTime,'%H:%i:%s') TIMEONLY
    FROM
(SELECT 
	studentID,
	name,
	address,
	age,
	MAX(createAtTime) AS "recentTime",
	temperature 
from user INNER JOIN result 
	ON user.id = result.idUser
    GROUP BY studentId) as BB INNER JOIN result on result.createAtTime = BB.recentTime`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
