/* eslint-disable no-script-url */
/* eslint-disable no-console */
import '../../component/restaurant-detail';
import '../../component/customer-review-list';
import '../../component/customer-review-form';
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {
  hideHero,
  dataBreadcrumbRestaurant,
  showBreadcrumb,
  additionalFoodMenu,
  additionalDrinkMenu,
} from '../../utils/fun-helper';
// import FavoriteRestaurantButtonInitiator from '../../utils/favorite-restaurant-button-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewInitiator from '../../utils/review-initiator';

const Detail = {
  async render() {
    return `
      <section class="content-detail">
        <restaurant-detail></restaurant-detail>

        <!--<favorite-restaurant-bar></favorite-restaurant-bar>-->

        <div class="container__menu-utama">
            <h1 class="menu-utama__label">Menus</h1>
            <div class="menu-utama">
                <div class="menu-utama__food">
                    <h1 class="menu-utama__title">Makanan</h1>
                    <food-list id="menu-food" class="food-list"></food-list>
                </div>

                <div class="menu-utama__drink">
                    <h1 class="menu-utama__title">Minuman</h1>
                    <food-list id="menu-drink" class="food-list"></food-list>
                </div>
            </div>
        </div>

        <div class="container__customer-review">
            <h1 class="customer-review__label">Customer Reviews</h1>
            <customer-review-list></customer-review-list>
        </div>
    </section>

    <customer-review-form></customer-review-form>

    <notification-bar></notification-bar>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailContainer = document.querySelector('restaurant-detail');
    const menuFoodContainer = document.querySelector('#menu-food');
    const menuDrinkContainer = document.querySelector('#menu-drink');
    const customerReviewContainer = document.querySelector('customer-review-list');
    const renderRestaurantDetailLoader = () => {
      restaurantDetailContainer.renderLoader();
    };
    const renderRestaurantDetailResult = (result) => {
      restaurantDetailContainer.restaurant = result;
    };
    const fallbackRestaurantDetailResult = (message) => {
      restaurantDetailContainer.renderError(message);
    };

    const renderAdditionalFood = (food) => {
      menuFoodContainer.additionalFood = food;
    };
    const renderAdditionalDrink = (drink) => {
      menuDrinkContainer.additionalFood = drink;
    };

    const renderFoodLoader = (count) => {
      menuFoodContainer.loaders = count;
    };
    const renderFoodResult = (results, limit) => {
      menuFoodContainer.limit = limit;
      menuFoodContainer.foods = results;
    };
    const renderDrinkLoader = (count) => {
      menuDrinkContainer.loaders = count;
    };
    const renderDrinkResult = (results, limit) => {
      menuDrinkContainer.limit = limit;
      menuDrinkContainer.foods = results;
    };

    const renderCustomerReviewLoader = (count) => {
      customerReviewContainer.loaders = count;
    };
    const renderCustomerReviewResult = (results) => {
      if (results.length > 0) {
        customerReviewContainer.reviews = results;
      } else {
        customerReviewContainer.renderEmpty();
      }
    };

    hideHero();
    renderRestaurantDetailLoader();
    renderFoodLoader(4);
    renderDrinkLoader(4);
    renderCustomerReviewLoader(1);

    try {
      const restaurantDetail = await RestaurantDbSource.detailRestaurant(url.id);

      const {
        id,
        name,
        description,
        city,
        pictureId,
        rating,
        menus,
        customerReviews,
      } = restaurantDetail;

      const { foods, drinks } = menus;

      const additionalFood = additionalFoodMenu(name);
      const additionalDrink = additionalDrinkMenu(name);

      showBreadcrumb([
        dataBreadcrumbRestaurant,
        {
          link: 'javascript:;',
          label: name,
          class: 'active',
        },
      ]);

      renderRestaurantDetailResult(restaurantDetail);
      renderAdditionalFood(additionalFood);
      renderFoodResult(foods, 4);
      renderAdditionalDrink(additionalDrink);
      renderDrinkResult(drinks, 4);
      renderCustomerReviewResult(customerReviews);

      // FavoriteRestaurantButtonInitiator.init({
      //   favoriteButtonContainer: document.querySelector('favorite-restaurant-bar'),
      //   restaurant: {
      //     id,
      //     name,
      //     description,
      //     city,
      //     pictureId,
      //     rating,
      //   },
      // });

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('favorite-restaurant-bar'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id,
          name,
          description,
          city,
          pictureId,
          rating,
        },
      });

      ReviewInitiator.init({
        id,
        inputName: document.querySelector('[name="name"]'),
        inputReview: document.querySelector('[name="review"]'),
        button: document.querySelector('#button-add-review'),
        customerReviewContainer,
      });
    } catch (message) {
      fallbackRestaurantDetailResult(message);
    }
  },
};

export default Detail;
