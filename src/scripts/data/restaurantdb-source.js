import API_ENPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listRestaurants() {
    const response = await fetch(API_ENPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
