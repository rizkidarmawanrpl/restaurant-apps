/* eslint-disable no-underscore-dangle */
class MenuItem extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    const menu = this._menu;

    this.innerHTML = `
        <a href="${menu.link}" target="${menu.target}" rel="${menu.rel}">${menu.label}</a>
    `;
  }
}

customElements.define('menu-item', MenuItem);
