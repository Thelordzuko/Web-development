function loginCheck() {
    let userId = document.getElementById("userId").value;
    let userPass = document.getElementById("userPass").value;
    let resultDiv = document.getElementById("result");
    let username = "admin";
    let Password = "cafe123";

    if (userId === "" || userPass === "") {
        resultDiv.textContent = "Please enter both username and password!";
        resultDiv.style.color = "red";
        return;

    } else if (userId === username && userPass === Password){
        resultDiv.textContent = "Login successful!";
        resultDiv.style.color = "green";
        window.location.href = "../staff_dashboard/dashboard.html"
    } else {
        resultDiv.textContent = "Invalid login details!";
        resultDiv.style.color = "red";
    }
}