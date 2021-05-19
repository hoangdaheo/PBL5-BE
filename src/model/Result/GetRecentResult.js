var dataString = "";
module.exports = function (db, callback) {
  let sql = `
  SELECT BB.studentID,BB.name,BB.address,BB.age,result.temperature,DATE_FORMAT(BB.recentTime,'%M %d %Y %H:%i:%s') TIMEONLY
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
