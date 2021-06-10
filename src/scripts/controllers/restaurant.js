import DataRestaurant from '../../DATA.json';
import DataMakananTerviral from '../../MAKANAN_TERVIRAL.json';

class Restaurant {
    static getDataRestaurant() {
        const data_restaurant = DataRestaurant.restaurants;
        const el = document.querySelector('#restaurant-list');

        let html = ``;
        data_restaurant.map(item => {
            html += `
                    <article class="restaurant-item">
                        <div class="restaurant-item__thumbnail">
                            <img src="${item.pictureId}" alt="${item.name}">
                        </div>
                        <div class="restaurant-item__lokasi">
                            <p>Kota ${item.city}</p>
                        </div>
                        <div class="restaurant-item__content">
                            <h2 class="restaurant-item__rating">Rating: <span>${item.rating}</span></h2>
                            <h1 class="restaurant-item__title">
                                <a href="#">${item.name}</a>
                            </h1>
                            <p class="restaurant-item__description">${item.description.replace(/^(.{330}[^\s]*).*/, "$1")}...</p>
                        </div>
                    </article>
            `;
        });

        el.innerHTML = html;
    }

    static getMakananTerviral() {
        const data_makanan = DataMakananTerviral.data;
        const el = document.querySelector('#viral-food-list');

        let html = ``;
        data_makanan.map(item => {
            html += `
                    <article class="viral-food-item">
                        <div class="viral-food-item__thumbnail">
                            <img src="${item.pictureId}" alt="${item.name}">
                        </div>
                        <div class="viral-food-item__content">
                            <h1 class="viral-food-item__title">
                                <a href="#">${item.name}</a>
                            </h1>
                            <h2 class="viral-food-item__resto">Resto: <span>${item.restaurant}</span></h2>
                            <p class="viral-food-item__description">${item.description}</p>
                        </div>
                    </article>
            `;
        });

        el.innerHTML = html;
    }
}

export default Restaurant;