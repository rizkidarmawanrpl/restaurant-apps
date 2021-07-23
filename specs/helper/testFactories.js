/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantButtonInitiator from '../../src/scripts/utils/favorite-restaurant-button-initiator';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteRestaurantButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('favorite-restaurant-bar'),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
