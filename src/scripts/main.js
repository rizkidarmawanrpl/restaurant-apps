import DataSettings from '../SETTINGS.json';

import Menu from './controllers/menu.js';
import Restaurant from './controllers/restaurant.js';

const main = () => {
    // Settings data
    const data_settings = DataSettings.settings;
    const metatitle = document.querySelector('title');
    const header_title = document.querySelector('#header-title');
    const footer = document.querySelector('#footer');

    metatitle.innerHTML = data_settings.sitetitle;
    header_title.innerHTML = data_settings.title;
    footer.innerHTML = `Copyright &copy; 2020 :: <span>${data_settings.title}</span>`;

    // Get list menu
    Menu.getDataMenu();

    // Get list restaurant
    Restaurant.getDataRestaurant();
};

export default main;