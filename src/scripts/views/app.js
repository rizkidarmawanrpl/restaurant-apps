/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import SettingsInitiator from '../utils/settings-initiator';
import MenuInitiator from '../utils/menu-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    metatitle,
    sitetitle,
    footer,
    menu,
    buttonMenu,
    iconMenuDefault,
    iconMenuClose,
    drawer,
    hero,
    content,
  }) {
    this._metatitle = metatitle;
    this._sitetitle = sitetitle;
    this._footer = footer;
    this._menu = menu;
    this._buttonMenu = buttonMenu;
    this._iconMenuDefault = iconMenuDefault;
    this._iconMenuClose = iconMenuClose;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._buttonMenu,
      iconDefault: this._iconMenuDefault,
      iconClose: this._iconMenuClose,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });

    SettingsInitiator.init({
      metatitle: this._metatitle,
      sitetitle: this._sitetitle,
      footer: this._footer,
    });

    MenuInitiator.init({
      menu: this._menu,
    });
  }

  _customScroll() {
    const html = this._html;
    const { body } = document;

    body.scrollTop = 0;
    html.scrollTop = 0;

    let scrollValueOld = html.scrollTop;
    window.onscroll = () => {
      const scrollValueNew = html.scrollTop;
      const header = document.querySelector('header');

      if (scrollValueOld === 0 && scrollValueNew > 0) {
        header.classList.toggle('header-custom-scroll');
      }
      if (scrollValueOld > 0 && scrollValueNew === 0) {
        header.classList.remove('header-custom-scroll');
      }

      scrollValueOld = scrollValueNew;
    };
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();

    this._html = document.documentElement;
    this._customScroll();
  }
}

export default App;
