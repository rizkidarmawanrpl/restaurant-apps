/* eslint-disable no-script-url */
/* eslint-disable no-console */
import '../../component/restaurant-list';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { hideHero, dataBreadcrumbHome, showBreadcrumb } from '../../utils/fun-helper';

const RestaurantList = {
  async render() {
    return `
      <section class="content">
          <div class="container__restaurant">
              <h1 class="restaurant__label">Explore Restaurant</h1>
              <restaurant-list></restaurant-list>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('restaurant-list');
    const renderRestaurantLoader = (count) => {
      restaurantsContainer.loaders = count;
    };
    const renderRestaurantResult = (results) => {
      restaurantsContainer.restaurants = results;
    };
    const fallbackRestaurantResult = (message) => {
      restaurantsContainer.renderError = message;
    };

    hideHero();
    renderRestaurantLoader(3);

    showBreadcrumb([
      dataBreadcrumbHome,
      {
        link: 'javascript:;',
        label: 'Explore Restaurant',
        class: 'active',
      },
    ]);

    try {
      const restaurants = await RestaurantDbSource.listRestaurants();
      renderRestaurantResult(restaurants);
    } catch (message) {
      fallbackRestaurantResult(message);
    }
  },
};

export default RestaurantList;
