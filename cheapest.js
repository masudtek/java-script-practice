// Find the cheapest phone from the following object

let phones = [
    {name : "Samsung", camera : 12, storage: "32gb", price: 36000, color: "silver"},
    {name : "Walton", camera : 10, storage: "32gb", price: 25000, color: "silver"},
    {name : "iphone", camera : 13, storage: "64gb", price: 82000, color: "black"},
    {name : "Nokia", camera : 12, storage: "32gb", price: 32000, color: "golden"},
    {name : "xaomi", camera : 10, storage: "32gb", price: 20000, color: "gray"},
    {name : "Oppo", camera : 10, storage: "32gb", price: 22000, color: "silver"}
]
// console.log(phones);
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i= 0; i<phones.length; i++ ){
        const phone =phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone; 

        }
       
    } return cheapest
}
let mySelection = cheapestPhone(phones);
console.log(mySelection)