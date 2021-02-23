const formContainer = document.getElementById("form-container");
const navigationContainer = document.getElementById("navigation-container");
let navigationNumber = 0;

let startButton = document.querySelector("#start-btn");
let backButton = document.createElement("button");
backButton.textContent = "Back";
let nextButton = document.createElement("button");
nextButton.textContent = "Next";

let screens = [start, createPersonalInfoScreen, createFamilyInfoScreen, createChildAgesScreen, radioScreen, filmScreen, endScreen];

function changeScreen() {

    while (formContainer.firstChild) {
        formContainer.removeChild(formContainer.firstChild);
    };
    screens[navigationNumber]();
}

function endScreen() {
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
    myMoneyLabel.appendChild(document.createTextNode("Money: " + pennyConverter(person.job.income)));
    let infoLabel = document.createElement("h1");
    infoLabel.innerHTML = "Biography";
    let personalInfo = document.createElement("div");
    personalInfo.innerHTML = getPersonalInfo(person.fullName, person.birthYear, person.classStatus) + 
                            getEducationInfo(person.age, person.birthYear, person.inPrimarySchool, person.satElevenPlus, person.passedElevenPlus, person.primarySchoolStart, person.secondarySchoolStart, person.secondarySchoolType) +
                            getFamilyInfo(person.familySize, person.married, person.childrenNumber, person.movedHouseYear, person.birthYear, person.childrenBirthYears) +
                            getNewspaperInfo(person.readsDailyNewspaper, person.newspaperRead) +
                            getRadioInfo(person.radioStations, person.favouriteRadioShow) +
                            getCinemaInfo(person.favouriteFilm, person.filmGenre);
    formContainer.appendChild(endScreenContainer);
    endScreenContainer.appendChild(quickView);
    endScreenContainer.appendChild(mainView);
    quickView.appendChild(myNameLabel);
    quickView.appendChild(myAgeLabel);
    quickView.appendChild(myMoneyLabel);
    mainView.appendChild(infoLabel);
    mainView.appendChild(personalInfo);
}

function start() {
    let startTitle = document.createElement("h1").appendChild(document.createTextNode("Who Am I?"));
    let paraOne = document.createElement("p").appendChild(document.createTextNode("Ever wondered what your life would be like if you were in the 1950s?"));
    let paraTwo = document.createElement("p").appendChild(document.createTextNode("Press the button to find out!"));
    formContainer.appendChild(startTitle);
    formContainer.appendChild(paraOne);
    formContainer.appendChild(paraTwo);
}

function updatePerson() {
    if (navigationNumber == 1) {
        //update the persons name and age
        person.fullName = document.getElementById("name").value;
        person.age = document.getElementById("age").value;

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
        jobSelector(person.gender, person.secondarySchoolType);
    } else if (navigationNumber == 2) {
        person.childrenNumber = document.getElementById("children-number").value;
        //check if the person is married
        if (document.getElementById("married-check").checked) {
            person.married = true;
        }
        spouse(person.married);
    } else if (navigationNumber == 3) {
        let childAges = document.getElementsByClassName("child-ages");
        let agesList = [];
        for (i = 0; i < childAges.length; i++) {
            agesList.push(childAges[i].value);
        }
        agesList.sort(function(a, b){return b-a});
        person.childrenAges = agesList;
        childrenBirthYears(person.childrenAges);
        person.familySize = familySize(person.age, person.childrenNumber, person.married);
        parents(person.age);
        movingYear(person.birthYear, person.childrenBirthYears);
    } else if (navigationNumber == 4) {
        let radioStations = document.getElementsByName("radio-check");
        let checkedStations = [];
        for (i = 0; i < radioStations.length; i++) {
            if (radioStations[i].checked) {
                checkedStations.push(radioStations[i].value);
            }
        person.radioStations = checkedStations;
        assignRadioStation(person.age, person.radioStations);
        //radioShow(person.radioStations, radioShows);
        }
    } else if (navigationNumber == 5) {
        let filmGenres = document.getElementsByName("film-genre");
        for (i = 0; i < filmGenres.length; i++) {
            if (filmGenres[i].checked) {
                person.filmGenre = filmGenres[i].value;
            }
        }
        favouriteFilm(person.filmGenre, films);
    }
};

function navigationController() {
    document.getElementById("start-btn").remove();
    navigationContainer.appendChild(backButton);
    navigationContainer.appendChild(nextButton);
}

function navigationBack() {
    console.log("back");
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

startButton.addEventListener("click", navigationNext);
backButton.addEventListener("click", navigationBack);
nextButton.addEventListener("click", navigationNext)