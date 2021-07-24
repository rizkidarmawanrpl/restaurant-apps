/* eslint-disable no-undef */
import '../src/scripts/component/customer-review-form';
import '../src/scripts/component/customer-review-list';
import '../src/scripts/component/notification-bar';
import ReviewInitiator from '../src/scripts/utils/review-initiator';
import RestaurantDbSource from '../src/scripts/data/restaurantdb-source';

describe('Customer Review', () => {
  const addCustomerReviewForm = () => {
    document.body.innerHTML = `
        <customer-review-list></customer-review-list>
        <customer-review-form></customer-review-form>
        <notification-bar></notification-bar>
    `;
  };

  const getDateNow = () => {
    const date = new Date();
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const dateNow = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    return dateNow;
  };

  beforeEach(() => {
    addCustomerReviewForm();
  });

  it('should show customer review form', async () => {
    expect(document.querySelector('[name="name"]'))
      .toBeTruthy();

    expect(document.querySelector('[name="review"]'))
      .toBeTruthy();

    expect(document.querySelector('#button-add-review'))
      .toBeTruthy();
  });

  xit('should be able to send review', async (done) => {
    const id = 'rqdv5juczeskfw1e867';

    const inputName = document.querySelector('[name="name"]');
    inputName.value = 'Test CRSpec';

    const inputReview = document.querySelector('[name="review"]');
    inputReview.value = 'Lorem ipsum dolor sit amet';

    await ReviewInitiator.init({
      id,
      inputName,
      inputReview,
      button: document.querySelector('#button-add-review'),
      customerReviewContainer: document.querySelector('customer-review-list'),
    });

    setTimeout(async () => {
      setTimeout(async () => {
        const restaurantDetail = await RestaurantDbSource.detailRestaurant(id);
        const { customerReviews } = restaurantDetail;

        expect(customerReviews[(customerReviews.length - 1)]).toEqual({
          name: inputName.value,
          review: inputReview.value,
          date: getDateNow(),
        });
      }, 200);

      done();
    }, 600);
  });

  xit('should not throw error if name, and review is null', async (done) => {
    const id = 'rqdv5juczeskfw1e867';

    const inputName = document.querySelector('[name="name"]');

    const inputReview = document.querySelector('[name="review"]');

    expect(document.querySelector('notification-bar div'))
      .toBeFalsy();

    const restaurantDetailBefore = await RestaurantDbSource.detailRestaurant(id);
    const { customerReviews: customerReviewBefore } = restaurantDetailBefore;

    await ReviewInitiator.init({
      id,
      inputName,
      inputReview,
      button: document.querySelector('#button-add-review'),
      customerReviewContainer: document.querySelector('customer-review-list'),
    });

    setTimeout(async () => {
      setTimeout(async () => {
        const restaurantDetailAfter = await RestaurantDbSource.detailRestaurant(id);
        const { customerReviews: customerReviewAfter } = restaurantDetailAfter;

        expect(customerReviewBefore).toEqual(customerReviewAfter);

        expect(document.querySelector('notification-bar div'))
          .toBeTruthy();
      }, 200);

      done();
    }, 600);
  });
});
