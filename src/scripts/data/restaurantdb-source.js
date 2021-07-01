import API_ENPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

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

  static async addReview(formdata) {
    const headers = new Headers();
    headers.append('X-Auth-Token', CONFIG.KEY);
    headers.append('Content-Type', 'application/json');

    const body = JSON.stringify(formdata);

    const config = {
      method: 'POST',
      headers,
      body,
      redirect: 'follow',
    };

    const response = await fetch(API_ENPOINT.REVIEW, config);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantDbSource;
