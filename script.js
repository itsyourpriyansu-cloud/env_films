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

  const splitHeadingIntoWords = (heading) => {
    const rawText = heading.textContent.replace(/\s+/g, ' ').trim();

    const processNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        if (!text) return document.createDocumentFragment();

        const fragment = document.createDocumentFragment();
        const tokens = text.split(/(\s+)/);

        tokens.forEach((token) => {
          if (!token) return;
          if (/^\s+$/.test(token)) {
            const spaceSpan = document.createElement('span');
            spaceSpan.className = 'reveal-space';
            spaceSpan.textContent = token;
            fragment.appendChild(spaceSpan);
          } else {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'reveal-word';

            const baseSpan = document.createElement('span');
            baseSpan.className = 'reveal-word__base';
            baseSpan.textContent = token;

            const fillSpan = document.createElement('span');
            fillSpan.className = 'reveal-word__fill';
            fillSpan.setAttribute('aria-hidden', 'true');
            fillSpan.textContent = token;

            wordSpan.appendChild(baseSpan);
            wordSpan.appendChild(fillSpan);
            fragment.appendChild(wordSpan);
          }
        });

        return fragment;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();
        if (tagName === 'br') {
          return node.cloneNode(true);
        }

        const clone = node.cloneNode(false);
        Array.from(node.childNodes).forEach((child) => {
          clone.appendChild(processNode(child));
        });
        return clone;
      }
      return document.createDocumentFragment();
    };

    const visualContainer = document.createElement('span');
    visualContainer.className = 'reveal-heading__visual';
    visualContainer.setAttribute('aria-hidden', 'true');

    Array.from(heading.childNodes).forEach((child) => {
      visualContainer.appendChild(processNode(child));
    });

    const srOnlySpan = document.createElement('span');
    srOnlySpan.className = 'sr-only';
    srOnlySpan.textContent = rawText;

    heading.innerHTML = '';
    heading.appendChild(srOnlySpan);
    heading.appendChild(visualContainer);
  };

  const initSectionHeadingReveal = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const headings = document.querySelectorAll('[data-reveal-heading]');

    if (!gsap || !ScrollTrigger || !headings.length) return;

    gsap.registerPlugin(ScrollTrigger);

    headings.forEach((heading) => splitHeadingIntoWords(heading));

    if (prefersReducedMotion) {
      headings.forEach((heading) => {
        const theme = heading.dataset.headingTheme || (heading.closest('.dark-zone') ? 'dark' : 'light');
        heading.dataset.headingTheme = theme;
        gsap.set(heading, { y: 0, opacity: 1 });
        const fills = heading.querySelectorAll('.reveal-word__fill');
        gsap.set(fills, { clipPath: 'inset(0% 0% 0% 0%)' });
      });
      return;
    }

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: '(min-width: 1024px)',
      isTablet: '(min-width: 641px) and (max-width: 1023px)',
      isMobile: '(max-width: 640px)'
    }, (context) => {
      const { isTablet, isMobile } = context.conditions;

      const startPos = isMobile ? 'top 88%' : (isTablet ? 'top 85%' : 'top 85%');
      const endPos = isMobile ? 'top 50%' : (isTablet ? 'top 50%' : 'top 50%');
      const scrubVal = isMobile ? 0.35 : 0.5;
      const startY = isMobile ? 12 : (isTablet ? 18 : 24);

      headings.forEach((heading) => {
        const theme = heading.dataset.headingTheme || (heading.closest('.dark-zone') ? 'dark' : 'light');
        heading.dataset.headingTheme = theme;

        const fills = Array.from(heading.querySelectorAll('.reveal-word__fill'));
        if (!fills.length) return;

        gsap.set(fills, { clipPath: 'inset(0% 100% 0% 0%)' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: startPos,
            end: endPos,
            scrub: scrubVal,
            invalidateOnRefresh: true
          }
        });

        tl.fromTo(heading,
          { y: startY, opacity: 0.65 },
          { y: 0, opacity: 1, duration: 0.25, ease: 'power1.out' },
          0
        );

        const hasEmphasis = heading.dataset.revealEmphasis === 'end' && fills.length > 2;

        if (hasEmphasis) {
          const mainFills = fills.slice(0, -2);
          const endFills = fills.slice(-2);

          tl.to(mainFills, {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: { each: 0.08 },
            ease: 'none'
          }, 0);

          tl.to(endFills, {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: { each: 0.1 },
            ease: 'none'
          }, '>-=0.04');
        } else {
          tl.to(fills, {
            clipPath: 'inset(0% 0% 0% 0%)',
            stagger: { each: 0.08 },
            ease: 'none'
          }, 0);
        }
      });
    });
  };

  const initMotionFilmGrain = () => {
    const darkSections = document.querySelectorAll('.dark-zone, .mobile-menu');
    if (!darkSections.length) return;

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.createImageData(256, 256);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const value = (Math.random() * 255) | 0;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 38;
    }
    ctx.putImageData(imgData, 0, 0);

    const noiseDataUrl = canvas.toDataURL('image/png');

    const grainLayers = [];
    darkSections.forEach((section) => {
      if (section.querySelector('.film-grain')) return;

      const grainContainer = document.createElement('div');
      grainContainer.className = 'film-grain';
      grainContainer.setAttribute('aria-hidden', 'true');

      const grainLayer = document.createElement('div');
      grainLayer.className = 'film-grain__layer';
      grainLayer.style.backgroundImage = `url(${noiseDataUrl})`;

      grainContainer.appendChild(grainLayer);
      section.insertBefore(grainContainer, section.firstChild);
      grainLayers.push(grainLayer);
    });

    if (prefersReducedMotion || !grainLayers.length) return;

    const frameOffsets = [
      'translate3d(0px, 0px, 0)',
      'translate3d(-6px, -10px, 0)',
      'translate3d(8px, 4px, 0)',
      'translate3d(-4px, 8px, 0)',
      'translate3d(7px, -5px, 0)',
      'translate3d(-10px, 3px, 0)',
      'translate3d(5px, -9px, 0)',
      'translate3d(-3px, -4px, 0)',
      'translate3d(9px, 6px, 0)',
      'translate3d(-7px, -7px, 0)'
    ];

    let frameIndex = 0;
    let lastTime = performance.now();
    const fpsInterval = 1000 / 24;

    const animateGrain = (currentTime) => {
      requestAnimationFrame(animateGrain);
      const elapsed = currentTime - lastTime;
      if (elapsed > fpsInterval) {
        lastTime = currentTime - (elapsed % fpsInterval);
        frameIndex = (frameIndex + 1) % frameOffsets.length;
        const transformStr = frameOffsets[frameIndex];
        for (let i = 0; i < grainLayers.length; i++) {
          grainLayers[i].style.transform = transformStr;
        }
      }
    };

    requestAnimationFrame(animateGrain);
  };

  const initAllMotion = () => {
    initHeroMotion();
    initSectionHeadingReveal();
    initMotionFilmGrain();
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

  const processItems = document.querySelectorAll('.process__list li');
  if (processItems.length && 'IntersectionObserver' in window) {
    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          processItems.forEach((li) => li.classList.remove('is-active'));
          entry.target.classList.add('is-active');
        }
      });
    }, { rootMargin: '-30% 0px -40% 0px', threshold: 0.2 });
    processItems.forEach((item) => processObserver.observe(item));
  }

  const navLinks = document.querySelectorAll('.desktop-nav a');
  const sections = [...navLinks].map((link) => {
    const href = link.getAttribute('href');
    return href && href.startsWith('#') ? document.getElementById(href.slice(1)) : null;
  }).filter(Boolean);

  const updateActiveNav = () => {
    const scrollPos = window.scrollY + 220;
    let currentSectionId = '';
    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        currentSectionId = sec.id;
      }
    });
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${currentSectionId}`;
      link.classList.toggle('is-active', isCurrent);
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });

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
  document.querySelector('[data-showreel]')?.addEventListener('click', () => {
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
