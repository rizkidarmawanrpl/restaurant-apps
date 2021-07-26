/* eslint-disable no-script-url */
import '../../component/restaurant-list';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { hideHero, dataBreadcrumbRestaurant, showBreadcrumb } from '../../utils/fun-helper';

const FavoriteRestaurant = {
  async render() {
    return `
            <section class="content">
                <div class="container__restaurant">
                    <h1 class="restaurant__label">Your Favorited Restaurant</h1>
                    <restaurant-list></restaurant-list>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const breadcrumbContainer = document.querySelector('breadcrumb-list');
    const restaurantsContainer = document.querySelector('restaurant-list');
    const renderEmptyLoader = () => {
      restaurantsContainer.renderEmptyLoader();
    };
    const renderRestaurantResult = (results) => {
      if (results.length > 0) {
        restaurantsContainer.restaurants = results;
      } else {
        restaurantsContainer.renderEmpty();
      }
    };

    hideHero();

    showBreadcrumb(
      breadcrumbContainer,
      [
        dataBreadcrumbRestaurant,
        {
          link: 'javascript:;',
          label: 'Favorited Restaurant',
          class: 'active',
        },
      ]
    );

    renderEmptyLoader();

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      renderRestaurantResult(restaurants);
    } catch(message) {
      console.log(message);
      restaurantsContainer.renderEmpty();
    }
  },
};

export default FavoriteRestaurant;
