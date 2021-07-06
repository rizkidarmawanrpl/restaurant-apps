/* eslint-disable no-underscore-dangle */
import { initialName } from '../utils/fun-helper';

class CustomerReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  renderLoader() {
    this.innerHTML = `
      <div class="customer-review__item">
          <div class="customer-review__item-thumbnail ph-avatar__thumbnail">
              <div class="ph-item">
                  <div class="ph-avatar"></div>
              </div>
          </div>
          <div class="customer-review__item-name">
              <div class="ph-item">
                  <div class="ph-col-12">
                      <div class="ph-row">
                          <div class="ph-col-12 empty"></div>
                          <div class="ph-col-2 empty"></div>
                          <div class="ph-col-8"></div>
                          <div class="ph-col-2 empty"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="customer-review__item-review">
              <div class="ph-item">
                  <div class="ph-col-12">
                      <div class="ph-row">
                          <div class="ph-col-12 empty"></div>
                          <div class="ph-col-12"></div>
                          <div class="ph-col-12 empty"></div>
                          <div class="ph-col-12"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="customer-review__item-date">
              <div class="ph-item">
                  <div class="ph-col-12">
                      <div class="ph-row">
                          <div class="ph-col-12 empty"></div>
                          <div class="ph-col-4 empty"></div>
                          <div class="ph-col-4"></div>
                          <div class="ph-col-4 empty"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  }

  render() {
    const customerReview = this._review;

    this.innerHTML = `
      <div class="customer-review__item">
          <div class="customer-review__item-thumbnail">
              <h2>${initialName(customerReview.name)}</h2>
          </div>
          <h1 class="customer-review__item-name">${customerReview.name}</h1>
          <p class="customer-review__item-review">${customerReview.review}</p>
          <p class="customer-review__item-date">${customerReview.date}</p>
      </div>
    `;
  }
}

customElements.define('customer-review-item', CustomerReviewItem);
