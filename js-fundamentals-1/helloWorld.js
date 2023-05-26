/*
// MULTILINE COMMENT
let countryName = "India";
let countryPopulation = "135000 Million";
let countryContinent = "Asia";
console.log(countryName);
console.log(countryPopulation);
console.log(countryContinent);
*/
//==========================================================================
/*
// DATA TYPES
let num = 1;
let str = "Hello World ";
let bool = true;
let bigInt = 2983472983742983;
let unDefined;
let nullValue = null;
let symbolValue = "cannot be modified just like tuple";

console.log(typeof nullValue);
*/
//==========================================================================
/*
// DIFFERENT WAYS OF DECLARING A VARIABLE
let age = 21;
age = 22;

const birthYear = 2003;

var firstName = "Sunyog";
firstName = "Rudrakshi";
*/
//==========================================================================
/*
// OPERATORS
num = 10;
num + 4;
num - 2;
num / 2;
num * 2;
num ** 2;
num += 2;
num -= 2;
num /= 2;
num *= 2;
console.log(num < 4); // comparison operators return true or false.
console.log(num > 4);
console.log(num <= 4);
console.log(num >= 4);
console.log(typeof num);
*/
//==========================================================================
/*
// OPERATOR PRECEDENCE
// google search mdn precedence table
console.log(44 + 19 / 2);
console.log((44 + 19) / 2);
console.log(2023 - 1991 > 2023 - 2003);
*/
//==========================================================================
/*
const firstName = "Sunyog";
const lastName = "Lodhi";
const age = 21;
let str =
  "Hello there! My name is " +
  firstName +
  " " +
  lastName +
  " " +
  "and I am " +
  age +
  " " +
  "years old";
console.log(str);

let newString = `Hello there! My name is ${firstName} ${lastName} and I am ${age} years old`;
console.log(newString);

str = "This is \nmultiline \ncomment.";
console.log(str);

newString = `This is 
multiline
comment`;

console.log(newString);
*/
//==========================================================================

/*
console.log("Drivers's License Test");
const age = 17;
if (age >= 18) {
  console.log("You are allowed to sit in driver's license test.");
} else {
  console.log("You are not allowed to sit in driver's license test.");
  const ageLeft = 18 - age;
  console.log(`Come back after ${ageLeft} years.`);
}
*/

//==========================================================================
/*
// TYPE CONVERSION: MANUAL TYPE CONVERSION

const birthYear = "2001";
console.log(Number(birthYear));
console.log(String(birthYear));
console.log(typeof NaN);

// TYPE COERCION: AUTOMATIC TYPE CONVERSION
const str = "I was born in " + birthYear;
console.log(typeof str);

console.log(2 + 2); // Number
console.log("2" + 2); // String
console.log("2" + "2"); // String
console.log(2 - 2); // Number
console.log("2" - 2); // Number
console.log(2 * 2); // Number
console.log("2" * 2); // Number
console.log("2" * "2"); // Number
console.log(2 / 2); // Number
console.log("2" / 2); // Number
console.log("2" / "2"); // Number
*/
//==========================================================================
/*
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// AUTOMATIC TYPE COERCION IN BOOLEAN
// - When using logical operators.
// - In if else statements.

let height; // undefined
if (height) {
  console.log("yay! Height is defined");
} else {
  console.log("Height is not defined");
}
*/
//==========================================================================
/*
// EQUALITY OPERATORS

let one = 28;
let two = "28";
let three = 28;

console.log(one === two); // strict equality operator : does not perform type coercion
console.log(one == two); // loose equality operator : performs type coercion

let question = Number(prompt("What is your favorite number?"));
console.log(question);
console.log(typeof question);
console.log(question !== 23);
console.log(question != 23);
*/
//==========================================================================
/*
// Logical operators
const age = 90;
if (age <= 19 && age >= 13) {
  console.log("You're a TeenageR");
} else if (age <= 10 || age >= 80) {
  console.log("You're not supposed to be here in the theme park.");
} else {
  console.log("You're not a teenager.");
}
*/
//==========================================================================
/*
let day = "wednesday";
switch (day) {
  case "monday": // day === "monday"
    console.log("It's monday");
    break;
  case "tuesday":
  case "wednesday":
    console.log("It's Wednesday or Tuesday");
    break;
  case "thursday":
    console.log("It's thursday");
    break;
  case "friday":
    console.log("It's friday");
    break;
  case "saturday":
    console.log("It's saturday");
    break;
  case "sunday":
    console.log("It's sunday");
    break;
  default:
    console.log("Not a valid day");
}

// IMPLEMENTING ABOVE SWTICH STATEMENT USING IF ELSE IF ELSE BLOCK.
day = "sunday";
if (day === "monday") {
  console.log("It's monday");
} else if (day === "tuesday" || day === "wednesday") {
  console.log("It's wednesday or tuesday");
} else if (day === "thursday") {
  console.log("It's thurday");
} else if (day === "friday") {
  console.log("It's friday");
} else if (day === "saturday") {
  console.log("It's saturday");
} else if (day === "sunday") {
  console.log("It's sunday");
}
*/

//==========================================================================
/*
// TERNARY OPERATOR

const age = 16;
age >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink water💧");

// Ternary operator can be used to assign values to variable.
const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);

if (age >= 18) {
  console.log("wine🍷");
} else {
  console.log("water💧");
}
*/
//==========================================================================
