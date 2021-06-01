const db = require("../../Connect/Connect");
const GetStudent = require("../../model/User/GetUserByID.js");
module.exports = function (app) {
  app.get("/GetUserID/:id", function (req, res) {
    GetStudent(db, req.params.id, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
