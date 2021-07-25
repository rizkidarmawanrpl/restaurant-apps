class CustomerReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="content-form">
            <div class="container__add-review">
                <h1 class="add-review__title">
                    Gimana Restonya?
                    <small>Yuk, kasih review kamu ke resto ini.</small>
                </h1>
                <form class="form-horizontal">
                    <div class="form-item">
                        <label for="name" class="form-label">Nama</label>
                        <input type="text" name="name" id="name" class="form-control">
                    </div>
                    <div class="form-item">
                        <label for="review" class="form-label">Review</label>
                        <textarea name="review" id="review" class="form-control"></textarea>
                    </div>
                    <div class="form-item">
                        <button type="button" id="button-add-review" class="btn btn-primary"><i class="fa fa-send"></i> &nbsp; Kirim</button>
                    </div>
                </form>
            </div>
        </section>
    `;
  }
}

customElements.define('customer-review-form', CustomerReviewForm);
