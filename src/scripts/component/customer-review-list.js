/* eslint-disable no-underscore-dangle */
import './customer-review-item';

class CustomerReviewList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  set loaders(count) {
    this._loaders = count;
    this.renderLoader();
  }

  renderLoader() {
    this.innerHTML = '';

    for (let increment = 0; increment < this._loaders; increment += 1) {
      const customerReviewElement = document.createElement('customer-review-item');
      customerReviewElement.renderLoader();
      this.appendChild(customerReviewElement);
    }
  }

  renderEmpty() {
    this.innerHTML = '<p class="no-data">Belum ada review ...</p>';
  }

  render() {
    this.innerHTML = '';

    this._reviews.forEach((review) => {
      const customerReviewItemElement = document.createElement('customer-review-item');
      customerReviewItemElement.review = review;
      this.appendChild(customerReviewItemElement);
    });
  }
}

customElements.define('customer-review-list', CustomerReviewList);
