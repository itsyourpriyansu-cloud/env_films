(() => {
  'use strict';

  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-project-card]')];
  const count = document.querySelector('[data-filter-count]');
  const empty = document.querySelector('[data-filter-empty]');
  const heroVideo = document.querySelector('.work-hero__media');
  const categories = new Set(buttons.map((button) => button.dataset.filter));

  const setFilter = (requested, updateUrl = true) => {
    const filter = categories.has(requested) ? requested : 'ALL';
    let visible = 0;

    buttons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    cards.forEach((card) => {
      const show = filter === 'ALL' || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (count) count.textContent = String(visible).padStart(2, '0');
    if (empty) empty.hidden = visible !== 0;

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (filter === 'ALL') url.searchParams.delete('type');
      else url.searchParams.set('type', filter);
      window.history.replaceState({ filter }, '', `${url.pathname}${url.search}${url.hash}`);
    }
  };

  buttons.forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter)));
  window.addEventListener('popstate', () => {
    const requested = (new URLSearchParams(window.location.search).get('type') || 'ALL').toUpperCase();
    setFilter(requested, false);
  });

  const initial = (new URLSearchParams(window.location.search).get('type') || 'ALL').toUpperCase();
  setFilter(initial, false);

  if (heroVideo && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) heroVideo.play().catch(() => {});
      else heroVideo.pause();
    }, { threshold: 0.15 }).observe(heroVideo);
  }
})();
