function createFamilyInfoScreen() {
    console.log("This is the family Info Screen");
    let childrenLabel = document.createElement("p").appendChild(document.createTextNode("How many children do you have? "));
    let childrenNumber = document.createElement("input");
    childrenNumber.setAttribute("id", "children-number");
    childrenNumber.type = "number";
    childrenNumber.min = "0";
    childrenNumber.max = "10";
    childrenNumber.value = 0;
    let marriedLabel = document.createElement("p").appendChild(document.createTextNode("Are you married? "));
    let marriedCheck = document.createElement("input");
    marriedCheck.setAttribute("id", "married-check");
    marriedCheck.setAttribute("type", "checkbox");
    formContainer.appendChild(childrenLabel);
    formContainer.appendChild(childrenNumber);
    formContainer.appendChild(marriedLabel);
    formContainer.appendChild(marriedCheck);
};

function createChildAgesScreen() {
    console.log("This is the child ages screen");
    for (i = 0; i < person.childrenNumber; i++) {
        let childNo = numberSuffix[i];
        let childAgeLabel = document.createElement("p").appendChild(document.createTextNode("What age is your " + childNo + " child? "));
        let childAgeInput = document.createElement("input");
        childAgeInput.type = "number";
        childAgeInput.min = "1";
        childAgeInput.max = person.age - 10;
        childAgeInput.setAttribute("class", "child-ages");
        formContainer.appendChild(childAgeLabel);
        formContainer.appendChild(childAgeInput);
    }
};

function getFamilyInfo(familySize, married, childrenNumber, movedYear, birthYear, childrenBirthYears) {
    let familyInfoStr = "";
    let partner = person.spousesGender == "Male" ? "Wife":"Husband";

    if (married) {
        if (childrenNumber == 1) {
        familyInfoStr += "<p>You live in a house with your " + partner + " and your child, who was born in " + childrenBirthYears[0] + ".</p>";
        } else if (childrenNumber > 1) {
        familyInfoStr += "<p>You live in a house with your " + partner + " and your " + childrenNumber + " children. Your children were born in " + childrenBirthYears.slice(0, childrenBirthYears.length - 1).join(", ") + "and " + childrenBirthYears[childrenBirthYears.length - 1] + ".</p>";
        }
    } else {
        if (movedYear == birthYear) {
            familyInfoStr += "<p>You still live with your parents in the house you were born in.</p>"
        }
    }
    return familyInfoStr;
};

function childrenBirthYears(ages) {
    let years = [];
    for (i = 0; i < years.length; i++) {
        years.push(currentYear - ages[i]);
    }
    person.childrenBirthYears = years;
};

function familySize(age, childrenNumber, married) {
    if (age > 17) {
        if (childrenNumber != "0") {
            if (married) {
                person.familySize += childrenNumber + 1;
            } else {
                person.familySize += childrenNumber;
            }
        } else if (married) {
            person.familySize = 2;
        } else {
            person.familySize = 3;
        }
    }
}

function parents(age) {
    person.fathersJob = jobSelector("Male", "Secondary");

    if (age > 7) {
        roll = Math.floor(Math.random() * 2);
        if (roll == 0) {
            person.mothersJob = jobSelector("Female", "Secondary");
        } else {
            person.mothersJob = ["Housewive", "Family", "Self", ["Secondary", "Grammar"], 0, 1];
        }
    }
};

function spouse(married) {
    if (married) {
        if (person.gender == "Male") {
            person.spousesGender = "Female";
        } else {
            person.spousesGender = "Male";
        }
        person.spousesJob = jobSelector(person.spousesGender, person.secondarySchoolType, jobs);
    }
};

function movingYear(birthYear, childrenBirthYears) {
    //set year moved to birth year, signifies haven't moved and are still in family home
    let yearMoved = birthYear;
    //if there are children, move house sometime between the birth of the first child and the current year
    if (childrenBirthYears != null) {
        yearMoved = childrenBirthYears[0] + Math.floor(Math.random() * (currentYear - childrenBirthYears[0]));
    }
    person.movedHouseYear = yearMoved;
};