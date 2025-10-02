let movie = {
    title: "Acrimony",
    director: "Tyler Perry",
    releaseYear: 2018,
    rating: "5 stars",
    
    
};

function getSummary(movie) {
        return `${movie.title} (${movie.releaseYear}), directed by ${movie.director}, rated ${movie.rating}.`;
}
console.log(getSummary(movie));

console.log("");

movie.isWatched = true;
console.log("After adding new property:", movie);

let movies = [
  movie,
  {
    title: "Avengers: Endgame",
    director: "Anthony and Joe Russo",
    releaseYear: 2019,
    rating: 8.4,
    isWatched: true,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "Black Panther",
    director: "Ryan Coogler",
    releaseYear: 2018,
    rating: 7.3,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "Avatar",
    director: "James Cameron",
    releaseYear: 2009,
    rating: 7.8,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "Spider-Man: No Way Home",
    director: "Jon Watts",
    releaseYear: 2021,
    rating: 8.2,
    isWatched: true,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "The Lion King",
    director: "Jon Favreau",
    releaseYear: 2019,
    rating: 6.8,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  }
];



function displayTopRatedMovies(movies) {
  console.log("Movies with ratings greater than 8 :");
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
      console.log(movies[i].getSummary());
    }
  }
}


displayTopRatedMovies(movies);