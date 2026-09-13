(() => {
  const arabicText = /[\u0600-\u06ff\u0750-\u077f\u08a0-\u08ff\ufb50-\ufdff\ufe70-\ufeff]/;

  const showEnglishDescription = (description) => {
    for (const block of description.children) {
      if (arabicText.test(block.textContent)) {
        block.hidden = true;
        continue;
      }

      if (block.getAttribute('dir')?.toLowerCase() === 'rtl') block.removeAttribute('dir');
      if (block.style.direction === 'rtl') block.style.removeProperty('direction');
      if (block.style.textAlign === 'right') block.style.removeProperty('text-align');
    }
  };

  const localizeDescriptions = (root = document) => {
    if (!document.documentElement.lang.toLowerCase().startsWith('en')) return;
    root.querySelectorAll('[data-alma-localized-description]').forEach(showEnglishDescription);
    root.querySelectorAll('[data-alma-hide-if-arabic]').forEach((element) => {
      if (arabicText.test(element.textContent)) element.hidden = true;
    });
  };

  localizeDescriptions();
  document.addEventListener('shopify:section:load', (event) => localizeDescriptions(event.target));
})();
