class achievement {
    constructor(achievementName, achievementText, completed = false) {
        this.achievementName = achievementName;
        this.achivementText = achievementText;
        this.completed = completed;
    }
}

let achievements = [new achievement("The Golden Age", "Use a radio station on your visit to Beamish"),
                    new achievement("Well Read", "Change the newspaper you were assigned"),
                    new achievement("Evening Class", "Take a class you signed up for"),
                    new achievement("The New Look", "Get your hair styled in the hairdressers"),
                    new achievement("Sunset Boulevard", "Visit the Cinema")
                    ];

function achievementSorter(achievementsCompleted) {
    for (i = 0; i < achievements.length; i++) {
        if (achievementsCompleted.includes(achievements[i].achievementName)) {
            achievements[i].completed = true;
        }
    }
}

function achievementInfo() {
    let achievementSort = achievements.sort((a, b) => (a.completed > b.completed) ? -1 : 1 );
    
}