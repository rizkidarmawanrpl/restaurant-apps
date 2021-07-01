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
};

const dataBreadcrumbRestaurant = {
  link: '#/restaurant-list',
  label: 'Eksplore Restaurant',
};

const hideBreadcrumb = () => {
  const breadcrumb = document.querySelector('.breadcrumb');
  breadcrumb.classList.add('hidden');
};

const showBreadcrumb = (dataBreadcrumb) => {
  const breadcrumb = document.querySelector('.breadcrumb');
  const breadcrumbContainer = document.querySelector('#breadcrumbs');
  breadcrumb.classList.remove('hidden');
  breadcrumbContainer.innerHTML = '';

  let increment = 1;
  let breadcrumbLink = '';
  let breadcrumbActive = '';
  let breadcrumbSplitter = '<span>/</span>';
  dataBreadcrumb.forEach((data) => {
    breadcrumbLink = `href="${data.link}"`;

    if (increment === dataBreadcrumb.length) {
      breadcrumbLink = '';
      breadcrumbActive = 'breadcrumb__active';
      breadcrumbSplitter = '';
    }

    breadcrumbContainer.innerHTML += `<li><a ${breadcrumbLink} class="${breadcrumbActive}">${data.label}</a></li>`;
    breadcrumbContainer.innerHTML += breadcrumbSplitter;

    increment += increment;
  });
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
