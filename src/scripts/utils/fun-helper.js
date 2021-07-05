const initialName = (str) => {
  const mystr = str.split(' ');
  let result = mystr[0].substr(0, 1);
  if (mystr.length > 1) {
    result += mystr[1].substr(0, 1);
  }
  return result;
};

const hideHero = () => {
  const hero = document.querySelector('.hero');
  hero.classList.add('hidden');
};

const showHero = () => {
  const hero = document.querySelector('.hero');
  hero.classList.remove('hidden');
};

const dataBreadcrumbHome = {
  link: '#/',
  label: 'Home',
  class: '',
};

const dataBreadcrumbRestaurant = {
  link: '#/restaurant-list',
  label: 'Eksplore Restaurant',
  class: '',
};

const hideBreadcrumb = () => {
  const breadcrumb = document.querySelector('.breadcrumb');
  const breadcrumbContainer = document.querySelector('breadcrumb-list');
  breadcrumb.classList.add('hidden');
  breadcrumbContainer.innerHTML = '';
};

const showBreadcrumb = (dataBreadcrumb) => {
  const breadcrumb = document.querySelector('.breadcrumb');
  const breadcrumbContainer = document.querySelector('breadcrumb-list');
  breadcrumb.classList.remove('hidden');

  breadcrumbContainer.breadcrumbs = dataBreadcrumb;
};

const showNotification = (teks) => {
  const notificationContainer = document.getElementById('notification');
  notificationContainer.innerHTML = teks;
  notificationContainer.classList.toggle('show');
  setTimeout(() => { notificationContainer.classList.remove('show'); }, 2900);
};

export {
  initialName,
  hideBreadcrumb,
  showBreadcrumb,
  hideHero,
  showHero,
  dataBreadcrumbHome,
  dataBreadcrumbRestaurant,
  showNotification,
};
