/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import '../component/link-all-button';

const LinkAllButtonPresenter = {
  init({
    allLinkContainer,
    buttonData: { id, text },
    callbackAll,
    callbackLimit,
    iconAll,
    iconLimit,
  }) {
    this._allLinkContainer = allLinkContainer;
    this._buttonId = id;
    this._buttonText = text();

    const _callbackAll = callbackAll;
    const _callbackLimit = callbackLimit;
    const _iconAll = iconAll;
    const _iconLimit = iconLimit;

    this._renderButton(_callbackAll, _callbackLimit, _iconAll, _iconLimit);
  },

  _renderButton(_callbackAll, _callbackLimit, _iconAll, _iconLimit) {
    this._allLinkContainer.buttons = {
      id: this._buttonId,
      text: this._buttonText,
    };

    const button = document.querySelector(`#${this._buttonId}`);

    button.addEventListener('click', () => {
      const dataToggle = button.dataset.toggle;

      if (dataToggle === 'false') {
        this._renderAll(button, _callbackAll, _iconLimit);
      } else {
        this._renderLimit(button, _callbackLimit, _iconAll);
      }
    });
  },

  _renderAll(button, _callbackAll, _iconLimit) {
    const buttonContainer = button;

    buttonContainer.dataset.toggle = true;
    this._toggleIconLimit(button, _iconLimit);
    _callbackAll();
  },

  _renderLimit(button, _callbackLimit, _iconAll) {
    const buttonContainer = button;

    buttonContainer.dataset.toggle = false;
    this._toggleIconAll(button, _iconAll);
    _callbackLimit();
  },

  _toggleIconLimit(button, _iconLimit) {
    const buttonContainer = button;

    buttonContainer.innerHTML = _iconLimit();
  },

  _toggleIconAll(button, _iconAll) {
    const buttonContainer = button;

    buttonContainer.innerHTML = _iconAll();
  },
};

export default LinkAllButtonPresenter;
