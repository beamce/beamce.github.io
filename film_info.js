//Creates the screen for favourite film genre
function filmScreen() {
    console.log("This is the film Screen");
    let animationLabel = document.createElement("p").appendChild(document.createTextNode("Animation"));
    let animationRadio = document.createElement("input");
    animationRadio.setAttribute("type", "radio");
    animationRadio.setAttribute("name", "film-genre");
    animationRadio.setAttribute("value", "animation");
    animationRadio.checked = true;

    let comedyLabel = document.createElement("p").appendChild(document.createTextNode("Comedy"));
    let comedyRadio = document.createElement("input");
    comedyRadio.setAttribute("type", "radio");
    comedyRadio.setAttribute("name", "film-genre");
    comedyRadio.setAttribute("value", "comedy");

    let dramaLabel = document.createElement("p").appendChild(document.createTextNode("Drama"));
    let dramaRadio = document.createElement("input");
    dramaRadio.setAttribute("type", "radio");
    dramaRadio.setAttribute("name", "film-genre");
    dramaRadio.setAttribute("value", "drama");

    let horrorLabel = document.createElement("p").appendChild(document.createTextNode("Horror"));
    let horrorRadio = document.createElement("input");
    horrorRadio.setAttribute("type", "radio");
    horrorRadio.setAttribute("name", "film-genre");
    horrorRadio.setAttribute("value", "horror");

    let musicalLabel = document.createElement("p").appendChild(document.createTextNode("Musical"));
    let musicalRadio = document.createElement("input");
    musicalRadio.setAttribute("type", "radio");
    musicalRadio.setAttribute("name", "film-genre");
    musicalRadio.setAttribute("value", "musical");

    let romanceLabel = document.createElement("p").appendChild(document.createTextNode("Romance"));
    let romanceRadio = document.createElement("input");
    romanceRadio.setAttribute("type", "radio");
    romanceRadio.setAttribute("name", "film-genre");
    romanceRadio.setAttribute("value", "romance");

    let sciFiLabel = document.createElement("p").appendChild(document.createTextNode("Science Fiction"));
    let sciFiRadio = document.createElement("input");
    sciFiRadio.setAttribute("type", "radio");
    sciFiRadio.setAttribute("name", "film-genre");
    sciFiRadio.setAttribute("value", "science fiction");

    let thrillerLabel = document.createElement("p").appendChild(document.createTextNode("Thriller"));
    let thrillerRadio = document.createElement("input");
    thrillerRadio.setAttribute("type", "radio");
    thrillerRadio.setAttribute("name", "film-genre");
    thrillerRadio.setAttribute("value", "thriller");

    let warLabel = document.createElement("p").appendChild(document.createTextNode("War"));
    let warRadio = document.createElement("input");
    warRadio.setAttribute("type", "radio");
    warRadio.setAttribute("name", "film-genre");
    warRadio.setAttribute("value", "war");

    let westernLabel = document.createElement("p").appendChild(document.createTextNode("Western"));
    let westernRadio = document.createElement("input");
    westernRadio.setAttribute("type", "radio");
    westernRadio.setAttribute("name", "film-genre");
    westernRadio.setAttribute("value", "western");

    formContainer.appendChild(animationLabel);
    formContainer.appendChild(animationRadio);
    formContainer.appendChild(comedyLabel);
    formContainer.appendChild(comedyRadio);
    formContainer.appendChild(dramaLabel);
    formContainer.appendChild(dramaRadio);
    formContainer.appendChild(horrorLabel);
    formContainer.appendChild(horrorRadio);
    formContainer.appendChild(musicalLabel);
    formContainer.appendChild(musicalRadio);
    formContainer.appendChild(romanceLabel);
    formContainer.appendChild(romanceRadio);
    formContainer.appendChild(sciFiLabel);
    formContainer.appendChild(sciFiRadio);
    formContainer.appendChild(thrillerLabel);
    formContainer.appendChild(thrillerRadio);
    formContainer.appendChild(warLabel);
    formContainer.appendChild(warRadio);
    formContainer.appendChild(westernLabel);
    formContainer.appendChild(westernRadio);
}

