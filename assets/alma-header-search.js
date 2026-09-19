(() => {
  const closeSearch = (search) => {
    search.classList.remove('is-open');
    search.querySelector('.alma-header-search__toggle')?.setAttribute('aria-expanded', 'false');
    search.querySelector('predictive-search')?.close(true);
  };

  document.querySelectorAll('.alma-header-search').forEach((search) => {
    const toggle = search.querySelector('.alma-header-search__toggle');
    const input = search.querySelector('input[type="search"]');
    if (!toggle || !input) return;

    toggle.addEventListener('click', () => {
      const opening = !search.classList.contains('is-open');
      if (!opening) {
        closeSearch(search);
        return;
      }
      search.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      window.setTimeout(() => input.focus(), 180);
    });

    search.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeSearch(search);
        toggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!search.contains(event.target)) closeSearch(search);
    });
  });
})();
