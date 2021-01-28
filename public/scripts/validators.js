const REGEX = {
  MAIL : /^[^\s@]+@[^\s@]+\.[^\s@]{2,5}$/,
  BIRTHDATE : /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/,
}

/**
 * Check length of an input's value
 *
 * @param {HTMLElement} field - Input to check
 * @returns {boolean}
 */
function isLongEnough(field) {
  return field.value.length >= 2;
}

/**
 * Check if an input's value is an email
 *
 * @param {HTMLElement} field - Input to check
 * @returns {boolean}
 */
function isEmail(field) {
  return REGEX.MAIL.test(field.value);
}

/**
 * Check if an input's value is a date
 *
 * @param {HTMLElement} field - Input to check
 * @returns {boolean}
 */
function isBirthdate(field) {
  return REGEX.BIRTHDATE.test(field.value);
}

/**
 * Check if an input's value is in a range
 *
 * @param {HTMLElement} field - Input to check
 * @returns {boolean}
 */
function isQuantityValid(field) {
  return field.value && field.value >= 0 && field.value <= 99;
}

/**
 * Check if an input is checked
 *
 * @param {HTMLElement} element - Input to check
 * @returns {boolean}
 */
function isChecked(element) {
  return element.checked;
}

/**
 * Check if one of the inputs in an array is checked
 *
 * @param {HTMLElement[]} elements - Array of input to check
 * @returns {boolean}
 */
function isOneChecked(elements) {
  return elements.some(element => element.checked);
}
