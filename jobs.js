class Job {
    constructor(jobName, industry, company, gender, education, income, percentageChance) {
        this.jobName = jobName;
        this.industry = industry;
        this.company = company;
        this.gender = gender;
        this.education = education;
        this.income = income;
        this.percentageChance = percentageChance;
    }
};

//Note, gender and schooling should be arrays even if they only contain one entry, gender should be male then female, schooling should be secondary, secondary modern then grammar
let jobs = [
    new Job("Miner", "Mining", "National Coal Board", ["Male"], ["Secondary", "Secondary Modern"], 3000, 6),
    new Job("Shipbuilder", "Shipyard", "Vickers", ["Male"], ["Secondary", "Secondary Modern"], 2500, 3),
    new Job("Factory Worker", "Manufacturing", "Wilsons", ["Male", "Female"], ["Secondary Modern"], 2000, 3),
    new Job("Builder", "Construction", "David Building Co", ["Male"], ["Secondary Modern"], 2250, 1),
    new Job("Plumber", "Construction", "Pimlico", ["Male"], ["Secondary Modern"], 2000, 1),
    new Job("Joiner", "Construction", "Jimmys Joints", ["Male"], ["Secondary Modern"], 2250, 1),
    new Job("Steelworker", "Steelworking", "Consett Steel Works", ["Male"], ["Secondary", "Secondary Modern"], 3000, 3),
    new Job("Journalist", "Media", "Sunderland Daily Echo", ["Male", "Female"], ["Grammar"], 2000, 1),
    new Job("Teacher", "Education", "Sunderland Secondary Mondern", ["Male", "Female"], ["Grammar"], 2500, 1),
    new Job("Scientist", "Sciences", "ICI", ["Male", "Female"], ["Grammar"], 2205, 1),
    new Job("Seamstress", "Fashion", "Marys", ["Female"], ["Secondary Modern"], 2040, 1),
    new Job("Shop Assistant", "Retail", "Binns", ["Female"], ["Secondary Modern"], 3000, 1),
    new Job("Secretary", "Something", "Somewhere", ["Female"], ["Secondary", "Secondary Modern"], 2300, 1),
    new Job("Typist", "Somthing", "Somewhere", ["Female"], ["Secondary Modern"], 4500, 1),
    new Job("Hairdresser", "Fashion", "Bettys", ["Female"], ["Secondary Modern"], 2000, 1),
    new Job("Cleaner", "Sanitation", "Sunderland Secondary School", ["Female"], ["Secondary"], 2300, 2),
    new Job("Housewive", "Family", "Self", ["Secondary", "Secondary Modern", "Grammar"], 0, 0)
];

function working(age, gender) {
    if (age < 16) {
        person.inWork = false;
    } else if (age > 59 && gender == "Female") {
        person.inWork = false;
    } else if (age > 67) {
        person.inWork = false;
    } else {
        person.inWork = true;
    }
};

function jobSelector(myGender, myEducation) {
    let genderedJobsList = [];
    let educatedGenderedJobsList = [];
    let possibleJobs = [];
    
    for (i = 0; i < jobs.length - 1; i++) {
        if (jobs[i].gender.includes(myGender)) {
            genderedJobsList.push(jobs[i]);
        }
    }
    for (i = 0; i < genderedJobsList.length; i++) {
        if (genderedJobsList[i].education.includes(myEducation)) {
            educatedGenderedJobsList.push(genderedJobsList[i]);
        }
    }
    for (i = 0; i < educatedGenderedJobsList.length; i++) {
        for (x = 0; x < educatedGenderedJobsList[i].percentageChance; x++) {
            possibleJobs.push(educatedGenderedJobsList[i]);
        }
    }
    return possibleJobs[Math.floor(Math.random() * possibleJobs.length)];
};

function getJobInfo(working, married, job, company, income, spousesJob, spousesIncome) {
    let jobInfoStr = "";

    if (working) {
        jobInfoStr += "<p>You currently work as a " + job + " for " + company + ". Your current wage is " + pennyConverter(income) + " per week.</p>";
    } else {
        jobInfoStr += "<p>You are currently not in work.</p>";
    }
    return jobInfoStr;
};