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
                              <div class="ph-col-12 empty"></div>
                              <div class="ph-col-12 empty"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="viral-food-item__resto">
                  <div class="ph-item">
                      <div class="ph-col-12">
                          <div class="ph-row">
                              <div class="ph-col-12 empty"></div>
                              <div class="ph-col-8" style="margin-top: 0;"></div>
                              <div class="ph-col-12 empty"></div>
                              <div class="ph-col-12" style="margin-top: 16px"></div>
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
                <picture>
                    <source media="(max-width: 600px)" data-srcset="${food.pictureId}">
                    <img class="lazyload" data-src="${food.pictureId}" alt="${food.name}"></img>
                </picture>
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
