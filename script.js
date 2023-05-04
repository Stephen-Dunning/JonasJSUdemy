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
const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// 2. display dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

// 3. check the rolled dice

// add dice to the current score

// switch to next player
});