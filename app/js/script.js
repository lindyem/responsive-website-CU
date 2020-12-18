const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const radioButtons = document.querySelectorAll('.testimonials__radioButtons')
const slidesNavigation = document.querySelector('.testimonials__slidesNavigation');
let cardIndex = 0;

btnHamburger.addEventListener('click', function () {
  console.log('open');
  if (header.classList.contains('open')) { //Close Hamburger
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
  else { //Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }  
});

slidesNavigation.addEventListener('click', function(e) {
  console.log(e.target);
  cardIndex = Number(e.target.id.split('-').pop()) - 1;
  console.log(cardIndex);
  updateArrows();
})

leftArrow.addEventListener('click', function() {
  if(cardIndex < 3) {
    cardIndex++;
    radioButtons[cardIndex].checked = true;
    updateArrows()
  }
})

rightArrow.addEventListener('click', function() {
  if(cardIndex > 0) {
    cardIndex--;
    radioButtons[cardIndex].checked = true;
    updateArrows()
  }
})


function updateArrows() {
  if(cardIndex === 0) {
    leftArrow.src = './images/arrowleft.png';
    leftArrow.style.transform = 'scaleX(1)';
    rightArrow.src = './images/arrowright.png';
    rightArrow.style.transform = 'scaleX(1)';
  } else if(cardIndex > 0 && cardIndex < 3) {
    leftArrow.src = './images/arrowleft.png';
    leftArrow.style.transform = 'scaleX(1)';
    rightArrow.src = './images/arrowleft.png';
    rightArrow.style.transform = 'scaleX(-1)';
  } else if(cardIndex === 3) {
    leftArrow.src = './images/arrowright.png';
    leftArrow.style.transform = 'scaleX(-1)';
    rightArrow.src = './images/arrowleft.png';
    rightArrow.style.transform = 'scaleX(-1)';
  }
}