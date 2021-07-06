/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  set loaders(count) {
    this._loaders = count;
    this.renderLoader();
  }

  renderLoader() {
    this.innerHTML = '';

    for (let increment = 0; increment < this._loaders; increment += 1) {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.renderLoader();
      this.appendChild(restaurantItemElement);
    }
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<p class="no-data">${message}</p>`;
    console.log(message);
  }

  renderEmpty() {
    this.innerHTML = '<p class="no-data">Kuy! Tambahin resto favorite kamu sekarang ...</p>';
  }

  render() {
    this.innerHTML = '';

    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
