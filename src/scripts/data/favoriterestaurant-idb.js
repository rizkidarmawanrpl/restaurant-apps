/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import CONFIG from '../globals/config';
import dbPromise from './database';

const { OBJECT_STORE_FAVORITE_RESTAURANT } = CONFIG;

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(OBJECT_STORE_FAVORITE_RESTAURANT, id);
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_FAVORITE_RESTAURANT);
  },

  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_FAVORITE_RESTAURANT, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_FAVORITE_RESTAURANT, id);
  },

  async searchRestaurants(query) {
    return (await this.getAllRestaurants()).filter((restaurant) => {
      const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteRestaurantIdb;
