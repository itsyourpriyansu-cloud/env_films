(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rows = [...document.querySelectorAll('.service-row[data-target-section]')];
  const preview = document.querySelector('[data-service-preview]');
  const heroVideo = document.querySelector('.services-hero__video');

  const selectRow = (activeRow) => {
    rows.forEach((row) => row.classList.toggle('is-active', row === activeRow));
    if (preview && activeRow.dataset.serviceImage) {
      preview.style.opacity = '0';
      window.setTimeout(() => {
        preview.src = activeRow.dataset.serviceImage;
        preview.alt = `${activeRow.querySelector('strong')?.textContent || 'Service'} preview`;
        preview.style.opacity = '1';
      }, prefersReducedMotion ? 0 : 120);
    }
  };

  rows.forEach((row) => {
    row.addEventListener('pointerenter', () => selectRow(row));
    row.addEventListener('focus', () => selectRow(row));
    row.addEventListener('click', () => {
      const target = document.querySelector(row.dataset.targetSection);
      if (!target) return;
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;
      const row = rows.find((item) => item.dataset.targetSection === `#${visible.target.id}`);
      if (row) selectRow(row);
    }, { rootMargin: '-25% 0px -60% 0px' });
    rows.forEach((row) => {
      const section = document.querySelector(row.dataset.targetSection);
      if (section) sectionObserver.observe(section);
    });

    if (heroVideo) {
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) heroVideo.play().catch(() => {});
        else heroVideo.pause();
      }, { threshold: 0.15 }).observe(heroVideo);
    }
  }

  window.addEventListener('load', () => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  });
})();
