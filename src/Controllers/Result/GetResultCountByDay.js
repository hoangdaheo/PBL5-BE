const db = require("../../Connect/Connect");
const GetResult = require("../../model/Result/GetResultCountByDay");
module.exports = function (app) {
  app.get("/GetResultCountByDay", function (req, res) {
    GetResult(db,function (dataString, token) {
      res.json({
        dataString: dataString,
        data: token,
      });
    });
  });
};
