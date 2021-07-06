/* eslint-disable no-underscore-dangle */
class NotificationBar extends HTMLElement {
  set notification(teks) {
    this._notification = teks;
    this.render();
  }

  render() {
    this.innerHTML = `<div>${this._notification}</div>`;
  }
}

customElements.define('notification-bar', NotificationBar);
