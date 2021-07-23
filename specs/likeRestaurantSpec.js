/* eslint-disable no-undef */
import FavoriteRestaurantButtonInitiator from '../src/scripts/utils/favorite-restaurant-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Liking a Restaurant', () => {
  const addFavoriteRestaurantBar = () => {
    document.body.innerHTML = '<favorite-restaurant-bar></favorite-restaurant-bar">';
  };

  beforeEach(() => {
    addFavoriteRestaurantBar();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await FavoriteRestaurantButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-restaurant-bar'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="Resto favorite"]'))
      .toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await FavoriteRestaurantButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-restaurant-bar'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="Bukan resto favorite"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await FavoriteRestaurantButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-restaurant-bar'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await FavoriteRestaurantButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-restaurant-bar'),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });
});
