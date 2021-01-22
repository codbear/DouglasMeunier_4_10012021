// DOM elements
const $modal = document.querySelector('.bground');
const $modalTriggers = document.querySelectorAll('.modal-btn');
const $form = document.getElementById('signUpForm');
const $first = document.getElementById('first');
const $last = document.getElementById('last');
const $email = document.getElementById('email');
const $birthdate = document.getElementById('birthdate');
const $quantity = document.getElementById('quantity');
const $locations = document.querySelectorAll('input[type=radio]');
const $tcu = document.getElementById('checkbox1');
const modal = new Modal($modal);

// Form instantiation
const form = new Form({
  firstName: new Field([$first], isLongEnough),
  lastName: new Field([$last], isLongEnough),
  email: new Field([$email], isEmail),
  birthdate: new Field([$birthdate], isBirthdate),
  quantity: new Field([$quantity], isQuantityValid),
  locations: new Field([...$locations], isOneChecked),
  tcu: new Field([$tcu], isChecked),
});

// Open modal event
$modalTriggers.forEach((btn) => btn.addEventListener('click', modal.open));

// Form submit event
$form.addEventListener('submit', validate);

/**
 * Triggers form validation and display success message if form is valid
 *
 * @param {Event} event
 */
function validate(event) {
  event.preventDefault();

  if (form.validate()) {
    modal.success();
  }
}

