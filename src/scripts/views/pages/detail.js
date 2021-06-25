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

const Detail = {
  async render() {
    hideHero();

    return `
      <section class="content-detail">
        <div id="restaurant-detail" class="container__restaurant-detail"></div>

        <div class="container__restaurant-favorite">
            <div class="restaurant-favorite__item">
                <h1 class="restaurant-favorite__title">Kamu Suka Banget Sama Resto Ini Ya... Ciee Jadi Langganan Setia ;)</h1>
            </div>
            <div class="restaurant-favorite__item">
                <h2 class="restaurant-favorite__subtitle">Yuk, jadiin resto ini resto favorit kamu</h1>
            </div>
            <div class="restaurant-favorite__item">
                <div class="restaurant-favorite__button">
                    <button class="btn btn-primary"><i class="fa fa-heart liked"></i> &nbsp; Suka</button>
                </div>
            </div>
        </div>

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
    const { name, customerReviews } = restaurantDetail;
    const { foods, drinks } = restaurantDetail.menus;
    // const breadcrumbActive = document.querySelector('.breadcrumb__active');
    const restaurantDetailContainer = document.querySelector('#restaurant-detail');
    const menuFoodContainer = document.querySelector('#menu-food');
    const menuDrinkContainer = document.querySelector('#menu-drink');
    const customerReviewContainer = document.querySelector('#customer-review');

    showBreadcrumb([
      dataBreadcrumbRestaurant,
      {
        link: '',
        label: name,
      },
    ]);

    // breadcrumbActive.innerHTML = name;
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
  },
};

export default Detail;
