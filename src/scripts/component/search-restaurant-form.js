class SearchRestaurantForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <input type="text" name="search" class="form-control" placeholder="Ketik nama resto di sini..">
            <button type="button" id="button-search" class="btn btn-primary">Cari</button>
        `;
  }
}

customElements.define('search-restaurant-form', SearchRestaurantForm);
