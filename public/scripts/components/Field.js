class Field {

  /**
   * Instantiate a field
   *
   * @constructor
   * @param {HTMLElement[]} nodes - An array of input
   * @param {Function} validator - A function to validate field
   */
  constructor(nodes, validator) {
    this.nodes = nodes;
    this.validator = validator;
    this.formData = this.nodes[0].parentElement;
  }

  /**
   * Triggers field validation
   *
   * @returns {Boolean} isValid - A boolean representing the validity of the field
   */
  validateField() {
    let isValid

    if (this.nodes.length > 1) {
      isValid = this.validator(this.nodes);
    } else {
      isValid = this.validator(this.nodes[0]);
    }

    this.formData.dataset.errorVisible = !isValid;

    return isValid;
  }
}