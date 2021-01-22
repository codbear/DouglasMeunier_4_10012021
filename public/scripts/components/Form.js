class Form {

  /**
   * Instantiate a form
   *
   * @constructor
   * @param {Object} fields - An object containing the fields of the form
   */
  constructor(fields) {
    this.fields = fields;
  }

  /**
   * Triggers form validation
   *
   * @returns {Boolean}
   */
  validate() {
    let isValid = true;
    Object.keys(this.fields).forEach(field => isValid = this.fields[field].validateField() && isValid);

    return isValid;
  }
}