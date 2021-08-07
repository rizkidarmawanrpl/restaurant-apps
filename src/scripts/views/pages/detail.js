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
  loaderBreadcrumb,
  showBreadcrumb,
  additionalFoodMenu,
  additionalDrinkMenu,
  tempToggleIconAllFoods,
  tempToggleIconLimitFoods,
  tempToggleIconAllDrinks,
  tempToggleIconLimitDrinks,
  tempToggleIconAllReviews,
  tempToggleIconLimitReviews,
} from '../../utils/fun-helper';
// import FavoriteRestaurantButtonInitiator from '../../utils/favorite-restaurant-button-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewInitiator from '../../utils/review-initiator';
import LinkAllButtonPresenter from '../../utils/link-all-button-presenter';

const Detail = {
  async render() {
    return `
      <section class="content-detail">
        <restaurant-detail></restaurant-detail>

        <favorite-restaurant-bar></favorite-restaurant-bar>

        <div class="container__menu-utama">
            <h1 class="menu-utama__label">Menus</h1>
            <div class="menu-utama">
                <div class="menu-utama__food">
                    <h1 class="menu-utama__title">Makanan</h1>
                    <food-list id="menu-food" class="food-list"></food-list>
                    <link-all-button id="all-foods-container"></link-all-button>
                    <!--<div class="link-all">
                      <button type="button" class="btn btn-primary" id="all-foods" data-toggle="false">Semua Makanan <i class="material-icons">chevron_right</i></button>
                    </div>-->
                </div>

                <div class="menu-utama__drink">
                    <h1 class="menu-utama__title">Minuman</h1>
                    <food-list id="menu-drink" class="food-list"></food-list>
                    <link-all-button id="all-drinks-container"></link-all-button>
                    <!--<div class="link-all">
                      <button type="button" class="btn btn-primary" id="all-drinks" data-toggle="false">Semua Minuman <i class="material-icons">chevron_right</i></button>
                    </div>-->
                </div>
            </div>
        </div>

        <div class="container__customer-review">
            <h1 class="customer-review__label">Customer Reviews</h1>
            <customer-review-list></customer-review-list>
            <link-all-button id="all-reviews-container"></link-all-button">
            <!--<div class="link-all">
              <button type="button" class="btn btn-primary" id="all-reviews" data-toggle="false">Semua Review <i class="material-icons">chevron_right</i></button>
            </div>-->
        </div>
    </section>

    <customer-review-form></customer-review-form>

    <notification-bar></notification-bar>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const breadcrumbContainer = document.querySelector('breadcrumb-list');
    const restaurantDetailContainer = document.querySelector('restaurant-detail');
    const menuFoodContainer = document.querySelector('#menu-food');
    const menuDrinkContainer = document.querySelector('#menu-drink');
    const customerReviewContainer = document.querySelector('customer-review-list');
    const likeButtonContainer = document.querySelector('favorite-restaurant-bar');
    // const allFoodsContainer = document.querySelector('#all-foods');
    // const allDrinksContainer = document.querySelector('#all-drinks');
    // const allReviewsContainer = document.querySelector('#all-reviews');
    const allFoodsContainer = document.querySelector('#all-foods-container');
    const allDrinksContainer = document.querySelector('#all-drinks-container');
    const allReviewsContainer = document.querySelector('#all-reviews-container');
    const limitFoods = 2;
    const limitDrinks = 2;
    const limitReviews = 2;
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
    const renderCustomerReviewResult = (results, limit) => {
      if (results.length > 0) {
        customerReviewContainer.limit = limit;
        customerReviewContainer.reviews = results;
      } else {
        customerReviewContainer.renderEmpty();
      }
    };
    const renderFavoriteRestaurantBar = () => {
      likeButtonContainer.renderLoader();
    };

    hideHero();
    loaderBreadcrumb(breadcrumbContainer);
    renderRestaurantDetailLoader();
    renderFavoriteRestaurantBar();
    renderFoodLoader(limitFoods);
    renderDrinkLoader(limitDrinks);
    renderCustomerReviewLoader(limitReviews);

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
      // reverse array to newest
      customerReviews.reverse();

      const { foods, drinks } = menus;

      const additionalFood = additionalFoodMenu(name);
      const additionalDrink = additionalDrinkMenu(name);

      showBreadcrumb(
        breadcrumbContainer,
        [
          dataBreadcrumbRestaurant,
          {
            link: 'javascript:;',
            label: name,
            class: 'active',
          },
        ],
      );

      renderRestaurantDetailResult(restaurantDetail);
      renderAdditionalFood(additionalFood);
      renderFoodResult(foods, limitFoods);
      renderAdditionalDrink(additionalDrink);
      renderDrinkResult(drinks, limitDrinks);
      renderCustomerReviewResult(customerReviews, limitReviews);

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
        likeButtonContainer,
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

      // allFoodsContainer.addEventListener('click', () => {
      LinkAllButtonPresenter.init({
        allLinkContainer: allFoodsContainer,
        buttonData: { id: 'all-foods', text: tempToggleIconAllFoods },
        callbackAll: () => renderFoodResult(foods, 0),
        callbackLimit: () => renderFoodResult(foods, limitFoods),
        iconAll: tempToggleIconAllFoods,
        iconLimit: tempToggleIconLimitFoods,
      });
      // });

      // allDrinksContainer.addEventListener('click', () => {
      LinkAllButtonPresenter.init({
        allLinkContainer: allDrinksContainer,
        buttonData: { id: 'all-drinks', text: tempToggleIconAllDrinks },
        callbackAll: () => renderDrinkResult(drinks, 0),
        callbackLimit: () => renderDrinkResult(drinks, limitDrinks),
        iconAll: tempToggleIconAllDrinks,
        iconLimit: tempToggleIconLimitDrinks,
      });
      // });

      // allReviewsContainer.addEventListener('click', () => {
      LinkAllButtonPresenter.init({
        allLinkContainer: allReviewsContainer,
        buttonData: { id: 'all-reviews', text: tempToggleIconAllReviews },
        callbackAll: () => renderCustomerReviewResult(customerReviews, 0),
        callbackLimit: () => renderCustomerReviewResult(customerReviews, limitReviews),
        iconAll: tempToggleIconAllReviews,
        iconLimit: tempToggleIconLimitReviews,
      });
      // });
    } catch (message) {
      fallbackRestaurantDetailResult(message);
    }
  },
};

export default Detail;
