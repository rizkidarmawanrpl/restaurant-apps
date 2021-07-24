/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantButtonInitiator from '../../src/scripts/utils/favorite-restaurant-button-initiator';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteRestaurantButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('favorite-restaurant-bar'),
    restaurant,
  });
};

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('favorite-restaurant-bar'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant, createLikeButtonPresenterWithRestaurant };
