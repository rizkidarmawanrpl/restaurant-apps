/* eslint-disable no-underscore-dangle */
class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  renderLoader() {
    this.innerHTML = `
      <article class="viral-food-item">
          <div class="viral-food-item__thumbnail">
              <div class="ph-item">
                  <div class="ph-col-12">
                      <div class="ph-picture"></div>
                  </div>
              </div>
          </div>
          <div class="viral-food-item__content">
              <div class="viral-food-item__title">
                  <div class="ph-item">
                      <div class="ph-col-12">
                          <div class="ph-row">
                              <div class="ph-col-12 empty"></div>
                              <div class="ph-col-12 empty"></div>
                              <div class="ph-col-6"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="viral-food-item__resto">
                  <div class="ph-item">
                      <div class="ph-col-12">
                          <div class="ph-row">
                              <div class="ph-col-12 empty"></div>
                              <div class="ph-col-8"></div>
                              <div class="ph-col-12 empty"></div>
                              <div class="ph-col-12"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </article>
    `;
  }

  render() {
    const food = this._food;

    this.innerHTML = `
        <article class="viral-food-item">
            <div class="viral-food-item__thumbnail">
                <img class="lazyload" data-src="${food.pictureId}" alt="${food.name}">
            </div>
            <div class="viral-food-item__content">
                <h1 class="viral-food-item__title">
                    <p>${food.name}</p>
                </h1>
                <h2 class="viral-food-item__resto">Resto: <span>${food.restaurant}</span></h2>
                <p class="viral-food-item__description">${food.description}</p>
            </div>
        </article>
    `;
  }
}

customElements.define('food-item', FoodItem);
