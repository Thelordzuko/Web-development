// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// let scores = [10, 25, 30, 78, 3, 2, 55];

// let emptyArray = [];

// console.log("Fruits array:", fruits)
// console.log("Scores array:", scores)

// console.log("");

// console.log("Number of fruits:", fruits.length)
// console.log("Number of scores:", scores.length)

// console.log("");

// console.log ("First fruit:", fruits[0]);
// console.log ("Fourth score:", scores[3]);
// console.log ("Last fruit:", fruits[fruits.length -1]);
// console.log ("Third fruit:", fruits[2]);
// console.log ("Sixth score:", scores[5]);
// console.log ("Second-to-the-last fruit:", fruits[fruits.length -2]);

// console.log("");

// console.log ("Undefined fruit:", fruits[22]);

// console.log("");

// let colors = ["red", "green", "blue"]
// console.log(colors)
// colors[0] = "purple"
// colors[2] = "black"
// console.log("After changes:", colors)
// console.log(colors.includes("red"))

// console.log("");


// let numbers = [1, 2, 3, 4, 5];
// let names = ["John", "Jane", "Bob", "Alice"];

// console.log("Original numbers:", numbers);
// console.log("Original names:", names);

// console.log(""); // Empty line

// // slice() - Get a portion of the array (doesn't change original)
// let firstThree = numbers.slice(0, 3);  // Get items 0, 1, 2
// let lastTwo = numbers.slice(-2);       // Get last 2 items
// console.log("First three numbers:", firstThree);
// console.log("Last two numbers:", lastTwo);
// console.log("Original unchanged:", numbers);

// console.log(""); // Empty line

// // splice() - Remove/add items at specific position (changes original)
// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log("Original fruits:", fruits);

// // Remove 2 items starting at index 1
// let removed = fruits.splice(1, 2);
// console.log("Removed items:", removed);
// console.log("After removal:", fruits);

// // Add items at index 1
// fruits.splice(1, 0, "mango", "pineapple"); // Remove 0, add 2 items
// console.log("After adding:", fruits);

// console.log(""); // Empty line


// console.log("");
// console.log("");
// console.log("");
// console.log("");

// ## :dart: Practice Exercise 1
// **Task:** Array Basics - Shopping List
// **Requirements:**
// 1. Create an array `shoppingList` with at least 5 items
// 2. Add a new item to the end of the list
// 3. Remove the first item from the list
// 4. Display the total number of items
// 5. Loop through the list and print each item with its position
// **Challenge:**
// Create a function `formatList(list)` that returns the shopping list in a numbered format (1. Item, 2. Item, ...).
let shoppingList = ['Bag', 'Launch Box', 'Rice', 'Beans', 'Food flask']
console.log(shoppingList)
shoppingList.push("egg")
shoppingList.shift()
console.log(shoppingList)
console.log('Total items:', shoppingList.length)
function formatList(shoppingList) {
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`Item${i + 1}: ${shoppingList[i]}`)
    }
}
formatList(shoppingList)
// ## :dart: Practice Exercise 2
// **Task:** Student Grades Analyzer
// **Requirements:**
// 1. Store grades in an array
// 2. Write a function `getAverage(grades)` to calculate average grade
// 3. Write a function `getHighest(grades)` to find the highest grade
// 4. Write a function `getLowest(grades)` to find the lowest grade
// 5. Use loops where necessary to process the array
// **Challenge:**
// Create a function `getPassRate(grades)` that:
// - Counts how many students scored **50 or above** (passing)
// - Divides that number by the total number of students
// - Returns the **percentage of students who passed**
let grades = [20, 60, 76, 97, 50, 86, 10];
function getAverage(grades) {
    let total = 0;
    for (let grade of grades) {
        total += grade;
    }
    let average = total / grades.length;
        return `Average: ${average.toFixed(1)}`
}
console.log(getAverage(grades))
function getHighest(grades) {
    let heighest = grades[0];
    for (let grade of grades) {
        if (grade > heighest) {
            heighest = grade;
        }
    }
    return `The highest grade is: ${heighest}`
    // let heighest = []
    // for (let i = 0; i < grades.length; i++) {
    //     if (grades[i] > heighest) {
    //         heighest = grades[i];
    //     }
    // }
    // return heighest
}
console.log(getHighest(grades))
function getLowest(grades) {
    let lowest = grades[0];
    for (let grade of grades) {
        if (grade < lowest) {
            lowest = grade;
        }
    }
    return `The lowest grade is: ${lowest}`
}
console.log(getLowest(grades))
function getPassRate(grades) {
    let pass = []
    for (let grade of grades) {
        if (grade >= 50) {
            pass.push(grade)
            passLength = pass.length
        }
    }
    console.log(`Total number of students that scored 50 or above is: ${passLength} out of ${grades.length}`)
    let averagePassed = (passLength / grades.length) * 100
    return `${averagePassed.toFixed(1)}% of students passed the exam`
}
console.log(getPassRate(grades))
// ## :dart: Practice Exercise 3
// **Task:** Movie Ratings System
// **Requirements:**
// 1. Create two arrays: `movies` (names) and `ratings` (numbers)
// 2. Write a function `addMovie(movie, rating)` that adds a new entry
// 3. Write a function `getAverageRating()` to calculate the average rating
// 4. Write a function `getTopMovie()` to find the highest-rated movie
// 5. Print a summary of all movies with their ratings
// **Challenge:**
// Sort the movies by rating (highest → lowest) and display the sorted list.
let movies = ['Fast X', 'The gods must be crazy', 'Mr Bones', 'Beauty in Black']
let ratings = [16, 13, 18]
function addMovie(movie, rating) {
    let mov = []
    let rated = []
    for (let m of movies) {
        mov.push(m)
    }
    for (let r of ratings) {
        rated.push(r)
    }
    console.log(`Movies: ${movies}<br>Ratings: ${rating}`)
}
console.log(addMovie('To kill a monkey', 16))

React

Reply