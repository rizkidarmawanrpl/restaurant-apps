import DataSettings from '../data/SETTINGS.json';

const SettingsInitiator = {
  init({ metatitle, sitetitle, footer }) {
    const metatitleElement = metatitle;
    const sitetitleElement = sitetitle;
    const footerElement = footer;
    const dataSettings = DataSettings.settings;

    metatitleElement.innerHTML = dataSettings.sitetitle;
    sitetitleElement.title = dataSettings.title;
    footerElement.footer = dataSettings.footer;
  },
};

export default SettingsInitiator;
