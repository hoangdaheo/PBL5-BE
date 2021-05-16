const db = require("../../Connect/Connect");
const GetResult = require("../../model/Result/GetTempAndTime");
module.exports = function (app) {
  app.get("/TempAndTime/:id", function (req, res) {
    GetResult(db, req.params.id,function (dataString, token) {
      res.json({
        dataString: dataString,
        data: token,
      });
    });
  });
};
