var express = require("express")
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home.ejs");
})

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Linda"},
        {title: "Post 3", author: "Juniper"}
    ];
    res.render("posts.ejs", {posts: posts});
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});