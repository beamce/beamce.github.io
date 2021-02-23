let elevenPlusYear = 1944;

//You are in primary school if you are between the ages of 4 and 12
function inPrimarySchool() {
    if (person.age > 4 && person.age < 12) {
        person.inPrimarySchool = true;
    }
};

function satElevenPlus() {
    if (person.birthYear + 11 > elevenPlusYear - 1 && !person.inPrimarySchool) {
        person.satElevenPlus = true;
    }
};

function elevenPlusResult() {
    if (person.satElevenPlus) {
        let roll = 0;
        if (person.classStatus == "Working Class") {
            roll = Math.floor(Math.random() * 6);
            //as passedElevenPlus initialises to false, we only care if the person passes
            if (roll == 5) {
                person.passedElevenPlus = true;
            }
        //if people are not working class they are middle class in this model
        } else {
            roll = Math.floor(Math.random() * 2);
            //as passedElevenPlus initialised to false, we only care if the person passes
            if (roll == 1) {
                self.passedElevenPlus = true;
            }
        }
    }
};

function secondaryEducation() {
    //Note: The education system changes in 1944, this part deals with the post 1944 system
    let roll = 0;
    if (person.satElevenPlus) {
        //if you didn't pass the 11+ you would have gone to a secondary modern school
        if (!person.passedElevenPlus) {
            person.secondarySchoolType = "Secondary Modern";
        //for people who passed the 11+, not all those who did went on to a grammar school for various reasons
        } else if (person.classStatus == "Working Class") {
            roll = Math.floor(Math.random() * 8);
            if (roll < 7) {
                person.secondarySchoolType = "Grammar";
            } else {
                person.secondarySchoolType = "Secondary Modern";
            }
        //this should account for all middle class people who passed the 11+ by virtue of elimination in the above statements
        } else {
            person.secondarySchoolType = "Grammar";
        }
    //Note: this section deals with the pre 1944 system, where you didn't sit an 11+
    } else {
        if (person.classStatus == "Working Class") {
            roll = Math.floor(Math.random() * 15);
            if (roll < 15) {
                person.secondarySchoolType = "Secondary";
            } else {
                person.secondarySchoolType = "Grammar";
            }
        } else {
            roll = Math.floor(Math.random() * 2);
            if (roll < 1) {
                person.secondarySchoolType = "Secondary";
            } else {
                person.secondarySchoolType = "Grammar";
            }
        }
    }
};

function getEducationInfo(age, birthYear, inPrimarySchool, satElevenPlus, passedElevenPlus, primarySchoolStart, secondarySchoolStart, secondarySchoolType) {
    let educationInfoStr = "";
    let elevenPlusYear = birthYear + 11;
    let roll = 0;
    
    if (inPrimarySchool) {
        educationInfoStr += "<p>You are currently enrolled in the local Primary School. You go to school every Monday to Friday. You started at the school in " + primarySchoolStart + ". Luckily, due to the 1946 School Milk act you get 1/3 of a pint of milk free when you are in school, something which your parents would not have had.</p>";
    } else if (age < 16) {
        educationInfoStr += "<p>You started Primary School in " + primarySchoolStart + " at the age of 5. ";
        educationInfoStr += "You are currently enrolled in a local " + secondarySchoolType + ". You started this school in " + secondarySchoolStart + ". "
        if (passedElevenPlus) {
            if (secondarySchoolType == "Secondary Modern") {
                educationInfoStr += "Although you passed your 11+ when you took it in " + elevenPlusYear + ", your parents ";
                roll = Math.floor(Math.random() * 2);
                if (roll == 1) {
                    educationInfoStr += "couldn't afford for you to attend Grammar School.</p>";
                } else {
                    educationInfoStr += "felt that you would prefer to go to a Secondary Modern School along with most of your friends.</p>"
                }
            } else {
                educationInfoStr += "You passed your 11+ in " + elevenPlusYear + " and although it was more expensive, your parents had no hesitation in sending you to your current school.</p>";
            }
        }
    } else if (satElevenPlus) {
        educationInfoStr += "<p>You started Primary School in " + primarySchoolStart + " at the age of 5. In " + elevenPlusYear + " you took the 11+ and ";
        if (passedElevenPlus && secondarySchoolType == "Grammar") {
            educationInfoStr += "passed. You went on to a Grammar School which you stayed at until you were 15.</p>";
        } else if (passedElevenPlus && secondarySchoolType == "Secondary Modern") {
            educationInfoStr += "passed. However, your parents "
            roll = Math.floor(Math.random() * 2);
            if (roll == 1) {
                educationInfoStr += "couldn't afford for you to attend Grammar School, so you went to a Secondary Modern School instead, which you stayed at until you were 15.</p>";
            } else {
                educationInfoStr += "felt that you would prefer to go to a Secondary Modern School along with most of your friends. You stayed at this school until you were 15.</p>"
            }
        } else {
            educationInfoStr += "failed. You went on to attend a Secondary Modern School, which you left at the age of 15.</p>"
        }
    } else {
        educationInfoStr += "<p>You started Primary School in " + primarySchoolStart + " at the age of 5. In " + secondarySchoolStart + " you started at a " + secondarySchoolType + " school. You left secondary education at the age of 14 to start working full time.</p>";
    }
    return educationInfoStr;
};