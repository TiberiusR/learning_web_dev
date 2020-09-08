const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");

//INDEX
router.get("/", function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});

//NEW
router.get("/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
})

//CREATE
router.post("/", isLoggedIn, function(req, res) {
    //get data from form and add to array
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.description;
    let author = {
        id: req.user._id,
        username: req.user.username
    };
    let newCampground = {name: name, image: image, description: description, author: author};
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");           
        }
    });
});

//SHOW
router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if (err) {
            console.log("Not found");
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

//EDIT CAMPGROUND
router.get("/:id/edit", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit", {campground: foundCampground}); 
        }
    });
});

//UPDATE CAMPGROUND
router.put("/:id", function(req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//DESTROY CAMPGROUND
router.delete("/:id", function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//DESTROY CAMPGROUND AND COMMENTS
// router.delete("/:id", checkCampgroundOwnership, (req, res) => {
//     Campground.findByIdAndRemove(req.params.id, (err, campgroundRemoved) => {
//         if (err) {
//             console.log(err);
//         }
//         Comment.deleteMany( {_id: { $in: campgroundRemoved.comments } }, (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             res.redirect("/campgrounds");
//         });
//     })
// });

//middleware isloggedin
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

module.exports = router;