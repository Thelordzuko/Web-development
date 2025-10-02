function isStrongPassword(password) {
    const hasLength = password.length >= 8;
    const hasNumber = /[123456789]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLength === false) {
        return "Password must be at least 8 characters";
    } else if (hasNumber === false) {
        return "Password must have at least a number"
    } else if (hasSpecial === false) {
        return "Password should have at least a special character"
    } else {
        return "Password created successfully"
    }
}
console.log('');
console.log(isStrongPassword('somorin@1'))

// 2
function formatPercentage(value) {
    return `${value.toFixed(1)}%`
}
console.log(formatPercentage(75))

// 3
function calculateCompoundInterest(principal, rate, years) {
    let A = principal * (1 + rate)**years
    return `${A.toFixed(2)}`
}
console.log(calculateCompoundInterest(50000, 0.08, 3));

// 4
function canGraduate(credits, gpa) {
    if (credits >= 120 && gpa >= 2.0) {
        return "You can graduate"
    } else {
        return "You cannot graduate due to low Credits or GPA"
    }
}
console.log(canGraduate(150, 3.0))

// 5
function reverseWords(sentence) {
    let words = sentence.split(" ")
    let sentences = words.reverse()
    return sentences
}
console.log(reverseWords('I love python'))