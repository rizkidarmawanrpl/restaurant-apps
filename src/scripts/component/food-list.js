/* eslint-disable no-underscore-dangle */
import './food-item';

class FoodList extends HTMLElement {
  constructor() {
    super();
    this._additionalFood = {};
  }

  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  set additionalFood(additionalFood) {
    this._additionalFood = additionalFood;
  }

  set loaders(count) {
    this._loaders = count;
    this.renderLoader();
  }

  renderLoader() {
    this.innerHTML = '';

    for (let increment = 0; increment < this._loaders; increment += 1) {
      const foodItemElement = document.createElement('food-item');
      foodItemElement.renderLoader();
      this.appendChild(foodItemElement);
    }
  }

  render() {
    this.innerHTML = '';

    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('food-item');
      foodItemElement.food = { ...food, ...this._additionalFood };
      this.appendChild(foodItemElement);
    });
  }
}

customElements.define('food-list', FoodList);
