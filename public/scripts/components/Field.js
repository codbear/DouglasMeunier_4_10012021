class Field {
  constructor(nodes, validator) {
    this.nodes = [...nodes];
    this.validator = validator;
    this.formData = this.nodes[0].parentElement;
  }

  validateField() {
    let isValid

    if (this.nodes.length > 1) {
      isValid = this.validator(this.nodes);
    } else {
      isValid = this.validator(this.nodes[0]);
    }

    this.toggleErrorVisible(isValid);

    return this;
  }

  setFieldError(errorMessage) {
    this.formData.dataset.error = errorMessage;
    this.toggleErrorVisible(false);
  }

  toggleErrorVisible(isValid) {
    this.formData.dataset.errorVisible = isValid;
  }
}