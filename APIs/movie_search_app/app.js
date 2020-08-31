const axios = require("axios");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res) {
    let query = req.query.search;
    let url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`
    axios.get(url)
        .then(function (response) {
            // handle success
            const data = response.data;
            res.render("results", {data: data});
          })
          .catch(function (error) {
            // handle error
            res.send(error);
          })
          .then(function () {
            // always executed
          });
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});