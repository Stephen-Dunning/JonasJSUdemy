"use strict";
/*
let country = "Brazil";
let continent = "South_America";
let population = 300;
let language = "Portuguese";


console.log(country);
console.log(continent);
console.log(population);
//answers to Javascript fundamentals - part 1 - "values and variables"
//practise assignment 11

let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof language);
// answer to Javascript fundamentals  - part 1 - "Data Types"
//practise assignment 12
*/

// let country = "Brazil";
// const continent = "South America";
// let population = 300000000;
// const language = "Portuguese";
// //let continent = Asia;
//practise assignment 13 "var, const and let"
/*
        let js = "amazing";
        console.log(40 + 8 + 23 - 10);

        console.log("jonas");
        console.log(23);

        let firstName = "Jonas";

        let myFirstJob = "programmer";
        let myCurrentJob = "teacher";
        console.log(myCurrentJob);
        //end of lesson 10
        */
/*
    let javascriptIsFun = true;
    console.log(javascriptIsFun);

    console.log(typeof javascriptIsFun);
    console.log(typeof 23);
    console.log(typeof "jonas");

    javascriptIsFun = "YES!";
    console.log(typeof "javascriptIsFun");

    let year;
    console.log(typeof year);

    year = "1991";
    console.log(typeof year);

    console.log(typeof null);
    // end of lesson 12 'data types'
    */

//let age = 30;
//age = 31;

//const birthyear = 1991;
//birthyear = 1990;//
//const job = teacher;

//const newJob = nutter;

// end of lesson 13

/*
    // demonstration of maths operators
    const now = 2037;
    const ageJonas = now - 1991;
    const ageSarah = now - 2018;
    console.log(ageJonas, ageSarah);

    console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
    //2**3 means 2 to the power of 3, or 2*2*2

    const firstName = "Jonas";
    const lastName = "Schmedtmann";
    console.log(firstName + " " + lastName);
    // demo of concatonation of strings

    //demo of assignment operators.
    let x = 10 + 5;
    //demonstration of = as an operator. But the + operator will
    //be operated first, giving x a value of 15, but only after the
    //first operation.
    x += 10; //this operation is after the first one, raising the value of x once more.
    x *= 4; //this operation serves to demonstrate another operator, which again boosts x value.
    x++; //this operator raises the value of x by 1 (the inverse applies too)
    console.log(x);

    //demonstration of comparison operators, which always produce boolean values
    console.log(ageJonas > ageSarah);
    console.log(ageSarah >= 18);
    console.log(now - 1991 > now - 2019);

    */ // above is the text for lesson 14 Basic Operators
//assignment for lecture 14 'basic operators'

//     let halfPopulation = population / 2;
// console.log(halfPopulation); // no.1
// population++; // no.2 processor
// console.log(population); //no.2 output
// console.log(population > 6000000); //no.3
// averagePopulation = 33000000; //no.4 processor
// console.log(averagePopulation > population); //no.4 output

// const description1 =
//   country +
//   " is in " +
//   continent +
//   " and its " +
//   population +
//   " people speak " +
//   language; //no.5 process
// console.log(description1); // no.5 output
// //process for answers to quiz for lecture no. 14 'Basic Operators' lecture
// console.log(`Just a regular ${continent} string...`);

//     const now = 2037;
//     const ageJonas = now - 1991;
//     const ageSarah = now - 2018;

//     console.log(now - 1991 > now - 2019);

//     const averageAge = (ageJonas + ageSarah) / 2;
//     console.log(ageJonas, ageSarah, averageAge);
//     // above is the text for lesson 15 Operatror Precedence.
//     // lesson 16 is coding challenge, so that is in JS file named 'Main Coding Challenges.js'

//     //  below is Lesson 17 on Strings and Template Literals.

//     const firstName = "Jonas";
//     const job = "teacher";
//     const birthYear = 1991;
//     const year = 2037;

//     const jonas =
//       "I'm " +
//       firstName +
//       " a " +
//       (year - birthYear) +
//       " years old " +
//       job +
//       "!";
//     console.log(jonas);

//     const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
//     console.log(jonasNew);

//     //demo of multi line string after ES6
//     console.log(
//       `string on many and multiple lines of code. This is confusing because I think I put in tabs the first time, which led to carriage returns when the string was displayed. Let us see how this one plays out.`
//     );
// finish of material from lesson 17 - strings and template literals.

