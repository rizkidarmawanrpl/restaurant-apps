/* eslint-disable no-underscore-dangle */
class LinkAllButton extends HTMLElement {
  set buttons({ id, text }) {
    this._id = id;
    this._text = text;

    this.render();
  }

  render() {
    this.innerHTML = `<button type="button" class="btn btn-primary" id="${this._id}" data-toggle="false">${this._text}</button>`;
  }
}

customElements.define('link-all-button', LinkAllButton);
