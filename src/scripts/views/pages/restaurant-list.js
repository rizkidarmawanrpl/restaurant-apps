/* eslint-disable no-script-url */
/* eslint-disable no-console */
import '../../component/restaurant-list';
import '../../component/search-restaurant-form';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { hideHero, dataBreadcrumbHome, showBreadcrumb } from '../../utils/fun-helper';
import SearchRestaurantInitiator from '../../utils/search-restaurant-initiator';

const RestaurantList = {
  async render() {
    return `
      <section class="content">
          <div class="container__restaurant">
              <h1 class="restaurant__label">Explore Restaurant</h1>
              <search-restaurant-form></search-restaurant-form>
              <restaurant-list></restaurant-list>
          </div>
      </section>

      <notification-bar></notification-bar>
    `;
  },

  async afterRender() {
    const breadcrumbContainer = document.querySelector('breadcrumb-list');
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

    showBreadcrumb(
      breadcrumbContainer,
      [
        dataBreadcrumbHome,
        {
          link: 'javascript:;',
          label: 'Explore Restaurant',
          class: 'active',
        },
      ],
    );

    try {
      const restaurants = await RestaurantDbSource.listRestaurants();
      renderRestaurantResult(restaurants);
    } catch (message) {
      fallbackRestaurantResult(message);
    }

    SearchRestaurantInitiator.init({
      inputSearch: document.querySelector('[name="search"]'),
      button: document.querySelector('#button-search'),
      restaurantsContainer,
    });
  },
};

export default RestaurantList;
