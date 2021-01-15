const REGEX = {
  MAIL : /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  BIRTHDATE : /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/,
}

function isLongEnough(stringToCheck, minLength) {
  return stringToCheck.length >= minLength;
}

function isFirstValid(first) {
  return isLongEnough(first, 2);
}

function isLastValid(last) {
  return isLongEnough(last, 2);
}

function isEmailValid(email) {
  return REGEX.MAIL.test(email);
}

function isBirthdateValid(birthdate) {
  return REGEX.BIRTHDATE.test(birthdate);
}

function isQuantityValid(quantity) {
  return quantity >= 0 && quantity <= 99;
}

function isLocationValid(locations) {
  return [...locations].some(location => location.checked);
}

function isTCUValid(tcuCheckboxElement) {
  return tcuCheckboxElement.checked;
}