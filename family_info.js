function createFamilyInfoScreen() {
    let childrenContainer = document.createElement("div");
    childrenContainer.setAttribute("id", "children-container");
    let childrenLabel = document.createElement("p").appendChild(document.createTextNode("How many children do you have? "));
    childrenContainer.appendChild(childrenLabel);
    let childrenNumber = document.createElement("input");
    childrenNumber.setAttribute("id", "children-number");
    childrenNumber.type = "number";
    childrenNumber.min = "0";
    childrenNumber.max = "10";
    childrenNumber.value = 0;
    childrenNumber.setAttribute("size", 2);
    childrenContainer.appendChild(childrenNumber);
    let marriedContainer = document.createElement("div");
    marriedContainer.setAttribute("id", "married-container");
    let marriedLabel = document.createElement("p").appendChild(document.createTextNode("Are you married? "));
    marriedContainer.appendChild(marriedLabel);
    let marriedCheck = document.createElement("input");
    marriedCheck.setAttribute("id", "married-check");
    marriedCheck.setAttribute("type", "checkbox");
    marriedContainer.appendChild(marriedCheck);
    formContainer.appendChild(childrenContainer);
    formContainer.appendChild(marriedContainer);
};

function createChildAgesScreen() {
    let childAgeText = document.createElement("p").appendChild(document.createTextNode("Please enter the ages of your children below:"));
    formContainer.appendChild(childAgeText);
    for (i = 0; i < person.childrenNumber; i++) {
        let childContainer = document.createElement("div");
        childContainer.setAttribute("class", "child-age-container")
        formContainer.appendChild(childContainer);        
        let childNo = numberSuffix[i];
        let childAgeLabel = document.createElement("p").appendChild(document.createTextNode("What age is your " + childNo + " child? "));
        let childAgeInput = document.createElement("input");
        childAgeInput.type = "number";
        childAgeInput.min = "1";
        childAgeInput.max = person.age - 10;
        childAgeInput.setAttribute("size", 2);
        childAgeInput.setAttribute("class", "child-ages");
        childContainer.appendChild(childAgeLabel);
        childContainer.appendChild(childAgeInput);
    }
};

function getFamilyInfo(familySize, married, childrenNumber, movedYear, birthYear, childrenBirthYears) {
    let familyInfoStr = "";
    let partner = person.spousesGender == "Female" ? "Wife":"Husband";

    if (married) {
        if (childrenNumber == 1) {
        familyInfoStr += "<p>You live in a house with your " + partner + " and your child, who was born in " + childrenBirthYears[0] + ".</p>";
        } else if (childrenNumber > 1) {
        familyInfoStr += "<p>You live in a house with your " + partner + " and your " + childrenNumber + " children. Your children were born in " + childrenBirthYears.slice(0, childrenBirthYears.length - 1).join(", ") + " and " + childrenBirthYears[childrenBirthYears.length - 1] + ".</p>";
        }
    } else {
        if (movedYear == birthYear) {
            familyInfoStr += "<p>You still live with your parents in the house you were born in.</p>"
        }
    }
    return familyInfoStr;
};

function childrenBirthYears() {
    for (i = 0; i < person.childrenAges.length; i++) {
        person.childrenBirthYears.push(currentYear - person.childrenAges[i]);
    }
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
            person.mothersJob = jobs.filter(obj => obj.jobName == "Housewife");
        }
    } else {
        person.mothersJob = jobs.filter(obj => obj.jobName == "Housewife");
    }
};

function spouse(married) {
    if (married) {
        if (person.gender == "Male") {
            person.spousesGender = "Female";
        } else {
            person.spousesGender = "Male";
        }
        person.spousesJob = jobSelector(person.spousesGender, person.secondarySchoolType);
    } else {
    //NOTE - This is a terrible solution, but spouses job must have a job or it breaks to save states!
    person.spousesJob = jobSelector("Male", person.secondarySchoolType);
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