(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('span').textContent = open ? 'Close' : 'Menu';
  };

  menuButton.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('is-open')));
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  let darkZones = [];
  const updateHeader = () => {
    const y = window.scrollY + 42;
    const currentDark = darkZones.some((zone) => y >= zone.top && y < zone.bottom);
    const pastHero = window.scrollY > 40;
    header.classList.toggle('is-dark', pastHero && currentDark);
    header.classList.toggle('is-solid', pastHero && !currentDark);
  };
  const mapDarkZones = () => {
    darkZones = [...document.querySelectorAll('.dark-zone')].map((zone) => ({
      top: zone.offsetTop,
      bottom: zone.offsetTop + zone.offsetHeight
    }));
    updateHeader();
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', mapDarkZones);
  window.addEventListener('load', mapDarkZones);
  mapDarkZones();

  const revealItems = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const preview = document.querySelector('[data-service-preview]');
  document.querySelectorAll('.service-row').forEach((row) => {
    const activate = () => {
      const source = row.dataset.serviceImage;
      document.querySelectorAll('.service-row').forEach((item) => item.classList.remove('is-active'));
      row.classList.add('is-active');
      if (preview.getAttribute('src') === source) return;
      preview.classList.add('is-changing');
      window.setTimeout(() => {
        preview.src = source;
        preview.onload = () => preview.classList.remove('is-changing');
      }, prefersReducedMotion ? 0 : 150);
    };
    row.addEventListener('mouseenter', activate);
    row.addEventListener('focus', activate);
    row.addEventListener('click', activate);
  });

  const showreel = document.querySelector('[data-showreel-dialog]');
  document.querySelector('[data-showreel]').addEventListener('click', () => showreel.showModal());
  document.querySelector('[data-showreel-close]').addEventListener('click', () => showreel.close());
  showreel.addEventListener('click', (event) => {
    if (event.target === showreel) showreel.close();
  });

  const timeNode = document.querySelector('[data-local-time]');
  const updateTime = () => {
    const now = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false
    }).format(new Date());
    timeNode.textContent = `${now} IST`;
  };
  updateTime();
  window.setInterval(updateTime, 30000);

  document.querySelector('[data-back-top]').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
})();
