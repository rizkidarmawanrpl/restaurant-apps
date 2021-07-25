/* eslint-disable no-underscore-dangle */
class BreadcrumbItem extends HTMLElement {
  set breadcrumb(item) {
    this._breadcrumb = item;
    this.render();
  }

  renderLoader() {
    this.innerHTML = '<a href="javascript:;" class="">-</a>';
  }

  render() {
    const breadcrumb = this._breadcrumb;
    this.innerHTML = `<a href="${breadcrumb.link}" class="${breadcrumb.class}">${breadcrumb.label}</a>`;
  }
}

customElements.define('breadcrumb-item', BreadcrumbItem);
