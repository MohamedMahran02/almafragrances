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

  const form = modal.closest('form');
  const submitButton = form?.querySelector('.alma-ritual-signup-modal__submit');
  form?.addEventListener('submit', (event) => {
    if (form.dataset.submitting === 'true') {
      event.preventDefault();
      return;
    }
    if (!form.checkValidity()) return;
    form.dataset.submitting = 'true';
    modal.dataset.submitting = 'true';
    submitButton?.setAttribute('aria-busy', 'true');
    if (submitButton) submitButton.disabled = true;
  });

  modal.addEventListener('cancel', (event) => {
    if (modal.dataset.submitting === 'true') event.preventDefault();
  });
  window.addEventListener('pageshow', () => {
    form?.removeAttribute('data-submitting');
    modal.removeAttribute('data-submitting');
    submitButton?.removeAttribute('aria-busy');
    if (submitButton) submitButton.disabled = false;
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
