function tellJoke() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Here’s a funny joke!");
    }, 3000);
    });
}

const jokeBtn = document.getElementById("jokeBtn");
const output = document.getElementById("output");

jokeBtn.addEventListener("click", () => {
    output.textContent = "Thinking of a joke... ";

    tellJoke()
    .then((message) => {
        output.textContent = message;
    });
});