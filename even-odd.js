// function isEven(number){
//     const remainder = number% 2;
//     if(remainder == 0 ){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const myNumber = isEven(98);
// console.log("My Number ", myNumber);
// const anotherNumber = isEven(117);



// Check The number is even or odd

function isEven(number){
 const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
} 
const myNumber = isEven(117);
console.log("My Number : ", myNumber);
const herNumber = isEven(98);
console.log("Her Number :", herNumber);