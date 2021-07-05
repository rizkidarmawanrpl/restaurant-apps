/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import './menu-item';

class MenuList extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<p class="no-data">${message}</p>`;
    console.log(message);
  }

  render() {
    this.innerHTML = '';
    this._menus.forEach((menu) => {
      const menuItemElement = document.createElement('menu-item');
      menuItemElement.menu = menu;
      this.appendChild(menuItemElement);
    });
  }
}

customElements.define('menu-list', MenuList);
