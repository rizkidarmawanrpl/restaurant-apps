/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import '../component/restaurant-list';
import { showNotification } from './fun-helper';
import RestaurantDbSource from '../data/restaurantdb-source';

const SearchRestaurantInitiator = {
  async init({
    inputSearch,
    button,
    restaurantsContainer,
  }) {
    this._inputSearch = inputSearch;
    this._button = button;
    this._restaurantsContainer = restaurantsContainer;

    inputSearch.addEventListener('input', () => {
      this.searchBy();
    });

    button.addEventListener('click', () => {
      this.searchBy();
    });
  },

  async searchBy() {
    const query = this._inputSearch.value;
    const renderRestaurantLoader = (count) => {
      this._restaurantsContainer.loaders = count;
    };
    const renderRestaurantResult = (results) => {
      this._restaurantsContainer.restaurants = results;
    };

    renderRestaurantLoader(3);

    try {
      const restaurants = await RestaurantDbSource.searchRestaurants(query);
      renderRestaurantResult(restaurants);
    } catch (message) {
      showNotification('Restaurant gagal dicari...');
      console.log(message);
    }
  },
};

export default SearchRestaurantInitiator;
