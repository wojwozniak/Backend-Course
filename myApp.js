let express = require('express');
let app = express();
require('dotenv').config();


/*app.get("/json", function (req, res) {
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
  

app.use("/public", express.static(__dirname + "/public"));





























 module.exports = app;
