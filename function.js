// convert inch to feet 
function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);


// convert miles to kilometer

function milesToKilometer(miles){
    const kilometer = miles* 1.609;
    return kilometer;
}
const myRunMiles = 50;
const myRunToKilo = milesToKilometer(myRunMiles);
console.log(" My Kilometer ", myRunToKilo);