//New film object 
class Film {
    constructor(filmName, genre, code) {
        this.filmName = filmName;
        this.genre = genre;
        this.code = code;
    }
};

//List of films
let films = [
    new Film("House of Wax", "horror", 'tt0045888'),
    new Film("The Rugged O'Riordans", "drama", "tt0041900"),
    new Film("The Robe", "drama", "tt0046247"),
    new Film("Senso", "drama", "tt0047469"),
    new Film("Land of the Pharaohs", "drama", "tt0048283"),
    new Film("The Ten Commandments", "drama", "tt0049833"),
    new Film("Shane", "western", "tt0046303"),
    new Film("Escape from Fort Bravo", "western", "tt0045737"),
    new Film("War Arrow", "western", "tt0046532"),
    new Film("Jubilee Trail", "western", "tt0047137"),
    new Film("The Boy From Oklahoma", "western", "tt0046804"),
    new Film("Riding Shotgun", "western", "tt0047413"),
    new Film("Gun the Man Down", "western", "tt0049286"),
    new Film("Gentlemen Prefer Blondes", "musical", "tt0045810"),
    new Film("Red Garters", "musical", "tt0047400"),
    new Film("Rhapsody", "musical", "tt0047408"),
    new Film("The King and I", "musical", "tt0049408"),
    new Film("South Pacific", "musical", "tt0052225"),
    new Film("Peter Pan", "animation", "tt0046183"),
    new Film("Lady and the Tramp", "animation", "tt0048280"),
    new Film("From Here to Eternity", "romance", "tt0045793"),
    new Film("Titanic", "romance", "tt0046435"),
    new Film("Casablanca", "romance", "tt0034583"),
    new Film("Easy to Look at", "romance", "tt0037665"),
    new Film("The Farmer Takes a Wife", "comedy", "tt0045752"),
    new Film("It's a Dogs Life", "comedy", "tt0048217"),
    new Film("The Seven Year Itch", "comedy", "tt0048605"),
    new Film("The Milkman", "comedy", "tt0042733"),
    new Film("Just My Luck", "comedy", "tt0050580"),
    new Film("Interpol", "thriller", "tt0050841"),
    new Film("Apoointment in Honduras", "thriller", "tt0045512"),
    new Film("Dial M For Murder", "thriller", "tt0046912"),
    new Film("The Man with the Golden Arm", "thriller", "tt0048347"),
    new Film("5 Against the House", "thriller", "tt0048077"),
    new Film("To Catch a Thief", "thriller", "tt0048728"),
    new Film("The Third Man", "thriller", "tt0041959"),
    new Film("Key Largo", "thriller", "tt0040506"),
    new Film("The Beast From 20,000 Fathoms", "science fiction", "tt0045546"),
    new Film("The War of the Worlds", "science fiction", "tt0046534"),
    new Film("Robot Monster", "science fiction", "tt0046248"),
    new Film("Monster From the Ocean Floor", "science fiction", "tt0047244"),
    new Film("Creature from the Black Lagoon", "science fiction", "tt0046876"),
    new Film("Bridge Over the River Kwai", "war", "tt0050212"),
    new Film("The Maltese Falcon", "war", "tt0033870"),
    new Film("Man Hunt", "war", "tt0033873"),
    new Film("Oklahoma", "musical", "tt0048445"),
    new Film("My Friend Flicka", "western", "tt0048887"),
    new Film("Hans Cristian Andersen", "musical", "tt0044685")
];

function favouriteFilm(genre, films) {
    let possibleFilms = [];
    for (i = 0; i < films.length; i++) {
        if (films[i].genre == genre) {
            possibleFilms.push(films[i]);
        }
    }
    person.favouriteFilm = possibleFilms[Math.floor(Math.random() * possibleFilms.length)];
};

function getCinemaInfo(favouriteFilm, favouriteGenre) {
    let cinemaInfoStr = "";

    cinemaInfoStr += "You also enjoy visiting the cinema. Your favourite film is " + favouriteFilm + ", although you are pretty happy to watch any new " + favouriteGenre + " film which comes to your local cinema.</p>";
    return cinemaInfoStr;
};