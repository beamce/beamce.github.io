function radioScreen() {
    let radioText = document.createElement("p");
    radioText.innerHTML = "Please check all the radio stations you listen to on a regular basis:";
    formContainer.append(radioText);

    let radioTwoContainer = document.createElement("div");
    radioTwoContainer.setAttribute("id", "radio-two-container");
    let radioTwoLabel = document.createElement("p").appendChild(document.createTextNode("BBC Radio 2"));
    let radioTwoCheck = document.createElement("input");
    radioTwoCheck.type = "checkbox";
    radioTwoCheck.setAttribute("name", "radio-check");
    radioTwoCheck.setAttribute("value", "Light Programme");
    radioTwoContainer.appendChild(radioTwoLabel);
    radioTwoContainer.appendChild(radioTwoCheck);

    let radioThreeContainer = document.createElement("div");
    radioThreeContainer.setAttribute("id", "radio-three-container");
    let radioThreeLabel = document.createElement("p").appendChild(document.createTextNode("BBC Radio 3"));
    let radioThreeCheck = document.createElement("input");
    radioThreeCheck.type = "checkbox";
    radioThreeCheck.setAttribute("name", "radio-check");
    radioThreeCheck.setAttribute("value", "Third Programme");
    radioThreeContainer.appendChild(radioThreeLabel);
    radioThreeContainer.appendChild(radioThreeCheck);

    let radioFourContainer = document.createElement("div");
    radioFourContainer.setAttribute("id", "radio-four-container");
    let radioFourLabel = document.createElement("p").appendChild(document.createTextNode("BBC Radio 4"));
    let radioFourCheck = document.createElement("input");
    radioFourCheck.type = "checkbox";
    radioFourCheck.setAttribute("name", "radio-check");
    radioFourCheck.setAttribute("value", "Home Service");
    radioFourContainer.appendChild(radioFourLabel);
    radioFourContainer.appendChild(radioFourCheck);

    formContainer.appendChild(radioTwoContainer);
    formContainer.appendChild(radioThreeContainer);
    formContainer.appendChild(radioFourContainer);
};

class RadioShow {
    constructor(showName, genre, station) {
        this.showName = showName;
        this.genre = genre;
        this.station = station;
    }
};

/*The hierarchy if shows are on different stations is Home Service > Light Programme > Third Programme

Possible genres are:
    game show
    drama
    classical
    requests
    childrens
    chat
    comedy
    religious
    music
    */

let radioShows = [
    new RadioShow("Twenty Questions", "game show", ["Home Service", "Light Programme"]),
    new RadioShow("Have a Go!", "game show", ["Home Service", "Light Programme"]),
    new RadioShow("The McCooeys", "drama", ["Home Service"]),
    new RadioShow("Liszt", "classical", ["Third Programme"]),
    new RadioShow("Bach", "classical", ["Third Programme"]),
    new RadioShow("Brahms", "classical", ["Third Programme"]),
    new RadioShow("Dick Barton", "drama", ["Light Programme"]),
    new RadioShow("Topic for Tonight", "chat", ["Light Programme"]),
    new RadioShow("Housewives' Choice", "requests", ["light Programme"]),
    new RadioShow("Family Favourites", "requests", ["Light Programme"]),
    new RadioShow("Ray's a Laugh", "comedy", ["Light Programme"]),
    new RadioShow("Variety Bandbox", "variety", ["Light Programme"]),
    new RadioShow("Morning Story", "drama", ["Light Programme"]),
    new RadioShow("Mrs. Dales Diary", "drama", ["Light Programme"]),
    new RadioShow("Hullo Children!", "childrens", ["Light Programme"]),
    new RadioShow("Woman's Hour", "chat", ["Light Programme"]),
    new RadioShow("Music While you Work", "music", ["Light Programme"]),
    new RadioShow("Butlin's Beaver Club", "childrens", ["Radio Luxembourg"]),
    new RadioShow("Take your Pick", "game show", ["Radio Luxembourg"]),
    new RadioShow("This I Believe", "chat", ["Radio Luxembourg"]),
    new RadioShow("Candid Microphone", "comedy", ["Radio Luxembourg"]),
    new RadioShow("Frank and Earnest", "religious", ["Radio Luexembourg"]),
    new RadioShow("The World Tomorrow", "religious", ["Radio Luxembourg"]),
    new RadioShow("Double your Money", "game show", ["Radio Luxembourg"]),
    new RadioShow("Record Hop", "music", ["Radio Luxembourg"]),
    new RadioShow("Jamboree", "childrens", ["Radio Luxembourg"])
];

function assignRadioStation(age) {
    if (person.radioStations.length == 0) {
        let roll = 0;
        if (age < 11) {
            person.radioStations = ["Home Service"];
        } else if (age > 10 && age < 31) {
            roll = Math.floor(Math.random() * 12);
            if (roll < 8) {
                person.radioStations = ["Light Programme"];
            } else if (roll == 8) {
                person.radioStations = ["Third Programme"];
            } else {
                person.radioStations = ["Home Service"];
            }
        } else if (age > 30 && age < 51) {
            roll = Math.floor(Math.random() * 4);
            if (roll < 2) {
                person.radioStations = ["Light Programme"];
            } else if (roll == 2) {
                person.radioStations = ["Third Programme"];
            } else {
                person.radioStations = ["Home Service"];
            }
        } else {
            roll = Math.floor(Math.random() * 20);
            if (roll < 13) {
                person.radioStations = ["Light Programme"];
            } else if (roll > 12 && roll < 18) {
                person.radioStations = ["Third Programme"];
            } else {
                person.radioStations = ["Home Service"];
            }
        }
    }
};

/* Takes a list of the stations that a person listens too and 
all of the shows in the system, and selects one at random 
based on their stations */
function radioShow() {
    let possibleShows = [];
    for (i = 0; i < person.radioStations.length; i++) {
        for (x = 0; x < radioShows.length; x++) {
            if (radioShows[x].station.includes(person.radioStations[i])) {
                possibleShows.push(radioShows[x]);
            }
        }
    }
    person.favouriteRadioShow = possibleShows[Math.floor(Math.random() * possibleShows.length)];
};

function getRadioInfo(radioStation, radioShow) {
    radioInfoStr = "";

    radioInfoStr += "<p>At night you listen to the " + radioStation +" on the radio. Your favourite radio show on this station is " + radioShow + ". ";
    if (radioStation == "Light Programme") {
        radioInfoStr += "This is by far the most popular radio station of the 1950s, with around 2 in every 3 people tuning in regularly.</p>";
    } else if (radioStation == "Third Programme") {
        radioInfoStr += "Although this is not the most popular radio station, you enjoy the mix of classical music and opera that is regularly on.</p>";
    } else {
        radioInfoStr += "Although this is not the most popular radio station, you enjoy the mix of quiz and talk shows on offer.</p>";
    }
    return radioInfoStr;
};