let nb1 = document.getElementById("firstNumber")
let nb2 = document.getElementById("secondNumber")
let arithmetic = document.getElementById("arithmetic")

document.getElementById("equal").onclick = function () {
    let val1 = parseInt(nb1.value)
    let val2 = parseInt(nb2.value)
    let sign = arithmetic.value
    let result = 0

    console.log("number1:", val1, "number2:", val2, "sign:", sign)

    if (sign === "addition") {
        result = val1 + val2
    }

    if (sign === "subtraction") {
        result = val1 - val2
    }

    if (sign === "multiplication") {
        result = val1 * val2
    }

    if (sign === "division") {
        result = val1 / val2
    }

    if (sign === "modulo") {
        result = val1 % val2
    }

    console.log("result:", result)

    document.getElementById("answer").textContent = result
}