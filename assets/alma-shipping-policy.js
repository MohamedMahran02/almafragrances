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
    const opener = event.target.closest('[data-alma-shipping-policy-open], [data-alma-terms-of-service-open], [data-alma-privacy-open], [data-alma-refund-open]');
    if (opener) {
      const dialogId = opener.dataset.almaShippingPolicyOpen || opener.dataset.almaTermsOfServiceOpen || opener.dataset.almaPrivacyOpen || opener.dataset.almaRefundOpen;
      const dialog = document.getElementById(dialogId);
      if (dialog && !dialog.open) dialog.showModal();
      return;
    }

    const dialog = event.target.closest('.alma-shipping-policy, .alma-terms-of-service');
    if (!dialog) return;

    if (event.target.closest('[data-alma-shipping-policy-close], [data-alma-terms-of-service-close]') || event.target === dialog) {
      closeDialog(dialog);
    }
  });

  document.addEventListener('cancel', (event) => {
    const dialog = event.target.closest?.('.alma-shipping-policy, .alma-terms-of-service');
    if (!dialog) return;

    event.preventDefault();
    closeDialog(dialog);
  });
})();
