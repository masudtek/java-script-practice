// factorial 7 means 7 * 6 * 5 * 4 * 3 * 2 * 1

// regular Way 

/* function factorial(number){

    let result = 1;
    for (let i= 1; i <= number ; i++ ) {
         result = result * i;
        } return result;
    }
const factorialValue = factorial(9); 
console.log(factorialValue);

 */

//reverse Way


function factorial(number){
    let result = 1;

    //Using for loop 

    /* for (let i = number ; i >= 1; i--) {
            result = result * i
    }
    return result */

    // Using while loop

    let i = number;
    while(i >= 1){
        result = result * i;
        i --
    } return result
}
const number = 9;
const factorialValue = factorial(number)
console.log("Factorial of ",number, "is ",  factorialValue);


//  another approach by using recursive function 
/* 
function factorial(n){
    if(n === 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

const resultFactorial = factorial(5);
// 5! = 5 *4 * 3 *2 *1 = 120 
console.log(resultFactorial); */