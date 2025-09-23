function getGrade(score) {
    if (score == 100) {
        return "Outstanding! Grade: A+"
    } else if (score >= 90) {
        return `Score: ${score} -> Grade: "A"`
    } else if (score >= 80) {
        return `Score: ${score} -> Grade: "B"`
    } else if (score >= 70) {
        return `Score: ${score} -> Grade: "C"`
    } else if (score >= 60) {
        return `Score: ${score} -> Grade: "D"`
    } else {
        return `Score: ${score} -> Grade: "F"`
    }
}

console.log(getGrade('100'))