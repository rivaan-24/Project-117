quick_draw_data_set = ["Aircraft carrier", "Airplane", "Alarm clock", "Ambulance", "Angel", "Animal migration", "Ant", "Anvil", "Apple", "Arm", "Asparagus", "Axe", "Backpack", "Banana", "Bandage", "Barn", "Baseball", "Baseball bat", "Basket", "Basketball", "Bat", "Bathtub", "Beach", "Bear", "Beard", "Bed", "Bee", "Belt", "Bench", "Bicycle", "Binoculars", "Bird", "Birthday cake", "Blackberry", "Blueberry", "Book", "Boomerang", "Bottlecap", "Bowtie", "Bracelet", "Brain", "Bread", "Bridge", "Broccoli", "Broom", "Bucket", "Bulldozer", "Bus", "Bush", "Butterfly", "Cactus", "Cake", "Calculator", "Calendar", "Camel", "Camera", "Camouflage", "Campfire", "Candle", "Cannon", "Canoe", "Car", "Carrot", "Castle", "Cat", "Ceiling fan", "Cello", "Cell phone", "Chair", "Chandelier", "Church", "Circle", "Clarinet", "Clock", "Cloud", "Coffee cup", "Compass", "Computer", "Cookie", "Cooler", "Couch", "Cow", "Crab", "Crayon", "Crocodile", "Crown", "Cruise ship", "Cup", "Diamond", "Dishwasher", "Diving board", "Dog", "Dolphin", "Donut", "Door", "Dragon", "Dresser", "Drill", "Drums", "Duck", "Dumbbell", "Ear", "Elbow", "Elephant", "Envelope", "Eraser", "Eye", "Eyeglasses", "Face", "Fan", "Feather", "Fence", "Finger", "Fire hydrant", "Fireplace", "Firetruck", "Fish", "Flamingo", "Flashlight", "Flip flops", "Floor lamp", "Flower", "Flying saucer", "Foot", "Fork", "Frog", "Frying pan", "Garden", "Garden hose", "Giraffe", "Goatee", "Golf club", "Grapes", "Grass", "Guitar", "Hamburger", "Hammer", "Hand", "Harp", "Hat", "Headphones", "Hedgehog", "Helicopter", "Helmet", "Hexagon", "Hockey puck", "Hockey stick", "Horse", "Hospital", "Hot air balloon", "Hot dog", "Hot tub", "Hourglass", "House", "House plant", "Hurricane", "Ice cream", "Jacket", "Jail", "Kangaroo", "Key", "Keyboard", "Knee", "Knife", "Ladder", "Lantern", "Laptop", "Leaf", "Leg", "Light bulb", "Lighter", "Lighthouse", "Lightning", "Line", "Lion", "Lipstick", "Lobster", "Lollipop", "Mailbox", "Map", "Marker", "Matches", "Megaphone", "Mermaid", "Microphone", "Microwave", "Monkey", "Moon", "Mosquito", "Motorbike", "Mountain", "Mouse", "Moustache", "Mouth", "Mug", "Mushroom", "Nail", "Necklace", "Nose", "Ocean", "Octagon", "Octopus", "Onion", "Oven", "Owl", "Paintbrush", "Paint can", "Palm tree", "Panda", "Pants", "Paper clip", "Parachute", "Parrot", "Passport", "Peanut", "Pear", "Peas", "Pencil", "Penguin", "Piano", "Pickup truck", "Picture frame", "Pig", "Pillow", "Pineapple", "Pizza", "Pliers", "Police car", "Pond", "Pool", "Popsicle", "Postcard", "Potato", "Power outlet", "Purse", "Rabbit", "Raccoon", "Radio", "Rain", "Rainbow", "Rake", "Remote control", "Rhinoceros", "Rifle", "River", "Roller coaster", "Rollerskates", "Sailboat", "Sandwich", "Saw", "Saxophone", "School bus", "Scissors", "Scorpion", "Screwdriver", "Sea turtle", "See - Saw", "Shark", "Sheep", "Shoe", "Shorts", "Shovel", "Sink", "Skateboard", "Skull", "Skyscraper", "Sleeping bag", "Smiley face", "Snail", "Snake", "Snorkel", "Snowflake", "Snowman", "Soccer ball", "Sock", "Speedboat", "Spider", "Spoon", "Spreadsheet", "Square", "Squiggle", "Squirrel", "Stairs", "Star", "Steak", "Stereo", "Stethoscope", "Stitches", "Stop sign", "Stove", "Strawberry", "Streetlight", "String bean", "Submarine", "Suitcase", "Sun", "Swan", "Sweater", "Swingset", "Sword", "Syringe", "Table", "Teapot", "Teddy - bear", "Telephone", "Television", "Tennis racquet", "Tent", "The Eiffel Tower", "The Great Wall of China", "The Mona Lisa", "Tiger", "Toaster", "Toe", "Toilet", "Tooth", "Toothbrush", "Toothpaste", "Tornado", "Tractor", "Traffic light", "Train", "Tree", "Triangle", "Trombone", "Truck", "Trumpet", "T - shirt", "Umbrella", "Underwear", "Van", "Vase", "Violin", "Washing machine", "Watermelon", "Waterslide", "Whale", "Wheel", "Windmill", "Wine bottle", "Wine glass", "Wristwatch", "Yoga", "Zebra", "Zigzag"]

var random_number = 0;

var timer_counter = 0;
var timer_check = "";

var drawn_sketch = "";

var answer_holder = "";
var score = 0;

random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
element_of_array = quick_draw_data_set[random_number];

console.log(element_of_array);
console.log(random_number);
console.log(quick_draw_data_set);

sketch_variable = quick_draw_data_set[random_number];

console.log(sketch_variable);

document.getElementById("sketch_drawing").innerHTML = "Sketch to be drawn - " + sketch_variable;

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
}
function draw() {
    strokeWeight(7);
    stroke(0);

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    check_sketch();
    if (sketch_variable == drawn_sketch) {
        answer_holder = "set";
        console.log(answer_holder);
        score++;
        console.log(score);
        document.getElementById("score").innerHTML = "Score Count - " + score;
    }
}
function check_sketch() {
    timer_counter++;
    document.getElementById("time_count").innerHTML = "Time - " + timer_counter;
    if (timer_counter > 500) {
        timer_counter = 0;
        timer_check = "Completed";
        console.log(timer_check);
        console.log("Onto checking whether timer is completed or answer_holder variable value is set.");
    }
    if (timer_check == "Completed" || answer_holder == "set") {
        timer_check = "";
        answer_holder = "";
        console.log(timer_check);
        console.log(answer_holder);
        console.log("Completed stage of resetting the variables timer_check & answer_holder.");
        updateCanvas();
    }
}
function updateCanvas() {
    random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
    element_of_array = quick_draw_data_set[random_number];

    console.log(random_number);

    sketch_variable = quick_draw_data_set[random_number];
    document.getElementById("sketch_drawing").innerHTML = "Sketch to be drawn - " + sketch_variable;
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}
function gotResult(error, completion) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(completion);
        drawn_sketch = completion[0].label;
        document.getElementById("sketch_name").innerHTML = "Your sketch - " + drawn_sketch;

        document.getElementById("confidence").innerHTML = "Accuracy - " + Math.round(completion[0].confidence * 100) + "%";
    }
}
function clear_canvas() {
    background("white");
}