/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import RestaurantDbSource from '../data/restaurantdb-source';
import { createCustomerReviewTemplate } from '../views/templates/template-creator';
import { showNotification } from './fun-helper';

const ReviewInitiator = {
  async init({
    id,
    inputName,
    inputReview,
    button,
    customerReviewContainer,
  }) {
    this._id = id;
    this._inputName = inputName;
    this._inputReview = inputReview;
    this._customerReviewContainer = customerReviewContainer;

    button.addEventListener('click', () => {
      this._addReview();
      this._clearForm();
    });
  },

  async _addReview() {
    const id = this._id;
    const name = this._inputName.value;
    const review = this._inputReview.value;

    const formdata = {
      id,
      name,
      review,
    };

    if (id === '' || name === '' || review === '') {
      showNotification('Data tidak boleh dikosongkan!');
    } else {
      const customerReviews = await RestaurantDbSource.addReview(formdata);

      this._customerReviewContainer.innerHTML = '';
      customerReviews.forEach((customerReview) => {
        this._customerReviewContainer.innerHTML += createCustomerReviewTemplate(customerReview);
      });

      showNotification('Review kamu berhasil disimpan.');
    }
  },

  _clearForm() {
    this._inputName.value = '';
    this._inputReview.value = '';
  },
};

export default ReviewInitiator;
