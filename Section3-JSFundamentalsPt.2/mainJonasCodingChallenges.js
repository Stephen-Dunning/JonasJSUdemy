"use strict";
//coding challenge 1 Lesson 38
//Titled 'Dolphins and Koalas Function averages'
//c/onst calcAge3 = (birthYear) => 2037 - birthYear;
//const age3 = calcAge3(1991);
//console.log(age3);

//const calcAverage = (dolphinscores) => (score1 + score2 + score3) / 3;
//const avDolphins = calcAverage(44, 23, 71);
//unction calcAverage =
//const avDolphins = calcAverage(
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(44, 23, 71));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
//finished part 1 and part 2.

//answer to part 3 and 4 below
const checkWinner = function (scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= scoreKoalas * 2) {
    console.log(`Dolphins win ${scoreDolphins} vs.${scoreKoalas}`);
  } else if (scoreKoalas >= scoreDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log(`Neither team wins`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/
// changing the variables from const to let allows us to overwrite the //variables, without actually creating new variables.
//end of coding challenge 1

//coding challenge 2 is below. It is lesson 41

// Challenge number two is about the tip calculation at the
/*
const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
console.log(bills, tips);
// answers above to question 1 and 2 and 3.

//question 4 the bonus us below.
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

//end of coding challenge 2
*/

//coding challenge 3

//More Mark and JOhn BMI
/*
const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();

const john = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}.`
  );
} else {
  console.log(
    `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}.`
  );
}
*/
/*
john.calcBMI ();
console.log(john.bmi);

calcBMI: function () 
  bmiMark = massMark / (heightMark * heightMark);
  console.log(this);
  return bmiMark;
}  
const John = {
  firstName: "John",
  lastName: "Smith",
  heightMark: 1.95,
  massMark: 92,
  return bmiJohn;

calcBMI: function () 
  bmiJohn = massJohn / (heightJohn * heightJohn);
  return bmiJohn;
}   

if bmiMark > bmiJohn {
    console.log(`${this.firstname} ${this.lastName}'s BMI ${bmiMark} is higher than ${firstName} ${lastName}'s ${bmiJohn}.`)
} else {
    console.log(`${firstname} ${lastName}'s BMI ${bmiJohn} is higher than ${this.firstName} ${this.lastName}'s ${bmiMark}.`)
}
*/
//coding challenge four ´The improvement of the calcTip function.´

//tasks 1 to 3

const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calctip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const sum;
const calcAverage = function (arr) {
  sum = 0; 
  for sum = bills{0}, bills<bills.length, sum++  
  
}

// //end of this file too 
_____________________________________________________________
