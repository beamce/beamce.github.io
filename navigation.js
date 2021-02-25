const formContainer = document.getElementById("form-container");
const navigationContainer = document.getElementById("navigation-container");
let mainViewContainer = null;

let navigationNumber = 0;

//Person building Navigation
let startButton = document.querySelector("#start-btn");
startButton.setAttribute("id", "start-btn");
let backButton = document.createElement("button");
backButton.textContent = "Back";
backButton.setAttribute("class", "nav-btn");
backButton.setAttribute("id", "back-btn");
let nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.setAttribute("class", "nav-btn");
nextButton.setAttribute("id", "next-btn");

//Person Functions Navigation
let changeJobButton = document.createElement("button");
changeJobButton.textContent = "Change Job";
changeJobButton.setAttribute("class", "person-btn");
let changeNewspaperButton = document.createElement("button");
changeNewspaperButton.textContent =  "Change Newspaper";
changeNewspaperButton.setAttribute("class", "person-btn");
let changeRadioShowButton = document.createElement("button");
changeRadioShowButton.textContent = "Change Radio Show";
changeRadioShowButton.setAttribute("class", "person-btn");
let changeFilmButton = document.createElement("button");
changeFilmButton.textContent = "Change Film";
changeFilmButton.setAttribute("class", "person-btn");
let deletePersonButton = document.createElement("button");
deletePersonButton.textContent = "Delete Person";
deletePersonButton.setAttribute("class", "person-btn");
let personBiographyButton = document.createElement("button");
personBiographyButton.textContent = "My Biography";
personBiographyButton.setAttribute("class", "person-btn");
let knittingLessonOneButton = document.createElement("button");
knittingLessonOneButton.textContent = "Go to Knitting Class";

let screens = [start, createPersonalInfoScreen, createFamilyInfoScreen, createChildAgesScreen, radioScreen, filmScreen, endScreen];

(function() {
    if (localStorage.length > 0) {
        navigationNumber = 6;
        retrievePerson();
        changeScreen();
        endScreenNavigation();
    }
})();

function endScreenNavigation() {

    while (navigationContainer.firstChild) {
        navigationContainer.removeChild(navigationContainer.firstChild);
    }

    navigationContainer.appendChild(personBiographyButton);
    navigationContainer.appendChild(changeJobButton);
    navigationContainer.appendChild(changeNewspaperButton);
    navigationContainer.appendChild(changeRadioShowButton);
    navigationContainer.appendChild(changeFilmButton);
    navigationContainer.appendChild(deletePersonButton);

}

function changeScreen() {
    while (formContainer.firstChild) {
        formContainer.removeChild(formContainer.firstChild);
    };
    screens[navigationNumber]();
}

function removeMainView() {
    while (mainViewContainer.firstChild) {
        mainViewContainer.removeChild(mainViewContainer.firstChild);
    }
}

function endScreen() {
    //endscreen containers
    let endScreenContainer = document.createElement("div");
    endScreenContainer.setAttribute("id", "end-container");
    let quickView = document.createElement("div");
    let mainView = document.createElement("div");
    quickView.setAttribute("id", "quick-view");
    mainView.setAttribute("id", "main-view");
    let myNameLabel = document.createElement("h1");
    myNameLabel.innerHTML = person.fullName;
    let myAgeLabel = document.createElement("div");
    myAgeLabel.appendChild(document.createTextNode("Age: " + person.age));
    let myMoneyLabel = document.createElement("div");
    myMoneyLabel.innerHTML = "Money: " + pennyConverter(person.money);
    myMoneyLabel.setAttribute("id", "my-money-label");
    let infoLabel = document.createElement("h1");
    infoLabel.innerHTML = "Biography";
    let personalInfo = document.createElement("div");
    personalInfo.innerHTML = getPersonalInfo(person.fullName, person.birthYear, person.classStatus) + 
                            getEducationInfo(person.age, person.birthYear, person.inPrimarySchool, person.satElevenPlus, person.passedElevenPlus, person.primarySchoolStart, person.secondarySchoolStart, person.secondarySchoolType) +
                            getFamilyInfo(person.familySize, person.married, person.childrenNumber, person.movedHouseYear, person.birthYear, person.childrenBirthYears) +
                            getJobInfo(person.inWork, person.married, person.job.jobName, person.job.company, person.job.income, person.spousesJob.jobName, person.spousesJob.income) +
                            getNewspaperInfo(person.readsDailyNewspaper, person.dailyNewspaper) +
                            getRadioInfo(person.radioStations, person.favouriteRadioShow.showName) +
                            getCinemaInfo(person.favouriteFilm.filmName, person.filmGenre);
    formContainer.appendChild(endScreenContainer);
    endScreenContainer.appendChild(quickView);
    endScreenContainer.appendChild(mainView);
    quickView.appendChild(myNameLabel);
    quickView.appendChild(myAgeLabel);
    quickView.appendChild(myMoneyLabel);
    mainView.appendChild(infoLabel);
    mainView.appendChild(personalInfo);
    mainViewContainer = document.getElementById("main-view");
    
    //inventory buttons
    if (person.inventory.includes("Knitting Lesson")) {
        quickView.appendChild(knittingLessonOneButton);    
    }
}

