import DataSettings from '../data/SETTINGS.json';

const SettingsInitiator = {
  init({ metatitle, sitetitle, footer }) {
    const elMetatitle = metatitle;
    const elSitetitle = sitetitle;
    const elFooter = footer;
    const dataSettings = DataSettings.settings;

    elMetatitle.innerHTML = dataSettings.sitetitle;
    elSitetitle.innerHTML = dataSettings.title;
    elFooter.innerHTML = dataSettings.footer;
  },
};

export default SettingsInitiator;
