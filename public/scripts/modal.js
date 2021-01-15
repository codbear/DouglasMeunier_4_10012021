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
const $form = document.getElementById('signUpForm');
const $formFirst = document.getElementById('first');
const $formLast = document.getElementById('last');
const $formEmail = document.getElementById('email');
const $formBirthdate = document.getElementById('birthdate');
const $formQuantity = document.getElementById('quantity');
const $formLocations = document.querySelectorAll('input[type=radio]');
const $formTCU = document.getElementById('checkbox1');

// Events handlers
modalBtn.forEach((btn) => btn.addEventListener('click', openModal));
modalClose.addEventListener('click', closeModal);
$form.addEventListener('submit', validate);

// Modal actions
function openModal() {
  modalbg.style.display = 'block';
}

function closeModal() {
  modalbg.style.display = 'none';
}

function validate(event) {
  event.preventDefault();

  const isValid = isFirstValid($formFirst.value)
    & isLastValid($formLast.value)
    & isEmailValid($formEmail.value)
    & isBirthdateValid($formBirthdate.value)
    & isQuantityValid($formQuantity.value)
    & isLocationValid($formLocations)
    & isTCUValid($formTCU);

  if (isValid) {
    closeModal();
  }
}

