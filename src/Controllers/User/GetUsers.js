const db = require("../../Connect/Connect");
const GetStudent = require("../../model/User/GetUser");
module.exports = function (app) {
  app.get("/GetUser", function (req, res) {
    GetStudent(db, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
