import URLS from './config_url';
import CONFIG from './config';

const API_ENPOINT = {
  LIST: `${CONFIG.BASE_URL}${URLS.SEGMENT.LIST}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}${URLS.SEGMENT.DETAIL}/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENPOINT;
