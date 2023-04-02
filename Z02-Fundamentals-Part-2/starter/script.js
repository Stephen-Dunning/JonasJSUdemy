"use strict";

/* lesson 31 is the opener to this section, hence this file. This was about what the section contains and has no code work. Lesson 32 was about strict mode and again had no code work. 
// Lesson 33 is about funactions and is below.
// The sequence of function construction is to declare, name, add parameters (or arguments) build the process, then use the 'return' declaration to channel the output, and finally to call the function. Other words for call are 'running' and 'invoking', and it also involves printing the output, if required.
*/
/*
function fruitprocessor(apples, oranges, lemons) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples, ${oranges} oranges, and ${lemons} lemons`;
  return juice;
}

const applejuice = fruitprocessor(5, 6, 0);
console.log(applejuice);

const appleOrangeJuice = fruitprocessor(2, 4, 3);
console.log(appleOrangeJuice);

//the above are function declarations.
//end of lesson 33

//lesson 34 Functon declarations and Function expressions.
/*
//the below is the most basic function declaration. It does not return to a variable and does not connect to any other code.
function calcAge1(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcAge1(1991);

//Function expression is below. The diffrences are very slight, and it is reallty a matter of taste as to which is used. I would prefer expressions as a coder. It forces me to keep my code neat.
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

Function declarations and expressions both have their place in Javascript, and so it is important that you know how to use them both, and tell one from the other. Changing one into another is possible, and no judgment should be made as to efficacy of one compared to the other.*/

//end of lesson 34.

//lesson 35 is below, it is called 'Arrow Functions'
// this was added to JS with ES6 in 2015.
//The arrow is a function expression which is designed to be shorter and faster to write.

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
//here, there is output without us having to write the return keyword.
//also there is no need for parentheses, such as curly braces.
//the entire function can be seen in full on line 46.

//ofcourse the above is the simplest form, where there is only one parameter
// (birthYear) and only one line of code in which we want to return something.

//below is when things get a bit more complex when we want to add more
//parameters and hence more code.
//const yearsUntilRetirement = (birthYear, firstName) => {
//arrow function declaration
//const age = 2037 - birthYear; //decalre a variable for input
//const retirement = 65 - age; //declare a variable for output
//return retirement; //return output.
//return `${firstName} retires in ${retirement} years`;
//};

//console.log(yearsUntilRetirement(1991, `Stephen`)); //log output to the console
//console.log(yearsUntilRetirement(1980, `Bob`));
//after capturing it in a variable.
//the above is when more lines of code are needed, with more than one
//parameter, and the curly braces also must make a comeback.
// just with birthYear, one parameter, the () marks were optional. But now //there is a second parameter, firstName, so () must come in.
/*
Arrow functions are ok for lower order function writing, but unlike function expressions and and statements, arrow functions do not ahev facility for the this.keyword operation....this is very important later... */

//end of lesson 35.
//lesson 36 - 'Functions calling other Functions'

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// //a function which requires an earllier process to chop fruit
// //before mixing the juice.
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(4, 3));

// it is very common for functions to call other functions in JS. Having this kind of layout helps to ensure the DRY principal is ahered to. The functions also lend themselves easily to expansion, with extra arguments easily inserted as needs demand.

