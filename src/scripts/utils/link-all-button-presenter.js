/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const LinkAllButtonPresenter = {
  init({
    buttonContainer,
    callbackAll,
    callbackLimit,
    iconAll,
    iconLimit,
  }) {
    this._buttonContainer = buttonContainer;
    this._callbackAll = callbackAll;
    this._callbackLimit = callbackLimit;
    this._iconAll = iconAll;
    this._iconLimit = iconLimit;

    this._renderButton();
  },

  _renderButton() {
    const dataToggle = this._buttonContainer.dataset.toggle;

    if (dataToggle === 'false') {
      this._buttonContainer.dataset.toggle = true;
      this._toggleIconLimit();
      this._callbackAll();
    } else {
      this._buttonContainer.dataset.toggle = false;
      this._toggleIconAll();
      this._callbackLimit();
    }
  },

  _toggleIconLimit() {
    this._buttonContainer.innerHTML = this._iconLimit();
  },

  _toggleIconAll() {
    this._buttonContainer.innerHTML = this._iconAll();
  },
};

export default LinkAllButtonPresenter;
