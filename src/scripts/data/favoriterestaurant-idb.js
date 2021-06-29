import CONFIG from '../globals/config';
import dbPromise from './database';

const { OBJECT_STORE_FAVORITE_RESTAURANT } = CONFIG;

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(OBJECT_STORE_FAVORITE_RESTAURANT, id);
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_FAVORITE_RESTAURANT);
  },

  async putRestaurant(restaurant) {
    return (await dbPromise).put(OBJECT_STORE_FAVORITE_RESTAURANT, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_FAVORITE_RESTAURANT, id);
  },
};

export default FavoriteRestaurantIdb;
