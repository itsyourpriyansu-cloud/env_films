(() => {
  const header = document.querySelector('[data-header]');
  const hero = document.querySelector('.hero');
  const heroLogo = document.querySelector('[data-hero-logo]');
  const logoDestination = document.querySelector('[data-logo-destination]');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!location.hash) window.scrollTo(0, 0);

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

  const initHeroMotion = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const heroContent = hero.querySelector('.hero__content');
    const heroMeta = hero.querySelector('.hero__meta');
    const heroVideo = hero.querySelector('.hero__media');

    if (!gsap || !ScrollTrigger) {
      document.documentElement.classList.remove('hero-pending');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const destination = () => {
      const marker = logoDestination.getBoundingClientRect();
      const style = getComputedStyle(heroLogo);
      const initialLeft = parseFloat(style.left);
      const initialTop = parseFloat(style.top);
      return {
        x: marker.left - initialLeft,
        y: marker.top - initialTop,
        scale: marker.width / heroLogo.offsetWidth
      };
    };

    if (prefersReducedMotion) {
      gsap.set(heroLogo, destination());
      heroVideo.pause();
      document.documentElement.classList.remove('hero-pending');
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => document.documentElement.classList.remove('hero-pending'));
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: () => `+=${Math.max(window.innerHeight * (window.innerWidth <= 1080 ? .34 : .42), 220)}`,
        scrub: .4,
        invalidateOnRefresh: true
      }
    })
      .to(heroLogo, {
        x: () => destination().x,
        y: () => destination().y,
        scale: () => destination().scale,
        duration: 1,
        ease: 'none'
      }, 0)
      .to(heroContent, { y: -20, autoAlpha: .14, duration: .68, ease: 'none' }, .08)
      .to(heroMeta, { autoAlpha: 0, duration: .35, ease: 'none' }, .45)
      .to(heroVideo, { scale: 1.025, duration: 1, ease: 'none' }, 0);

    let refreshTimer;
    const refreshMotion = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    };
    window.addEventListener('resize', refreshMotion, { passive: true });
    window.addEventListener('orientationchange', refreshMotion, { passive: true });
    window.addEventListener('pageshow', refreshMotion, { once: true });
  };

  const initManifestoMotion = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const section = document.querySelector('.manifesto');
    const title = document.querySelector('.manifesto__title');

    if (!gsap || !ScrollTrigger || !section || !title) return;

    gsap.registerPlugin(ScrollTrigger);

    const primaryThought = title.querySelector('.manifesto__thought--primary');
    const payoffThought = title.querySelector('.manifesto__thought--payoff');
    const primaryLines = primaryThought ? primaryThought.querySelectorAll('.manifesto__line') : [];
    const payoffLines = payoffThought ? payoffThought.querySelectorAll('.manifesto__line') : [];
    const group1 = title.querySelector('.manifesto__group--1');
    const group2 = title.querySelector('.manifesto__group--2');
    const group3 = title.querySelector('.manifesto__group--3');
    const payoffTarget = title.querySelector('.manifesto__payoff-target');

    if (prefersReducedMotion) {
      if (primaryLines.length) gsap.set(primaryLines, { yPercent: 0, opacity: 1 });
      if (payoffLines.length) gsap.set(payoffLines, { y: 0, opacity: 1 });
      if (primaryThought) gsap.set(primaryThought, { color: '#A0A0A0' });
      if (payoffThought) gsap.set(payoffThought, { color: '#090909' });
      return;
    }

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: '(min-width: 1024px)',
      isTablet: '(min-width: 641px) and (max-width: 1023px)',
      isMobile: '(max-width: 640px)'
    }, (context) => {
      const { isDesktop, isTablet } = context.conditions;
      const payoffX = isDesktop ? 10 : (isTablet ? 7 : 5);
      const primaryY = -8;
      const payoffY = 10;

      // 03. SECTION ENTRANCE (Reveal lines)
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none reverse'
        }
      });

      entranceTl
        .fromTo(primaryLines,
          { yPercent: 105, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power4.out' }
        )
        .fromTo(payoffLines,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 0.85, duration: 0.8, stagger: 0.08, ease: 'power3.out' },
          '-=0.55'
        );

      // 05. SCROLL-DRIVEN EMPHASIS SHIFT (THOUGHT -> CONSEQUENCE)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 55%',
          end: 'bottom 55%',
          scrub: 0.65,
          invalidateOnRefresh: true
        }
      });

      // Phase 01 & 02: Transition from near-black to light grey (primary) and grey to black (payoff)
      scrollTl.to(primaryThought, {
        color: '#A0A0A0',
        y: primaryY,
        duration: 0.35,
        ease: 'power1.inOut'
      }, 0.30);

      scrollTl.to(payoffThought, {
        y: -payoffY,
        duration: 0.35,
        ease: 'power1.inOut'
      }, 0.30);

      if (group1) {
        scrollTl.to(group1, { color: '#090909', duration: 0.15, ease: 'power1.inOut' }, 0.32);
      }
      if (group2) {
        scrollTl.to(group2, { color: '#090909', duration: 0.15, ease: 'power1.inOut' }, 0.42);
      }
      if (group3) {
        scrollTl.to(group3, { color: '#090909', duration: 0.15, ease: 'power1.inOut' }, 0.50);
      }

      scrollTl.to(payoffThought, {
        color: '#090909',
        duration: 0.35,
        ease: 'power1.inOut'
      }, 0.30);

      // Phase 03: Payoff Micro-motion (0.75 -> 0.95)
      if (payoffTarget) {
        scrollTl.to(payoffTarget, {
          x: payoffX,
          duration: 0.20,
          ease: 'power2.out'
        }, 0.75);
      }
    });
  };

  const initAllMotion = () => {
    initHeroMotion();
    initManifestoMotion();
  };

  if (document.fonts?.ready) {
    document.fonts.ready.then(initAllMotion);
  } else {
    initAllMotion();
  }

  let darkZones = [];
  const updateHeader = () => {
    const y = window.scrollY + 42;
    const inHero = y < hero.offsetTop + hero.offsetHeight;
    const currentDark = darkZones.some((zone) => y >= zone.top && y < zone.bottom);
    header.classList.toggle('is-dark', !inHero && currentDark);
    header.classList.toggle('is-solid', !inHero && !currentDark);
    heroLogo.classList.toggle('is-on-light', !inHero && !currentDark);
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
  const reelVideo = document.querySelector('[data-reel-video]');
  document.querySelector('[data-showreel]').addEventListener('click', () => {
    showreel.showModal();
    reelVideo.play().catch(() => {});
  });
  document.querySelector('[data-showreel-close]').addEventListener('click', () => showreel.close());
  showreel.addEventListener('close', () => reelVideo.pause());
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
