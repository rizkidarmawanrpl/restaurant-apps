/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite-restaurant');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('restaurant-list');
  I.see('Kuy! Tambahin resto favorite kamu sekarang ...', '.no-data');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Kuy! Tambahin resto favorite kamu sekarang ...', '.no-data');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite-restaurant');
  I.seeElement('restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Kuy! Tambahin resto favorite kamu sekarang ...', '.no-data');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite-restaurant');
  I.seeElement('restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  const firstLikedRestaurant = locate('.restaurant-item__title a').first();
  I.click(firstLikedRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite-restaurant');
  I.see('Kuy! Tambahin resto favorite kamu sekarang ...', '.no-data');
});
