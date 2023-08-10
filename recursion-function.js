// call a function name sumOfN() you will provided a number n. you have to calculate the total of all number between 1 to n . 
// use function recursion 

/* function sumOfN(n){
    if (n === 1 ){
        return 1;
    }
    else {
        return n + sumOfN(n-1);
    }
}
const number = 3;
// 6 + 5 + 4 + 3 + 2 + 1 = 
const result = sumOfN(number);
console.log(result); */


// find factorial using recursive function 

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
console.log(resultFactorial);