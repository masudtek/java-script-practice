// Check the year is leap Year or not 
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}
const myYear = isLeapYear(2024);
console.log("My Year : ", myYear);
const herYear = isLeapYear(2023);
console.log("Her Year : ", herYear);