import CONFIG from '../../globals/config';

const createMenuTemplate = (menu) => `
    <li class="nav__item"><a href="${menu.link}" target="${menu.target}">${menu.label}</a></li>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <div class="restaurant-item__thumbnail">
            <img src="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="restaurant-item__lokasi">
            <p>Kota ${restaurant.city}</p>
        </div>
        <div class="restaurant-item__content">
            <h2 class="restaurant-item__rating">Rating: <span>${restaurant.rating}</span></h2>
            <h1 class="restaurant-item__title">
                <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
            </h1>
            <p class="restaurant-item__description">${restaurant.description.replace(/^(.{330}[^\s]*).*/, '$1')}...</p>
        </div>
    </article>
`;

const createViralFoodTemplate = (food) => `
    <article class="viral-food-item">
        <div class="viral-food-item__thumbnail">
            <img src="${food.pictureId}" alt="${food.name}">
        </div>
        <div class="viral-food-item__content">
            <h1 class="viral-food-item__title">
                <a href="#">${food.name}</a>
            </h1>
            <h2 class="viral-food-item__resto">Resto: <span>${food.restaurant}</span></h2>
            <p class="viral-food-item__description">${food.description}</p>
        </div>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    ${restaurant.name}
    <hr>
    ${restaurant.description}
`;

export {
  createMenuTemplate,
  createRestaurantItemTemplate,
  createViralFoodTemplate,
  createRestaurantDetailTemplate,
};