function start() {
    let startTitle = document.createElement("h1");
    startTitle.innerHTML = "Who Am I?";
    let paraOne = document.createElement("p");
    paraOne.innerHTML = "Ever wondered what your life would be like if you were in the 1950s?";
    let paraTwo = document.createElement("p");
    paraTwo.innerHTML = "Press the button to find out!";
    formContainer.appendChild(startTitle);
    formContainer.appendChild(paraOne);
    formContainer.appendChild(paraTwo);

    while (navigationContainer.firstChild) {
        navigationContainer.removeChild(navigationContainer.firstChild);
    }

    navigationContainer.appendChild(startButton);
}

function updatePerson() {
    switch (navigationNumber) {
        case 1:
            //update the persons name and age
            person.fullName = document.getElementById("name").value;
            person.age = document.getElementById("age-input").value;

            //update the persons birth year based on the current year
            person.birthYear = currentYear - person.age;
            person.primarySchoolStart = person.birthYear + 5;
            person.secondarySchoolStart = person.birthYear + 11;
            inPrimarySchool();
            satElevenPlus();
            elevenPlusResult();
            secondaryEducation();
            parents(person.age);
            readsDailyNewspaper(person.age);
            dailyNewspaper(person.classStatus);
            if (document.getElementsByName("gender")[0].checked) {
                person.gender = "Male";
            } else {
                person.gender = "Female";
            }
            working();
            person.job = jobSelector(person.gender, person.secondarySchoolType);
            person.money = person.job.income;
            break;

        case 2:
            person.childrenNumber = document.getElementById("children-number").value;
            //check if the person is married
            if (document.getElementById("married-check").checked) {
                person.married = true;
            }
            spouse(person.married);
            break;

        case 3:
            let childAges = document.getElementsByClassName("child-ages");
            let agesList = [];
            for (i = 0; i < childAges.length; i++) {
                agesList.push(childAges[i].value);
            }
            agesList.sort(function(a, b){return b-a});
            person.childrenAges = agesList;
            childrenBirthYears();
            person.familySize = familySize(person.age, person.childrenNumber, person.married);
            parents(person.age);
            movingYear(person.birthYear, person.childrenBirthYears);
            break;
    
        case 4:
            let stations = document.getElementsByName("radio-check");
            for (i = 0; i < stations.length; i++) {
                if (stations[i].checked) {
                    person.radioStations.push(stations[i].value);
                }
            }
            assignRadioStation(person.age);
            radioShow();
            break;

        case 5:
            let filmGenres = document.getElementsByName("film-genre");
            for (i = 0; i < filmGenres.length; i++) {
                if (filmGenres[i].checked) {
                    person.filmGenre = filmGenres[i].value;
                }
            }
            favouriteFilm(person.filmGenre);
            savePerson();
            endScreenNavigation();
    }
};

function savePerson() {
    localStorage.setItem("fullName", person.fullName);
    localStorage.setItem("age", person.age);
    localStorage.setItem("gender", person.gender);
    localStorage.setItem("childrenNumber", person.childrenNumber);
    localStorage.setItem("married", person.married);
    localStorage.setItem("childrenAges", person.childrenAges.join());
    localStorage.setItem("childrenBirthYears", person.childrenBirthYears.join());
    localStorage.setItem("radioStations", person.radioStations.join());
    localStorage.setItem("favouriteRadioShow", person.favouriteRadioShow.showName);
    localStorage.setItem("filmGenre", person.filmGenre);
    localStorage.setItem("favouriteFilm", person.favouriteFilm.filmName);
    localStorage.setItem("birthYear", person.birthYear);
    localStorage.setItem("inPrimarySchool", person.inPrimarySchool);
    localStorage.setItem("satElevenPlus", person.satElevenPlus);
    localStorage.setItem("passedElevenPlus", person.passedElevenPlus);
    localStorage.setItem("primarySchoolStart", person.primarySchoolStart);
    localStorage.setItem("secondarySchoolStart", person.secondarySchoolStart);
    localStorage.setItem("secondarySchoolType", person.secondarySchoolType);
    localStorage.setItem("inWork", person.inWork);
    localStorage.setItem("job", person.job.jobName);
    localStorage.setItem("readsDailyNewspaper", person.newspaperRead);
    localStorage.setItem("newspaperRead", person.dailyNewspaper);
    localStorage.setItem("money", person.money);
    localStorage.setItem("fathersJob", person.fathersJob.jobName);
    localStorage.setItem("mothersJob", person.mothersJob.jobName);
    localStorage.setItem("spousesGender", person.spousesGender);
    localStorage.setItem("spousesJob", person.spousesJob.jobName);
    localStorage.setItem("movedHouseYear", person.movedHouseYear);
    localStorage.setItem("inventory", person.inventory.join());
    localStorage.setItem("familySize", person.familySize);
    localStorage.setItem("classStatus", person.classStatus);
};

