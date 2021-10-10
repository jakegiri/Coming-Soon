var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public")); //__dir and not _dir

app.listen(8000, () => console.log("server started"));
