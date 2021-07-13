/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
// import 'regenerator-runtime';
import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    // await runtime.register();

    // navigator.serviceWorker.register('/service-worker.js').then((registration) => {
    //   console.log('SW registered: ', registration);
    // }).catch((registrationError) => {
    //   console.log('SW registration failed: ', registrationError);
    // });
    // return;

    if (Workbox) {
      console.log('Workbox berhasil dimuat');
    } else {
      console.log('Workbox gagal dimuat');
    }

    const wb = new Workbox('./sw.js');
    wb.addEventListener('installed', (event) => {
      if (!event.isUpdate) {
        console.log('Service Worker Installed!');
      }
    });

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('Service Worker Activated!');
      }
    });

    await wb.register();
  }

  // console.log('Service worker not supported in this browser');
};

export default swRegister;
