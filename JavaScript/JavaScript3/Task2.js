let grades = [34, 88, 20, 32, 85, 93, 23]
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
    let highest = grades[0];
    for (let grade of grades) {
        if (grade > highest) {
            highest = grade;
        }
    }
    return `The highest grade is: ${highest}`
}
console.log(getHighest(grades))

function getLowest(grade) {
    let lowest = grade[0];
    for (let grade of grades) {
        if (grade < lowest) {
            lowest = grade;
        }
    }
    return `The lowest grade is ${lowest}`
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