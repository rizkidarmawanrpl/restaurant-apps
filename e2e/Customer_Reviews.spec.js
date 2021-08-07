/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
Feature('Customer Reviews');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('customer review', ({ I }) => {
  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  I.click(firstRestaurant);

  I.seeElement('customer-review-form');

  const name = 'Dolor 1';
  const review = 'Lorem ipsum dolor sit amet.';

  I.fillField('name', name);
  I.fillField('review', review);

  I.click('#button-add-review');

  I.waitForElement('customer-review-item', 10);

  // pause();

  I.see(name, locate('.customer-review__item-name').first());
  I.see(review, locate('.customer-review__item-review').first());

  I.amOnPage('/');
});

/* Scenario('customer review failed, data must be filled', async ({ I }) => {
  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  I.click(firstRestaurant);

  I.seeElement('customer-review-form');

  I.dontSeeElement('notification-bar div');

  pause();

  // I.click('#button-add-review');
  I.click('#button-add-review');

  // I.waitForClickable('#button-add-review', 10);

  I.waitForElement('notification-bar div', 10);

  I.seeElement('notification-bar div');
}); */
