import URLS from './config_url';

const cacheName = '1.7'; // new Date().toISOString();

const CONFIG = {
  KEY: '12345',
  BASE_URL: `${URLS.BASE}/`,
  BASE_SMALL_IMAGE_URL: `${URLS.BASE}/${URLS.IMAGE.SMALL}/`,
  BASE_MEDIUM_IMAGE_URL: `${URLS.BASE}/${URLS.IMAGE.MEDIUM}/`,
  BASE_LARGE_IMAGE_URL: `${URLS.BASE}/${URLS.IMAGE.LARGE}/`,
  CACHE_NAME: `45Foods-V1-${cacheName}`,
  DATABASE_NAME: '45-fooods-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_FAVORITE_RESTAURANT: 'favorite-restaurants',
};

export default CONFIG;
