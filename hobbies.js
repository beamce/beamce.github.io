class Hobby {
    constructor(hobby, gender, activityType, club, day, time, familyActivity = false, clubAttached = "", myTime = "") {
        this.hobby = hobby;
        //Gender taken as a list
        this.gender = gender;
        //child activity taken as a list, A for adult, C for child, F for family activity
        this.activityType = activityType;
        //club is true false, would this be a club activity
        this.club = club;
        //day taken as string of numbers, 1=Monday, 2=Tuesday...
        this.day = day;
        //time taken as morning, afternoon or evenings in a list
        this.time = time;
        //family activity always set to false, to be activated on chance if the person has that hobby and it can be a family type
        this.familyActivity = familyActivity;
        //club attached is an empty string, unless the person is a part of a club selected at random
        this.clubAttached = clubAttached;
        this.myTime = myTime;
    }
};

class Clubs {
    constructor(hobby, clubName) {
        this.hobby = hobby;
        //list of club names associated with this hobby
        this.clubName = clubName;
    }
}

let hobbies = [
    new Hobby("do DIY", ["Male"], ["A"], false, "1234567", ["morning", "afternoon", "evening"]),
    new Hobby("practice astronomy", ["Male", "Female"], ["A", "C", "F"], true, "1234567", ["evening"]),
    new Hobby("play the Pools", ["Male", "Female"], ["A", "F"], false,  "3", ["afternoon", "evening"]),
    new Hobby("watch football", ["Male", "Female"], ["A", "C", "F"],  true, "6", ["afternoon"]),
    new Hobby("play football", ["Male"], "6", ["A", "C"], true ["morning", "afternoon"]),
    new Hobby("watch rugby", ["Male", "Female"], ["A", "C", "F"], true, "6", ["evening"]),
    new Hobby("play rugby", ["Male"], "6", ["A"], true, ["morning", "afternoon"]),
    new Hobby("go dancing", ["Male", "Female"], ["A", "C"], false, "1234567", ["evening"]),
    new Hobby("watch ice hockey", ["Male", "Female"], ["A", "C", "F"], true, "36", ["evening"]),
    new Hobby("knit", ["Female"], ["A", "C"], true, "1234567", ["evening"]),
    new Hobby("quilt", ["Female"], ["A", "C"], true, "1234567", ["evening"]),
];

let clubs = [
    new Clubs("practice astronomy", ["Annfield Plain Astronomy Society", "Sunderland Astronomy Society"]),
    new Clubs("watch football", ["Darlington FC"]),
    new Clubs("play football", ["Blyth Spartans"]),
    new Clubs("watch rugby", ["Awsome Rugby Club"]),
    new Clubs("play rugby", ["Awsome Rugby Club"]),
    new Clubs("watch ice hockey", ["Durham Wasps"]),
    new Clubs("knit", ["North East Womans Knitting Circle"]),
    new Clubs("quilt", ["Quilt Time"]),
];

function myHobbies(gender, age) {
    let myHobbies = [];
    let possibleGenderHobbies = [];
    let possibleHobbies = [];
    let personAgeCategory = "";

    //work out the age of the person
    if (age < 17) {
        personAgeCategory = "C";
    } else {
        personAgeCategory = "A";
    }

    //Make a list for all possible hobbies based on gender
    for (i = 0; i < hobbies.length; i++) {
        if (hobbies[i].gender.includes(gender)) {
            possibleGenderHobbies.push(hobbies[i]);
        }
    }

    //remove all non age appropriate hobbies from list
    for (i = 0; i < possibleGenderHobbies.length; i++) {
        if (possibleGenderHobbies[i].activityType.includes(personAgeCategory)) {
            possibleHobbies.push(possibleGenderHobbies[i]);
        }
    }

    //find all hobbies appropriate for that particular day
    for (i = 0; i < 7; i++) {
        let todaysPossibleHobbies = [];
        if (possibleHobbies[i].day.includes(i + 1)) {
            todaysPossibleHobbies.push(possibleHobbies[i]);
            todaysPossibleHobbies.push("");
        };

        //if there is appropriate hobbies for the day, choose one at random, there is a chance that none will be chosen
        if (todaysPossibleHobbies.length > 0) {
            let todaysHobby = todaysPossibleHobbies[Math.floor(Math.random() * todaysPossibleHobbies.length)];

            //if a hobby is chosen and can be a family activity, make it a family activity on a coin flip
            if (todaysHobby.length > 0 && todaysHobby.activityType.includes("F")) {
                if (Math.floor(Math.random() * 2) == 0) {
                    todaysHobby.familyActivity = true;
                }
            }

            //check that there is actually a hobby selected
            if (todaysHobby.length != "") {
                //choose a time of day for the activity
                todaysHobby.myTime = todaysHobby.time[Math.floor(Math.random() * todaysHobby.time.length)];
                //choose a club for the activity if it has clubs
                if (todaysHobby.club) {
                    let possibleClubs = clubs.find(club => club.hobby == todaysHobby.hobby);
                    todaysHobby.clubAttached = possibleClubs.clubName[Math.floor(Math.random() * possibleClubs.clubName.length)];
                }
            }
            person.hobbies.push(todaysHobby);
        } else {
            person.hobbies.push("");
        }
        
    }
}

function getHobbiesInfo() {
    
    let hobbiesInfoStr = "";

    let hobbiesCheck = 0;

    for (i = 0; i < 7; i++) {
        if (person.hobbies[i] != "") {
            hobbiesCheck += 1;
            hobbiesInfoStr += "<p>On " + days[i] + " " + person.hobbies[i].myTime + "s you " + person.hobbies[i].hobby + ". ";
        }
        if (person.hobbies[i].club) {
            hobbiesInfoStr += "You are a member of " + person.hobbies[i].clubAttached + ". ";
        }
        if (person.hobbies.familyActivity) {
            hobbiesInfoStr += "You do this activity with the rest of your family.";
        }
        if (person.hobbies[i] != "") {
            hobbiesInfoStr += "</p>";
        }
    }
    if (hobbiesCheck > 0) {
        hobbiesInfoStr += "<p>On the other days of the week you stay at home.</p>";
    } else {
        hobbiesInfoStr += "<p>You stay home most of the week and don't have any hobbies.";
    }

    return hobbiesInfoStr;
}