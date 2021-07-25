class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
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
