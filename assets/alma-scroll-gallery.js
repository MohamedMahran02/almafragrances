if (!customElements.get('alma-scroll-gallery')) {
  customElements.define('alma-scroll-gallery', class extends HTMLElement {
    connectedCallback() {
      if (this.initialized) return;
      this.initialized = true;
      this.track = this.querySelector('[data-alma-scroll-track]');
      this.previousButton = this.querySelector('[data-alma-scroll-previous]');
      this.nextButton = this.querySelector('[data-alma-scroll-next]');
      this.progress = this.querySelector('.alma-scroll-gallery__progress-value');
      if (!this.track || !this.previousButton || !this.nextButton) return;

      this.bindButton(this.previousButton, -1);
      this.bindButton(this.nextButton, 1);
      this.track.addEventListener('scroll', () => this.queueRefresh(), { passive: true });
      this.resizeObserver = new ResizeObserver(() => this.queueRefresh());
      this.resizeObserver.observe(this.track);
      [...this.track.children].forEach(item => this.resizeObserver.observe(item));
      this.refresh();
    }

    bindButton(button, direction) {
      button.addEventListener('click', () => this.move(direction));
      button.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        this.move(direction);
      });
    }

    disconnectedCallback() {
      this.resizeObserver?.disconnect();
    }

    move(direction) {
      const firstItem = this.track.firstElementChild;
      if (!firstItem) return;
      const styles = getComputedStyle(this.track);
      const gap = parseFloat(styles.columnGap || styles.gap) || 0;
      const distance = firstItem.getBoundingClientRect().width + gap;
      this.track.scrollBy({
        left: direction * distance,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }

    queueRefresh() {
      cancelAnimationFrame(this.refreshFrame);
      this.refreshFrame = requestAnimationFrame(() => this.refresh());
    }

    refresh() {
      const maximum = Math.max(0, this.track.scrollWidth - this.track.clientWidth);
      const position = Math.max(0, Math.min(maximum, this.track.scrollLeft));
      const hasOverflow = maximum > 2;
      this.previousButton.disabled = !hasOverflow || position <= 2;
      this.nextButton.disabled = !hasOverflow || position >= maximum - 2;
      this.setAttribute('data-scrollable', String(hasOverflow));
      this.progress?.style.setProperty('--alma-scroll-progress', String(hasOverflow ? (position + this.track.clientWidth) / this.track.scrollWidth : 1));
    }
  });
}
