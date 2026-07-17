(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-report-deck]').forEach(deck => {
    const slides = Array.from(deck.querySelectorAll('[data-slide]'));
    const previous = deck.querySelector('[data-prev]');
    const next = deck.querySelector('[data-next]');
    const playToggle = deck.querySelector('[data-play-toggle]');
    const count = deck.querySelector('[data-count]');
    const dotsWrap = deck.parentElement.querySelector('[data-dots]');
    const progress = deck.querySelector('.deck-progress span');
    let active = Math.max(0, slides.findIndex(slide => slide.classList.contains('is-active')));
    let playing = !reducedMotion;
    let timer = null;
    let pointerStart = null;

    const dots = slides.map((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'deck-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => {
        playing = false;
        show(index);
      });
      dotsWrap.appendChild(dot);
      return dot;
    });

    function resetTimer() {
      window.clearTimeout(timer);
      deck.classList.toggle('is-playing', playing);
      playToggle.textContent = playing ? 'Pause' : 'Play';
      playToggle.setAttribute('aria-pressed', String(playing));
      progress.style.animation = 'none';
      progress.offsetWidth;
      progress.style.animation = '';
      if (playing) timer = window.setTimeout(() => show(active + 1), 7000);
    }

    function show(index, direction = index >= active ? 1 : -1) {
      const target = (index + slides.length) % slides.length;
      const current = slides[active];
      const incoming = slides[target];
      if (target !== active) {
        current.style.setProperty('--slide-offset', direction > 0 ? '-7%' : '7%');
        incoming.style.setProperty('--slide-offset', direction > 0 ? '7%' : '-7%');
        incoming.offsetWidth;
        current.classList.remove('is-active');
        current.setAttribute('aria-hidden', 'true');
        incoming.classList.add('is-active');
        incoming.setAttribute('aria-hidden', 'false');
        active = target;
      }
      dots.forEach((dot, dotIndex) => {
        const selected = dotIndex === active;
        dot.classList.toggle('is-active', selected);
        dot.setAttribute('aria-current', selected ? 'true' : 'false');
      });
      count.textContent = `Slide ${active + 1} of ${slides.length}`;
      resetTimer();
    }

    previous.addEventListener('click', () => {
      playing = false;
      show(active - 1, -1);
    });
    next.addEventListener('click', () => {
      playing = false;
      show(active + 1, 1);
    });
    playToggle.addEventListener('click', () => {
      playing = !playing;
      resetTimer();
    });
    deck.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        playing = false;
        show(active - 1, -1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        playing = false;
        show(active + 1, 1);
      }
    });
    deck.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse') return;
      pointerStart = event.clientX;
    });
    deck.addEventListener('pointerup', event => {
      if (pointerStart === null) return;
      const distance = event.clientX - pointerStart;
      pointerStart = null;
      if (Math.abs(distance) < 48) return;
      playing = false;
      show(active + (distance < 0 ? 1 : -1), distance < 0 ? 1 : -1);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) window.clearTimeout(timer);
      else resetTimer();
    });

    show(active);
  });
})();
