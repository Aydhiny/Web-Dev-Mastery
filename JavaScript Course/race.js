let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if (age > 18 && early) {
  raceNumber += 1000;
}
if (age > 18 && early) {
  console.log("Your race starts at 9:30");
  console.log(`Your number is: ${raceNumber}`);
} else if (age > 18 && early === false) {
  console.log("You will race at 11:00");
  console.log(`Your number is: ${raceNumber}`);
} else if (age === 18) {
  console.log("Your race starts at 12:30");
  console.log(`Your number is: ${raceNumber}`);
} else {
  console.log("See the registration desk");
}
