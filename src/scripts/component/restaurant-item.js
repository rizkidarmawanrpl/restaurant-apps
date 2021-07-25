/* eslint-disable no-underscore-dangle */
import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  renderLoader() {
    this.innerHTML = `
        <article class="restaurant-item">
            <div class="restaurant-item__thumbnail">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-picture"></div>
                    </div>
                </div>
            </div>
            <div class="restaurant-item__content">
                <div class="restaurant-item__rating">
                    <div class="ph-item">
                        <div class="ph-col-12">
                            <div class="ph-row">
                                <div class="ph-col-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="restaurant-item__title">
                    <div class="ph-item">
                        <div class="ph-col-12">
                            <div class="ph-row">
                                <div class="ph-col-12 empty"></div>
                                <div class="ph-col-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="restaurant-item__description">
                    <div class="ph-item">
                        <div class="ph-col-12">
                            <div class="ph-row">
                                <div class="ph-col-12 empty"></div>
                                <div class="ph-col-12 empty"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `;
  }

  render() {
    const restaurant = this._restaurant;

    this.innerHTML = `
        <article class="restaurant-item">
            <div class="restaurant-item__thumbnail">
                <img class="lazyload" data-src="${CONFIG.BASE_SMALL_IMAGE_URL}${restaurant.pictureId || '-'}" alt="${restaurant.name || '-'}"></img>
            </div>
            <div class="restaurant-item__lokasi">
                <p>Kota ${restaurant.city || '-'}</p>
            </div>
            <div class="restaurant-item__content">
                <h2 class="restaurant-item__rating">Rating: <span>${restaurant.rating || '-'}</span></h2>
                <h1 class="restaurant-item__title">
                    <a href="${`/#/detail/${restaurant.id || '0'}`}">${restaurant.name || '-'}</a>
                </h1>
                <p class="restaurant-item__description">${restaurant.description.replace(/^(.{330}[^\s]*).*/, '$1') || '-'}...</p>
            </div>
        </article>
    `;
  }
}

// customElements.define('restaurant-item', RestaurantItem);
if (!customElements.get('restaurant-item')) {
  customElements.define('restaurant-item', RestaurantItem);
}
