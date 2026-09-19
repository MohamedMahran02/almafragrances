(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.alma-editorial--ritual-motion .alma-editorial__steps').forEach((steps) => {
    const cards = [...steps.querySelectorAll('.alma-editorial__step')];
    if (cards.length < 2) return;
    let active = 0;
    cards[0].classList.add('is-active');
    window.setInterval(() => {
      cards[active].classList.remove('is-active');
      active = (active + 1) % cards.length;
      cards[active].classList.add('is-active');
    }, 2600);
  });
})();
