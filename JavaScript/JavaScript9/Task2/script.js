function deliverOrder(order) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() < 0.5;
        if (success) {
        resolve(`✅ Delivered: ${order}`);
        } else {
        reject(`❌ Delivery failed: ${order}`);
        }
    }, 2000);
    });
}

const button = document.getElementById("startBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    result.textContent = "Delivering...";

    deliverOrder("Jollof Rice")
    .then(message => {
        result.textContent = message;
    })
    .catch(error => {
        result.textContent = error;
    });
});