class Modal {

  constructor(modalElement) {
    this.modal = modalElement;
    this.closeButton = this.modal.querySelector('.close');
    this.content = this.modal.querySelector('.content');
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.closeButton.addEventListener('click', this.close);
  }

  open() {
    this.modal.style.display = 'block';
  }

  close() {
    this.modal.style.display = 'none';
  }

  success() {
    this.content.innerHTML = '<p>Merci ! <br/> Votre réservation a été reçue</p>';
  }
}