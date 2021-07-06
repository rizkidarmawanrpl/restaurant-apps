const cacheName = 'cache';// new Date().toISOString();

const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_SMALL_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_MEDIUM_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_LARGE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/large/',
  CACHE_NAME: `45Foods-V1-${cacheName}`,
  DATABASE_NAME: '45-fooods-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_FAVORITE_RESTAURANT: 'favorite-restaurants',
};

export default CONFIG;
