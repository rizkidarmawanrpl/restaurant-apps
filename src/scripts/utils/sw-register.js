/* eslint-disable no-console */
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import 'regenerator-runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    // await runtime.register();

    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
    return;
  }

  console.log('Service worker not supported in this browser');
};

export default swRegister;
