function sayHello() {
    console.log("Hello, this is my first function");
}
sayHello();

console.log(""); // Empty line

function showCurrentTime() {
    let now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}
//call the time function
showCurrentTime();

//Functions with parameters

//Functions with one parameter
function greetPerson(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript!`)
}
greetPerson("Seyi");
greetPerson("Sola");
greetPerson("Soji");

console.log(""); // Empty line

//Function with multiple parameters
function introduce(firstName, lastName, age) {
    console.log(`Hi! I'm ${firstName} ${lastName} and I'm ${age} years old.`)
}
//Call with multiple arguements
introduce("Seyi", "Alebiosu", 20);
introduce("Sola", "Somorin", 37);
introduce("Soji", "Ajijolaoluwa", 24);

console.log(""); // Empty line

function greetWithDefault(name = "Friend") {
    console.log(`Hello, ${name}!`);
}
greetWithDefault("Maria"); // uses provided name
greetWithDefault(); // uses default "friend"

//Function that returns a calculated value
function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

//store the returned 