

function wordReverse(str){
    const words = str.split(' ').reverse().join(' ');
    // console.log(words);
    return words;
}
const myString = "I am a good Boy"
const result = wordReverse(myString);
console.log(result)
