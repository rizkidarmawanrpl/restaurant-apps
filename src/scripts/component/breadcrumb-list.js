/* eslint-disable no-underscore-dangle */
import './breadcrumb-item';

class BreadcrumbList extends HTMLElement {
  set breadcrumbs(breadcrumbs) {
    this._breadcrumbs = breadcrumbs;
    this.render();
  }

  renderLoader() {
    this.innerHTML = '';

    const breadcrumbItemElement = document.createElement('breadcrumb-item');
    breadcrumbItemElement.renderLoader();
    this.appendChild(breadcrumbItemElement);
  }

  render() {
    let increment = 1;

    this.innerHTML = '';

    this._breadcrumbs.forEach((breadcrumb) => {
      const breadcrumbItemElement = document.createElement('breadcrumb-item');

      breadcrumbItemElement.breadcrumb = breadcrumb;
      this.appendChild(breadcrumbItemElement);

      if (increment !== this._breadcrumbs.length) {
        this.splitter();
      }

      increment += increment;
    });
  }

  splitter() {
    const splitterElement = document.createElement('span');
    splitterElement.innerHTML = '/';
    this.appendChild(splitterElement);
  }
}

customElements.define('breadcrumb-list', BreadcrumbList);
