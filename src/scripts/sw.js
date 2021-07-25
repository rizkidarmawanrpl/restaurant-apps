/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './globals/config';
import URLS from './globals/config_url';

skipWaiting();

clientsClaim();

setCacheNameDetails({
  prefix: CONFIG.CACHE_NAME,
});

precacheAndRoute([
  ...self.__WB_MANIFEST,
  { url: './', revision: '1' },
  { url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap', revision: '1' },
  // { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css', revision: '1' },
  { url: 'https://fonts.googleapis.com/css?family=Material+Icons&amp;display=swap', revision: '1' },
], { ignoreURLParametersMatching: [/.*/] });

registerRoute(
  ({ url }) => url.origin === URLS.BASE
  && url.pathname.startsWith(`/${URLS.SEGMENT.LIST}`),
  new StaleWhileRevalidate({
    cacheName: `${CONFIG.CACHE_NAME} Home`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 265,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === URLS.BASE
  && url.pathname.startsWith(`/${URLS.IMAGE.SMALL}/`),
  new StaleWhileRevalidate({
    cacheName: `${CONFIG.CACHE_NAME} Image`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 265,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === URLS.BASE
  && url.pathname.startsWith(`/${URLS.SEGMENT.DETAIL}`),
  // new RegExp(API_ENPOINT.DETAIL),
  new CacheFirst({
    cacheName: `${CONFIG.CACHE_NAME} Detail`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 265,
      }),
    ],
  }),
);

registerRoute(
  new RegExp('https://fonts.googleapis.com/css?family=Material+Icons&amp;display=swap'),
  new CacheFirst({
    cacheName: 'MaterialIcons',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 265,
      }),
    ],
  }),
);

cleanupOutdatedCaches();
