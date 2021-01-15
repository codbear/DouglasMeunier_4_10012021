function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalClose = modalbg.querySelector('.close')
const formData = document.querySelectorAll('.formData');

// launch modal events
modalBtn.forEach((btn) => btn.addEventListener('click', openModal));
modalClose.addEventListener('click', closeModal);


// launch modal form
function openModal() {
  modalbg.style.display = 'block';
}

function closeModal() {
  modalbg.style.display = 'none';
}


