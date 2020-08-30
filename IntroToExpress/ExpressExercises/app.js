var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    let animals = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!"
    };
    res.send(`The ${req.params.animal.toLowerCase()} says "${animals[req.params.animal]}"`);
});

app.get("/repeat/:word/:num", function(req, res) {
    let word = "";
    for(let i = 0; i < req.params.num; i++) {
        word += `${req.params.word} `;
    }
    res.send(word);;
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?")
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});