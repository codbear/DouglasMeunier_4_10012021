class Form {

  constructor(fields) {
    this.fields = fields;
    this.isValid = false;
    this.isValidating = false;
    this.setFormError = this.setFormError.bind(this);
  }

  validate() {
    this.isValidating = true;
    this.isValid = true;
    Object.keys(this.fields).forEach(field => this.fields[field].validateField(this.setFormError));
    this.isValidating = false;

    return this.isValid && !this.isValidating;
  }

  setFormError(isValid) {
    if (!isValid) {
      this.isValid = false;
    }
  }
}