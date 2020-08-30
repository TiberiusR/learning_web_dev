var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there!");
})

app.get("/bye", function(req, res) {
    res.send("bye bye");
})

app.get("/dog", function(req, res) {
    res.send("WOOF");
})

app.get("*", function(req, res) {
    res.send("Try again mate");
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});