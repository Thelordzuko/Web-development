// setTimeout(function, milliseconds)

// console.log("Start");
// setTimeout(function() {
//     console.log("This appears after 5 seconds");
// }, 5000); //1 second = 1000milliseconds//
// console.log("End");

// //simple delay//
// setTimeout(function(){
//     console.log("Hello after 2 seconds");
// }, 3000);

// //with arrow function//
// setTimeout(() => {
//     console.log("Hello after 5 seconds")
// }, 5000)

//using named function//
// function showMessage(){
//     console.log("This is a delayed message");
// }
// setTimeout(showMessage, 10000)

//Multiple timers//
// setTimeout(() => console.log("1 second"), 1000)
// setTimeout(() => console.log("2 seconds"), 2000)
// setTimeout(() => console.log("3 seconds"), 3000)

//Save the timer ID
// let timerId = setTimeout(() => {
//     console.log("This will NOT run");
// }, 5000);
// //Cancel it
// clearTimeout(timerId);
// console.log("Timer was cancelled");

// Example
let notificationTimer;

function showNotification(message) {
    console.log("Notification:", message)

    //hide after 3 seconds
    notificationTimer = setTimeout(() => {
        console.log("Notification hidden");
    }, 3000);
}

function hideNotification(){
    clearTimeout(notificationTimer);
    console.log("Notification gone immediately");
}

//test it
showNotification("Welcome!");   
hideNotification()