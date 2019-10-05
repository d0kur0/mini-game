export default class popupControl {
  popupInstance;
  closeButtonInstance;
  openButtonInstance;

  get popup () {
    if (!this.popupInstance) {
      this.popupInstance = document.querySelector('.popup-control');
    }

    return this.popupInstance;
  }

  get openButton () {
    if (!this.openButtonInstance) {
      this.openButtonInstance = document.querySelector('.popup-control-open');
    }

    return this.openButtonInstance;
  }

  get closeButton () {
    if (!this.closeButtonInstance) {
      this.closeButtonInstance = document.querySelector('.popup-control-close');
    }

    return this.closeButtonInstance;
  }

  open () {
    this.popup.classList.add('ui-overlay-open');
  }

  close () {
    this.popup.classList.remove('ui-overlay-open');
  }

  static initialEvents () {
    const self = new popupControl;

    self.closeButton.addEventListener('click', event => self.close());
    self.openButton.addEventListener('click', event => self.open());
  }
}