(() => {
  const modal = document.querySelector('[data-alma-scent-finder-modal]');
  if (!modal || typeof modal.showModal !== 'function') return;

  const seenKey = 'alma-scent-finder-opened';
  const open = () => {
    if (!modal.open) modal.showModal();
  };
  const close = () => {
    if (modal.open) modal.close();
  };

  modal.querySelectorAll('[data-alma-scent-finder-close]').forEach((control) => control.addEventListener('click', close));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });

  const openFromHash = () => {
    if (window.location.hash === '#AlmaScentFinder') open();
  };
  window.addEventListener('hashchange', openFromHash);
  document.addEventListener('click', (event) => {
    const opener = event.target.closest('a[href="#AlmaScentFinder"]');
    if (!opener) return;
    event.preventDefault();
    open();
  });

  if (window.location.hash === '#AlmaScentFinder') {
    open();
    return;
  }

  try {
    if (!window.sessionStorage.getItem(seenKey)) {
      window.sessionStorage.setItem(seenKey, 'true');
      requestAnimationFrame(open);
    }
  } catch (error) {
    requestAnimationFrame(open);
  }
})();
