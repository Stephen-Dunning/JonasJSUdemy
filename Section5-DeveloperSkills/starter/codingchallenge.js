"use strict";
//let r = 3 + 4;
//console.log(r);

//Stephens first construct.
//function printforcast() {
// console.log(
//    `...${arr[0]}OC in 1 days...${arr[1]}OC in //2 days...${arr[2]}OC in 3 days...${arr[3]}//OC in 4 days...${arr[4]}OC in 5 days...`
//  );
//}
//printforcast();

//Stephen's second construct.
/*
let arr = [17, 21, 23];
let i = 1;

function printforcast() {
  while (i <= arr.length) console.log(`...${arr[0]}OC in {i} days`);
  if (i === arr.length) break;
}
*/
// Jonas' construct is below the text which follows.
/*
Stephen began with setting up the function and consolelogging. The braces were a bit uncertain but I got it working. So fine for data 1.

BUt data 2 is a longer Array. Then the consolelog became incoherent with 'undefineds' all over the place and the problem was not solved. The challenge takes pains to point out how the output must look, and so the problem is not solved until the output is matching that asked for. 
*/
/*
Jonas began by listing all the requirements as problems. That seems to be the thinking these days. So a long list of things I would never have considered as problems appears on the page.

But he is trying to teach us how to face coding tasks. So you do see his logic after a few assignments. You must see yourself as a problem solver, and not as a programmer or a developer.
So he summons us to go and find ALL the problems, list them, then break them down into smaller problems, and then think how to solve them ALL.

After all, I was able to construct a thing which almost worked, but not quite - whereas Jonas' solution was diffrent to what I had done, but not far removed. It was more complex, but also more foolproof, and solved ALL the problems.
*/

//OK below is Jonas' full solution.
//____________________________________

// 1. Understand the problem
// Array transformed to string, separated by ...
// what is the x-days? answer = index + 1

// 2. Breaking up into sub-problems
// transform the array into a string.

// each element in array transformed to
// a string with OC

// string needs to contain day
// and dots between start and end of string
// console.log the results

// problem list above
// solution below

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//`$data1[0]OC...` // a good start
//`$data1[0]OC...``$data1[0]OC...``$data1[0]OC...`;
// loggable and usable, but will not work for data2. A more dynamic way is needed.

//the below takes each element of data to an empty string with an acumulator variable beginning with 'zero for strings' - the empty string.
// so with each iteration of the function, we will add the current value of data to this string, which can then be logged to console.
// Jonas shows how a basic function is built, and then enriched and tweaked to solve all the problems

const printForcast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}OC in ${i + 1} days ... `;
  }
  console.log(`...` + str);
};
printForcast(data1);

//SO this whole section of the Javascript course is finished.
______________________________________________;
