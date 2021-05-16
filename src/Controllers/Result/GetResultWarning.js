const db = require("../../Connect/Connect");
const GetResultWarning = require("../../model/Result/GetResultWarning.model");
module.exports = function (app) {
  app.get("/ResultWarning", function (req, res) {
    GetResultWarning(db, function (dataString, token) {
      res.json({
        dataString: dataString,
        data: token,
      });
    });
  });
};
