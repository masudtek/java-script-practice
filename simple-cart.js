const shoppingCart = [
    {name : "shoe", price: 1200, quantity: 2},
    {name : "shirt", price: 2200, quantity: 3},
    {name : "pant", price : 2500, quantity: 2},
    {name : "valt", price : 1500, quantity: 2},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i< products.length; i++){
        let product = products[i];
        let productTotal = product.price * product.quantity;
        sum = sum + productTotal 
    }
    return sum;
}
let shoppingCost = totalCost(shoppingCart)
console.log(shoppingCost)