//reads daily newspaper is initialised to false, so we only need trues
function readsDailyNewspaper(age) {
    let roll = 0;
    if (age > 15 && age < 21) {
        roll = Math.floor(Math.random() * 2);
        if (roll == 1) {
            person.readsDailyNewspaper = true;
        }
    } else if (age > 20) {
        roll = Math.floor(Math.random() * 10);
        if (roll < 9) {
            person.readsDailyNewspaper = true;
        }
    }
};

function dailyNewspaper(classStatus) {
    let roll = 0;
    if (classStatus != "Working Class") {
        roll = Math.floor(Math.random() * 3);
        if (roll < 2) {
            person.dailyNewspaper = "Times";
        } else {
            person.dailyNewspaper = "Financial Times";
        }
    } else {
        roll = Math.floor(Math.random() * 98);
        if (roll < 27) {
            person.dailyNewspaper = "Daily Mirror";
        } else if (roll > 26 && roll < 52) {
            person.dailyNewspaper = "Daily Express";
        } else if (roll >51 && roll < 66) {
            person.dailyNewspaper = "Daily Mail";
        } else if (roll > 65 && roll < 73) {
            person.dailyNewspaper = "Daily Telegraph";
        } else if (roll > 72 && roll < 82) {
            person.dailyNewspaper = "Daily Herald";
        } else if (roll == 82) {
            person.dailyNewspaper = "Guardian";
        } else if (roll > 82 && roll < 89) {
            person.dailyNewspaper = "Daily Sketch";
        } else {
            person.dailyNewspaper = "News Chronicle";
        }
    }
};

function getNewspaperInfo(readsNewspaper, newspaper) {
    let newspaperInfo = "";

    if (readsNewspaper) {
        newspaperInfo += "<p>You read The " + newspaper + " everyday to keep up with current events.</p>";
    } else {
        newspaperInfo += "<p>You don't read a daily newspaper.</p>";
    }
    return newspaperInfo;
};