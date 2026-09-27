(() => {
  const sectionNames = new Set(['notes', 'size']);
  const sectionPattern = /^(notes|size)\s*:?\s*(.*)$/i;

  const separateSoftBreakSections = (content) => {
    [...content.children].forEach((element) => {
      const pieces = element.innerHTML.split(/<br\s*\/?\s*>/i);
      if (pieces.length < 2) return;

      const containsSection = pieces.some((piece) => {
        const probe = document.createElement('div');
        probe.innerHTML = piece;
        return sectionPattern.test(probe.textContent.trim());
      });
      if (!containsSection) return;

      const fragment = document.createDocumentFragment();
      pieces.forEach((piece) => {
        if (!piece.trim()) return;
        const paragraph = element.cloneNode(false);
        paragraph.innerHTML = piece;
        fragment.append(paragraph);
      });
      element.replaceWith(fragment);
    });
  };

  document.querySelectorAll('.alma-product-description').forEach((description) => {
    const content = description.querySelector('.alma-product-description__content');
    if (!content || content.dataset.accordionsReady) return;
    content.dataset.accordionsReady = 'true';
    separateSoftBreakSections(content);

    let insertAfter = description;
    [...content.children].forEach((heading) => {
      const match = heading.textContent.trim().match(sectionPattern);
      if (!match || !sectionNames.has(match[1].toLowerCase())) return;
      const name = match[1].toLowerCase();
      const inlineContent = match[2].trim();
      const accordion = document.createElement('details');
      accordion.className = 'product__accordion accordion quick-add-hidden alma-product-description';
      accordion.innerHTML = '<summary><div class="summary__title"><h2 class="h4 accordion__title inline-richtext"></h2></div><span class="alma-product-description__symbol" aria-hidden="true"></span></summary><div class="accordion__content rte"></div>';
      accordion.querySelector('.accordion__title').textContent = name.toUpperCase();
      const target = accordion.querySelector('.accordion__content');
      if (inlineContent) {
        const paragraph = document.createElement('p');
        paragraph.textContent = inlineContent;
        target.append(paragraph);
      }
      let node = heading.nextElementSibling;
      while (node && !sectionPattern.test(node.textContent.trim())) {
        const next = node.nextElementSibling;
        target.append(node);
        node = next;
      }
      heading.remove();
      insertAfter.after(accordion);
      insertAfter = accordion;
    });
  });
})();
