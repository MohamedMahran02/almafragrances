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

  const showArabicDescription = (description) => {
    const blocks = [...description.children];
    if (!blocks.some((block) => arabicText.test(block.textContent))) return;
    for (const block of blocks) {
      if (!arabicText.test(block.textContent)) block.hidden = true;
    }
  };

  const localizeDescriptions = (root = document) => {
    const language = document.documentElement.lang.toLowerCase();
    if (language.startsWith('en')) {
      root.querySelectorAll('[data-alma-localized-description]').forEach(showEnglishDescription);
      root.querySelectorAll('[data-alma-hide-if-arabic]').forEach((element) => {
        if (arabicText.test(element.textContent)) element.hidden = true;
      });
    } else if (language.startsWith('ar')) {
      root.querySelectorAll('[data-alma-localized-description]').forEach(showArabicDescription);
      root.querySelectorAll('[data-alma-hide-if-arabic]').forEach((element) => {
        if (/[A-Za-z]/.test(element.textContent)) element.hidden = true;
      });
    }
  };

  localizeDescriptions();
  document.addEventListener('shopify:section:load', (event) => localizeDescriptions(event.target));
})();
