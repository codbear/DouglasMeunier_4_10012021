class Field {
  constructor(nodes, validator) {
    this.nodes = nodes;
    this.validator = validator;
    this.formData = this.nodes[0].parentElement;
  }

  validateField(callback = () => {}) {
    let isValid

    if (this.nodes.length > 1) {
      isValid = this.validator(this.nodes);
    } else {
      isValid = this.validator(this.nodes[0]);
    }

    this.toggleErrorVisible(isValid);

    callback(isValid);
  }

  toggleErrorVisible(isValid) {
    this.formData.dataset.errorVisible = isValid ? 'false': 'true';
  }
}