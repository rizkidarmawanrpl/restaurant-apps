import DataSettings from '../SETTINGS.json';

import Menu from './controllers/menu.js';
import Restaurant from './controllers/restaurant.js';

const main = () => {
    // Settings data
    const data_settings = DataSettings.settings;
    const metatitle = document.querySelector('title');
    const header_title = document.querySelector('#header-title');
    const footer = document.querySelector('#footer');
    const today = new Date();
    const tahun = today.getFullYear();

    metatitle.innerHTML = data_settings.sitetitle;
    header_title.innerHTML = data_settings.title;
    footer.innerHTML = `Copyright &copy; ${tahun} :: <span>${data_settings.title}</span>`;

    // Menu toggle
    const btnMenu = document.querySelector('#menu');
    const drawer = document.querySelector('#drawer');
    const main = document.querySelector('main');
    const hero = document.querySelector('.hero');
    const icon_default = document.querySelector('.icon-default');
    const icon_close = document.querySelector('.icon-close');

    const btnMenuToggle = () => {
        icon_default.classList.toggle('icon-default-event');
        icon_close.classList.toggle('icon-close-event');
    };

    btnMenu.addEventListener('click', function(event) {
        const menu_toggle = btnMenu.dataset.toggle;

        if(menu_toggle == 'false') {
            drawer.classList.toggle('nav-display');

            btnMenuToggle();

            setTimeout(function() {
                drawer.classList.toggle('open');
                btnMenu.dataset.toggle = true;
                event.stopPropagation();
            }, 100);

        } else {

            drawer.classList.toggle('open');

            btnMenuToggle();

            setTimeout(function() {
                btnMenu.dataset.toggle = false;

                drawer.classList.toggle('nav-display');
                event.stopPropagation();
            }, 200);
        }
    });

    main.addEventListener('click', function() {
        drawer.classList.remove('open');

        btnMenuToggle();

        setTimeout(function() {
            btnMenu.dataset.toggle = false;

            drawer.classList.remove('nav-display');
        }, 200);
    });

    hero.addEventListener('click', function() {
        drawer.classList.remove('open');

        btnMenuToggle();
        
        setTimeout(function() {
            btnMenu.dataset.toggle = false;

            drawer.classList.remove('nav-display');
        }, 200);
    });

    // Get list menu
    Menu.getDataMenu();

    // Get list restaurant
    Restaurant.getDataRestaurant();

    // Get list viral foods
    Restaurant.getMakananTerviral();
};

export default main;