function retrievePerson() {
    person.fullName = localStorage.getItem("fullName");
    person.age = localStorage.getItem("age");
    person.gender = localStorage.getItem("gender");
    person.childrenNumber = localStorage.getItem("childrenNumber");
    person.married = localStorage.getItem("married") == "true" ? true : false;
    person.childrenAges = localStorage.getItem("childrenAges").split(",");
    person.childrenBirthYears = localStorage.getItem("childrenBirthYears").split(",");
    person.radioStations = localStorage.getItem("radioStations").split(",");
    person.favouriteRadioShow = radioShows.filter(obj => obj.showName == localStorage.getItem("favouriteRadioShow"))[0];
    person.filmGenre = localStorage.getItem("filmGenre");
    person.favouriteFilm = films.filter(obj => obj.filmName == localStorage.getItem("favouriteFilm"))[0];
    person.birthYear = localStorage.getItem("birthYear");
    person.inPrimarySchool = localStorage.getItem("inPrimarySchool") == "true" ? true : false;
    person.satElevenPlus = localStorage.getItem("satElevenPlus") == "true" ? true : false;
    person.passedElevenPlus = localStorage.getItem("passedElevenPlus") == "true" ? true : false;
    person.primarySchoolStart = localStorage.getItem("primarySchoolStart");
    person.secondarySchoolStart = localStorage.getItem("secondarySchoolStart");
    person.secondarySchoolType = localStorage.getItem("secondarySchoolType");
    person.inWork = localStorage.getItem("inWork") == "true" ? true : false;
    person.job = jobs.filter(obj => obj.jobName == localStorage.getItem("job"))[0];
    person.income = person.job.income;
    person.readsDailyNewspaper = localStorage.getItem("readsDailyNewspaper") == "true" ? true : false;
    person.newspaperRead = localStorage.getItem("newspaperRead");
    person.money = parseInt(localStorage.getItem("money"));
    person.fathersJob = jobs.filter(obj => obj.jobName == localStorage.getItem("fathersJob"))[0];
    person.MothersJob = jobs.filter(obj => obj.jobName == localStorage.getItem("mothersJob"))[0];
    person.spousesGender = localStorage.getItem("spousesGender");
    person.spousesJob = jobs.filter(obj => obj.jobName == localStorage.getItem("spousesJob"))[0];
    person.movedHouseYear = localStorage.getItem("movedHouseYear");
    person.inventory = localStorage.getItem("inventory").split(",");
    person.familySize = localStorage.getItem("familySize");
    person.classStatus = localStorage.getItem("classStatus");
};

function deletePerson() {
    localStorage.clear();
    navigationNumber = 0;
    changeScreen();
};

function navigationController() {
    document.getElementById("start-btn").remove();
    navigationContainer.appendChild(backButton);
    navigationContainer.appendChild(nextButton);
};

function navigationBack() {
    if (navigationNumber == 4) {
        if (person.age < 19){
            navigationNumber -= 2;
        } else if (person.childrenNumber == 0) {
            navigationNumber--;
        }
    };
    if (navigationNumber > 0){
        navigationNumber--;
    };
    changeScreen();
}

function navigationNext() {
    updatePerson();
    //if the person is 18 or under don't show the marriage and children screen
    if (navigationNumber == 1) {
        if (person.age < 19) {
            navigationNumber += 2;
        }
    //skip the children ages screen if the person has no children        
    } else if (navigationNumber == 2) {
        if (person.childrenNumber == 0) {
            navigationNumber++;
        }
    }    
    navigationNumber++;
    changeScreen();
}

function changeMyJob() {
    person.job = jobSelector(person.gender, person.secondarySchoolType);
    localStorage.setItem("job", person.job.jobName);
    changeScreen();
}

function changeMyNewspaper() {
    dailyNewspaper(person.classStatus);
    localStorage.setItem("newspaperRead", person.newspaperRead);
    changeScreen();
}

function changeMyRadioShow() {
    radioShow();
    localStorage.setItem("favouriteRadioShow", person.favouriteRadioShow.showName);
    changeScreen();
}

function changeMyFilm() {
    favouriteFilm(person.filmGenre);
    localStorage.setItem("favouriteFilm", person.favouriteFilm.filmName);
    changeScreen();
}

