const db = require("../../Connect/Connect");
const GetResult = require("../../model/Result/GetTempAndTime");
module.exports = function (app) {
  app.get("/TempAndTime/:id/:time", function (req, res) {
    GetResult(db, req.params.id, req.params.time,function (dataString, token) {
      res.json({
        dataString: dataString,
        data: token,
      });
    });
  });
};
