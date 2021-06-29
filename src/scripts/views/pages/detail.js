/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailMenuFoodTemplate,
  createtRestaurantDetailMenuDrinkTemplate,
  createCustomerReviewTemplate,
} from '../templates/template-creator';
import { hideHero, dataBreadcrumbRestaurant, showBreadcrumb } from '../../utils/fun-helper';
import FavoriteRestaurantButtonInitiator from '../../utils/favorite-restaurant-button-initiator';

const Detail = {
  async render() {
    return `
      <section class="content-detail">
        <div id="restaurant-detail" class="container__restaurant-detail"></div>

        <div id="btn-favorite-restaurant" class="container__restaurant-favorite"></div>

        <div class="container__menu-utama">
            <h1 class="menu-utama__label">Menus</h1>
            <div class="menu-utama">
                <div class="menu-utama__food">
                    <h1 class="menu-utama__title">Makanan</h1>
                    <div id="menu-food" class="menu-utama__foods"></div>
                </div>

                <div class="menu-utama__drink">
                    <h1 class="menu-utama__title">Minuman</h1>
                    <div id="menu-drink" class="menu-utama__drinks"></div>
                </div>
            </div>
        </div>

        <div class="container__customer-review">
            <h1 class="customer-review__label">Customer Reviews</h1>
            <div id="customer-review" class="customer-reviews"></div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await RestaurantDbSource.detailRestaurant(url.id);
    const {
      id, name, description, city, pictureId, rating, menus, customerReviews,
    } = restaurantDetail;
    const { foods, drinks } = menus;
    const restaurantDetailContainer = document.querySelector('#restaurant-detail');
    const menuFoodContainer = document.querySelector('#menu-food');
    const menuDrinkContainer = document.querySelector('#menu-drink');
    const customerReviewContainer = document.querySelector('#customer-review');

    hideHero();

    showBreadcrumb([
      dataBreadcrumbRestaurant,
      {
        link: '',
        label: name,
      },
    ]);

    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);
    foods.forEach((food) => {
      menuFoodContainer.innerHTML += createRestaurantDetailMenuFoodTemplate(food);
    });

    drinks.forEach((drink) => {
      menuDrinkContainer.innerHTML += createtRestaurantDetailMenuDrinkTemplate(drink);
    });

    customerReviews.forEach((customerReview) => {
      customerReviewContainer.innerHTML += createCustomerReviewTemplate(customerReview);
    });

    FavoriteRestaurantButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#btn-favorite-restaurant'),
      restaurant: {
        id,
        name,
        description,
        city,
        pictureId,
        rating,
      },
    });
  },
};

export default Detail;
