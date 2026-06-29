// Word bank for "Person Do Thing"
// ~1000 targets to clue, across difficulty levels.
// Includes everyday objects, places, concepts, plus famous movies/songs/etc.

const WORD_BANK = [
  // ---- Everyday objects / household ----
  "chair", "table", "spoon", "fork", "knife", "plate", "bowl", "cup", "mug", "glass",
  "bottle", "jar", "box", "bag", "basket", "bucket", "broom", "mop", "sponge", "towel",
  "soap", "brush", "comb", "mirror", "clock", "candle", "lamp", "lightbulb", "battery", "wire",
  "key", "lock", "door", "window", "curtain", "carpet", "rug", "pillow", "blanket", "mattress",
  "bed", "sofa", "couch", "shelf", "drawer", "cabinet", "closet", "hanger", "hook", "nail",
  "screw", "hammer", "wrench", "screwdriver", "drill", "saw", "ladder", "rope", "chain", "tape",
  "glue", "scissors", "stapler", "pen", "pencil", "eraser", "ruler", "marker", "crayon", "paper",
  "notebook", "envelope", "stamp", "folder", "calendar", "magnet", "umbrella", "wallet", "purse", "backpack",
  "suitcase", "fan", "heater", "thermostat", "vacuum", "blender", "toaster", "kettle", "oven", "stove",
  "fridge", "freezer", "microwave", "dishwasher", "sink", "faucet", "toilet", "bathtub", "shower", "razor",

  // ---- Food & drink ----
  "bread", "butter", "cheese", "egg", "milk", "yogurt", "cream", "sugar", "salt", "pepper",
  "flour", "rice", "pasta", "noodle", "soup", "salad", "sandwich", "pizza", "burger", "hotdog",
  "taco", "burrito", "sushi", "dumpling", "pancake", "waffle", "cereal", "oatmeal", "honey", "jam",
  "peanut", "almond", "walnut", "cashew", "popcorn", "chip", "cookie", "cake", "pie", "donut",
  "muffin", "brownie", "candy", "chocolate", "icecream", "pudding", "jelly", "marshmallow", "pretzel", "cracker",
  "apple", "banana", "orange", "grape", "strawberry", "blueberry", "raspberry", "watermelon", "pineapple", "mango",
  "peach", "pear", "plum", "cherry", "lemon", "lime", "coconut", "kiwi", "avocado", "tomato",
  "potato", "carrot", "onion", "garlic", "pepper", "cucumber", "lettuce", "spinach", "broccoli", "corn",
  "mushroom", "pumpkin", "bean", "pea", "celery", "cabbage", "radish", "beet", "ginger", "chili",
  "coffee", "tea", "juice", "soda", "water", "wine", "beer", "smoothie", "lemonade", "milkshake",
  "bakery", "butcher", "buffet", "barbecue", "picnic", "brunch", "dessert", "appetizer", "leftovers", "recipe",

  // ---- Animals ----
  "dog", "cat", "horse", "cow", "pig", "sheep", "goat", "chicken", "duck", "goose",
  "rabbit", "mouse", "rat", "hamster", "squirrel", "fox", "wolf", "bear", "deer", "moose",
  "lion", "tiger", "leopard", "cheetah", "elephant", "giraffe", "zebra", "hippo", "rhino", "monkey",
  "gorilla", "chimpanzee", "kangaroo", "koala", "panda", "sloth", "raccoon", "skunk", "beaver", "otter",
  "bat", "owl", "eagle", "hawk", "falcon", "parrot", "penguin", "flamingo", "peacock", "ostrich",
  "snake", "lizard", "crocodile", "alligator", "turtle", "tortoise", "frog", "toad", "salamander", "chameleon",
  "shark", "whale", "dolphin", "octopus", "squid", "jellyfish", "crab", "lobster", "shrimp", "starfish",
  "fish", "seahorse", "stingray", "eel", "clam", "oyster", "snail", "slug", "worm", "spider",
  "ant", "bee", "wasp", "butterfly", "moth", "ladybug", "beetle", "grasshopper", "cricket", "dragonfly",
  "mosquito", "fly", "cockroach", "scorpion", "centipede", "caterpillar", "firefly", "termite", "flea", "tick",

  // ---- Body & health ----
  "head", "hair", "face", "eye", "ear", "nose", "mouth", "tooth", "tongue", "lip",
  "neck", "shoulder", "arm", "elbow", "wrist", "hand", "finger", "thumb", "chest", "back",
  "stomach", "hip", "leg", "knee", "ankle", "foot", "toe", "heel", "skin", "bone",
  "muscle", "blood", "heart", "lung", "brain", "nerve", "vein", "skeleton", "skull", "rib",
  "doctor", "nurse", "dentist", "surgeon", "hospital", "clinic", "medicine", "pill", "bandage", "vaccine",
  "fever", "cough", "sneeze", "headache", "allergy", "wound", "scar", "bruise", "blister", "wrinkle",

  // ---- Clothing ----
  "shirt", "pants", "jeans", "shorts", "skirt", "dress", "suit", "jacket", "coat", "sweater",
  "hoodie", "scarf", "glove", "mitten", "hat", "cap", "helmet", "sock", "shoe", "boot",
  "sandal", "sneaker", "slipper", "belt", "tie", "button", "zipper", "pocket", "collar", "sleeve",
  "underwear", "pajamas", "swimsuit", "raincoat", "apron", "uniform", "costume", "tuxedo", "gown", "robe",
  "ring", "necklace", "bracelet", "earring", "watch", "sunglasses", "glasses", "crown", "badge", "pin",

  // ---- Places & geography ----
  "city", "town", "village", "country", "continent", "island", "beach", "coast", "desert", "forest",
  "jungle", "mountain", "hill", "valley", "canyon", "cliff", "cave", "volcano", "glacier", "waterfall",
  "river", "lake", "pond", "ocean", "sea", "bay", "swamp", "marsh", "meadow", "field",
  "farm", "ranch", "orchard", "vineyard", "garden", "park", "playground", "zoo", "aquarium", "museum",
  "library", "school", "college", "university", "office", "factory", "warehouse", "store", "shop", "mall",
  "market", "restaurant", "cafe", "hotel", "motel", "airport", "station", "harbor", "port", "bridge",
  "tunnel", "highway", "road", "street", "alley", "sidewalk", "crosswalk", "intersection", "roundabout", "parking",
  "church", "temple", "mosque", "cathedral", "castle", "palace", "tower", "lighthouse", "windmill", "barn",
  "stadium", "arena", "theater", "cinema", "gym", "pool", "spa", "salon", "bank", "post office",
  "equator", "pole", "horizon", "border", "map", "globe", "compass", "latitude", "longitude", "timezone",

  // ---- Nature & weather ----
  "sun", "moon", "star", "planet", "comet", "meteor", "galaxy", "cloud", "sky", "rainbow",
  "rain", "snow", "hail", "sleet", "fog", "mist", "dew", "frost", "ice", "wind",
  "storm", "thunder", "lightning", "tornado", "hurricane", "earthquake", "flood", "drought", "wildfire", "avalanche",
  "tree", "flower", "grass", "leaf", "branch", "root", "seed", "bush", "vine", "moss",
  "rose", "tulip", "daisy", "sunflower", "lily", "orchid", "cactus", "fern", "bamboo", "ivy",
  "oak", "pine", "maple", "palm", "willow", "birch", "redwood", "mushroom", "fungus", "algae",
  "rock", "stone", "pebble", "boulder", "sand", "mud", "clay", "dirt", "dust", "gravel",
  "gold", "silver", "iron", "copper", "diamond", "crystal", "coal", "oil", "lava", "fossil",

  // ---- Transportation ----
  "car", "truck", "bus", "van", "taxi", "motorcycle", "scooter", "bicycle", "tricycle", "skateboard",
  "train", "subway", "tram", "trolley", "boat", "ship", "ferry", "canoe", "kayak", "raft",
  "sailboat", "submarine", "yacht", "airplane", "jet", "helicopter", "rocket", "spaceship", "balloon", "blimp",
  "wagon", "cart", "sled", "wheelchair", "ambulance", "firetruck", "tractor", "bulldozer", "crane", "forklift",
  "wheel", "tire", "engine", "brake", "steering", "seatbelt", "horn", "headlight", "gasoline", "anchor",

  // ---- Jobs & people ----
  "teacher", "student", "scientist", "engineer", "artist", "musician", "singer", "dancer", "actor", "writer",
  "author", "poet", "painter", "sculptor", "photographer", "chef", "waiter", "farmer", "fisherman", "hunter",
  "soldier", "police", "firefighter", "lawyer", "judge", "politician", "president", "king", "queen", "prince",
  "princess", "knight", "pirate", "sailor", "pilot", "astronaut", "explorer", "inventor", "architect", "plumber",
  "electrician", "carpenter", "mechanic", "barber", "tailor", "jeweler", "librarian", "cashier", "clerk", "banker",
  "accountant", "secretary", "manager", "boss", "employee", "customer", "neighbor", "stranger", "friend", "enemy",
  "baby", "child", "kid", "teenager", "adult", "parent", "mother", "father", "sister", "brother",
  "grandmother", "grandfather", "aunt", "uncle", "cousin", "nephew", "niece", "twin", "family", "couple",

  // ---- Sports & activities ----
  "soccer", "football", "basketball", "baseball", "tennis", "golf", "hockey", "volleyball", "rugby", "cricket",
  "boxing", "wrestling", "karate", "judo", "fencing", "archery", "bowling", "billiards", "darts", "chess",
  "swimming", "diving", "surfing", "skiing", "snowboarding", "skating", "cycling", "running", "jogging", "hiking",
  "climbing", "camping", "fishing", "hunting", "sailing", "rowing", "gymnastics", "yoga", "dancing", "juggling",
  "marathon", "olympics", "tournament", "championship", "referee", "coach", "team", "trophy", "medal", "score",
  "ball", "bat", "racket", "net", "goal", "hoop", "puck", "glove", "skate", "helmet",

  // ---- Music & instruments ----
  "guitar", "piano", "violin", "cello", "drum", "flute", "trumpet", "saxophone", "harp", "accordion",
  "harmonica", "tambourine", "xylophone", "banjo", "ukulele", "clarinet", "trombone", "tuba", "organ", "keyboard",
  "song", "melody", "rhythm", "beat", "note", "chord", "lyric", "album", "concert", "orchestra",
  "band", "choir", "opera", "symphony", "jazz", "rock", "pop", "rap", "blues", "reggae",

  // ---- Abstract concepts & emotions ----
  "love", "hate", "fear", "anger", "joy", "sadness", "happiness", "hope", "dream", "nightmare",
  "courage", "patience", "kindness", "honesty", "loyalty", "jealousy", "envy", "greed", "pride", "shame",
  "guilt", "regret", "surprise", "boredom", "curiosity", "confusion", "wisdom", "knowledge", "memory", "imagination",
  "freedom", "justice", "peace", "war", "power", "money", "wealth", "poverty", "luck", "fate",
  "time", "space", "gravity", "energy", "matter", "infinity", "eternity", "silence", "noise", "echo",
  "truth", "lie", "secret", "mystery", "magic", "miracle", "ghost", "spirit", "soul", "heaven",
  "religion", "tradition", "culture", "history", "future", "past", "present", "moment", "century", "decade",

  // ---- Technology & science ----
  "computer", "laptop", "phone", "tablet", "screen", "keyboard", "mouse", "printer", "scanner", "camera",
  "television", "radio", "speaker", "headphone", "microphone", "remote", "charger", "cable", "router", "modem",
  "internet", "website", "email", "password", "software", "app", "game", "robot", "drone", "satellite",
  "telescope", "microscope", "thermometer", "barometer", "calculator", "abacus", "gear", "spring", "pulley", "lever",
  "atom", "molecule", "cell", "gene", "virus", "bacteria", "electron", "magnet", "laser", "circuit",
  "experiment", "formula", "equation", "theory", "gravity", "evolution", "photosynthesis", "ecosystem", "climate", "pollution",

  // ---- Crafts, art, misc objects ----
  "origami", "pottery", "knitting", "sewing", "painting", "drawing", "sculpture", "collage", "mosaic", "embroidery",
  "puzzle", "domino", "dice", "card", "board game", "toy", "doll", "teddy bear", "kite", "yoyo",
  "marble", "balloon", "bubble", "confetti", "ribbon", "bow", "gift", "present", "wrapping", "sticker",

  // ---- Time, money, school ----
  "morning", "noon", "afternoon", "evening", "night", "midnight", "dawn", "dusk", "sunrise", "sunset",
  "monday", "friday", "weekend", "birthday", "holiday", "vacation", "wedding", "funeral", "party", "festival",
  "spring", "summer", "autumn", "winter", "season", "month", "year", "hour", "minute", "second",
  "coin", "dollar", "penny", "credit card", "cash", "budget", "salary", "tax", "tip", "change",
  "homework", "exam", "test", "grade", "diploma", "lecture", "lesson", "chalkboard", "textbook", "backpack",

  // ---- Actions / verbs as targets ----
  "laugh", "cry", "sleep", "dream", "snore", "yawn", "sneeze", "cough", "whistle", "hum",
  "jump", "skip", "crawl", "climb", "swim", "dive", "fly", "fall", "slip", "trip",
  "throw", "catch", "kick", "push", "pull", "lift", "carry", "drop", "build", "break",
  "cook", "bake", "fry", "boil", "chop", "stir", "pour", "mix", "taste", "smell",
  "read", "write", "draw", "paint", "sing", "dance", "act", "juggle", "knit", "sew",
  "whisper", "shout", "argue", "agree", "promise", "lie", "forgive", "celebrate", "vote", "protest",

  // ---- Famous movies ----
  "Titanic", "Avatar", "Frozen", "Jaws", "Inception", "Gladiator", "Casablanca", "Rocky", "Shrek", "Up",
  "The Lion King", "The Godfather", "Star Wars", "Jurassic Park", "Harry Potter", "The Matrix", "Toy Story", "Finding Nemo", "The Avengers", "Spider-Man",
  "Batman", "Superman", "Iron Man", "Black Panther", "Wonder Woman", "The Wizard of Oz", "Pulp Fiction", "Forrest Gump", "The Lord of the Rings", "Pirates of the Caribbean",
  "Back to the Future", "E.T.", "Ghostbusters", "Indiana Jones", "Terminator", "Alien", "King Kong", "Godzilla", "Dumbo", "Bambi",
  "Cinderella", "Snow White", "Sleeping Beauty", "Beauty and the Beast", "Aladdin", "Mulan", "Moana", "Tarzan", "Pocahontas", "The Little Mermaid",

  // ---- Famous songs ----
  "Happy Birthday", "Imagine", "Yesterday", "Hey Jude", "Let It Be", "Bohemian Rhapsody", "Thriller", "Billie Jean", "Like a Rolling Stone", "Hallelujah",
  "Jingle Bells", "Silent Night", "Twinkle Twinkle Little Star", "Old MacDonald", "Row Your Boat", "Despacito", "Shape of You", "Rolling in the Deep", "Single Ladies", "Sweet Caroline",
  "Smells Like Teen Spirit", "Stairway to Heaven", "Hotel California", "Sweet Child O' Mine", "We Will Rock You", "Dancing Queen", "Uptown Funk", "Bad Romance", "Call Me Maybe", "Old Town Road",

  // ---- Famous landmarks & places ----
  "Eiffel Tower", "Statue of Liberty", "Great Wall of China", "Pyramids", "Mount Everest", "Grand Canyon", "Niagara Falls", "Big Ben", "Taj Mahal", "Colosseum",
  "Leaning Tower of Pisa", "Sphinx", "Stonehenge", "Golden Gate Bridge", "Hollywood", "Times Square", "Mount Rushmore", "Sydney Opera House", "Empire State Building", "Eiffel",

  // ---- Holidays & events ----
  "Christmas", "Halloween", "Thanksgiving", "Easter", "New Year", "Valentine's Day", "April Fools", "Independence Day", "Mother's Day", "Father's Day",

  // ---- More everyday & tricky concepts ----
  "shadow", "reflection", "footprint", "fingerprint", "wrinkle", "knot", "spiral", "circle", "square", "triangle",
  "rectangle", "diamond", "arrow", "cross", "heart", "star", "crescent", "zigzag", "stripe", "polkadot",
  "rainbow", "spectrum", "shade", "tint", "color", "black", "white", "gray", "brown", "beige",
  "alphabet", "number", "word", "sentence", "paragraph", "story", "poem", "joke", "riddle", "rhyme",
  "language", "accent", "dialect", "translation", "signature", "handwriting", "doodle", "scribble", "graffiti", "logo",
  "shadow puppet", "snowman", "sandcastle", "scarecrow", "treehouse", "campfire", "bonfire", "fireworks", "parade", "carnival",
  "circus", "magician", "clown", "acrobat", "juggler", "ringmaster", "fortune teller", "ventriloquist", "mime", "puppet",

  // ---- Tools & work objects ----
  "shovel", "rake", "hoe", "axe", "chisel", "pliers", "clamp", "vice", "file", "sandpaper",
  "wheelbarrow", "toolbox", "workbench", "scaffold", "blueprint", "measuring tape", "level", "compass", "protractor", "stencil",

  // ---- Misc tricky / mixed-difficulty ----
  "yawn", "hiccup", "goosebumps", "sneeze", "blink", "wink", "shrug", "nod", "wave", "clap",
  "tickle", "itch", "scratch", "stretch", "balance", "tiptoe", "somersault", "cartwheel", "handstand", "piggyback",
  "hopscotch", "tag", "hide and seek", "tug of war", "leapfrog", "musical chairs", "charades", "karaoke", "trivia", "bingo",
  "lullaby", "bedtime story", "tooth fairy", "imaginary friend", "daydream", "deja vu", "goosebump", "brain freeze", "writer's block", "cabin fever",
  "rush hour", "traffic jam", "detour", "shortcut", "pit stop", "road trip", "layover", "jet lag", "souvenir", "passport",
  "telescope", "kaleidoscope", "periscope", "stethoscope", "metronome", "hourglass", "sundial", "weathervane", "windchime", "wind turbine",
  "honeycomb", "spiderweb", "cocoon", "beehive", "anthill", "birdnest", "burrow", "den", "hive", "nest",
  "whirlpool", "tide", "wave", "current", "ripple", "splash", "puddle", "raindrop", "snowflake", "icicle",
  "mirage", "oasis", "quicksand", "dune", "tundra", "savanna", "rainforest", "wetland", "coral reef", "iceberg",
  "compass rose", "treasure map", "message in a bottle", "shipwreck", "lighthouse", "anchor", "harbor", "pier", "dock", "buoy"
];

// Expose for the app
if (typeof module !== "undefined" && module.exports) {
  module.exports = WORD_BANK;
}
