/*
// 1 and 2
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 95;
const johnHeight = 1.88;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than Jonh's BMI ${johnBMI}`);
} else {
  console.log(`Jonh's BMI(${johnBMI}) is higher than Mark's BMI${markBMI}`);
} 
*/
// ==========================================================================
/*
// 2
const dolphinAvg = (90 + 90 + 90) / 3;
const koalaAvg = (90 + 90 + 90) / 3;

if (dolphinAvg > koalaAvg && dolphinAvg >= 100) {
  console.log("Dophins win");
} else if (dolphinAvg === koalaAvg && dolphinAvg >= 100 && koalaAvg >= 100) {
  console.log("Match tied");
} else if (dolphinAvg < koalaAvg && koalaAvg >= 100) {
  console.log("Koalas win");
} else {
  console.log("No one won");
}
*/
// ==========================================================================

const bill = 275;
const tipOne =
  bill >= 50 && bill <= 300
    ? (tip = (15 / 100) * bill)
    : (tip = (20 / 100) * bill);
let tip;

console.log(
  `The bill was ${bill} and the tip was ${
    bill >= 50 && bill <= 300
      ? (tip = (15 / 100) * bill)
      : (tip = (20 / 100) * bill)
  }, hence the total value is ${bill + tip}`
);
