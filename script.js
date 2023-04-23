'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new'); 
const btnRoll = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--new');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//rolling dice functionality
btnRoll.addEventListener('click', function() {
//1. generating a random dice roll
//let us geerate a randome dice roll

// 2. display dice
//difficult to get this done properly - must stop fibbing to everone.
//check for rolled 1: if true, switch to next player
})