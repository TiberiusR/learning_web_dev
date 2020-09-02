const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);

// let george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat) {
//     if (err) {
//         console.log("Something went wrong");
//     } else {
//         console.log("Cat saved");
//         console.log(cat);
//     }
// });


Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log("Something went wrong");
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats) {
    if (err) {
        console.log("OH NO, ERROR");
        console.log(err);
    } else {
        console.log("ALL THE CATS");
        console.log(cats);
    }
})