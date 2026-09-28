(() => {
  const mobileViewport = window.matchMedia('(max-width: 989px)');

  const relocateCurrencySelector = () => {
    const drawer = document.querySelector('[data-alma-drawer-currency]');
    const cart = document.querySelector('.header__icons .header__icon--cart');
    if (!drawer || !cart) return;

    document.querySelectorAll('.doubly-wrapper, .doubly-float').forEach((selector) => {
      if (mobileViewport.matches) {
        if (selector.parentElement !== drawer) drawer.append(selector);
      } else if (selector.parentElement !== cart.parentElement || selector.previousElementSibling !== cart) {
        cart.insertAdjacentElement('afterend', selector);
      }
    });
  };

  const start = () => {
    relocateCurrencySelector();
    mobileViewport.addEventListener('change', relocateCurrencySelector);

    const observer = new MutationObserver(relocateCurrencySelector);
    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
