
const orders = ["Coffee", "Cake", "Juice"];
const output = document.getElementById("output");
const button = document.getElementById("startBtn");


function prepareOrder(order) {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(`✅ ${order} ready`);
    }, 2000);
    });
}

async function processOrders() {
    output.innerHTML = "Processing orders...<br><br>";

    for (const order of orders) {
    const message = await prepareOrder(order);
    output.innerHTML += message + "<br>";
    }

    output.innerHTML += "<br> All orders completed!";
}


button.addEventListener("click", processOrders);