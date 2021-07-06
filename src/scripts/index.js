/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/sass/theme.scss';
import '../../node_modules/placeholder-loading/src/scss/placeholder-loading.scss';
import '../styles/sass/main.scss';
import '../styles/sass/responsive.scss';
import './component/app-bar';
import './component/footer-bar';
import './component/menu-list';
import './component/hero-bar';
import './component/breadcrumb-list';
import './component/notification-bar';
import App from './views/app';
// import swRegister from './utils/sw-register';

const app = new App({
  metatitle: document.querySelector('title'),
  sitetitle: document.querySelector('app-bar'),
  footer: document.querySelector('footer-bar'),
  menu: document.querySelector('menu-list'),
  buttonMenu: document.querySelector('#menu'),
  iconMenuDefault: document.querySelector('.icon-default'),
  iconMenuClose: document.querySelector('.icon-close'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
