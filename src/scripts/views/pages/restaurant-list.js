import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import { hideHero, dataBreadcrumbHome, showBreadcrumb } from '../../utils/fun-helper';

const RestaurantList = {
  async render() {
    hideHero();

    return `
            <section class="content">
                <div class="container__restaurant">
                    <h1 class="restaurant__label">Explore Restaurant</h1>
                    <div id="restaurant-list" class="restaurants">
                        <!-- List data restaurant -->
                    </div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-list');

    showBreadcrumb([
      dataBreadcrumbHome,
      {
        link: '',
        label: 'Explore Restaurant',
      },
    ]);

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
