(() => {
  const sectionNames = new Set(['notes', 'size']);
  document.querySelectorAll('.alma-product-description').forEach((description) => {
    const content = description.querySelector('.alma-product-description__content');
    if (!content || content.dataset.accordionsReady) return;
    content.dataset.accordionsReady = 'true';
    [...content.children].forEach((heading) => {
      const name = heading.textContent.trim().replace(/:$/, '').toLowerCase();
      if (!sectionNames.has(name)) return;
      const accordion = document.createElement('details');
      accordion.className = 'product__accordion accordion quick-add-hidden alma-product-description';
      accordion.innerHTML = '<summary><div class="summary__title"><h2 class="h4 accordion__title inline-richtext"></h2></div><span class="alma-product-description__symbol">+</span></summary><div class="accordion__content rte"></div>';
      accordion.querySelector('.accordion__title').textContent = heading.textContent.trim().replace(/:$/, '').toUpperCase();
      const target = accordion.querySelector('.accordion__content');
      let node = heading.nextElementSibling;
      while (node && !sectionNames.has(node.textContent.trim().replace(/:$/, '').toLowerCase())) {
        const next = node.nextElementSibling;
        target.append(node);
        node = next;
      }
      heading.replaceWith(accordion);
    });
  });
})();
