/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

import CONFIG from '../globals/config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  renderLoader() {
    this.innerHTML = `
        <!--<div class="restaurant-detail__thumbnail">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-picture"></div>
                </div>
            </div>
        </div>-->
        <!--<div class="restaurant-detail__content">
            <div class="restaurant-detail__title">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-8 big"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__category">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-2"></div>
                            <div class="ph-col-1 empty">&nbsp;&nbsp;</div>
                            <div class="ph-col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__rating">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__description">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        <!--<div class="restaurant-detail__address">
            <div class="restaurant-detail__address-title">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-6"></div>
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12"></div>
                            <div class="ph-col-12 empty"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__address-title">
                <div class="ph-item">
                    <div class="ph-col-12">
                        <div class="ph-row">
                            <div class="ph-col-6"></div>
                            <div class="ph-col-12 empty"></div>
                            <div class="ph-col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
    `;
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<p class="no-data">${message}</p>`;
    console.log(message);
  }

  render() {
    const restaurant = this._restaurant;

    this.innerHTML = `
        <!--<div class="restaurant-detail__thumbnail">
            <img class="lazyload" data-src="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"></img>
        </div>-->
        <!--<div class="restaurant-detail__content">
            <h1 class="restaurant-detail__title">${restaurant.name}</h1>
            <div class="restaurant-detail__category">
                ${restaurant.categories.map((categorie) => `<span>${categorie.name}</span>`).join('')}
            </div>
            <h2 class="restaurant-detail__rating">
                <span>Rating</span> <i class="fa fa-star"></i> ${restaurant.rating}
            </h2>
            <p class="restaurant-detail__description">
                ${restaurant.description}    
            </p>
        </div>-->
        <!--<div class="restaurant-detail__address">
            <h1 class="restaurant-detail__address-title">Kota</h1>
            <p>${restaurant.city}</p>
            <h1 class="restaurant-detail__address-title">Alamat</h1>
            <p>${restaurant.address}</p>
        </div>-->
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
