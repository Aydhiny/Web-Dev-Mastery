//This declares a variable named kelvin with a const property. This means the value cannot be changed.
const kelvin = 293;
//This line converts the kelvin variable to celsius.
let celsius = kelvin / 273;
//This line converts celsius to fahrenheit.
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
//This rounds up the number.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
