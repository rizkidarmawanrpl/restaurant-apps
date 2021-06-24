/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.classList.add('hidden');

    return `
      <section class="content-detail">
        <div class="container__restaurant-detail">
            <div class="restaurant-detail__thumbnail">
                <img src="https://restaurant-api.dicoding.dev/images/medium/14">
            </div>
            <div class="restaurant-detail__content">
                <h1 class="restaurant-detail__title">Pisang Goreng Krenyes OK Dr. Satrio</h1>
                <div class="restaurant-detail__category">
                    <span>Italia</span>
                    <span>Modern</span>
                </div>
                <h2 class="restaurant-detail__rating">
                    <span>Rating</span> <i class="fa fa-star"></i> 4.5
                </h2>
                <p class="restaurant-detail__description">
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                </p>
            </div>
            <div class="restaurant-detail__address">
                <h1 class="restaurant-detail__address-title">Kota</h1>
                <p>Bogor</p>
                <h1 class="restaurant-detail__address-title">Alamat</h1>
                <p>Jln. Pandeglang no 19</p>
            </div>
        </div>

        <div class="container__restaurant-favorite">
            <div class="restaurant-favorite__item">
                <h1 class="restaurant-favorite__title">Kamu Suka Banget Sama Resto Ini Ya... Ciee Jadi Langganan Setia ;)</h1>
            </div>
            <div class="restaurant-favorite__item">
                <h2 class="restaurant-favorite__subtitle">Yuk, jadiin resto ini resto favorit kamu</h1>
            </div>
            <div class="restaurant-favorite__item">
                <div class="restaurant-favorite__button">
                    <button class="btn btn-primary"><i class="fa fa-heart liked"></i> &nbsp; Suka</button>
                </div>
            </div>
        </div>

        <div class="container__menu-utama">
            <h1 class="menu-utama__label">Menus</h1>
            <div class="menu-utama">
                <div class="menu-utama__food">
                    <h1 class="menu-utama__title">Makanan</h1>
                    <div class="menu-utama__foods">
                        <div class="menu-utama__food-item">
                            <h1 class="menu-utama__food-item__title">dkdkd</h1>
                        </div>
                        <div class="menu-utama__food-item">
                            <h1 class="menu-utama__food-item__title">dkdkd</h1>
                        </div>
                    </div>
                </div>

                <div class="menu-utama__drink">
                    <h1 class="menu-utama__title">Minuman</h1>
                    <div class="menu-utama__drinks">
                        <div class="menu-utama__drink-item">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container__customer-review">
            <h1 class="customer-review__label">Customer Reviews</h1>
            <div class="customer-reviews">
                <div class="customer-review__item">
                    <div class="customer-review__item-thumbnail">
                        <h2>RD</h2>
                    </div>
                    <h1 class="customer-review__item-name">Rizki Darmawan</h1>
                    <p class="customer-review__item-review">Lorem ipsum dolor sit amet</p>
                    <p class="customer-review__item-date">20 Januari 2021</p>
                </div>
                <div class="customer-review__item">
                    <div class="customer-review__item-thumbnail">
                        <h2>RD</h2>
                    </div>
                    <h1 class="customer-review__item-name">Rizki Darmawan</h1>
                    <p class="customer-review__item-review">Quisque rutrum. Aeneane nisi vel augue. Curabitur ullamcorper ultricie</p>
                    <p class="customer-review__item-date">20 Januari 2021</p>
                </div>
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    // const restaurantContainer = document.querySelector('#restaurant');
    // restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