function removeQuickView() {
    let quickViewContainer = document.getElementById("quick-view");

    while (quickViewContainer.firstChild) {
        quickViewContainer.removeChild(quickViewContainer.firstChild);
    }  
}

function personBiography() {
    removeQuickView();
    removeMainView();
    endScreen();
}

startButton.addEventListener("click", navigationNext);
backButton.addEventListener("click", navigationBack);
nextButton.addEventListener("click", navigationNext);
changeJobButton.addEventListener("click", changeMyJob);
personBiographyButton.addEventListener("click", personBiography);
changeNewspaperButton.addEventListener("click", changeMyNewspaper);
changeRadioShowButton.addEventListener("click", changeMyRadioShow);
changeFilmButton.addEventListener("click", changeMyFilm);
deletePersonButton.addEventListener("click", deletePerson);

//Below here is site specific actions mimicked for online use!

let myRadioButton = document.getElementById("use-radio-btn");
let audio = new Audio('audio/BRB_Vocal_Test.mp3');
audio.controls = true;
let myBusButton = document.getElementById("bus-btn");
let myKnittingLessonButton = document.getElementById("take-knit-class");

function useRadio() {
    let myRadioText = document.createElement("p");   
    let radioLicenceImg = document.createElement("img");
    radioLicenceImg.setAttribute("src", "imgs/radio_licence.jpg");
    radioLicenceImg.setAttribute("id", "radio-licence-img"); 
    radioLicenceImg.setAttribute("width", "500px");
    removeMainView();    
    if (person.inventory.includes("Radio Licence")) {
        myRadioText.innerHTML = "You are now listening to the radio. You already own a radio licence.";
        mainViewContainer.appendChild(audio);
        audio.play();
    } else if (person.money > 239) {
        person.money -= 240;
        localStorage.money = person.money;
        person.inventory.push("Radio Licence");
        document.getElementById("my-money-label").innerHTML = "Money: " + pennyConverter(person.money);
        myRadioText.innerHTML = "You have spent 20 schillings on a radio licence, and you can now listen to the radio.";
        mainViewContainer.appendChild(audio);
        audio.play();
    } else {
        myRadioText.innerHTML = "I'm sorry, it costs 20 schillings for a radio licence to be able to listen to the radio. You don't have enough money!";
    }
    mainViewContainer.appendChild(myRadioText);
    mainViewContainer.appendChild(radioLicenceImg);
}

function rideBus() {
    //Note the bus ridden is choosen at random at the moment, but would relate to the actual bus ridden!
    let busRidden = buses[Math.floor(Math.random() * buses.length)];
    let busName = document.createElement("h1");
    busName.innerHTML = busRidden.busName;
    let busInformation = document.createElement("p");
    busInformation.innerHTML = busRidden.busInformation;
    let busPrice = document.createElement("p");
    busPrice.innerHTML = "The bus cost you " + busRidden.cost + " pence to ride.";
    person.money -= busRidden.cost;
    localStorage.money = person.money;
    document.getElementById("my-money-label").innerHTML = "Money: " + pennyConverter(person.money);
    let busImg = document.createElement("img");
    busImg.setAttribute("src", busRidden.busImg);
    busImg.setAttribute("width", "500px");
    removeMainView();
    mainViewContainer.appendChild(busName);
    mainViewContainer.appendChild(busInformation);
    mainViewContainer.appendChild(busPrice);
    mainViewContainer.appendChild(busImg);
}

function addKnittingLesson() {
    if (!person.inventory.includes("Knitting Lesson")) {
        person.inventory.push("Knitting Lesson");
        localStorage.setItem("inventory", person.inventory.join());
    }
    changeScreen();
}

function takeKnittingLesson() {
    removeMainView();
    person.money -= 15;
    localStorage.money = person.money;
    document.getElementById("my-money-label").innerHTML = "Money: " + pennyConverter(person.money);
    let knittingClassText = document.createElement("p");
    knittingClassText.innerHTML = "Welcome to the knitting class that you signed up for! This " +
        "lesson costs 15 pence, and the total has been deducted from your money.";
    let knittingClassVideo = document.createElement("video");
    knittingClassVideo.controls = true;
    knittingClassVideo.setAttribute("width", "500px");
    knittingClassVideo.setAttribute("src", "imgs/lessons/knitting_lesson_1.mp4");
    person.inventory.splice(person.inventory.indexOf("Knitting Lesson"), 1);
    localStorage.setItem("inventory", person.inventory.join());
    mainViewContainer.appendChild(knittingClassText);
    mainViewContainer.appendChild(knittingClassVideo);
    knittingLessonOneButton.remove();
}

myRadioButton.addEventListener("click", useRadio);
myBusButton.addEventListener("click", rideBus);
myKnittingLessonButton.addEventListener("click", addKnittingLesson);
knittingLessonOneButton.addEventListener("click", takeKnittingLesson);