//end of lesson 36.
//lesson 37, Reviewing functions using the retirement function
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} is already retired 🎉`);
    return -1;
  }
  //with the 'return' line, the function ceases to operate.
  //therefore any code written within curly braces after the return //statement will be ignored...
  //return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));
*/
//it is very normal for functions to inpout data, transform data, and then
//output Data, and in that order, no matter which function type you are //using.

//end of lesson 37, Reviewing Functions.
//lesson 38 is a coding challenge, see other file.

//lesson 39 is below, and is entitled 'Introduction to Arrays.'

//const friend = 'Michael';
//const friend = 'Steven';
//to store sata we use Data Structures, which in JS are Arrays and Objects.

// so we put our friends in an array - using [] instead of curly braces {} or
// parentheses ().
/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// a second method of building an array (albeit less popular), is as below;

//const years = new Array(1991, 1984, 2008, 2020);
//console.log(years);
// the top one is called literal syntax, which is the norm.

console.log(friends[0]);
console.log(friends[2]);
// count elements in the array -
console.log(friends.length);
// the above is not zero based.
//below is to retrieve the index of the LAST element in an array -
console.log(friends[friends.length - 1]);
// remember the [] must contain an expression, and cannot contain a statement. But it can contain ANY expression.

//to mutate the array, ie, to unfriend Peter is below.
friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']

// arrays can hold items with varying data types and functions. eg -
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//above are the basics of Arrays.
//below is a simple exercise to test your learning.

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age4);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
//you see that Javascript works the three function calls, and then neatly //puts the three results into an array for orderly presentation.
*/
//end of lesson 39 - Introduction o arrays

//below is lesson 40 - Basic Array Operators (Methods)

// const friends = ["Michael", "Steven", "Peter"];
// // add elements
// friends.push("Jay");
// console.log(friends);
// //so 'push' adds elements to the end of an array, and 'unshift' adds to the beginning of the array.
// friends.unshift("John");
// console.log(friends);

// //now to remove elements
// friends.pop();
// console.log(friends);
// // pop removes from the end.
/*
//the opposite of unshift, which is 'shift',
//removes from the beginning of the Array.
friends.shift();
console.log(friends);

//now to find the index no of an element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // returns -1

//now to ask if the element is in the array at all -
friends.push(23);
console.log(friends.includes("Steven")); //rtns true
console.log(friends.includes("Bob")); //rtns false
console.log(friends.includes(23)); //rtns true

//try an if/else
if (friends.includes("Steven")) {
  console.log`You have a friend called Steven`;
} else {
  console.log`Steven is not onboard`;
}
//end of lesson 40 - Basic array operators

// lesson 41 is a coding challenge
*/
//lesson 42 - Introduction to Objects.
/* the big point to be made about objects is that they are a data structure in which the elements can receive individual labels, or keys, becoming their qualities, or values. This is not possible in arrays. The object can contain large numbers of these 'value pairs', or 'properties, which have values'.
The curly braces, or Object Literal Syntax, is the usual way of building an object. Le tit be also seen that when you log the object to the console, the elements are listed by alphabetical order of their key names.*/

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

/* The really big diffrence between arrays and objects is that the order or position of the values or properties in an array is vital, but in an object it does not matter at all. Remember that elements in arrays can only be accessed by their positions. There is none of that in objects.

So the big take home is that we should use arrays for more ordered data, and objects for more unstructured data.
*/
//end of lesson 42
/*
//lesson 43 is dot and bracket notation.
//These two notations are used to draw items from an object. They can then by stored in a variable or printed to console, or both.
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = `Name`;
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
/*
console.log(jonas.'last' + nameKey); 
The line 261 does not work because the dot.notation must have an actual property name from the object, in order to draw out it's value. 
'name key' is NOT a property name within jonas object. In contrast to this, the bracket notation on 258 and 259 is fine with whatever you want to put inside the brackets, on condition that it is with the 'key' label. If nothing is there that matches, the bracket notation will still work, but will return 'undefined'. Remember that both notations are in use, and the dot notation is used more often.
*/

//introducing the prompt window idea.

// const interestedIn = prompt(
//   "What do you want to know more about Jonas? Choose between firstName, lastName, job, age, twitter, location and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, job, age, twitter, location and friends"
//   );
// }

//below is to add properties to the object.
// jonas.location = "Portugal"; //using dot notation
// jonas["twitter"] = "@jonasschmedtman"; //using bracket notation
// // a small. quick challenge.
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
//);

// end of lesson 43 - dot and bracket notation

//lesson 44 is called Object Methods
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

  const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};
console.log(jonas.calcAge());
*/
/* a huge take home is the above secures the this. operation,
and as long as you invoke an element contained in this Object, the this. operation will be perfectly persistent. The this. operator is a key feature of the DRY Rule, and also a key feature of persistence of objects.DRY
*/

//end of lesson 44

//lesson 45 is a coding challenge.

//lesson 46 is Iteration - The For Loop...

/* Jonas uses the analogy of the gym, with the repetition of the exercise operation. The point is that when you have to repeat an operation for a known number of times, which can be from once to near-infinite, the for loop is the perfect tool to use. */

//note that the loop keeps running while the conditon is true.
//for (let rep = 0; rep <= 10; rep++) {
//  console.log(`lifting weights repitition ${rep}`);
//}
/*
You see that the upper line beginning ´for´ is naming the loop, then naming the ´counter´. Then it gives the counter a starting value. Then the condition for the operation to work is spelled out. Best to see it as a boolean, a logical statement which will be read as a boolean and the operation will continue until the statement is met and the boolean changes from true to false. THEN the operation will stop. 

Final part of upper line is to increment the counter by whatever increment you wish to employ ; 

So the lower line is the operation you wish to take place. It can be anything and no need to log it to the console. So use your imagination and see how it can be. The above example is just to print the string to the console. 
*/
//end of lesson 46.

//Lesson 47 - Looping arrays, breaking and continuing.
//note that this array is framed by [], not a function  {}.
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = {}; //create empty array to store types.

// reading from jonas array.
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // filling from tyoes array.

  //moving on from merely reading the array, to
  //setting up a new empty array to console.log
  // the types more clearly, on line 347. Not done normally but
  //very good for an academic exercise.
  types[i] = typeof jonas[i]; //set up the counter for empty array.
}

console.log(types); //logging filled up array to the console.

// a more practical example is the calculating of ages from birth //years.
const years = [1991, 2007, 1969, 2020, 1845];
const ages = []; // another empty array for the ages.

for (let i = 0; i < years.length; i++) {
  //setting up the loop
  ages.push(2037 - years[i]); //pushing values into the empty array.
}
console.log(ages); //logging to the console.
//the trick is to work the loop repeatedly to match each member of //the array to the function, then log the result to the new array.
//It simply works properly that way, and errors are more easily //seen //and solved.

// demo of the 'continue' rule. This way a particular type of
//input could be ignored, (or used exclusively) if so desired.
console.log("------ONLY STRINGS--------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}
//below os a demo of the break rule - say we want the operation to
//stop immeadiatly if a number is encountered.
console.log("----BREAK WITH NUMBER----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
*/
// the important take home is to know how to loop through
// an array. So lines 364-371 are really vital.

//End of lesson 47 - 'Looping, breaking and continuing'

//Lesson 48 - Loops within loops and looping backwards.
//JOnas calls it 'more fun with arrays'

//A backwards loop is below.
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}
*/
// end of lecture 48

//lecture 49 is about the 'While' loop.
let rep = 1;
//while (rep = <= 10)
//   (let rep = 0; rep <= 10; rep++) {
//   console.log(`lifting weights repitition ${rep}`);
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end`);
}

// end of Lesson 49 "The While loop"
// Lesson 50 is a coding challenge so end of this File.
// _________________________________________________
