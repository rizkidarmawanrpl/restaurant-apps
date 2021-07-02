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
                <p>${food.name}</p>
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

const createFavoriteButtonTemplate = () => `
    <div class="restaurant-favorite__item">
        <h1 class="restaurant-favorite__title">Kamu Suka Banget Sama Resto Ini Ya...? Ciee Mau Jadi Langganan Setia.</h1>
    </div>
    <div class="restaurant-favorite__item">
        <h2 class="restaurant-favorite__subtitle">Yuk, jadiin resto ini resto favorit kamu</h1>
    </div>
    <div class="restaurant-favorite__item">
        <div class="restaurant-favorite__button">
            <button aria-label="Resto favorite" id="favorite-button" class="btn btn-primary">
                <i class="fa fa-heart" aria-hidden="true"></i> &nbsp; Suka
            </button>
        </div>
    </div>
`;

const createFavoritedButtonTemplate = () => `
    <div class="restaurant-favorite__item">
        <h1 class="restaurant-favorite__title">Yey! Resto ini jadi favorite kamu... Ciee Jadi Langganan Setia ;)</h1>
    </div>
    <div class="restaurant-favorite__item">
        <h2 class="restaurant-favorite__subtitle">Klik, udah bukan resto favorite kamu lagi...?</h1>
    </div>
    <div class="restaurant-favorite__item">
        <div class="restaurant-favorite__button">
            <button aria-label="Bukan resto favorite" id="favorite-button" class="btn btn-primary">
                <i class="fa fa-heart liked" aria-hidden="true"></i> &nbsp; Suka
            </button>
        </div>
    </div>
`;

const createNotificationTemplate = () => '<div id="notification" class="snackbar">Some text some message..</div>';

const createPlaceholderRestaurantTemplate = () => `
    <article class="restaurant-item">
        <div class="restaurant-item__thumbnail">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-picture"></div>
                </div>
            </div>
        </div>
        <div class="restaurant-item__content">
            <div class="restaurant-item__rating">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="restaurant-item__title">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-8"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="restaurant-item__description">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
`;

const createPlaceholderDetailTemplate = () => `
    <div class="restaurant-detail__thumbnail">
        <div class="ph-item">
            <div class="ph-col-12">
                <div class="ph-picture"></div>
            </div>
        </div>
    </div>
    <div class="restaurant-detail__content">
        <div class="restaurant-detail__title">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-8 big"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="restaurant-detail__category">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-2"></div>
                        <div class="ph-col-1 empty">&nbsp;&nbsp;</div>
                        <div class="ph-col-2"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="restaurant-detail__rating">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-4"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="restaurant-detail__description">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-8"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="restaurant-detail__address">
        <div class="restaurant-detail__address-title">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-6"></div>
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12 empty"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="restaurant-detail__address-title">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-6"></div>
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const createPlaceholderCustomerReviewTemplate = () => `
    <div class="customer-review__item">
        <div class="customer-review__item-thumbnail ph-avatar__thumbnail">
            <div class="ph-item">
                <div class="ph-avatar"></div>
            </div>
        </div>
        <div class="customer-review__item-name">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-2 empty"></div>
                        <div class="ph-col-8"></div>
                        <div class="ph-col-2 empty"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customer-review__item-review">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customer-review__item-date">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-row">
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-4 empty"></div>
                        <div class="ph-col-4"></div>
                        <div class="ph-col-4 empty"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const createPlaceholderViralFoodTemplate = () => `
    <article class="viral-food-item">
        <div class="viral-food-item__thumbnail">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-picture"></div>
                </div>
            </div>
        </div>
        <div class="viral-food-item__content">
            <div class="viral-food-item__title">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-6"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="viral-food-item__resto">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-8"></div>
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
`;

export {
  createMenuTemplate,
  createRestaurantItemTemplate,
  createViralFoodTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailMenuFoodTemplate,
  createtRestaurantDetailMenuDrinkTemplate,
  createCustomerReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createNotificationTemplate,
  createPlaceholderRestaurantTemplate,
  createPlaceholderDetailTemplate,
  createPlaceholderCustomerReviewTemplate,
  createPlaceholderViralFoodTemplate,
};
