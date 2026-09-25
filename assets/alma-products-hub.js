if (!customElements.get('alma-products-hub')) {
  customElements.define('alma-products-hub', class extends HTMLElement {
    connectedCallback() {
      if (this.initialized) return;
      this.initialized = true;
      this.tabs = [...this.querySelectorAll('[data-alma-products-tab]')];
      this.panels = [...this.querySelectorAll('[data-alma-products-panel]')];
      this.tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => this.select(tab));
        tab.addEventListener('keydown', (event) => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
          event.preventDefault();
          const target = event.key === 'Home' ? 0 : event.key === 'End' ? this.tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + this.tabs.length) % this.tabs.length;
          this.tabs[target].focus();
          this.select(this.tabs[target]);
        });
      });
    }

    select(tab) {
      const selected = tab.dataset.almaProductsTab;
      this.tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
      });
      this.panels.forEach((panel) => {
        const active = panel.dataset.almaProductsPanel === selected;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
    }
  });
}
