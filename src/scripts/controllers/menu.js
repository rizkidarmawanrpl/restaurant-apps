import DataMenu from '../../MENU.json';

class Menu {
    static getDataMenu() {
        const data_menu = DataMenu.menus;
        const el = document.querySelector('#menu-list');

        let html = ``;
        data_menu.map(item => {
            html += `<li class="nav__item"><a href="${item.link}" target="${item.target}">${item.label}</a></li>`;
        });

        el.innerHTML = html;
    }
}

export default Menu;