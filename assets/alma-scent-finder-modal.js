(() => {
  const modal = document.querySelector('[data-alma-scent-finder-modal]');
  if (!modal || typeof modal.showModal !== 'function') return;

  const seenKey = 'alma-scent-finder-opened';
  const open = () => {
    if (!modal.open) modal.showModal();
    document.body.classList.add('alma-scent-finder-is-open');
    try {
      window.sessionStorage.setItem(seenKey, 'true');
    } catch (error) {
      // The dialog can still open when browser storage is unavailable.
    }
  };
  const close = () => {
    if (modal.open) modal.close();
  };

  modal.querySelectorAll('[data-alma-scent-finder-close]').forEach((control) => control.addEventListener('click', close));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  modal.addEventListener('close', () => document.body.classList.remove('alma-scent-finder-is-open'));

  const openFromHash = () => {
    if (window.location.hash === '#AlmaScentFinder') open();
  };
  window.addEventListener('hashchange', openFromHash);
  document.addEventListener('click', (event) => {
    const opener = event.target.closest('[data-alma-scent-finder-launcher], a[href="#AlmaScentFinder"]');
    if (!opener) return;
    event.preventDefault();
    open();
  });

  if (window.location.hash === '#AlmaScentFinder') {
    requestAnimationFrame(open);
    return;
  }

  try {
    if (!window.sessionStorage.getItem(seenKey)) requestAnimationFrame(open);
  } catch (error) {
    requestAnimationFrame(open);
  }
})();
