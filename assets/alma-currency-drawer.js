(() => {
  const mobileViewport = window.matchMedia('(max-width: 749px)');

  const relocateCurrencySelector = () => {
    const selector = document.querySelector('[data-alma-header-currency]');
    const home = document.querySelector('[data-alma-currency-anchor]');
    const drawer = document.querySelector('[data-alma-drawer-currency]');
    if (!selector || !home || !drawer) return;

    const destination = mobileViewport.matches ? drawer : home.parentElement;
    const isInDestination = selector.parentElement === destination;
    if (isInDestination) return;

    if (mobileViewport.matches) {
      drawer.append(selector);
    } else {
      home.insertAdjacentElement('afterend', selector);
    }

    window.requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
  };

  const start = () => {
    relocateCurrencySelector();
    mobileViewport.addEventListener('change', relocateCurrencySelector);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
