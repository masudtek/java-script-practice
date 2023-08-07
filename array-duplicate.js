

// remove duplicate element of the array 
/* 
const names = ["abul", "babul", "shofiq", "rofiq", "Mosfiq", "manik", "siraj", "jamal", "kamal","babul", "shofiq", "rofiq"];

function removeDuplicate(names){
    let uniqueArray = [];
    for( let i= 0; i < names.length ; i++){
        if(uniqueArray.includes(names[i]) === false){
            uniqueArray.push(names[i])

        }
        // console.log(names[i])
    }return uniqueArray;
}
const result = removeDuplicate(names)
console.log(result); */


const names = ["abul", "babul", "shofiq", "rofiq", "Mosfiq", "manik", "siraj", "jamal", "kamal","babul", "shofiq", "rofiq"];

function removeDuplicate(names){
    uniqueArray = [];
    for(let i = 0; i<names.length; i++){
        if(uniqueArray.includes(names[i]) === false){
            uniqueArray.push(names[i]);
        }
    }
    return uniqueArray;
}
const result = removeDuplicate(names);
console.log(result);