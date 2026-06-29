// Word bank for "Person Do Thing"
// ~1850 targets to clue, across difficulty levels. Favors distinctive,
// clue-able concepts (function/story/unique trait) over arbitrary members
// of a big category. Includes everyday objects, places, concepts, plus
// famous movies, songs, people, and landmarks.

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
  "peanut", "popcorn", "chip", "cookie", "cake", "pie", "donut",
  "muffin", "brownie", "candy", "chocolate", "icecream", "pudding", "jelly", "marshmallow", "pretzel", "cracker",
  "apple", "banana", "orange", "grape", "strawberry", "watermelon", "pineapple", "mango",
  "peach", "pear", "plum", "cherry", "lemon", "lime", "coconut", "kiwi", "avocado", "tomato",
  "potato", "carrot", "onion", "garlic", "pepper", "cucumber", "lettuce", "spinach", "broccoli", "corn",
  "mushroom", "pumpkin", "bean", "pea", "celery", "cabbage", "radish", "beet", "ginger", "chili",
  "coffee", "tea", "juice", "soda", "water", "wine", "beer", "smoothie", "lemonade", "milkshake",
  "bakery", "butcher", "buffet", "barbecue", "picnic", "brunch", "dessert", "appetizer", "leftovers", "recipe",

  // ---- Animals ----
  "dog", "cat", "horse", "cow", "pig", "sheep", "goat", "chicken", "duck", "goose",
  "rabbit", "mouse", "rat", "hamster", "squirrel", "fox", "wolf", "bear", "deer", "moose",
  "lion", "tiger", "leopard", "cheetah", "elephant", "giraffe", "zebra", "hippo", "rhino", "monkey",
  "gorilla", "chimpanzee", "kangaroo", "koala", "panda", "sloth", "raccoon", "skunk", "beaver",
  "bat", "owl", "eagle", "parrot", "penguin", "flamingo", "peacock", "ostrich",
  "snake", "lizard", "crocodile", "alligator", "turtle", "tortoise", "frog", "chameleon",
  "shark", "whale", "dolphin", "octopus", "squid", "jellyfish", "crab", "lobster", "shrimp", "starfish",
  "fish", "seahorse", "stingray", "eel", "oyster", "snail", "worm", "spider",
  "ant", "bee", "wasp", "butterfly", "ladybug", "grasshopper", "cricket", "dragonfly",
  "mosquito", "fly", "cockroach", "scorpion", "caterpillar", "firefly",

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
  "compass rose", "treasure map", "message in a bottle", "shipwreck", "lighthouse", "anchor", "harbor", "pier", "dock", "buoy",

  // ====================================================================
  //  Distinctive additions — words clue-able by function, story, or a
  //  unique trait (favoring proper nouns and one-of-a-kind concepts over
  //  arbitrary members of a big category).
  // ====================================================================

  // ---- Life events & milestones ----
  "honeymoon", "graduation", "retirement", "divorce", "proposal", "pregnancy", "adoption", "reunion", "sleepover", "babysitter",
  "allowance", "curfew", "detention", "recess", "prom", "internship", "promotion", "deadline", "commute", "anniversary",
  "first date", "blind date", "midlife crisis", "growth spurt", "bar mitzvah",

  // ---- Feelings & states of mind ----
  "nostalgia", "hangover", "insomnia", "epiphany", "willpower", "stage fright", "wanderlust", "serendipity", "vertigo", "adrenaline",
  "instinct", "intuition", "conscience", "temptation", "procrastination", "optimism", "pessimism", "paranoia", "heartbreak", "gut feeling",
  "butterflies", "homesick",

  // ---- Natural phenomena ----
  "geyser", "aurora", "eclipse", "tsunami", "sinkhole", "stalactite", "magma", "frostbite", "sunburn", "monsoon",
  "blizzard", "whirlwind", "heatwave", "shooting star", "full moon", "solar system", "milky way", "constellation", "black hole", "supernova",
  "asteroid", "riptide", "undertow", "sunbeam",

  // ---- Distinctive objects & gadgets ----
  "boomerang", "slingshot", "catapult", "trampoline", "seesaw", "hammock", "treadmill", "parachute", "snorkel", "harpoon",
  "lasso", "corkscrew", "mousetrap", "birdcage", "fishbowl", "terrarium", "totem pole", "dreamcatcher", "piñata", "marionette",
  "jackhammer", "chainsaw", "lawnmower", "sprinkler", "watering can", "birdfeeder", "doorbell", "mailbox", "chimney", "fireplace",
  "escalator", "elevator", "revolving door", "trapdoor", "drawbridge", "moat", "gargoyle", "fountain", "obelisk", "conveyor belt",

  // ---- Iconic foods ----
  "bagel", "croissant", "cupcake", "lollipop", "gingerbread", "cotton candy", "candy cane", "fortune cookie", "popsicle", "sundae",
  "banana split", "churro", "nacho", "guacamole", "hummus", "kimchi", "ramen", "lasagna", "meatball", "omelette",
  "bacon", "pickle", "caviar", "cheesecake", "gravy", "ketchup", "mustard", "syrup", "gumbo", "smores",
  "jellybean", "gumball", "licorice", "birthday cake",

  // ---- Distinctive animals & creatures ----
  "unicorn", "dragon", "dinosaur", "mammoth", "dodo", "platypus", "narwhal", "porcupine", "hedgehog", "armadillo",
  "anteater", "meerkat", "woodpecker", "hummingbird", "vulture", "swan", "pelican", "toucan", "walrus", "seal",
  "manatee", "orca", "piranha", "pufferfish", "hammerhead", "swordfish", "tarantula", "mockingbird", "raven", "praying mantis",
  "mongoose", "wombat",

  // ---- Landmarks & geographic names ----
  "Mount Fuji", "Amazon River", "Sahara Desert", "Bermuda Triangle", "North Pole", "South Pole", "Mount Vesuvius", "Loch Ness", "Area 51", "Route 66",
  "Wall Street", "Broadway", "Las Vegas", "Disneyland", "Brooklyn Bridge", "Berlin Wall", "Machu Picchu", "Mount Kilimanjaro", "Yellowstone", "Death Valley",
  "Silicon Valley", "Hoover Dam", "Panama Canal", "Suez Canal", "Great Barrier Reef", "Vatican", "Acropolis", "Atlantis",

  // ---- Movies ----
  "The Sound of Music", "Mary Poppins", "Willy Wonka", "Home Alone", "The Grinch", "Elf", "Pinocchio", "Peter Pan", "101 Dalmatians", "Cars",
  "WALL-E", "Ratatouille", "Inside Out", "Coco", "Encanto", "Zootopia", "Despicable Me", "Minions", "Kung Fu Panda", "Madagascar",
  "Ice Age", "The Incredibles", "Monsters Inc", "Brave", "Tangled", "The Jungle Book", "Top Gun", "Gone with the Wind", "Psycho", "The Shining",
  "The Hunger Games", "Twilight", "Grease", "Jumanji", "Men in Black", "Cast Away", "Jurassic World", "La La Land", "The Sixth Sense", "Groundhog Day",

  // ---- Songs ----
  "Let It Go", "Baby Shark", "YMCA", "Macarena", "Gangnam Style", "I Will Survive", "Stayin' Alive", "Don't Stop Believin'", "Take On Me", "Africa",
  "Wonderwall", "Twist and Shout", "Respect", "What a Wonderful World", "Somewhere Over the Rainbow", "Eye of the Tiger", "Purple Rain", "Shake It Off", "Bad Guy", "Someone Like You",
  "Firework", "Roar", "Wannabe", "Mr. Brightside", "Sweet Home Alabama", "We Are the Champions", "Wrecking Ball", "Royals",

  // ---- Famous people ----
  "Albert Einstein", "Isaac Newton", "Charles Darwin", "Leonardo da Vinci", "William Shakespeare", "Mozart", "Beethoven", "Pablo Picasso", "Vincent van Gogh", "Abraham Lincoln",
  "George Washington", "Napoleon", "Cleopatra", "Julius Caesar", "Gandhi", "Martin Luther King", "Nelson Mandela", "Mother Teresa", "Marie Curie", "Stephen Hawking",
  "Thomas Edison", "Benjamin Franklin", "Christopher Columbus", "Amelia Earhart", "Neil Armstrong", "Elvis Presley", "Michael Jackson", "The Beatles", "Marilyn Monroe", "Oprah",
  "Queen Elizabeth", "Galileo", "Joan of Arc", "Mark Twain",

  // ---- Fictional characters & icons ----
  "Santa Claus", "Easter Bunny", "Cupid", "Sherlock Holmes", "James Bond", "Mickey Mouse", "Bugs Bunny", "SpongeBob", "Pikachu", "Super Mario",
  "Darth Vader", "Yoda", "Frankenstein", "Dracula", "Robin Hood", "Winnie the Pooh", "Scooby-Doo", "Snoopy", "Garfield", "Homer Simpson",
  "Hulk", "Captain America", "Grim Reaper", "Bigfoot", "Humpty Dumpty", "Cookie Monster", "Kermit the Frog", "The Joker",

  // ---- Toys, games & amusements ----
  "Rubik's Cube", "Jenga", "Twister", "Scrabble", "Battleship", "Connect Four", "Monopoly", "Uno", "Sudoku", "Crossword",
  "Frisbee", "Hula Hoop", "Pogo Stick", "Jump Rope", "Slinky", "Play-Doh", "Etch A Sketch", "Tetris", "Pac-Man", "Pinball",
  "Foosball", "Air Hockey", "Ping Pong", "Dodgeball", "Whack-a-Mole", "Spinning Top", "Bumper Cars", "Roller Coaster",

  // ---- Distinctive roles & characters ----
  "ninja", "cowboy", "wizard", "witch", "vampire", "werewolf", "mermaid", "fairy", "genie", "superhero",
  "spy", "detective", "lifeguard", "lumberjack", "blacksmith", "matador", "samurai", "viking", "caveman", "mummy",
  "zombie", "scuba diver",

  // ---- Holidays, events & eras ----
  "St. Patrick's Day", "Hanukkah", "Diwali", "Ramadan", "Chinese New Year", "Cinco de Mayo", "Mardi Gras", "Oktoberfest", "Earth Day", "Leap Year",
  "Friday the 13th", "Black Friday", "New Year's Eve", "Super Bowl", "World Cup", "Woodstock", "Gold Rush", "Moon Landing", "Big Bang",

  // ---- Plants & nature ----
  "venus flytrap", "mistletoe", "four-leaf clover", "poison ivy", "dandelion", "tumbleweed", "lily pad", "acorn", "pinecone", "seashell",
  "seaweed", "toadstool", "thorn", "pollen", "nectar", "bonsai",

  // ---- Body & health ----
  "heartbeat", "blush", "shiver", "sweat", "dimple", "freckle", "cavity", "braces", "crutches", "cast",
  "eyepatch", "tattoo", "piercing", "sunscreen", "wisdom tooth",

  // ---- Idioms & personalities ----
  "cold feet", "sweet tooth", "couch potato", "early bird", "night owl", "bookworm", "copycat", "underdog", "daredevil", "chatterbox",
  "wild goose chase", "piece of cake", "party animal", "scaredy cat", "lovebird", "busybody",

  // ---- Adventures & activities ----
  "bungee jumping", "skydiving", "scuba diving", "paragliding", "ziplining", "rock climbing", "white water rafting", "horseback riding", "ice fishing", "arm wrestling",
  "thumb war", "limbo", "tightrope", "trapeze", "snowball fight",

  // ---- More distinctive objects & sights ----
  "piggy bank", "treasure chest", "time capsule", "crystal ball", "magic wand", "wishing well", "lucky charm", "voodoo doll", "ouija board", "tarot card",
  "magnifying glass", "grandfather clock", "cuckoo clock", "alarm clock", "snow globe", "jack-in-the-box", "jukebox", "vending machine", "photo booth", "ferris wheel",
  "carousel", "gumball machine", "hot air balloon", "zeppelin", "disco ball", "lava lamp", "music box", "bubble wrap", "traffic light", "fire hydrant",
  "manhole", "scoreboard", "billboard", "mannequin"
];

// Expose for the app
if (typeof module !== "undefined" && module.exports) {
  module.exports = WORD_BANK;
}
