/* eslint-disable no-underscore-dangle */
import DataMenu from '../data/MENU.json';
import { createMenuTemplate } from '../views/templates/template-creator';

const MenuInitiator = {
  init({ menu }) {
    this._menu = menu;
    this._renderMenu();
  },

  _renderMenu() {
    const dataMenu = DataMenu.menus;
    const elMenu = this._menu;

    elMenu.menus = dataMenu;

    // dataMenu.forEach((menu) => {
    //   elMenu.innerHTML += createMenuTemplate(menu);
    // });
  },
};

export default MenuInitiator;
