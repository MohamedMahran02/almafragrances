if (!customElements.get('alma-favourites')) {
  customElements.define('alma-favourites', class extends HTMLElement {
    connectedCallback() {
      if (this.initialized) return;
      this.initialized = true;
      this.tabs = [...this.querySelectorAll('.alma-favourites__tab')];
      this.panels = [...this.querySelectorAll('.alma-favourites__panel')];
      this.querySelector('.alma-favourites__tabs')?.setAttribute('role', 'tablist');
      this.tabs.forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-controls', this.panels[index].id);
        this.panels[index].setAttribute('role', 'tabpanel');
        this.panels[index].tabIndex = 0;
        tab.addEventListener('click', event => { event.preventDefault(); this.select(index); });
        tab.addEventListener('keydown', event => {
          let next;
          if (event.key === 'ArrowRight') next = (index + 1) % this.tabs.length;
          if (event.key === 'ArrowLeft') next = (index - 1 + this.tabs.length) % this.tabs.length;
          if (event.key === 'Home') next = 0;
          if (event.key === 'End') next = this.tabs.length - 1;
          if (next === undefined) return;
          event.preventDefault();
          this.select(next);
          this.tabs[next].focus();
        });
      });
      this.select(0);
      this.addEventListener('shopify:block:select', event => {
        const index = this.tabs.findIndex(tab => tab === event.target || tab.contains(event.target));
        if (index >= 0) this.select(index);
      });
    }
    select(index) {
      this.tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
        this.panels[i].hidden = i !== index;
      });
    }
  });
}
