import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import RestaurantList from '../views/pages/restaurant-list';
import ViralFoodList from '../views/pages/viral-food-list';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/restaurant-list': RestaurantList,
  '/viral-food-list': ViralFoodList,
  '/favorite-restaurant': FavoriteRestaurant,
};

export default routes;
