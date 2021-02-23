function createPersonalInfoScreen() {
    let nameLabel = document.createElement("p").appendChild(document.createTextNode("Name: "));
    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", "name");
    let ageLabel = document.createElement("p").appendChild(document.createTextNode("Age: "));
    let ageInput = document.createElement("input");
    ageInput.setAttribute("id", "age");
    ageInput.type = "number";
    ageInput.min = "1";
    ageInput.max = "100";    
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

    formContainer.appendChild(nameLabel);
    formContainer.appendChild(nameInput);
    formContainer.appendChild(ageLabel);
    formContainer.appendChild(ageInput);
    formContainer.appendChild(maleRadioLabel);
    formContainer.appendChild(maleRadio);
    formContainer.appendChild(femaleRadioLabel);
    formContainer.appendChild(femaleRadio);

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