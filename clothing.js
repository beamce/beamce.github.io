let season = "Summer";
let subculture = "none";

function currentSeason() {
    let today = new Date();
    let month = today.month;

    if (month < 5 || month > 9) {
        season = "Winter";
    }
};

function clothingSubculture() {
    let roll = Math.floor(Math.random() * 10);
    if (person.age < 21 && person.age > 14) {
        if (roll == 1) {
            subculture = "beatnik";
        } else if (roll == 2) {
            subculture = "teddy";
        }
    }
};

//Note, this class is not currently used but would have been a much better structure for this
/*class Clothing {
    constructor(name, minAge, maxAge, season, subculture, education) {
        this.name = name;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.season = season;
        this.subculture = subculture;
        this.education = education;
    }
}*/

function clothes(gender, age, season, subculture, secondarySchool, working) {    
 
    // Clothing choices for males
    if (gender == "Male") {
        if (age < 21 && subculture != "none") {
            // The clothing for beatniks
            if (subculture == "beatnik") {
                person.headwear = "black beret";
                person.top = "black and white long sleeve top";
                person.knitwear = "black turtle neck jumper";
                person.trousers = ["peg-leg style trousers", "jeans"][Math.floor(Math.random() * 2)];
                person.coat = ["duffle coat", "sheepskin coat with shearling collar", "mackintosh"][Math.floor(Math.random() * 3)];

                if (season == "Summer") {
                    person.accessories = "thick rimmed black sunglasses";
                } else {
                    person.accessories = "thick rimmed black glasses"
                    person.footwear = ["lace-up brogues", "loafers"][Math.floor(Math.random() * 2)];
                }
            } else if (subculture == "teddy") {
                person.neckwear = ["bootlace tie", "cravat", "skinny tie"][Math.floor(Math.random() * 3)];
                person.top = "colourful high necked loose collared shirt";
                person.knitwear = "waistcoat";
                person.jacket = "longline drape jacket with velvet rim collar and pocket flaps";
                person.trousers = ["black drainpipe trousers", "grey drainpipe trousers", "pinstripe drainpipe trousers"][Math.floor(Math.random() * 3)];
                person.accessories = "pocket watch";
                person.footwear = ["oxford brogues", "crepe soled beetle crushers"][Math.floor(Math.random() * 2)];
            }       

        } else if (age < 51) {
            if (secondarySchool != "Grammar") {
                person.headwear = ['flatcap', 'trilby'][Math.floor(Math.random() * 2)];
                person.neckwear = ['printed silk tie', 'printed cotton tie', 'knitted tie'][Math.floor(Math.random() * 3)];
                person.top = 'cotton shirt';
                person.knitwear = ['long sleeve jumper', 'sleeveless cable v-neck pullover'][Math.floor(Math.random() * 2)];
                person.jacket = ['tweed wool suiting jacket', 'gabardine short waisted jacket'][Math.floor(Math.random() * 2)];
                person.trousers = ['high waisted pleated wide trousers', 'high waisted peg leg trousers'][Math.floor(Math.random() * 2)];
                person.coat = ['mackintosh', 'duffel coat', 'tweed military style coat'][Math.floor(Math.random() * 3)];
                person.accessories = ['belt', 'braces'][Math.floor(Math.random() * 2)];
                person.footwear = 'lace-up brogues';
            } else {
                person.headwear = ['fedora', 'trilby', 'porkpie hat'][Math.floor(Math.random() * 3)];
                person.neckwear = 'printed silk tie';
                person.top = 'cotton shirt';
                person.knitwear = 'waistcoat';
                person.jacket = ['plain suit', 'pinstripe suit'][Math.floor(Math.random() * 2)];
                person.trousers = ['high waisted pleated wide trousers', 'high waisted peg leg trousers'][Math.floor(Math.random() * 2)];
                person.coat = ['mackintosh', 'gabardine'][Math.floor(Math.random() * 2)];
                person.accessories = ['belt', 'braces'][Math.floor(Math.random() * 2)];
                person.footwear = 'lace-up brogues';
            }
        } else if (age >= 51) {
            if (secondarySchool != "Grammar") {
                person.headwear = ['flatcap', 'trilby', 'fedora'][Math.floor(Math.random() * 3)];
                person.neckwear = ['printed silk tie', 'printed cotton tie', 'knitted tie'][Math.floor(Math.random() * 2)];
                person.top = ['collarless cotton shirt', 'spread collar cotton shirt'][Math.floor(Math.random() * 2)];
                person.knitwear = 'sleeveless cable v-neck pullover';
                person.jacket = 'de-mob suit style jacket, single breasted';
                person.trousers = 'high waisted flannel trousers';
                person.coat = ['mackintosh', 'wool military style coat', 'tweed military style coat'][Math.floor(Math.random() * 3)];
                person.accessories = ['belt', 'braces'][Math.floor(Math.random() * 2)];
                person.footwear = 'lace-up brogues';
            } else {
                person.headwear = ['flatcap', 'trilby', 'fedora'][Math.floor(Math.random() * 2)];
                person.neckwear = ['printed silk tie', 'printed cotton tie'][Math.floor(Math.random() * 2)];
                person.top = 'spread collar cotton shirt';
                person.knitwear = 'waistcoat';
                person.jacket = 'grey de-mob pinstripe suit style jacket, double breasted';
                person.trousers = 'grey de-mob pinstripe suit style jacket';
                person.coat = 'mackintosh';
                person.accessories = ['belt', 'braces'][Math.floor(Math.random() * 2)];
                person.footwear = 'lace-up brogues';
            }
        }
    } else {
        
        let wearingDress = [true, false][Math.floor(Math.random() * 2)];
        
        if (age < 21) {
            if (subculture == 'teddy') {
                person.neckwear = 'printed_scarf';
                person.blouse = 'shirt style blouse with spread collar, tied at waist';
                person.knitwear = 'plain knit short sleeve crew neck jumper';
                person.jacket = 'formal jacket';
                person.trousers = ['plain peg leg trousers', 'checked peg leg trousers', 'cropped jeans', 'pencil skirt'][Math.floor(Math.random() * 4)];
                person.coat = 'shortened swing coat with velvet detailing';
                person.accessories = 'short silk ribbon bow tie and cameo brooch';
                person.footwear = ['loafers', 'low heel rounded toe court shoes'][Math.floor(Math.random() * 2)];
            } else if (subculture == 'beatnik') {
                person.headwear = 'black beret';
                person.neckwear = ['long drop necklace', 'black chiffon neckerchief'][Math.floor(Math.random() * 2)];
                person.blouse = 'shirt style blouse with spread collar, tied at waist';
                person.knitwear = 'black turtleneck jumper';
                person.trousers = ['cropped \'pedal-pusher\' trousers with belt', 'jeans', 'circle skirt'][Math.floor(Math.random() * 3)]
                person.coat = ['duffel coat', 'sheepskin coat', 'mackintosh'][Math.floor(Math.random() * 3)];
                if (season == 'Summer') {
                    person.accessories = 'dark framed sunglasses';
                } else {
                    person.accessories = 'dark framed glasses';
                }
                person.footwear = ['flat black loafers', 'flat black pumps'][Math.floor(Math.random() * 2)];
            } else {
                person.headwear = 'headscarf';
                person.neckwear = ['pearl necklace', 'chiffon scarf'][Math.floor(Math.random() * 2)];
                if (!wearingDress) {
                    person.blouse = ['cotton cream fitted blouse with ragan sleeves', 'cotton white fitted blouse with ragan sleeves'][Math.floor(Math.random() * 2)];
                    person.knitwear = ['shortwaisted knitted cardigan', 'shortwaisted knitted jumper', 'knitted bolero'][Math.floor(Math.random() * 3)];
                    person.trousers = ['cotton circle skirt', 'printed cotton circle skirt', 'pencil skirt'][Math.floor(Math.random() * 3)];
                } else {
                    person.dress = 'printed cotton shirt dress style with a pencil skirt and matching belt';
                person.coat = 'h-line swing coat';
                person.accessories = 'cotton petticoat and brooch';
                person.footwear = ['flat pumps', 'low heel court shoes'][Math.floor(Math.random() * 2)];
                }
            }
        } else if (age < 51) {
            if (!working) {
                person.headwear = 'small flat hat';
                person.neckwear = 'pearl necklace';
                if (!wearing_dress) {
                    person.blouse = ['cotton white fitted short sleeved blouse', 'cotton white fitted blouse with ragan sleeves'][Math.floor(Math.random() * 2)];
                    person.knitwear = ['hand knitted cropped cardigan', 'hand knitted cropped jumper', 'twinset'][Math.floor(Math.random() * 3)];
                    person.trousers = ['pencil skirt', 'half circle suit skirt', 'printed full circle skirt', 'printed half circle skirt'][Math.floor(Math.random() * 4)];
                    person.jacket = 'fit and flare suit jacket';
                } else {
                    person.dress = ['plain day dress', 'printed day dress', 'plain tea dress', 'printed tea dress'][Math.floor(Math.random() * 4)];
                person.coat = ['h-line swing coat', 'fit and flare coat'][Math.floor(Math.random() * 2)];
                person.accessories = 'handbag, gloves, brooch, belt, deep tan stockings and apron';
                person.footwear = ['low wedge sandals', 'low heel court shoes'][Math.floor(Math.random() * 2)];
                }
            } else {
                person.headwear = 'small flat hat';
                person.neckwear = 'pearl necklace';
                if (!wearing_dress) {
                    person.blouse = 'smart plain blouse fitted at waist';
                    person.knitwear = ['hand knitted cropped cardigan', 'twinset'][Math.floor(Math.random() * 2)];
                    person.trousers = ['pencil skirt', 'half circle suit skirt'][Math.floor(Math.random() * 2)];
                    person.jacket = 'fit and flare suit jacket';
                } else {
                    person.dress = 'wiggle dress with pencil skirt';
                person.coat = ['h-line swing coat', 'fit and flare coat', 'h-line swing coat with detachable fur collar', 'fit and flare coat with detachable collar'][Math.floor(Math.random() * 4)];
                person.accessories = 'handbag, gloves, brooch, belt and deep tan stockings';
                person.footwear = 'low heel court shoes';
                }
            }
        } else if (age >= 51) {
            person.headwear = 'small hat';
            person.neckwear = 'pearl necklace';
            if (!wearing_dress) {
                person.blouse = 'loose fitting formal blouse';
                person.knitwear = 'hand knitted cardigan';
                if (season == 'Summer') {
                    person.trousers = 'half circle skirt';
                } else {
                    person.trousers = 'kilt';
                person.jacket = 'hip length fitted suit jacket';
                }
            } else {
                person.dress = ['plain tea dress', 'plain shirt dress', 'paterned tea dress', 'patterned shirt dress'][Math.floor(Math.random() * 4)];
            person.coat = ['woolen h-line swing coat', 'tweed h-line swing coat'][Math.floor(Math.random() * 2)];
            person.accessories = 'handbag, gloves, stockings';
            person.footwear = ['lace up flat shoes', 'low heel court shoes'][Math.floor(Math.random() * 2)];
            }
        }
    }
}

function getClothingInfo() {

    let allClothes = [person.headwear, person.neckwear, person.blouse, person.top, person.knitwear,  person.jacket, person.dress, person.trousers, person.coat, person.accessories];
    let yourClothes = [];
    
    for (i = 0; i < allClothes.length; i++) {
        if (allClothes[i] != "None") {
            yourClothes.push(allClothes[i]);
        };
    };

    console.log(yourClothes.join(", ") + "and " + person.footwear + ".");
  
    return "You are usually dressed in a " + yourClothes.join(", ") + " and " + person.footwear + ".";
}
