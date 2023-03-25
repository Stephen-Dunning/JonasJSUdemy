'use strict';
// lecture 79 Project 2 Intro - Modal WIndow 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

  for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeModal = function() {
  modal.classList.add('hidden');  
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Lesson 81 Escape key event

