'use strict';

//console.log(document.querySelector('.message').textContent);
// the above is to display HTML text in JS window.
//The above is the total JS code of lectures 68 to 71. The code beneath is lecture 72.
//Lecture 72 - Selecting and Manipulating Events.
//document.querySelector('.message').textContent = 'Correct Number!';

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 10;

//document.querySelector('.guess').value = 23;
//console.log(document.querySelector('.guess').value);

//end of lecture 72

//lecture 73 is below - Handling Click events.

/*
(So we used the query selector to add the 
'click' event to the button element, and then attached the eventhandler to it, called 'function'. This is the most basic level function expression, to keep things simple. After all, we have not even called the function, or saved the output to a variable. We have only defined the function, then passed it into the event handler.)
**
(however, now the javascript engine will call the function whenever, and only when, the event happens.) ***


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
*/
//end of lecture 73

//Lecture 74 is below- 'Implimenting the Game Logic'
/* We have to not only instruct the program what to do when the guess is correctly the secret number, but also when the guess is either too high or too low. */
/*
really we need to set up defining the secret number first. We must do that outside the hamdler function, to avoid chaos.
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // temporarily display the secret number, for dev purposes.
let score = 20; //declaring a score variable

//document.querySelector('.number').textContent = secretNumber;
//this displays secret number in box - hidden by default.

//the below builds functionality for the check button and window.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when input is absent
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    //secret number now appears in the box
    document.querySelector('.number').textContent = secretNumber;
    //screen goes green on a win
    document.querySelector('body').style.backgroundColor = '#60b347';
    //number goes bold on a win
    document.querySelector('.number').style.width = '30rem';
    //displays secret number in bold in the box

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // lecture 76 is below
  document.querySelector('.again').addEventListener;
  'click',
    function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;

      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.score').textContent = 'score:';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';

      document.querySelector('.body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    };
});
// end of lecture 74 'Implementing the game logic. (it took a little while")

//lecture 75 'Manipulating CSS styles' is below.

// lecture 76 with a coding challenge to get the 'again' //button working proerly is above.

/*The work to turn the screen green ona win and to expand the secret number box on a win is a matter of DOMmanipulation. The work no longer feels new to me, and soon I know I will be creating projects of my own and making them work right.
 */
