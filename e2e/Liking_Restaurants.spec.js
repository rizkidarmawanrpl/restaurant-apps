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

Scenario('customer review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  I.click(firstRestaurant);

  I.seeElement('customer-review-form');

  const name = 'Rizki Darmawan';
  const review = 'Lorem ipsum dolor sit amet.';

  I.fillField('name', name);
  I.fillField('review', review);

  I.click('#button-add-review');

  I.waitForElement('customer-review-item', 10);

  // pause();

  I.see(name, locate('.customer-review__item-name').last());
  I.see(review, locate('.customer-review__item-review').last());

  I.amOnPage('/');
});
