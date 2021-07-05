/* eslint-disable no-underscore-dangle */
class FooterBar extends HTMLElement {
  set footer(footer) {
    this._footer = footer;
    this.render();
  }

  render() {
    this.innerHTML = `<p>${this._footer}</p>`;
  }
}

customElements.define('footer-bar', FooterBar);
