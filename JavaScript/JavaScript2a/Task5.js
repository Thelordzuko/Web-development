function personalAssistant(time, weather, dayType) {
    if (time >= 5 && time <= 11) {
        if(dayType == "weekday") {
            console.log("Good morning. Remember to start your day with positivity and hope.")
        }
        else if (dayType = "weekend") {
            console.log("A weekend morning! A day to unwind")
        } 
        else {
            console.log("A fine morning to enjoy the holidays!")}
        }
    else if (time >= 12 && time <= 16) {
        if(dayType == "weekday") {
            console.log("Good afternoon. I hope your day is going well.")
        }
        else if (dayType = "weekend") {
            console.log("Hello, how's the weekend coming along?")
        } 
        else {
            console.log("Hi there! I trust the holidays are splendid.")}
        }
    else if (time >= 17 && time <= 21) {
        if(dayType == "weekday") {
            console.log("It's time to rest. Tomorrow is another day!")
        }
        else if (dayType = "weekend") {
            console.log("Go to bed, it's the weekend.")
        } 
        else {
            console.log("Sleep is an important part of the holidays. Have a goodnight.")}
        }

    let advice = weather === "sunny" ? "It's a bright day today. Very good for any outdoor activity." :
    weather === "rainy" ? "Don't forget to take an umbrella. It's pouring out there!" : "Cloudy skies today. Perfect for chilling."
        console.log(advice)
}

personalAssistant(19, "rainy", "weekday")