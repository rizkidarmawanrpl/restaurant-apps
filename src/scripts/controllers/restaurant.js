import DataRestaurant from '../../DATA.json';

class Restaurant {
    static getDataRestaurant() {
        const data_restaurant = DataRestaurant.restaurants;
        const el = document.querySelector('#restaurant-list');

        let html = ``;
        data_restaurant.map(item => {
            html += `
                    <article class="restaurant-item">
                        <img class="restaurant-item__thumbnail" src="${item.pictureId}" alt="${item.name}">
                        <div class="restaurant-item__lokasi">
                            <p>${item.city}</p>
                        </div>
                        <div class="restaurant-item__content">
                            <h2 class="restaurant-item__rating">Rating: <span>${item.rating}</span></h2>
                            <h1 class="restaurant-item__title">
                                <a href="#">${item.name}</a>
                            </h1>
                            <p class="restaurant-item__description">${item.description.replace(/^(.{350}[^\s]*).*/, "$1")}...</p>
                        </div>
                    </article>
            `;
        });

        el.innerHTML = html;
    }
}

export default Restaurant;