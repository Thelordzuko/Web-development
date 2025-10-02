function calculatePrice(price, customerType, isFirstPurchase) {
    let discount = 0;

    if (customerType === "student") {
        discount = 0.10;
    } else if (customerType === "senior") {
        discount = 0.15; 
    } else if (customerType === "employee") {
        discount = 0.20; 
    }

    if (isFirstPurchase) {
        discount += 0.05
    }

    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}

let result = calculatePrice(500, "employee", "false")
console.log("PRICE CALCULATION:")
console.log(`Original price: #${result.originalPrice}`);
console.log(`Discount percent: ${result.discountPercent}%`);
console.log(`Final price: #${result.finalPrice}`);