// ==========================================================================
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphin = calcAverage(85, 54, 41);
const avgKoala = calcAverage(23, 34, 27);
function checkWinner(avgDolphin, avgKoala) {
  if (avgDolphin >= 2 * avgKoala) {
    return `Dolphin won (${avgDolphin} vs ${avgKoala})`;
  } else if (avgKoala >= 2 * avgDolphin) {
    return `Koala won (${avgKoala} vs ${avgDolphin})`;
  } else {
    return `no one won`;
  }
}
console.log(checkWinner(avgDolphin, avgKoala));
// ==========================================================================

function calctip(pay) {
  return pay >= 50 && pay <= 300 ? (15 / 100) * pay : (20 / 100) * pay;
}
const bills = [125, 555, 44];
const total = [
  calctip(bills[0]) + bills[0],
  calctip(bills[1]) + bills[1],
  calctip(bills[2]) + bills[2],
];
console.log(total);

// ==========================================================================
// Mark Miller weights 78 kg and is 1.69 m tall.
// John Smith weights 92 kg and is 1.95 m tall.

const markInfo = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnInfo = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
markInfo.calcBMI;
johnInfo.calcBMI;
// This is the worst logic I could have used HAHAHAHA.
let str = `${
  markInfo.bmi > johnInfo.bmi ? markInfo.fullName : johnInfo.fullName
}'s BMI (${
  markInfo.calcBMI() > johnInfo.calcBMI()
    ? markInfo.calcBMI()
    : johnInfo.calcBMI()
}) is higher than ${
  markInfo.bmi < johnInfo.bmi ? johnInfo.fullName : markInfo.fullName
}'s BMI(${
  markInfo.calcBMI() < johnInfo.calcBMI()
    ? johnInfo.calcBMI()
    : markInfo.calcBMI()
})`;
if (markInfo.calcBMI > johnInfo.calcBMI) {
  str = `${markInfo.fullName}'s BMI (${markInfo.bmi} is higher than ${johnInfo.fullName}'s BMI (${johnInfo.bmi} )`;
} else {
  str = `${johnInfo.fullName}'s BMI (${johnInfo.bmi} is higher than ${markInfo.fullName}'s BMI (${markInfo.bmi} )`;
}

str = `${markInfo.fullName}'s BMI (${markInfo.bmi}) is ${
  markInfo.bmi > johnInfo.bmi ? "higher" : "lower"
} than ${johnInfo.fullName}'s BMI (${johnInfo.bmi})`;

console.log(str);

*/
// ==========================================================================
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? (15 / 100) * bill : (25 / 100) * bill;

for (let i = 0; i < bills.length; i++) {
  // You can alos use .push() here.
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(bills);
console.log(tips);
console.log(totals);

function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAvg(totals));

*/
// ==========================================================================
