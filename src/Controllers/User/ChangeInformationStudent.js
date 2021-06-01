const db = require("../../Connect/Connect");
var ChangInformation = require("../../model/User/ChangeInformationStudent.model");
module.exports = function (app) {
  app.put("/ChangInformationStudent", function (req, res) {
    console.log("?");
    ChangInformation(
      db,
      req.body.id,
      req.body.name,
      req.body.age,
      req.body.sex,
      
      req.body.idFaculty,
      req.body.address,

      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
