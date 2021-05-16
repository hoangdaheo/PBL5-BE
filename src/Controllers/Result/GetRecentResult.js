const db = require("../../Connect/Connect");
const GetResult = require("../../model/Result/GetRecentResult");
module.exports = function (app) {
  app.get("/RecentResult", function (req, res) {
    GetResult(db, function (dataString, token) {
      res.json({
        dataString: dataString,
        data: token,
      });
    });
  });
};
