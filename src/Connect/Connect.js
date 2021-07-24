var mysql = require("mysql");
var connection = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "root",
  // database: "pbl5-version2",
  host: "us-cdbr-east-03.cleardb.com",
  user: "b73e8cc68166ea",
  password: "77ad9b49",
  database: "heroku_2e6d56b8e4b0ff6",
});

connection.connect(function (err) {
  if (err) {
    console.log("error when connecting to db:", err);
  }
});

module.exports = connection;