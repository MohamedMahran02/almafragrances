(() => {
  const closeDelay = 180;

  const closeDialog = (dialog) => {
    if (!dialog || !dialog.open || dialog.dataset.closing) return;

    dialog.dataset.closing = 'true';
    window.setTimeout(() => {
      dialog.close();
      delete dialog.dataset.closing;
    }, closeDelay);
  };

  document.addEventListener('click', (event) => {
    const opener = event.target.closest('[data-alma-shipping-policy-open]');
    if (opener) {
      const dialog = document.getElementById(opener.dataset.almaShippingPolicyOpen);
      if (dialog && !dialog.open) dialog.showModal();
      return;
    }

    const dialog = event.target.closest('.alma-shipping-policy');
    if (!dialog) return;

    if (event.target.closest('[data-alma-shipping-policy-close]') || event.target === dialog) {
      closeDialog(dialog);
    }
  });

  document.addEventListener('cancel', (event) => {
    const dialog = event.target.closest?.('.alma-shipping-policy');
    if (!dialog) return;

    event.preventDefault();
    closeDialog(dialog);
  });
})();
