(() => {
  const body = document.body;
  if (!body) return;

  // The homepage script expects these shared hooks on every page.
  if (!document.querySelector('[data-showreel-dialog]')) {
    const dialog = document.createElement('dialog');
    dialog.hidden = true;
    dialog.setAttribute('data-showreel-dialog', '');
    dialog.innerHTML = '<video data-reel-video></video><button type="button" data-showreel-close>Close</button>';
    body.append(dialog);
  }

  const legalText = [...document.querySelectorAll('.footer__bottom > span')]
    .find((item) => item.textContent.trim() === 'Privacy / Terms');
  if (legalText) {
    const nav = document.createElement('nav');
    nav.className = 'footer__legal';
    nav.setAttribute('aria-label', 'Legal');
    nav.innerHTML = '<a href="privacy.html">Privacy</a><a href="terms.html">Terms</a>';
    legalText.replaceWith(nav);
  }

  const videos = [...document.querySelectorAll('[data-ambient-video]')];
  if ('IntersectionObserver' in window && videos.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) target.play().catch(() => {});
        else target.pause();
      });
    }, { threshold: .12 });
    videos.forEach((video) => observer.observe(video));
  }

  const alignHashTarget = () => {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  };
  addEventListener('hashchange', alignHashTarget);
  addEventListener('load', alignHashTarget, { once: true });
})();
