//constants needed for the program to work
const numberSuffix = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentYear = 1959;

function pennyConverter(pennies) {
    let pounds = Math.floor(pennies / 240);
    let schillings = Math.floor(Math.floor(pennies % 240) / 12);
    let pence = Math.floor(pennies % 240) % 12;
    return "£" + pounds + " " + schillings + "s " + pence + "d";
};