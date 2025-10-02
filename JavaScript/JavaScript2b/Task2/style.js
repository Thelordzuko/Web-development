function taxCalculator(country, amount){
taxRate = 0;
if (country === "Argentina"){
    taxRate = 0.35;
} else if (country === "Australia"){
    taxRate = 0.30
} else if (country === "Brazil"){
    taxRate = 0.34;
} else if(country === "Canada"){
    taxRate = 0.262;
} else if(country === "China"){
    taxRate = 0.25;
} else if(country == "Nigeria"){
    taxRate = 0.24;
}
else {
    taxRate = 0.5;
}

return amount * taxRate;
}

console.log(taxCalculator("Uganda", 1000))


function shippingCalculator(weight, distance){
    let ratePerKg = 0.5;
    let ratePerKM = 0.1;

    let costByWeight = weight * ratePerKg;
    let costByDistance = distance * ratePerKM;

   let total = costByWeight + costByDistance;
    return total;
}

console.log(shippingCalculator(20, 100));



function memberDiscount(amount, membershipType){
    if (membershipType === "Platinum"){
        return `Platinum member discount: ${amount * 0.3}`;
    } else if (membershipType === "Gold"){
        return `Gold member discount: ${amount * 0.2}`;
    } else if (membershipType === "Silver"){
        return `Silver member discount: ${amount * 0.15}`;
    } else {
        return "No discount for regular members";
    }
}

console.log(memberDiscount(500, "Silver"));