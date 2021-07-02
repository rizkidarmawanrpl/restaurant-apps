/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    button,
    iconDefault,
    iconClose,
    drawer,
    hero,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._buttonMenuToggle(iconDefault, iconClose);
      this._toggleDrawer(event, button, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._buttonMenuToggle(iconDefault, iconClose);
      this._closeDrawer(event, button, drawer);
    });

    content.addEventListener('click', () => {
      // this._buttonMenuToggle(iconDefault, iconClose);
      // this._closeDrawer(event, button, drawer);
    });
  },

  _toggleDrawer(event, button, drawer) {
    const elButton = button;
    const menuToggle = elButton.dataset.toggle;

    event.stopPropagation();

    if (menuToggle === 'false') {
      drawer.classList.toggle('nav-display');
      this._displayTrueDrawer(button, drawer);
    } else {
      drawer.classList.toggle('open');
      this._displayFalseDrawer(button, drawer);
    }
  },

  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
    this._displayFalseDrawer(button, drawer);
  },

  _buttonMenuToggle(iconDefault, iconClose) {
    iconDefault.classList.toggle('icon-default-event');
    iconClose.classList.toggle('icon-close-event');
  },

  _displayTrueDrawer(button, drawer) {
    const elButton = button;

    setTimeout(() => {
      drawer.classList.toggle('open');
      elButton.dataset.toggle = true;
    }, 200);
  },

  _displayFalseDrawer(button, drawer) {
    const elButton = button;

    setTimeout(() => {
      elButton.dataset.toggle = false;
      drawer.classList.toggle('nav-display');
    }, 200);
  },
};

export default DrawerInitiator;
