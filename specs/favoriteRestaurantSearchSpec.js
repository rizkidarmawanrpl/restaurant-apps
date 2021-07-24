/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView
  from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.querySelector('[name="search"]');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('melting pot');

      expect(presenter.latestQuery)
        .toEqual('melting pot');
    });

    it('should ask the model to search for restaurants', () => {
      searchRestaurants('melting pot');

      expect(favoriteRestaurants.searchRestaurants)
        .toHaveBeenCalledWith('melting pot');
    });

    xit('should show the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1, description: '-' }]);

      expect(document.querySelectorAll('restaurant-item').length)
        .toEqual(1);

      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
        description: '-',
      }, {
        id: 2,
        name: 'Dua',
        description: '-',
      }]);

      expect(document.querySelectorAll('restaurant-item').length)
        .toEqual(2);
    });

    xit('should show the name of the found restaurants', () => {
      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
        description: '-',
      }]);

      expect(document.querySelectorAll('.restaurant-item__title a')
        .item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - when the restaurant returned does not contain a name', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantNames = document.querySelectorAll('.restaurant-item__title a');
        expect(restaurantNames.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('melting pot').and.returnValues([
        { id: 444, description: '-' },
      ]);

      searchRestaurants('melting pot');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('restaurant-item').length).toEqual(3);
          done();
        });

      favoriteRestaurants.searchRestaurants.withArgs('melting pot').and.returnValues([
        { id: 111, name: 'melting potbc', description: '-' },
        { id: 222, name: 'ada juga melting potbcde', description: '-' },
        { id: 333, name: 'ini juga boleh melting pot', description: '-' },
      ]);

      searchRestaurants('melting pot');
    });

    it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          const restaurantNames = document.querySelectorAll('.restaurant-item__title a');
          expect(restaurantNames.item(0).textContent)
            .toEqual('melting potbc');

          expect(restaurantNames.item(1).textContent)
            .toEqual('ada juga melting potbcde');

          expect(restaurantNames.item(2).textContent)
            .toEqual('ini juga boleh melting pot');

          done();
        });

      favoriteRestaurants.searchRestaurants.withArgs('melting pot').and.returnValues([
        { id: 111, name: 'melting potbc', description: '-' },
        { id: 222, name: 'ada juga melting potbcde', description: '-' },
        { id: 333, name: 'ini juga boleh melting pot', description: '-' },
      ]);

      searchRestaurants('melting pot');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.no-data').length).toEqual(1);

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('melting pot').and.returnValues([]);

      searchRestaurants('melting pot');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length)
          .toEqual(0);

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('melting pot').and.returnValues([]);

      searchRestaurants('melting pot');
    });
  });
});
