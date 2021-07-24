/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import '../../../component/search-restaurant-form';
import '../../../component/restaurant-list';
import '../../../component/restaurant-item';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
       <search-restaurant-form></search-restaurant-form>
       <restaurant-list id="restaurants"></restaurant-list>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.querySelector('[name="search"]').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    const restaurantsContainer = document.querySelector('restaurant-list');

    if (restaurants.length > 0) {
      restaurantsContainer.restaurants = restaurants;
    } else {
      restaurantsContainer.renderError('Tidak ada restaurant untuk ditampilkan');
    }

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
