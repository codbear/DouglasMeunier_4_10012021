class Modal {

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

  open() {
    this.modal.style.display = 'block';
  }

  close() {
    this.modal.style.display = 'none';
  }

  success() {
    this.body.style.display = 'none';
    this.successMessage.style.display = 'block';
  }
}