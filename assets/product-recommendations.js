if (!customElements.get('product-recommendations')) {
  customElements.define(
    'product-recommendations',
    class ProductRecommendations extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        // Skip if recommendations were already performed server-side
        if (this.dataset.recommendationsPerformed === 'true') return;

        // Remove quick-add-hidden immediately — if it sets display:none the
        // IntersectionObserver will never fire on a hidden element
        this.classList.remove('quick-add-hidden');

        new IntersectionObserver(
          (entries, observer) => {
            if (!entries[0].isIntersecting) return;
            observer.unobserve(this);
            this.loadRecommendations();
          },
          { rootMargin: '0px 0px 400px 0px' }
        ).observe(this);
      }

      loadRecommendations() {
        const sectionId = this.dataset.sectionId;
        const productId = this.dataset.productId;
        const baseUrl = this.dataset.url;
        const intent = this.dataset.intent;

        if (!sectionId || !productId || !baseUrl) return;

        let url = `${baseUrl}&section_id=${sectionId}&product_id=${productId}`;

        // Pass the recommendation type (e.g. "complementary") so the API returns
        // the merchant's hand-picked list instead of defaulting to "related".
        if (intent) {
          url += `&intent=${intent}`;
        }

        fetch(url)
          .then((response) => response.text())
          .then((text) => {
            const html = document.createElement('div');
            html.innerHTML = text;
            const recommendations = html.querySelector('product-recommendations');

            if (recommendations && recommendations.innerHTML.trim().length) {
              this.innerHTML = recommendations.innerHTML;
            }
          })
          .catch((error) => {
            console.error('Product recommendations fetch failed:', error);
          });
      }
    }
  );
}