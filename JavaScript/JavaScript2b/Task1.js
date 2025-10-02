function isStrongPassword(password){
    if (password.length >= 8 && (password.includes(0) || password.includes(1) || password.includes(2) || password.includes(3) || password.includes(4) || password.includes(5) || password.includes(6) || password.includes(7) || password.includes(8) || password.includes(9)) && (password.includes(".") || password.includes(",") || password.includes("!") || password.includes("#") || password.includes("&") || password.includes("@") || password.includes("*"))){
        console.log("Password accepted. You can proceed!");
        
    } 
    else {
    if (password.length < 8){
        console.log("Password must contain at least 8 characters")
    } else if((!password.includes(0) && !password.includes(1) && !password.includes(2) && !password.includes(3) && !password.includes(4) && !password.includes(5) && !password.includes(6) && !password.includes(7) && !password.includes(8) && !password.includes(9))){
        console.log("Password must contain a number!!!")
    } 
    else if((!password.includes(".") && !password.includes(",") && !password.includes("!") && !password.includes("#") && !password.includes("&") && password.includes("@") && password.includes("*"))){
        console.log("Password must contain a special character!!!")
    
    } 
     else {console.log("Weak password!!!. Password must have at least 8 characters, a number and a special character.")}
    }  
} 

isStrongPassword("Thefirelordzuko1.")

function formatPercentage(value) {
    console.log(`${value.toFixed(1)}%`)
}

function calculateCompoundInterest(principal, rate, years) {
    console.log(`Amount: ${principal * (1 + rate / 100) ** years}`)
}
