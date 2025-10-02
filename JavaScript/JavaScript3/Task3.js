let movies = ['Acrimony', 'The Blacklist', 'Beauty and the Beast', 'Money Heist'];
let ratings = [3.5, 3.5, 3, 4];
console.log(movies)
console.log(ratings)

function addMovie(movie, rating) {
    movies.push(movie);
    ratings.push(rating);
}

addMovie("All American", 4.5)

console.log(movies)
console.log(ratings)

function getAverageRating(){
    let sum = 0;
    for (let rating of ratings){
        sum += rating;
    }
    let averageRating = sum / ratings.length;
    console.log("The average rating is", averageRating.toFixed(1));
}

getAverageRating();


function getTopMovie(){
    let highestRating = Math.max(...ratings);
    let hisghestRatedMovie = movies[ratings.indexOf(highestRating)];
    console.log("Highest rated movie:", hisghestRatedMovie);
}

getTopMovie();

const moviesSummary = () =>{
   let summary = {}
for (let i = 0; i < movies.length; i++){

   summary[movies[i]] = ratings[i];
}
return summary;
}
console.log("")
console.log("Movies Summary:");
let summaryObj = moviesSummary();
console.log(summaryObj);