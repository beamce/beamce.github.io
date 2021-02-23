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

/*
class Clothing {
    constructor(clothingName, minAge, maxAge, season, subculture, education, )
}

def clothes(gender, age, season, subculture, grammar_school, working):
    
    your_headwear = None
    your_neckwear = None
    your_top = None
    your_knitwear = None
    your_jacket = None
    your_coat = None
    your_trousers = None
    your_accessories = None
    your_footwear = None
    your_blouse = None
    your_dress = None
        
    # Clothing choices for males
    if gender[0].lower() == 'm':
        if age < 21 and subculture != None:
            # The clothing for beatniks
            if subculture == 'beatnik':
                your_headwear = 'black beret'
                your_top = 'black and white long sleeve top'
                your_knitwear = 'black turtle neck jumper'
                your_trousers = random.choice(['peg-leg style trousers', 'jeans'])
                your_coat = random.choice(['duffle coat', 'sheepskin coat with shearling collar', 'mackintosh'])
                if season == 'summer':
                    your_accessories = 'thick rimmed black sunglasses'
                else:
                    your_accessories = 'thick rimmed black glasses'
                your_footwear = random.choice(['lace-up brogues', 'loafers'])
                
            # The clothing for teddy boys
            elif subculture == 'teddy':
                your_neckwear = random.choice(['bootlace tie', 'cravat', 'skinny tie'])
                your_top = 'colourful high necked loose collared shirt'
                your_knitwear = 'waistcoat'
                your_jacket = 'longline drape jacket with velvet rim collar and pocket flaps'
                your_trousers = random.choice(['black drainpipe trousers', 'grey drainpipe trousers', 'pinstripe drainpipe trousers'])
                your_accessories = 'pocket watch'
                your_footwear = random.choice(['oxford brogues', 'crepe soled beetle crushers'])
                
        elif age < 51:
            if not grammar_school:
                your_headwear = random.choice(['flatcap', 'trilby'])
                your_neckwear = random.choice(['printed silk tie', 'printed cotton tie', 'knitted tie'])
                your_top = 'cotton shirt'
                your_knitwear = random.choice(['long sleeve jumper', 'sleeveless cable v-neck pullover'])
                your_jacket = random.choice(['tweed wool suiting jacket', 'gabardine short waisted jacket'])
                your_trousers = random.choice(['high waisted pleated wide trousers', 'high waisted peg leg trousers'])
                your_coat = random.choice(['mackintosh', 'duffel coat', 'tweed military style coat'])
                your_accessories = random.choice(['belt', 'braces'])
                your_footwear = 'lace-up brogues'
                
            else:
                your_headwear = random.choice(['fedora', 'trilby', 'porkpie hat'])
                your_neckwear = 'printed silk tie'
                your_top = 'cotton shirt'
                your_knitwear = 'waistcoat'
                your_jacket = random.choice(['plain suit', 'pinstripe suit'])
                your_trousers = random.choice(['high waisted pleated wide trousers', 'high waisted peg leg trousers'])
                your_coat = random.choice(['mackintosh', 'gabardine'])
                your_accessories = random.choice(['belt', 'braces'])
                your_footwear = 'lace-up brogues'
                
        elif age >= 51:
            if not grammar_school:
                your_headwear = random.choice(['flatcap', 'trilby', 'fedora'])
                your_neckwear = random.choice(['printed silk tie', 'printed cotton tie', 'knitted tie'])
                your_top = random.choice(['collarless cotton shirt', 'spread collar cotton shirt'])
                your_knitwear = 'sleeveless cable v-neck pullover'
                your_jacket = 'de-mob suit style jacket, single breasted'
                your_trousers = 'high waisted flannel trousers'
                your_coat = random.choice(['mackintosh', 'wool military style coat', 'tweed military style coat'])
                your_accessories = random.choice(['belt', 'braces'])
                your_footwear = 'lace-up brogues'
                
            else:
                your_headwear = random.choice(['flatcap', 'trilby', 'fedora'])
                your_neckwear = random.choice(['printed silk tie', 'printed cotton tie'])
                your_top = 'spread collar cotton shirt'
                your_knitwear = 'waistcoat'
                your_jacket = 'grey de-mob pinstripe suit style jacket, double breasted'
                your_trousers = 'grey de-mob pinstripe suit style jacket'
                your_coat = 'mackintosh'
                your_accessories = random.choice(['belt', 'braces'])
                your_footwear = 'lace-up brogues'
                
    else:
        
        wearing_dress = random.choice([True, False])
        
        if age < 21:
            if subculture == 'teddy':
                your_neckwear = 'printed_scarf'
                your_blouse = 'shirt style blouse with spread collar, tied at waist'
                your_knitwear = 'plain knit short sleeve crew neck jumper'
                your_jacket = 'formal jacket'
                your_trousers = random.choice(['plain peg leg trousers', 'checked peg leg trousers', 'cropped jeans', 'pencil skirt'])
                your_coat = 'shortened swing coat with velvet detailing'
                your_accessories = 'short silk ribbon bow tie and cameo brooch'
                your_footwear = random.choice(['loafers', 'low heel rounded toe court shoes'])
            
            elif subculture == 'beatnik':
                your_headwear = 'black beret'
                your_neckwear = random.choice(['long drop necklace', 'black chiffon neckerchief'])
                your_blouse = 'shirt style blouse with spread collar, tied at waist'
                your_knitwear = 'black turtleneck jumper'
                your_trousers = random.choice(['cropped \'pedal-pusher\' trousers with belt', 'jeans', 'circle skirt'])
                your_coat = random.choice(['duffel coat', 'sheepskin coat', 'mackintosh'])
                if season == 'summer':
                    your_accessories = 'dark framed sunglasses'
                else:
                    your_accessories = 'dark framed glasses'
                your_footwear = random.choice(['flat black loafers', 'flat black pumps'])
                
            else:
                your_headwear = 'headscarf'
                your_neckwear = random.choice(['pearl necklace', 'chiffon scarf'])
                if not wearing_dress:
                    your_blouse = random.choice(['cotton cream fitted blouse with ragan sleeves', 'cotton white fitted blouse with ragan sleeves'])
                    your_knitwear = random.choice(['shortwaisted knitted cardigan', 'shortwaisted knitted jumper', 'knitted bolero'])
                    your_trousers = random.choice(['cotton circle skirt', 'printed cotton circle skirt', 'pencil skirt'])
                else:
                    your_dress = 'printed cotton shirt dress style with a pencil skirt and matching belt'
                your_coat = 'h-line swing coat'
                your_accessories = 'cotton petticoat and brooch'
                your_footwear = random.choice(['flat pumps', 'low heel court shoes'])
                
        elif age < 51:
            if not working:
                your_headwear = 'small flat hat'
                your_neckwear = 'pearl necklace'
                if not wearing_dress:
                    your_blouse = random.choice(['cotton white fitted short sleeved blouse', 'cotton white fitted blouse with ragan sleeves'])
                    your_knitwear = random.choice(['hand knitted cropped cardigan', 'hand knitted cropped jumper', 'twinset'])
                    your_trousers = random.choice(['pencil skirt', 'half circle suit skirt', 'printed full circle skirt', 'printed half circle skirt'])
                    your_jacket = 'fit and flare suit jacket'
                else:
                    your_dress = random.choice(['plain day dress', 'printed day dress', 'plain tea dress', 'printed tea dress'])
                your_coat = random.choice(['h-line swing coat', 'fit and flare coat'])
                your_accessories = 'handbag, gloves, brooch, belt, deep tan stockings and apron'
                your_footwear = random.choice(['low wedge sandals', 'low heel court shoes'])
                
            else:
                your_headwear = 'small flat hat'
                your_neckwear = 'pearl necklace'
                if not wearing_dress:
                    your_blouse = 'smart plain blouse fitted at waist'
                    your_knitwear = random.choice(['hand knitted cropped cardigan', 'twinset'])
                    your_trousers = random.choice(['pencil skirt', 'half circle suit skirt'])
                    your_jacket = 'fit and flare suit jacket'
                else:
                    your_dress = 'wiggle dress with pencil skirt'
                your_coat = random.choice(['h-line swing coat', 'fit and flare coat', 'h-line swing coat with detachable fur collar', 'fit and flare coat with detachable collar'])
                your_accessories = 'handbag, gloves, brooch, belt and deep tan stockings'
                your_footwear = 'low heel court shoes'
                
        elif age >= 51:
            your_headwear = 'small hat'
            your_neckwear = 'pearl necklace'
            if not wearing_dress:
                your_blouse = 'loose fitting formal blouse'
                your_knitwear = 'hand knitted cardigan'
                if season == 'summer':
                    your_trousers = 'half circle skirt'
                else:
                    your_trousers = 'kilt'
                your_jacket = 'hip length fitted suit jacket'
            else:
                your_dress = random.choice(['plain tea dress', 'plain shirt dress', 'paterned tea dress', 'patterned shirt dress'])
            your_coat = random.choice(['woolen h-line swing coat', 'tweed h-line swing coat'])
            your_accessories = 'handbag, gloves, stockings'
            your_footwear = random.choice(['lace up flat shoes', 'low heel court shoes'])
            
            
    all_clothes = [your_headwear, your_neckwear, your_blouse, your_top, your_knitwear,  your_jacket, your_dress, your_trousers, your_coat, your_accessories]
    your_clothes = []
    
    for clothes in all_clothes:
        if clothes != None:
            your_clothes.append(clothes)
  
    return ', '.join(your_clothes) + f' and {your_footwear}.'*/