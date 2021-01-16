const REGEX = {
  MAIL : /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  BIRTHDATE : /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/,
}

function isLongEnough(field) {
  return field.value.length >= 2;
}

function isEmail(field) {
  return REGEX.MAIL.test(field.value);
}

function isBirthdate(field) {
  return REGEX.BIRTHDATE.test(field.value);
}

function isQuantityValid(field) {
  return field.value >= 0 && field.value <= 99;
}

function isOneChecked(elements) {
  return elements.some(element => element.checked);
}
