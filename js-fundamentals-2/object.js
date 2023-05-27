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
