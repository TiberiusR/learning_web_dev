const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

//SCHEMA SETUP
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

const Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Tea Time Camp",
//         image: "https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         description: "This is a great place for tea time!"
//     },
//     function(err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("CAMPGROUND CREATED");
//             console.log(campground);
//         }
//     }
// );

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
})

//INDEX
app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});

//NEW
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})

//CREATE
app.post("/campgrounds", function(req, res) {
    //get data from form and add to array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");           
        }
    });
});

//SHOW
app.get("/campgrounds/:id", function(req, res) {

    res.send("SHOW PAGE INC")
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});