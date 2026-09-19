(() => {
  const modal = document.querySelector('[data-alma-ritual-signup-modal]');
  const launcher = document.querySelector('[data-alma-ritual-signup-launcher]');
  if (!modal || !launcher || typeof modal.showModal !== 'function') return;

  const sectionId = modal.dataset.almaRitualSignupSection;
  const ritual = document.querySelector(`#shopify-section-${sectionId}`);
  if (!ritual) return;

  const seenKey = `alma-ritual-signup-seen-${sectionId}`;
  const bodyClass = 'alma-ritual-signup-is-open';
  let hasOpened = false;

  const setSeen = () => {
    try {
      window.sessionStorage.setItem(seenKey, 'true');
    } catch (error) {
      // The offer still works when session storage is unavailable.
    }
  };

  const wasSeen = () => {
    try {
      return window.sessionStorage.getItem(seenKey) === 'true';
    } catch (error) {
      return false;
    }
  };

  const open = () => {
    if (!modal.open) modal.showModal();
    hasOpened = true;
    document.body.classList.add(bodyClass);
    launcher.hidden = true;
  };

  const close = () => {
    if (modal.open) modal.close();
  };

  modal.querySelectorAll('[data-alma-ritual-signup-close]').forEach((control) => control.addEventListener('click', close));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  modal.addEventListener('close', () => {
    document.body.classList.remove(bodyClass);
    setSeen();
    launcher.hidden = false;
  });

  launcher.addEventListener('click', open);

  if (modal.dataset.signupSuccess === 'true' || modal.dataset.signupError === 'true') {
    requestAnimationFrame(open);
    return;
  }

  if (wasSeen()) {
    launcher.hidden = false;
    return;
  }

  launcher.hidden = true;
  const observer = new IntersectionObserver((entries) => {
    if (hasOpened || !entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    open();
  }, { threshold: 0.35 });
  observer.observe(ritual);
})();
