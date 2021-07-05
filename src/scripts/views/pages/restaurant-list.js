/* eslint-disable no-script-url */
/* eslint-disable no-console */
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate, createPlaceholderRestaurantTemplate } from '../templates/template-creator';
import { hideHero, dataBreadcrumbHome, showBreadcrumb } from '../../utils/fun-helper';

const RestaurantList = {
  async render() {
    return `
            <section class="content">
                <div class="container__restaurant">
                    <h1 class="restaurant__label">Explore Restaurant</h1>
                    <div id="restaurant-list" class="restaurants">
                        <!-- List data restaurant -->
                    </div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurant-list');

    hideHero();

    showBreadcrumb([
      dataBreadcrumbHome,
      {
        link: 'javascript:;',
        label: 'Explore Restaurant',
        class: 'active',
      },
    ]);

    restaurantsContainer.innerHTML = createPlaceholderRestaurantTemplate();
    restaurantsContainer.innerHTML += createPlaceholderRestaurantTemplate();
    restaurantsContainer.innerHTML += createPlaceholderRestaurantTemplate();

    try {
      const restaurants = await RestaurantDbSource.listRestaurants();

      setTimeout(() => {
        restaurantsContainer.innerHTML = '';

        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }, 2000);
    } catch (message) {
      console.log(message);
    }
  },
};

export default RestaurantList;
