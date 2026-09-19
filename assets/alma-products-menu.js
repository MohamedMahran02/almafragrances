(() => {
  const desktopQuery = window.matchMedia('(min-width: 990px)');

  document.querySelectorAll('.alma-products-menu > header-menu > details').forEach((details) => {
    const summary = details.querySelector('summary');
    const setOpen = (open) => {
      if (!desktopQuery.matches) return;
      details.open = open;
      summary?.setAttribute('aria-expanded', String(open));
    };

    details.parentElement.addEventListener('mouseenter', () => setOpen(true));
    details.parentElement.addEventListener('mouseleave', () => setOpen(false));
    desktopQuery.addEventListener('change', () => setOpen(false));
  });
})();
