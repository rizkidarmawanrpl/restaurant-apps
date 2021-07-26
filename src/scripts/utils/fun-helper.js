const initialName = (str) => {
  const mystr = str.split(' ');
  let result = mystr[0].substr(0, 1);
  if (mystr.length > 1) {
    result += mystr[1].substr(0, 1);
  }
  return result;
};

const hideHero = () => {
  const heroBar = document.querySelector('hero-bar');
  heroBar.hide();
};

const showHero = () => {
  const heroBar = document.querySelector('hero-bar');
  heroBar.renderLoader();
  heroBar.show();
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

const loaderBreadcrumb = (breadcrumbContainer) => {
  breadcrumbContainer.renderLoader();
}

const hideBreadcrumb = (breadcrumbContainer) => {
  breadcrumbContainer.innerHTML = '';
};

const showBreadcrumb = (breadcrumbContainer, dataBreadcrumb) => {
  breadcrumbContainer.breadcrumbs = dataBreadcrumb;
};

const showNotification = (teks) => {
  const notificationContainer = document.querySelector('notification-bar');
  notificationContainer.notification = teks;
  notificationContainer.classList.toggle('show');
  setTimeout(() => { notificationContainer.classList.remove('show'); }, 2900);
};

const additionalFoodMenu = (restaurant) => ({
  pictureId: 'https://via.placeholder.com/184x124?text=Menu%20Makanan',
  restaurant,
  description: 'Lorem ipsum dolor sit amet',
});

const additionalDrinkMenu = (restaurant) => ({
  pictureId: 'https://via.placeholder.com/184x124?text=Menu%20Minuman',
  restaurant,
  description: 'Lorem ipsum dolor sit amet',
});

export {
  initialName,
  loaderBreadcrumb,
  hideBreadcrumb,
  showBreadcrumb,
  hideHero,
  showHero,
  dataBreadcrumbHome,
  dataBreadcrumbRestaurant,
  showNotification,
  additionalFoodMenu,
  additionalDrinkMenu,
};
