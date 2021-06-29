import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import { hideHero, dataBreadcrumbRestaurant, showBreadcrumb } from '../../utils/fun-helper';

const FavoriteRestaurant = {
  async render() {
    return `
            <section class="content">
                <div class="container__restaurant">
                    <h1 class="restaurant__label">Your Favorited Restaurant</h1>
                    <div id="restaurant-list" class="restaurants">
                        <!-- List data restaurant -->
                    </div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-list');

    hideHero();

    showBreadcrumb([
      dataBreadcrumbRestaurant,
      {
        link: '',
        label: 'Favorited Restaurant',
      },
    ]);

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = '<p class="no-data">Kuy! Tambahin resto favorite kamu sekarang ...</p>';
    }
  },
};

export default FavoriteRestaurant;
