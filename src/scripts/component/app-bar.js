/* eslint-disable no-underscore-dangle */
class AppBar extends HTMLElement {
  set title(title) {
    this._title = title;
    this.render();
  }

  render() {
    this.innerHTML = `<h1 class="header__title">${this._title}</h1>`;
  }
}

customElements.define('app-bar', AppBar);
