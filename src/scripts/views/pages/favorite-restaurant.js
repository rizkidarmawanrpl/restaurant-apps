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
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('restaurant-list');
    const renderRestaurantResult = (results) => {
      if (results.length > 0) {
        restaurantsContainer.restaurants = results;
      } else {
        restaurantsContainer.renderEmpty();
      }
    };

    hideHero();

    showBreadcrumb([
      dataBreadcrumbRestaurant,
      {
        link: 'javascript:;',
        label: 'Favorited Restaurant',
        class: 'active',
      },
    ]);

    renderRestaurantResult(restaurants);
  },
};

export default FavoriteRestaurant;
