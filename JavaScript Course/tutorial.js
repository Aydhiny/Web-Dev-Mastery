// Comments
// - Single line

/*
- Multiple line 
*/

//Console logs and variable types

console.log("hello world");
console.log("wtf");
console.log(name);
console.log(45);
console.log(true);
console.log(25.45);

// variables

var favouriteFood = "pizza";
console.log(favouriteFood);

var numOfSlices = 8;
console.log(numOfSlices);

// arithmetic and string operators

console.log(19 + 3.5);
console.log(2023 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

console.log("Hello" + "World");
console.log("Hello" + " " + "World");
console.log("Teaching the world how to code".length); // Outputs the length of a string.

// JS Methods frequently used on variables from the JS Wiki.

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

// MATHEMATICAL Operators on Variables (let, var, const, etc).

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log("The value of levelUp:", (levelUp += 5));
console.log("The value of powerLevel:", (powerLevel -= 100));
console.log("The value of multiplyMe:", (multiplyMe *= 11));
console.log("The value of quarterMe:", (quarterMe /= 4));

// INCREMENTS AND DECTREMENTS

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

//STRING INTERPOLATION

let myName = "Ajdin";
let myCity = "Mostar";
console.log(`My name is ${myName}. My favourite city is ${myCity}`);

//TYPEOF

let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

//IF ELSE STATEMENTS

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

// FALSY AND TRUETHY VARIABLES

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = "";

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}

//SHORT HAND CHECKING

let tool = "marker";

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";
console.log(`The ${writingUtensil} is mightier than the sword.`);

//TERNARY OPERATOR

let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrases = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");

//ELSE IF

let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

//SWITCH

let athleteFinalPosition = "first place";
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}
