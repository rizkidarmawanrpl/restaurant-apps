/* eslint-disable no-script-url */
import '../../component/food-list';
import ViralFood from '../../data/MAKANAN_TERVIRAL.json';
import { hideHero, dataBreadcrumbRestaurant, showBreadcrumb } from '../../utils/fun-helper';

const ViralFoodList = {
  async render() {
    return `
        <section class="content">
            <div class="container__viral-food">
                <h1 class="viral-food__label">45's Foods Terviral</h1>
                <food-list class="food-list"></food-list>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const viralFoods = ViralFood.data;
    const breadcrumbContainer = document.querySelector('breadcrumb-list');
    const viralFoodsContainer = document.querySelector('food-list');
    const renderViralFoodResult = (results) => {
      viralFoodsContainer.foods = results;
    };

    hideHero();
    showBreadcrumb(
      breadcrumbContainer,
      [
        dataBreadcrumbRestaurant,
        {
          link: 'javascript:;',
          label: 'Viral Foods',
          class: 'active',
        },
      ],
    );

    renderViralFoodResult(viralFoods);
  },
};

export default ViralFoodList;
