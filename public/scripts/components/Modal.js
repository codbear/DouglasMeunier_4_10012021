class Modal {

  /**
   * Instantiate a modal box
   *
   * @constructor
   * @param {HTMLElement} modalElement - The HTML element containing the modal box
   */
  constructor(modalElement) {
    this.modal = modalElement;
    this.closeButton = this.modal.querySelector('.close');
    this.body = this.modal.querySelector('.modal-body');
    this.successMessage = this.modal.querySelector('.modal-success');
    this.closeSuccessMessage = this.successMessage.querySelector('.btn-close');
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.body.style.display = 'block';
    this.successMessage.style.display = 'none';

    this.closeButton.addEventListener('click', this.close);
    this.closeSuccessMessage.addEventListener('click', this.close);
  }

  /**
   * Open modal box
   */
  open() {
    this.modal.style.display = 'block';
  }

  /**
   * Close modal box
   */
  close() {
    this.modal.style.display = 'none';
  }

  /**
   * Display success message
   */
  success() {
    this.body.style.display = 'none';
    this.successMessage.style.display = 'block';
  }
}