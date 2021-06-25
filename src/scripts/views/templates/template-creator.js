import CONFIG from '../../globals/config';
import { initialName } from '../../utils/fun-helper';

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
    <div class="restaurant-detail__thumbnail">
        <img src="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}">
    </div>
    <div class="restaurant-detail__content">
        <h1 class="restaurant-detail__title">${restaurant.name}</h1>
        <div class="restaurant-detail__category">
            ${restaurant.categories.map((categorie) => `<span>${categorie.name}</span>`).join('')}
        </div>
        <h2 class="restaurant-detail__rating">
            <span>Rating</span> <i class="fa fa-star"></i> ${restaurant.rating}
        </h2>
        <p class="restaurant-detail__description">
            ${restaurant.description}    
        </p>
    </div>
    <div class="restaurant-detail__address">
        <h1 class="restaurant-detail__address-title">Kota</h1>
        <p>${restaurant.city}</p>
        <h1 class="restaurant-detail__address-title">Alamat</h1>
        <p>${restaurant.address}</p>
    </div>
`;

const createRestaurantDetailMenuFoodTemplate = (food) => `
    <div class="menu-utama__food-item">
        <h1 class="menu-utama__food-item__title">${food.name}</h1>
    </div>
`;

const createtRestaurantDetailMenuDrinkTemplate = (drink) => `
    <div class="menu-utama__drink-item">
        <h1 class="menu-utama__drink-item__title">${drink.name}</h1>
    </div>
`;

const createCustomerReviewTemplate = (customerReview) => `
    <div class="customer-review__item">
        <div class="customer-review__item-thumbnail">
            <h2>${initialName(customerReview.name)}</h2>
        </div>
        <h1 class="customer-review__item-name">${customerReview.name}</h1>
        <p class="customer-review__item-review">${customerReview.review}</p>
        <p class="customer-review__item-date">${customerReview.date}</p>
    </div>
`;

export {
  createMenuTemplate,
  createRestaurantItemTemplate,
  createViralFoodTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailMenuFoodTemplate,
  createtRestaurantDetailMenuDrinkTemplate,
  createCustomerReviewTemplate,
};