//material for lesson 18 - taking decisions, if/else stataments is below.
/*
    const age = 15;

    When drawing up these controllers, the convenstion since ES6 is simply never to use "" to frame a string statement. The reason for this is
    to avoid lengthy code checking if you have to return later and put a link to a variable of some kind later. `` should always be used except when your string will contain a ` or ' for whatever reason, then use ""
    instead.

    if (age >= 18) {
      console.log("Sarah can start driving licence 😊");
    } else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
    }

    if (age >= 18) {
      console.log("Sarah can start driving licence 😊");
    } else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
    }

    if (age >= 18) {
      console.log("Sarah can start driving licence 😊");
    } else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
    }
    */
// 2nd coding challenge is on Main Jonas Coding challenges.js, in the folder with this file. This challlenge is lesson 19 of the course.

// beginning of material from lesson 20 - type conversion and coercion, is below.

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old);");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// let stephenName = "stonehouse";
// console.log(stephenName);
// //stephenName = 149;
// //console.log(stephenName - 10);
// console.log(`It is tru that his name was once ${stephenName}`);

// //the lesson number 21 'truthy and falsey values is below. '' is defined as an empty string.

// //falsey values are 5 in number - 0,
// //'', undefined, null, and NaN.
// /*extension of lesson 20 but involving booleans. The point is that only these five string types will be converted to FALSE when JS tries to convert the strings to booleans. Everything else will convert to TRUE in this case.*/

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(12 - 4));

// const money = 0;
// if (money) {
//   console.log(`Don't spend it all now`);
// } else {
//   console.log(`Go and find a job`);
// }
/*no matter what we put in, if it is not a boolean, Javascript will try to change it into one. Int the //world of JS logic, money is zero, and so money is a falsey value so it will be false. Any none- //falsey value will come up TRUE */

//try a diffrent scenario below.
// let height;
// if (height) {
//   console.log(`Yay!, height is defined`);
// } else {
//   console.log(`height is UNDEFINED`);
// }
// // end of lesson 21
//lesson 22 is below. This is equality operators lesson.

//const age = 18;
//if (age === 18) console.log(`You just became an adult`);
/*
    the big thing is that a single = is the assigment operator.
    then the double == is the loose equality operator.
    finally, the triple === is the strict equality operator.
    the strict is diffrent in that it does not perform type
    coercion. The == will perform type coercion for you.
    the best advice is never to use the double == operator, because
    this opens the door to confusion. Since ES6 this has been the
    convention. So train yourself always to use the triple operator.
    */

// const favourite = prompt(`What is your favourite number?`);
// console.log(favourite);
// console.log(typeof favourite);

//sometimes we need the `diffrent operator` (!==)
//and other times we need the equality operator.
//choose what you need on the spot.

// end of lesson 22.

//lesson 23 Boolean logic.
// no code writing involved in lecture 23, so no course work produced.
//end of lesson 23

// lesson 24 'Logical Operators'
// const hasDriversLicence = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(hasDriversLicence);

// const isTired = false; //C
// const shouldDrive = hasDriversLicence && hasGoodVision && isTired;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive...`);
// }

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive...`);
// }

//lesson 24 finishes here

// lesson 25 is a coding challenge 3 over on Mainjonascodingchallenges.js

//lesson 26 is below.It is called the Switch Statement

const day = `monday`;

switch (day) {
  case `monday`: //day = monday
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case `tuesday`:
    console.log(`Prepare theory videos`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`Write code examples`);
    break;
  case `friday`:
    console.log(`Record videos`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`Enjoy the weekend :p`);
    break;
  default:
    console.log(`Not a valid day`);
}
//finish of lesson 26

//lesson 27 is "Statements and expressions"
// the code for it is below.

// const me = "Jonas"; //this is an expression, as it produces a value
// console.log(`I'm ${2037 - 1991} years old ${me}`); //this is a statement, because it translates into an action, and ends with ;
// //end of lesson 27. Point made.

// //Lesson 28 The Conditional (Ternary, as in three parts) Operator.
// const age = 13;
// // age >= 18 ? `I like to drink wine 🍷` : `I like to drink water 💧`;
// //the above is an operator, or an expression. It produces a value.

// // a much more popular version of the above is below -

// const drink = age >= 18 ? ` wine 🍷` : ` water 💧`;
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = ` wine 🍷`;
// } else {
//   drink2 = ` water 💧`;
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? " wine 🍷" : " water 💧"}`);

// // end of lesson 28 - the conditional operator.
// // lesson 29 is a coding challenge, so on the other file.
// //lesson 30 is a Javascript History lesson, so no coding needed there
