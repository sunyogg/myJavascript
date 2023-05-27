// ARRAYS

//Defining arrays
const nums = [1, 2, 3, 4, 5];
const num = new Array(3);
const num1 = new Array("hello", "how", "are");
console.log(num);

const names = ["Jonas", "Steven", "Michael", "Franklin"];
const myInfo = ["Sunyog", "Lodhi", 21, 68.1, "brown"];

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
const arrr = ["Sunyog", "Lodhi", "brown", ["maths", "os", "ada"], nums];
console.log(arrr);
console.log(arrr[3][0]);

// OPERATION IN ARRAY

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lett = ["a", "b", "c]"];
console.log("length", arr.length);
arr.push(5);
console.log("pushed:", arr);
arr.pop();
console.log("popped:", arr);
arr.shift();
console.log("shifted:", arr);
arr.unshift(0);
console.log("unshifted:", arr);
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
const ass = arr.join("-");
console.log(ass);
const arrs = arr.fill(0);
console.log(arrs);

// .length() .push() .pop() .shift() .unshift() .indexOf() .includes()
// .concat() .reverse() .sort() .slice() .join() .fill()
