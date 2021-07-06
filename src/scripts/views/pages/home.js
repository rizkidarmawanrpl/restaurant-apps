/* eslint-disable no-console */
import '../../component/restaurant-list';
import '../../component/food-list';
import RestaurantDbSource from '../../data/restaurantdb-source';
import ViralFood from '../../data/MAKANAN_TERVIRAL.json';
import { hideBreadcrumb, showHero } from '../../utils/fun-helper';

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="container__restaurant">
                <h1 class="restaurant__label">Explore Restaurant</h1>
                <restaurant-list></restaurant-list>
                <div class="restaurant__footer">
                    <a href="#/restaurant-list" class="btn btn-primary">Tampilin lebih banyak resto</a>
                </div>
            </div>

            <div class="container__viral-food">
                <h1 class="viral-food__label">45's Foods Terviral</h1>
                <food-list></food-list>
                <div class="viral-food__footer">
                    <a href="#/viral-food-list" class="btn btn-primary">Lihat semua yang viral</a>
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const viralFoods = ViralFood.data;
    const restaurantsContainer = document.querySelector('restaurant-list');
    const viralFoodsContainer = document.querySelector('food-list');
    const renderRestaurantLoader = (count) => {
      restaurantsContainer.loaders = count;
    };
    const renderRestaurantResult = (results) => {
      restaurantsContainer.restaurants = results;
    };
    const fallbackRestaurantResult = (message) => {
      restaurantsContainer.renderError(message);
    };
    const renderViralFoodResult = (results) => {
      viralFoodsContainer.foods = results;
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

    renderViralFoodResult(viralFoods);
  },
};

export default Home;
