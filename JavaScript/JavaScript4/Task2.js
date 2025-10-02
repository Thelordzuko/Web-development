let cartItem = {
    name: "Egg",
    price: 200,
    quantity: 5,
    getTotal(){
        return this.price * this.quantity;
        
    }
}

let cart = [
    {
    name: "Pepper",
    price: 500,
    quantity: 2,
    getTotal(){
        return this.price * this.quantity;
    }
    },
    {
    name: "Onions",
    price: 300,
    quantity: 1,
    getTotal(){
        return this.price * this.quantity;
    }
    },
    {
    name: "Bread",
    price: 1000,
    quantity: 2,
    getTotal(){
        return this.price * this.quantity;
    }
    }

]

let getCartTotal = (cart) => {
   let total = 0;
    for (item of cart){
        total += item.getTotal();
    }

    console.log("The price of all the items in the cart is:", total);
}

getCartTotal(cart);