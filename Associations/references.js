const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_demo_2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

const Post = require("./models/post");
const User = require("./models/user");

// Post.create({
//     title: "How to cook a burger - part 4",
//     content: "BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH!"
// }, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
//             if(err) {
//                 console.log(err);
//             } else {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err, data) {
//                     if(err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });