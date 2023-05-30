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
//FUNCTIONS

function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas tardes.");
}

//FUNCTION PARAMETERS

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//ARROW FUNCTIONS

//BEFORE. const plantNeedsWater = function(day) {}
const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
// CONCISE FUNCTIONS

const plantNeedadadssWater = (day) => (day === "Wednesday" ? true : false);
//BLOCKS
//  A block is the code found inside a set of curly braces {}.

//SCOPE, GLOBAL VARIABLES

const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

//This function is made short on purpose. Showing the capability of arrow functions.
const callMyNightSky = () =>
  "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;

//ARRAYS

const hobbies = ["", "", ""];
console.log(hobbies);

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

let listItem = famousSayings[0];

console.log(listItem);

console.log(famousSayings[2]);

//ARRAY UPDATING

let groceryList = ["bread", "tomatoes", "milk"];

groceryList[1] = "avocados";

//CONST AND LET ARRAYS

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
utensils[3] = "Spoon";
console.log(utensils);

condiments[0] = "Mayo";
console.log(condiments);

condiments = ["Mayo"];
console.log(condiments);

//ARRAY PUSH

//Used to assign new members of an array.
const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("", "");
console.log(chores);

//POP METHOD

const chores1 = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

chores.pop();
console.log(chores);

//ARRAY FUNCTIONS EXCLUSIVE TO JAVASCRIPT

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

groceryList.shift();
console.log(groceryList);

groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

//FUNCTIONS WITH ARRAYS

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);

const removeElement = (newArr) => newArr.pop();

removeElement(concept);
console.log(concept);

//NESTED ARRAYS

let numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];

console.log(target);

//FOR LOOPS

for (let i = 5; i <= 10; i++) {
  console.log(i);
}
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

//FOR LOOPS WITH ARRAYS
const vacationSpots = ["Bali", "Paris", "Tulum"];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

//NESTED FOR LOOPS

let bobsFollowers = ["Rob", "Hob", "Kob", "Wob"];

let tinasFollowers = ["Rob", "Hob", "Alina"];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

//WHILE LOOPS

const cards = ["diamond", "spade", "heart", "club"];

let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//DO WHILE LOOPS

let cupsOfSugarNeeded = 25;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

//FOR LOOP BREAKS

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Notorious B.I.G.") {
    console.log(rapperArray[i]);
    break;
  }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");

/////////////////////////////////////////////////////////////////////////////
//ABSTRACT FUCTIONS AND HIGH TIER FUNCTIONALITY
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

//FUNCTIONS AS PARAMETERS

const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) return func(val);

  return "inconsistent results";
};

console.log(checkConsistentOutput(addTwo, 8));

//ITERATORS

//FOR EACH -> .forEach();
const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach((fruits) => console.log("I want to eat a " + fruits));

//MAP -> .map()

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

const secretMessage = animals.map((animal) => {
  return animal[[0]];
});

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map((number) => {
  return number / 100;
});

//FILTER

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

//Creates a new array which is a filtered version of the old one.
const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

const smallNumbersd = randomNumbers.filter((number) => {
  return number < 250;
});

const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

//.findIndex()

const animals1 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});

const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s";
});

console.log(foundAnimal);
console.log(startsWithS);

//REDUCE METHOD .reduce()

//Returns a single value from an array.
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// ALL ITERATORS

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.some((num) => num < 0);

/////////////////////////////////////////////////////////////////////////////
//                            OBJECT ORIENTED PARADIGM
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Write your fasterShip object literal below
let spaceship = {};
let fasterShip = {
  color: "silver",
  "Fuel Type": "Turbo Fuel",
};

// HOW TO ACCESS OBJECT PROPERTIES
let spaceship2 = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

//BRACKET NOTATION

let spaceship3 = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

//WE can also access object variables through bracket notation using brackets.
let propName = "Active Mission";
let isActive = spaceship["Active Mission"];
console.log(isActive);

//DELETE

let spaceship4 = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
  numEngines: 5,
};

spaceship.numEngines = 5;
spaceship.color = "glorious gold";
delete spaceship["Secret Mission"];

//METHODS

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

let alienShip = {
  retreat: function () {
    console.log(retreatMessage);
  },
  takeOff: function () {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.takeOff();
alienShip.retreat();
