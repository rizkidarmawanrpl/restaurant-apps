/* eslint-disable no-underscore-dangle */
import DataMenu from '../data/MENU.json';

const MenuInitiator = {
  init({ menu }) {
    this._menu = menu;
    this._renderMenu();
  },

  _renderMenu() {
    const dataMenu = DataMenu.menus;
    const menuElement = this._menu;

    menuElement.menus = dataMenu;
  },
};

export default MenuInitiator;
