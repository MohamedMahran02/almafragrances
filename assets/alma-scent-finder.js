if (!customElements.get('alma-scent-finder')) {
  customElements.define('alma-scent-finder', class extends HTMLElement {
    connectedCallback() {
      if (this.initialized) return;
      this.initialized = true;

      this.inputs = [...this.querySelectorAll('input[type="checkbox"]')];
      this.cards = [...this.querySelectorAll('.alma-scent-match')];
      this.resultsWrap = this.querySelector('.alma-scent-finder__results-wrap');
      this.results = this.querySelector('.alma-scent-finder__results');
      this.status = this.querySelector('.alma-scent-finder__status');
      this.clearButton = this.querySelector('.alma-scent-finder__clear');
      this.modal = this.closest('[data-alma-scent-finder-modal]');
      this.initialMessage = this.status?.textContent.trim() || 'Select one or more notes to begin.';
      this.resultLimit = Number(this.dataset.resultLimit) || 4;

      this.inputs.forEach((input) => input.addEventListener('change', () => this.update()));
      this.clearButton?.addEventListener('click', () => this.clear());
    }

    setResultsState(hasResults) {
      if (!this.modal) return;

      const previousHeight = this.modal.getBoundingClientRect().height;
      this.modal.toggleAttribute('data-has-results', hasResults);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      requestAnimationFrame(() => {
        const nextHeight = this.modal.getBoundingClientRect().height;
        if (Math.abs(nextHeight - previousHeight) < 1) return;

        this.heightAnimation?.cancel();
        this.heightAnimation = this.modal.animate(
          [{ height: `${previousHeight}px` }, { height: `${nextHeight}px` }],
          { duration: 460, easing: 'cubic-bezier(.22, .61, .36, 1)' }
        );
      });
    }

    normalize(value) {
      return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    aliases(note) {
      const map = {
        amber: ['amber', 'ambery'],
        citrus: ['citrus', 'bergamot', 'lemon', 'orange', 'mandarin'],
        coconut: ['coconut'],
        floral: ['floral', 'flower', 'flowers'],
        jasmine: ['jasmine'],
        leather: ['leather'],
        musk: ['musk', 'musky'],
        oud: ['oud', 'agarwood'],
        pear: ['pear'],
        powder: ['powder', 'powdery'],
        rose: ['rose', 'rosy'],
        sandalwood: ['sandalwood'],
        vanilla: ['vanilla']
      };
      return map[note] || [note];
    }

    selectedNotes() {
      return this.inputs.filter((input) => input.checked).map((input) => ({
        value: this.normalize(input.value),
        label: input.dataset.noteLabel || input.value
      }));
    }

    update() {
      const selected = this.selectedNotes();
      this.clearButton.hidden = selected.length === 0;

      if (!selected.length) {
        this.cards.forEach((card) => {
          card.hidden = true;
          card.style.removeProperty('order');
        });
        this.resultsWrap.hidden = true;
        this.status.textContent = this.initialMessage;
        this.setResultsState(false);
        return;
      }

      const ranked = this.cards.map((card, index) => {
        const source = this.normalize(card.dataset.scentSource || '');
        const matches = selected.filter((note) => this.aliases(note.value).some((alias) => source.includes(alias)));
        return { card, index, matches, score: matches.length };
      }).filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || a.index - b.index);

      this.cards.forEach((card) => {
        card.hidden = true;
        card.style.removeProperty('order');
      });

      ranked.slice(0, this.resultLimit).forEach((item, order) => {
        item.card.hidden = false;
        item.card.style.order = order;
        const reason = item.card.querySelector('.alma-scent-match__reason');
        if (reason) reason.textContent = `Matches ${item.matches.map((note) => note.label).join(' · ')}`;
      });

      const shown = Math.min(ranked.length, this.resultLimit);
      this.resultsWrap.hidden = shown === 0;
      this.setResultsState(shown > 0);
      this.status.textContent = shown
        ? `${shown} ${shown === 1 ? 'fragrance' : 'fragrances'} found for your aura.`
        : 'No exact match yet. Try another note or combination.';

      if (shown) this.results.scrollTo({ left: 0, behavior: 'smooth' });
    }

    clear() {
      this.inputs.forEach((input) => { input.checked = false; });
      this.update();
      this.inputs[0]?.focus();
    }
  });
}
