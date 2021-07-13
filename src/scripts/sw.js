/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
// import 'regenerator-runtime';
// import CacheHelper from './utils/cache-helper';

// const { assets } = global.serviceWorkerOption;

// self.addEventListener('install', (event) => {
//   console.log('Install SW');
//   event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(CacheHelper.deleteOldCache());
// });

// self.addEventListener('fetch', (event) => {
//   if (event.request.method !== 'POST')
// event.respondWith(CacheHelper.revalidateCache(event.request));
// });

// import 'regenerator-runtime/runtime';
// import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
// import { cleanupOutdatedCaches } from 'workbox-precaching';
// import { registerRoute } from 'workbox-routing';
// import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';
// import { ExpirationPlugin } from 'workbox-expiration';
// import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
// import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// import CONFIG from './globals/config';
// import API_ENPOINT from './globals/api-endpoint';

// skipWaiting();

// clientsClaim();

// setCacheNameDetails({
//   prefix: CONFIG.CACHE_NAME,
// });

// precacheAndRoute([
//   // ...self.__WB_MANIFEST,
//   { url: './', revision: '1' },
//   { url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap', revision: '1' },
//   { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css', revision: '1' },
// ], { ignoreURLParametersMatching: [/.*/] });

// registerRoute(
//   ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev'
//   && url.pathname.startsWith('/list'),
//   new StaleWhileRevalidate({
//     cacheName: ` ${CONFIG.CACHE_NAME} Home `,
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxEntries: 100,
//         maxAgeSeconds: 60 * 60 * 24 * 265,
//       }),
//     ],
//   }),
// );

// registerRoute(
//   ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev'
//   && url.pathname.startsWith('/images/small/'),
//   new StaleWhileRevalidate({
//     cacheName: ` ${CONFIG.CACHE_NAME} Image `,
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxEntries: 100,
//         maxAgeSeconds: 60 * 60 * 24 * 265,
//       }),
//     ],
//   }),
// );

// registerRoute(
//   ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev'
//   && url.pathname.startsWith('/detail'),
//   // new RegExp(API_ENPOINT.DETAIL),
//   new CacheFirst({
//     cacheName: `${CONFIG.CACHE_NAME} Detail`,
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxEntries: 100,
//         maxAgeSeconds: 60 * 60 * 24 * 265,
//       }),
//     ],
//   }),
// );

// registerRoute(
//   new RegExp('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'),
//   new CacheFirst({
//     cacheName: 'FontAwesome',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxEntries: 100,
//         maxAgeSeconds: 60 * 60 * 24 * 265,
//       }),
//     ],
//   }),
// );

// cleanupOutdatedCaches();

import 'regenerator-runtime'; /* for async await transpile */
import { setCacheNameDetails, skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

import CONFIG from './globals/config';

skipWaiting();
clientsClaim();

setCacheNameDetails(CONFIG.CACHE_NAME);
precacheAndRoute(self.__WB_MANIFEST, {
  ignoreUrlParametersMatching: [/.*/],
});

registerRoute(
  ({ url }) => url.origin,
  new StaleWhileRevalidate({
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  }),
);

self.addEventListener('push', (event) => {
  const title = 'Direstaurant Notification Push';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
