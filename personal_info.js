function createPersonalInfoScreen() {
    let nameContainer = document.createElement("div");
    nameContainer.setAttribute("id", "name-container");
    let nameLabel = document.createElement("p").appendChild(document.createTextNode("Name: "));
    let nameInput = document.createElement("input");
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);
    nameInput.setAttribute("id", "name");
    let ageContainer = document.createElement("div");
    let ageLabel = document.createElement("p").appendChild(document.createTextNode("Age: "));
    let ageInput = document.createElement("input");
    ageContainer.setAttribute("id", "age-container");
    ageInput.setAttribute("id", "age-input");
    ageInput.type = "number";
    ageInput.min = "1";
    ageInput.max = "100";
    ageInput.setAttribute("size", 2);
    ageContainer.appendChild(ageLabel);
    ageContainer.appendChild(ageInput); 
    let genderContainer = document.createElement("div");
    genderContainer.setAttribute("id", "gender-container");
    let maleRadioLabel = document.createElement("p").appendChild(document.createTextNode("Male "));
    let maleRadio = document.createElement("input");
    maleRadio.setAttribute("id", "male");
    maleRadio.setAttribute("type", "radio");
    maleRadio.setAttribute("name", "gender");
    maleRadio.checked = true;
    let femaleRadioLabel = document.createElement("p").appendChild(document.createTextNode("Female "));
    let femaleRadio = document.createElement("input");
    femaleRadio.setAttribute("id", "female");
    femaleRadio.setAttribute("type", "radio");
    femaleRadio.setAttribute("name", "gender");
    genderContainer.appendChild(maleRadioLabel);
    genderContainer.appendChild(maleRadio);
    genderContainer.appendChild(femaleRadioLabel);
    genderContainer.appendChild(femaleRadio);

    formContainer.appendChild(nameContainer);
    formContainer.appendChild(ageContainer);
    formContainer.appendChild(genderContainer);

    navigationOn = 1;
    navigationController();

}

function getPersonalInfo(name, birthYear, classStatus) {
    personalInfoStr = "";
    personalInfoStr += "<p>Your name is " + person.fullName + ". You were born in " + person.birthYear + ".</p>";
    if (person.classStatus == "Working Class") {
        personalInfoStr += "<p>You were born into a working class family from the North East of England.</p>";
    } else {
        personalInfoStr += "<p>You were born into a middle class family from the North East of England.</p>";
    }
    return personalInfoStr;
};