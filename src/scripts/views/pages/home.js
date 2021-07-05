/* eslint-disable no-console */
import RestaurantDbSource from '../../data/restaurantdb-source';
import ViralFood from '../../data/MAKANAN_TERVIRAL.json';
import { createRestaurantItemTemplate, createViralFoodTemplate, createPlaceholderRestaurantTemplate } from '../templates/template-creator';
import { hideBreadcrumb, showHero } from '../../utils/fun-helper';
import '../../component/restaurant-list';

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="container__restaurant">
                <h1 class="restaurant__label">Explore Restaurant</h1>
                <!-- <div id="restaurant-list" class="restaurants">
                    List data restaurant
                </div> -->
                <restaurant-list></restaurant-list>
                <div class="restaurant__footer">
                    <a href="#/restaurant-list" class="btn btn-primary">Tampilin lebih banyak resto</a>
                </div>
            </div>

            <div class="container__viral-food">
                <h1 class="viral-food__label">45's Foods Terviral</h1>
                <div id="viral-food-list" class="viral-food">
                    <!-- List data viral foods -->
                </div>
                <div class="viral-food__footer">
                    <a href="#/viral-food-list" class="btn btn-primary">Lihat semua yang viral</a>
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('restaurant-list');
    const renderRestaurantLoader = (count) => {
      restaurantsContainer.loaders = count;
    };
    const renderRestaurantResult = (results) => {
      restaurantsContainer.innerHTML = '';
      restaurantsContainer.restaurants = results;
    };
    const fallbackRestaurantResult = (message) => {
      restaurantsContainer.renderError(message);
    };

    showHero();
    hideBreadcrumb();
    renderRestaurantLoader(3);

    try {
      const restaurants = await RestaurantDbSource.listRestaurants();
      renderRestaurantResult(restaurants);
    } catch (message) {
      fallbackRestaurantResult(message);
    }

    const viralFoods = ViralFood.data;
    const viralFoodsContainer = document.querySelector('#viral-food-list');
    viralFoods.forEach((food) => {
      viralFoodsContainer.innerHTML += createViralFoodTemplate(food);
    });
  },
};

export default Home;
