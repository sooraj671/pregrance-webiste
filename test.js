const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "pregnancy",
  password : '',
  port: 4000,
  insecureAuth : true
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.post('/register', function (req, res) {


  // const { username, birth_date, email, phone, textarea } = req.body;
  // console.log('body: ', res.body);
  console.log('check: ', req.body);
  const {
    username,
    birth_date,
    email,
    phone,
    textarea
  } = req.body;

  let query = 'insert into contact(username, birth_date, email, phone, message) values(?, ?, ?, ?, ?);';

  con.query(query, [username, birth_date, email, phone, textarea], (err, result) => {
    if (err) {
      console.log('Error while inserting!');
      res.status(200).json({message: 'error while inserting'});
    }
    res.json({message: 'INSERTED! ENJOY'})
  })
  
})


app.get('/contacts', (req, res) => {
  let query = 'select * from contact';

  con.query(query, [], (err, result) => {
    if (err) {
      console.log('Error while inserting!');
      res.status(200).json({message: 'error while inserting'});
    }
    res.json({message: 'here is your data', data: result})
  })
})
const PORT = 8081;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}...`);
});







// var express = require('express');
// var app = express();

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//     res.sendFile('index.html');
// });

// app.post('/submit-student-data', function (req, res) {
//     var name = req.body.username ;
//     alert(name);
//     // res.send(name + ' Submitted Successfully!');
// });

// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });

























// function insertRecord(){
//   alert("0");

//   var mysql = require('mysql2');

//   alert("1");
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: '',
//     database: "pregnancy",
//     port: 4000
  
//   });
//   alert("2");

//   con.connect(function(err) {
//     alert("3");

//     if (err){
//         alert(err.message);
//     }  
//     alert("4");

//     alert("Connected!");
//     //Insert a record in the "customers" table:
//     var sql = "INSERT INTO contact (username, birth_date, email, phone, message) VALUES ('New', '2022-11-21', 'saf@gmail.com', 121212, 'mesages')";
  
//     con.query(sql, function (err, result) {
  
//       alert("5");

//     if (err){ 
//       alert(err.message);
//       alert("6");

//   }
//       alert("1 record inserted");
//     });
//   });
// }


// var express = require('express');
// var app = express();
// var http = require('http');
// var server = http.createServer(app);

// app.use(express.bodyParser());
// app.post('/', function(req, res) {
//   console.log(req.body);
//   res.send(200);
// });

// server.listen(process.env.PORT, process.env.IP);