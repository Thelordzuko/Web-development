function weatherAdvice(temperature, isRaining) {
    if (temperature < 32 && isRaining) {
        console.log("Freezing rain! Stay inside!");
    } else if (temperature < 32) {
        console.log("very cold, wear a heavy coat.");
    } else if (temperature >= 32 && temperature <= 60) {
        console.log("Chilly, bring a jacket.");
    } else if (temperature >= 60 && temperature <= 80) {
        console.log("Nice weather!");
    } else {
        console.log("It's hot, stay hydrated!");
    }
    
let advice = isRaining ? "Bring an umbrella" : "No umbrella needed"
console.log(advice)
}

weatherAdvice(30, false)