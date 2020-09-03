const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

//POST - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model("Post", postSchema);

//USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

const User = mongoose.model("User", userSchema);

// let newUser = new User({
//     email: "hermione@brown.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to brew potions",
//     content: "GO TO POTIONS CLASS!"
// });

// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// let newPost = new Post({
//     title: "Reflections on Dogs",
//     content: "They are awwwdorable"
// });

// newPost.save(function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Hermione Granger"}, function(err, user) {
    if(err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "3 Books about magic anyone should read!",
            content: "EVERYONE SHOULD READ WAY MORE THAN 3 BOOKS ABOUT MAGIC!!!"
        });
        user.save(function(err, user) {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});