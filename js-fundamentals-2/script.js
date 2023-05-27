"use strict";
/*
// In javascript you can invoke function before the definition of the function.
// console.log(sum(2, 4));

function sum(x, y) {
  const result = x + y;
  return result;
}

function calcAge(birthYear) {
  let currentYear = 2023;
  return currentYear - birthYear;
}
let age = calcAge(2001);

// An FUNCTION DECLARATION or ANONYMOUS function
let subtract = function (x, y) {
  return x - y;
};

// ARROW FUNCTION
// const funcName = (func, parameters) => returnValue;
const multiply = (x, y) => x * y;

// a bit complex ARROW function
const yearsUntilRetirement = (birthYear) => {
  let currentYear = 2023;
  const retireIn = currentYear - birthYear;
  return 60 - retireIn;
};
console.log(yearsUntilRetirement(2001));



// FUNCTIONS CALLING FUNCTIONS

function hello() {
  console.log('Hello World');
}
function greet() {
  console.log('Hi, How are you?');
  hello();
}


// ARRAYS

//Defining arrays
const nums = [1, 2, 3, 4, 5];
const num = new Array(3);
const num1 = new Array('hello', 'how', 'are');
console.log(num);

const names = ['Jonas', 'Steven', 'Michael', 'Franklin'];
const myInfo = ['Sunyog', 'Lodhi', 21, 68.1, 'brown'];

// Printing Array
console.log(nums);
console.log(names);
console.log(myInfo);

// Accessing elements of array using indexing.
console.log(nums[nums.length - 1]);
console.log(names[0]);
console.log(myInfo[myInfo.length - 1]);

// modifying elements of array
nums[nums.length - 1] = 69;
console.log(nums);

// Using expressions in array.
const years = [1993, 1997, 2000, 2001, 2003];
const calcAge = (birthYear) => 2023 - birthYear;
const age = [
  calcAge(1993),
  calcAge(1997),
  calcAge(2000),
  calcAge(2001),
  calcAge(2003),
];
console.log(age);

// Nesting Arrays
const arrr = ['Sunyog', 'Lodhi', 'brown', ['maths', 'os', 'ada'], nums];
console.log(arrr);
console.log(arrr[3][0]);



// OPERATION IN ARRAY

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lett = ['a', 'b', 'c]'];
console.log('length', arr.length);
arr.push(5);
console.log('pushed:', arr);
arr.pop();
console.log('popped:', arr);
arr.shift();
console.log('shifted:', arr);
arr.unshift(0);
console.log('unshifted:', arr);
console.log(arr.indexOf(3));
console.log(arr.includes(3));
const newArr = arr.concat(lett);
console.log(newArr);
arr.reverse();
console.log(arr);
const arre = arr.slice(2, 4);
console.log(arre);
arr.sort();
console.log(arr);
const ass = arr.join('-');
console.log(ass);
const arrs = arr.fill(0);
console.log(arrs);

// .length() .push() .pop() .shift() .unshift() .indexOf() .includes()
// .concat() .reverse() .sort() .slice() .join() .fill()




// OBJECTS (DICTIONARIES)

const dict = {
  keys: 'value',
  fName: 'Sunyog',
  lName: 'Lodhi',
  age: 2023 - 2001,
  country: 'India',
  education: 'Engineering',
  1: 3,
  friends: ['Rudrakshi', 'Anurag', 'Suyash'],
};

console.log(dict);
console.log(dict['keys']);
dict['age'] = 22;
console.log(dict[1]);
dict['Interest'] = 'coding';
console.log(dict);
dict.lName = 'Patel';
console.log(dict);

// const prop = prompt('Enter the property: ');
// const district = prompt('Enter your district: ');
// dict[prop] = district;
// console.log(dict);

console.log(
  `${dict.fName} has ${dict.friends.length} friends and his best friend name is ${dict.friends[0]}`
);
console.log(
  `${dict['fName']} has ${dict['friends'].length} friends and his best friend name is ${dict.friends[0]}`
);


const dict = {
  fName: "Sunyog",
  lName: "Lodhi",
  birthYearr: 2001,
  country: "India",
  friends: ["Rudrakshi", "Anurag", "Suyash"],
  hasDriversLicense: true,
  // calcAge: function () {
  //   return 2023 - this.birthYearr;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYearr;
    return this.age;
  },
  summarize: function () {
    const str = `${this.fName} ${this.lName} is ${this.calcAge()} 
    years old living in ${this.country} and 
    ${this.hasDriversLicense ? "has" : "does not have"} a driver's licencse.`;
    return str;
  },
};
console.log(dict);
dict.calcAge();
// dict['calcAge']();
console.log(dict.age);
console.log(dict["age"]);
console.log(dict);
console.log(dict.summarize());
*/

// FOR LOOPS
/*
for (let i = 0; i <= 20; i++) {
  if (i === 0) {
    console.log(i);
  } else if (i % 2 === 0) {
    console.log(i, "is even");
  } else {
    console.log(i);
  }
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else if (i % 5 === 0) {
    continue;
  }
}

for (let i = 0; i <= 20; i++) {
  if (i === 14) {
    break;
  }
  console.log(i);
}


const types = [];
const myInfo = ["Sunyog", "Lodhi", 21, 68.1, "brown"];
for (let i = 0; i < myInfo.length; i++) {
  console.log(myInfo[i]);
  types[i] = typeof myInfo[i];
}

console.log(types);

const birthYears = [1993, 1997, 2000, 2001, 2003];
const ages = [];
const calcAge = (birthYear) => 2023 - birthYear;
for (let i = 0; i <= birthYears.length - 1; i++) {
  ages.push(calcAge(birthYears[i]));
}
console.log(ages);


const myInfo = ["Sunyog", "Lodhi", 21, 68.1, "brown"];
for (let i = myInfo.length - 1; i >= 0; i--) {
  console.log(myInfo[i]);
}


for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("Exercise -", i);
  }
}

// WHILE LOOPS
const myInfo = ["Sunyog", "Lodhi", 21, 68.1, "brown"];

while (myInfo.length >= 1) {
  console.log(myInfo[0]);
  myInfo.shift();
}



let chance = Math.trunc(Math.random() * 10);

while (chance !== 5) {
  console.log(chance);
  chance = Math.trunc(Math.random() * 10);
}

*/
