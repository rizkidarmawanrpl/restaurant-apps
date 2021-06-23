/* eslint-disable no-console */
import RestaurantDbSource from '../../data/restaurantdb-source';
import ViralFood from '../../data/MAKANAN_TERVIRAL.json';
import { createRestaurantItemTemplate, createViralFoodTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    const hero = document.querySelector('.breadcrumb');
    hero.classList.add('hidden');

    return `
        <section class="content">
            <div class="container__restaurant">
                <h1 class="restaurant__label">Explore Restaurant</h1>
                <div id="restaurant-list" class="restaurants">
                    <!-- List data restaurant -->
                </div>
                <div class="restaurant__footer">
                    <a href="#" class="btn btn-primary">Tampilin lebih banyak resto</a>
                </div>
            </div>

            <div class="container__viral-food">
                <h1 class="viral-food__label">45's Foods Terviral</h1>
                <div id="viral-food-list" class="viral-food">
                    <!-- List data viral foods -->
                </div>
                <div class="viral-food__footer">
                    <a href="#" class="btn btn-primary">Lihat semua yang viral</a>
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const viralFoods = ViralFood.data;
    const viralFoodsContainer = document.querySelector('#viral-food-list');
    viralFoods.forEach((food) => {
      viralFoodsContainer.innerHTML += createViralFoodTemplate(food);
    });
  },
};

export default Home;
