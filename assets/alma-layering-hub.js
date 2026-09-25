(() => {
  const initialiseHub = (hub) => {
    const tabs = Array.from(hub.querySelectorAll('[data-alma-layering-tab]'));
    const panels = Array.from(hub.querySelectorAll('[data-alma-layering-panel]'));

    const select = (tab) => {
      const selected = tab.dataset.almaLayeringTab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
      });
      panels.forEach((panel) => {
        const active = panel.dataset.almaLayeringPanel === selected;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        select(tabs[nextIndex]);
      });
    });
  };

  document.querySelectorAll('[data-alma-layering-hub]').forEach(initialiseHub);
})();
