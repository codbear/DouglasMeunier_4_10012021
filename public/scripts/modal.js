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
const $first = document.getElementById('first');
const $last = document.getElementById('last');
const $email = document.getElementById('email');
const $birthdate = document.getElementById('birthdate');
const $quantity = document.getElementById('quantity');
const $locations = document.querySelectorAll('input[type=radio]');
const $tcu = document.getElementById('checkbox1');

const form = new Form({
  firstName: new Field([$first], isLongEnough),
  lastName: new Field([$last], isLongEnough),
  email: new Field([$email], isEmail),
  birthdate: new Field([$birthdate], isBirthdate),
  quantity: new Field([$quantity], isQuantityValid),
  locations: new Field([...$locations], isOneChecked),
  tcu: new Field([$tcu], isChecked),
});

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
  const isValid = form.validate();
  if (isValid) {
    closeModal();
  }
}

