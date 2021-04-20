//constants needed for the program to work
const numberSuffix = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let currentYear = 1959;

function pennyConverter(pennies) {
    let pounds = Math.floor(pennies / 240);
    let schillings = Math.floor(Math.floor(pennies % 240) / 12);
    let pence = Math.floor(pennies % 240) % 12;
    return "£" + pounds + " " + schillings + "s " + pence + "d";
};

class Bus {
    constructor(busName, busInformation, cost, busImg) {
        this.busName = busName;
        this.busInformation = busInformation;
        this.cost = cost;
        this.busImg = busImg;
    }
}

let buses = [
    new Bus("LGOC B-Type", "This is a lovely lovely bus that I know nothing about. " +
        "In case there is any confusion this is placeholder text!", 2, "imgs/buses/LGOC_B.jpg"),
    new Bus("NGTC Daimler D-Type", "This is a Daimler D-Type Bus. It is very nice. " +
        "In case there is any confusion this is placeholder text!", 2, "imgs/buses/NGTC_Daimler_D.jpg"),
    new Bus("Rotherham 220", "A bus that is very nice. It has history. " +
        "In case there is any confusion this is placeholder text!", 2, "imgs/buses/rotherham_220.jpg")
];

//quick clear function for local storage because i'm lazy...MUST BE REMOVED WHEN DATABASE IS IMPLEMENTED!!!
function c() {
    localStorage.clear();
}