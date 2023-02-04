var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pregnancy"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO contact (username, birth_date, email, phone, message) VALUES ('Company Inc', '2022-11-21', 'email@gmail.com', '221', 'message')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});