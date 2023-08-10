// Find the prime number from following array

function isPrime(number) {
  if (!Array.isArray(number)) {
    return "Please provide a valid array of number ";
  } else {
    let primes= [];
    for (let item of number) {
        console.log("item", item);
      if (item > 1) {
        let isPrime = true;
        for (let i = 2; i < item; i++) {
          if (item % i === 0) {
            isPrime = false;
            // break;
            continue;
          }
        }
        if (isPrime === true) {
          primes.push(item);
        }
      }
    }
    return primes;
}
}
const numbers = [2, 3, 4, 5, 6, 7, 8, 9,13,19,23];
// const numbers = 25;
const result = isPrime(numbers);
console.log(result);
