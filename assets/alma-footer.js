class AlmaFooterNavigation extends HTMLElement {
  constructor() {
    super();
    this.mediaQuery = window.matchMedia('(min-width: 750px)');
    this.sync = this.sync.bind(this);
  }

  connectedCallback() {
    this.groups = Array.from(this.querySelectorAll('details'));
    this.sync(this.mediaQuery);
    this.mediaQuery.addEventListener('change', this.sync);
  }

  disconnectedCallback() {
    this.mediaQuery.removeEventListener('change', this.sync);
  }

  sync(event) {
    this.groups.forEach((group) => {
      group.open = event.matches;
    });
  }
}

if (!customElements.get('alma-footer-navigation')) {
  customElements.define('alma-footer-navigation', AlmaFooterNavigation);
}
