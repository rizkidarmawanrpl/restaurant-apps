/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import '../component/customer-review-list';
import RestaurantDbSource from '../data/restaurantdb-source';
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
      try {
        const customerReviews = await RestaurantDbSource.addReview(formdata);

        this._customerReviewContainer.reviews = customerReviews;

        showNotification('Review kamu berhasil disimpan.');
      } catch (message) {
        showNotification('Review gagal disimpan.');
        console.log(message);
      }
    }
  },

  _clearForm() {
    this._inputName.value = '';
    this._inputReview.value = '';
  },
};

export default ReviewInitiator;
