/* eslint-disable no-underscore-dangle */
class FavoriteRestaurantBar extends HTMLElement {
  favorite() {
    this._favorited = false;
    this.render();
  }

  favorited() {
    this._favorited = true;
    this.render();
  }

  renderLoader() {
    this.innerHTML = `
      <div class="restaurant-favorite__item">
          <div class="restaurant-favorite__title">
            <div class="ph-item">
              <div class="ph-col-12">
                  <div class="ph-row">
                      <div class="ph-col-12"></div>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <div class="restaurant-favorite__item">
          <div class="restaurant-favorite__subtitle">
            <div class="ph-item">
              <div class="ph-col-12">
                  <div class="ph-row">
                      <div class="ph-col-6"></div>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <div class="restaurant-favorite__item">
          <div class="restaurant-favorite__button">
            <div class="ph-item">
              <div class="ph-col-12">
                  <div class="ph-row">
                      <div class="ph-col-12 big"></div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    `;
  }

  render() {
    if (this._favorited) {
      this.renderFavorited();
    } else {
      this.renderFavorite();
    }
  }

  renderFavorite() {
    this.innerHTML = `
        <div class="restaurant-favorite__item">
            <h1 class="restaurant-favorite__title">Kamu Suka Banget Sama Resto Ini Ya...? Ciee Mau Jadi Langganan Setia.</h1>
        </div>
        <div class="restaurant-favorite__item">
            <h2 class="restaurant-favorite__subtitle">Yuk, jadiin resto ini resto favorit kamu</h1>
        </div>
        <div class="restaurant-favorite__item">
            <div class="restaurant-favorite__button">
                <button aria-label="Resto favorite" id="favorite-button" class="btn btn-primary">
                    <i class="material-icons like" aria-hidden="true">favorite_border</i> <span>Suka</span>
                </button>
            </div>
        </div>
    `;
  }

  renderFavorited() {
    this.innerHTML = `
        <div class="restaurant-favorite__item">
            <h1 class="restaurant-favorite__title">Yey! Resto ini jadi favorite kamu... Ciee Jadi Langganan Setia ;)</h1>
        </div>
        <div class="restaurant-favorite__item">
            <h2 class="restaurant-favorite__subtitle">Klik, udah bukan resto favorite kamu lagi...?</h1>
        </div>
        <div class="restaurant-favorite__item">
            <div class="restaurant-favorite__button">
                <button aria-label="Bukan resto favorite" id="favorite-button" class="btn btn-primary">
                    <i class="material-icons liked" aria-hidden="true">favorite</i> <span>Nggak</span>
                </button>
            </div>
        </div>
    `;
  }
}

// customElements.define('favorite-restaurant-bar', FavoriteRestaurantBar);
if (!customElements.get('favorite-restaurant-bar')) {
  customElements.define('favorite-restaurant-bar', FavoriteRestaurantBar);
}
