/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Search Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/restaurant-list');
});

Scenario('search restaurants', async ({ I }) => {
  I.seeElement('.restaurant-item__title a');

  const names = [];
  const visibleRestaurants = await I.grabNumberOfVisibleElements('restaurant-item');

  for (let i = 1; i <= visibleRestaurants; i += 1) {
    names.push(await I.grabTextFrom(locate('.restaurant-item__title').at(i)));
  }

  I.seeElement('[name="search"]');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('search', searchQuery);

  // I.waitForElement('restaurant-item', 50);
  I.waitNumberOfVisibleElements('restaurant-item', matchingRestaurants.length, 50);

  const visibleRestaurantsUpdate = await I.grabNumberOfVisibleElements('restaurant-item');

  assert.strictEqual(matchingRestaurants.length, visibleRestaurantsUpdate);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-item__title').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});

Scenario('search restaurants not found', async ({ I }) => {
  I.seeElement('.restaurant-item__title a');

  I.seeElement('[name="search"]');

  const searchQuery = 'lorem';

  I.fillField('search', searchQuery);

  I.waitForElement('.no-data', 10);

  I.see(`Resto dengan kata kunci ${searchQuery} tidak ditemukan.`, '.no-data');
});
