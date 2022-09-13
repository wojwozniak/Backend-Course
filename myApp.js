let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require("body-parser");
const { EqualDepth } = require('three');

/* 1
app.get("/", (req, res) => {
  res.send("Hello Express");
});
*/

/* 2
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/views/index.html");
}); */

/* 3
app.use("/public", express.static(__dirname + "/public"));
*/

/* 4
app.get('/json', (req, res) => {
  res.json({ "message": "Hello json" })
});
*/

/* 5
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});
*/

/* 6
app.use(function middleware(req, res, next) {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});
*/

/* 7
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);
*/ 











/* OLD CODE */
/*

app.use(bodyParser.urlencoded({ extended: false })); 

app.post("/name", (req, res) => {
  let string = req.body.first + " " + req.body.last;
  res.json({ name: string });
}); */

/*

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
  }); */

 /* app.use(function middleware(req, res, next) {
    let string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
  }); */

 /* app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      res.send({
        time: req.time
      });
    }
  ); */

/*app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
}); */

/*

app.get("/name", (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  })
}); */

/*
app.use("/public", express.static(__dirname + "/public"));

*/


 module.exports = app;
