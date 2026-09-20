(() => {
  const dirhamPrefix = /\bDhs\.?\s*(?=\d)/gi;
  const arabicStorefront = document.documentElement.lang.toLowerCase().startsWith('ar');
  const skippedElements = 'script, style, noscript, textarea, input, select, option, [data-alma-keep-dhs]';

  const normalizeText = (textNode) => {
    if (!textNode?.nodeValue || textNode.parentElement?.closest(skippedElements)) return;
    let normalized = textNode.nodeValue.replace(dirhamPrefix, '');
    if (arabicStorefront) normalized = normalized.replace(/\bAED\b/g, 'د.إ');
    if (normalized !== textNode.nodeValue) textNode.nodeValue = normalized;
  };

  const normalizeTree = (root) => {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      normalizeText(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();
    while (textNode) {
      normalizeText(textNode);
      textNode = walker.nextNode();
    }
  };

  const start = () => {
    normalizeTree(document.body);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') normalizeText(mutation.target);
        mutation.addedNodes.forEach(normalizeTree);
      });
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
