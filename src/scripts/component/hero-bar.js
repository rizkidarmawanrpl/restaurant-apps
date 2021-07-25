class HeroBar extends HTMLElement {
  show() {
    this.render();
  }

  hide() {
    this.innerHTML = '';
  }

  renderLoader() {
    this.innerHTML = `
      <div class="ph-item">
          <div class="ph-col-12">
              <div class="ph-picture"></div>
          </div>
      </div>
    `;
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <div>
            <h1 class="hero__title"><strong>Menu Makanan 4 Sehat, 5 Sempurna</strong></h1>
            <p class="hero__tagline">Hidup sehat dengan makan makanan pokok, lauk pauk, sayur-sayuran, buah-buahan, dan lengkapi dengan meminum susu.</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-bar', HeroBar);
