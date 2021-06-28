import ViralFood from '../../data/MAKANAN_TERVIRAL.json';
import { createViralFoodTemplate } from '../templates/template-creator';
import { hideHero, dataBreadcrumbRestaurant, showBreadcrumb } from '../../utils/fun-helper';

const ViralFoodList = {
  async render() {
    hideHero();

    return `
        <section class="content">
            <div class="container__viral-food">
                <h1 class="viral-food__label">45's Foods Terviral</h1>
                <div id="viral-food-list" class="viral-food viral-food-list">
                    <!-- List data viral foods -->
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const viralFoods = ViralFood.data;
    const viralFoodsContainer = document.querySelector('#viral-food-list');

    showBreadcrumb([
      dataBreadcrumbRestaurant,
      {
        link: '',
        label: 'Viral Foods',
      },
    ]);

    viralFoods.forEach((food) => {
      viralFoodsContainer.innerHTML += createViralFoodTemplate(food);
    });
  },
};

export default ViralFoodList;
