let movies = [];

movies.push({
    title: "In Bruges",
    rating: 5,
    hasWatched: true
});

movies.push({
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
})

movies.push({
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
})

movies.push({
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
})

for(let i = 0; i < movies.length; i++) {
    if(movies[i].hasWatched) {
        console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
    } else {
        console.log("You have not seen \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
    }
}