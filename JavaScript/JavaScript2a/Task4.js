function atm(balance, action, amount) {
    if (action === "withdraw") {
        if (amount > 500) {
            return `Withdrawal limit exceeded. You can only withdraw up to 500 at once.`;
        } else if (balance >= amount) {
            balance -= amount;
            return `Withdrawal successful. New balance: ${balance}`;
        } else {
            return `Insufficient funds. Your balance is ${balance}`;
        }
    } else if (action === "deposit") {
        balance += amount;
        return `Deposit successful. New balance: ${balance}`;
    } else {
        return "Invalid action. Please choose 'withdraw' or 'deposit'.";
    }
}
console.log(atm(100, "withdraw", 500))
