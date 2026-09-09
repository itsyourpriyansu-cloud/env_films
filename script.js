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
  let lastScrollY = window.scrollY;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;
    const y = currentScrollY + 42;
    const inHero = y < hero.offsetTop + hero.offsetHeight;
    const currentDark = darkZones.some((zone) => y >= zone.top && y < zone.bottom);
    header.classList.toggle('is-dark', !inHero && currentDark);
    header.classList.toggle('is-solid', !inHero && !currentDark);
    heroLogo.classList.toggle('is-on-light', !inHero && !currentDark);

    const menuOpen = document.body.classList.contains('menu-open');
    if (menuOpen || currentScrollY <= 80) {
      header.classList.remove('is-hidden');
    } else if (currentScrollY > lastScrollY) {
      header.classList.add('is-hidden');
    } else if (currentScrollY < lastScrollY) {
      header.classList.remove('is-hidden');
    }

    lastScrollY = currentScrollY;
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
  if (processItems.length) {
    if ('IntersectionObserver' in window) {
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

    processItems.forEach((item) => {
      const card = item.querySelector('.process__card');
      if (!card) return;

      const activateHover = () => {
        processItems.forEach((li) => li.classList.remove('is-hovered'));
        item.classList.add('is-hovered');
      };

      const deactivateHover = () => {
        item.classList.remove('is-hovered');
        item.style.setProperty('--card-x', '0px');
        item.style.setProperty('--card-y', '0px');
      };

      item.addEventListener('mouseenter', activateHover);
      item.addEventListener('focusin', activateHover);
      item.addEventListener('mouseleave', deactivateHover);
      item.addEventListener('focusout', deactivateHover);

      item.addEventListener('mousemove', (e) => {
        if (prefersReducedMotion) return;
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const dx = Math.max(-20, Math.min(20, x * 0.12));
        const dy = Math.max(-12, Math.min(12, y * 0.12));
        item.style.setProperty('--card-x', `${dx}px`);
        item.style.setProperty('--card-y', `${dy}px`);
      });
    });
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

  const initProjectVideoHover = () => {
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach((card) => {
      const video = card.querySelector('.project__video');
      if (!video) return;

      let playPromise = null;

      const startPlayback = () => {
        if (prefersReducedMotion) return;
        video.muted = true;
        playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      };

      const stopPlayback = () => {
        if (playPromise !== undefined && playPromise !== null) {
          playPromise
            .then(() => {
              video.pause();
              video.currentTime = 0;
            })
            .catch(() => {
              video.pause();
              video.currentTime = 0;
            });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      };

      card.addEventListener('mouseenter', startPlayback);
      card.addEventListener('mouseleave', stopPlayback);
      card.addEventListener('focusin', startPlayback);
      card.addEventListener('focusout', stopPlayback);
    });
  };

  const initCustomButtons = () => {
    const customButtons = document.querySelectorAll('.btn-custom');
    customButtons.forEach((btn) => {
      if (btn.querySelector('.btn-custom__text-visual')) return;

      const textEl = btn.querySelector('.btn-custom__text');
      if (!textEl) return;

      const rawText = textEl.textContent.trim();
      if (!rawText) return;

      const boxEl = btn.querySelector('.btn-custom__box');
      if (boxEl && !boxEl.querySelector('.btn-custom__corners')) {
        const cornersSpan = document.createElement('span');
        cornersSpan.className = 'btn-custom__corners';
        cornersSpan.setAttribute('aria-hidden', 'true');
        boxEl.prepend(cornersSpan);
      }

      const visualSpan = document.createElement('span');
      visualSpan.className = 'btn-custom__text-visual';
      visualSpan.setAttribute('aria-hidden', 'true');

      let charCount = 0;
      Array.from(rawText).forEach((char) => {
        if (char === ' ') {
          const space = document.createElement('span');
          space.className = 'btn-custom__space';
          space.innerHTML = '&nbsp;';
          visualSpan.appendChild(space);
        } else {
          const charWrapper = document.createElement('span');
          charWrapper.className = 'btn-custom__char';
          charWrapper.style.setProperty('--char-index', charCount);

          const primary = document.createElement('span');
          primary.className = 'btn-custom__char-primary';
          primary.textContent = char;

          const secondary = document.createElement('span');
          secondary.className = 'btn-custom__char-secondary';
          secondary.textContent = char;

          charWrapper.appendChild(primary);
          charWrapper.appendChild(secondary);
          visualSpan.appendChild(charWrapper);
          charCount++;
        }
      });

      textEl.innerHTML = '';
      const srSpan = document.createElement('span');
      srSpan.className = 'sr-only';
      srSpan.textContent = rawText;
      textEl.appendChild(srSpan);
      textEl.appendChild(visualSpan);
    });
  };

  const initClientProofSection = () => {
    const proofSection = document.getElementById('proof');
    if (!proofSection) return;

    const clients = [
      {
        name: 'ATHER',
        quote: '“Ather\'s night shoot was brutal, but Envizon captured raw energy like no one else.”',
        author: 'Vikram Malhotra',
        role: 'Lead Creative, Ather Energy',
        video: 'assets/videos/8089116-uhd_4096_2160_25fps.mp4'
      },
      {
        name: 'NIYOJAK',
        quote: '“They didn\'t just execute the film. They understood why we needed it.”',
        author: 'Ananya Rao',
        role: 'Brand Director, Niyojak',
        video: 'assets/videos/kode-landing.mp4'
      },
      {
        name: 'SATTVA',
        quote: '“Precision, elegance, and filmic craft. They elevated our corporate film into a visual story.”',
        author: 'Meera Sen',
        role: 'Head of Communications, Sattva',
        video: 'assets/videos/13434213_3840_2160_24fps.mp4'
      },
      {
        name: 'OBEROI',
        quote: '“Every frame of our hospitality campaign felt timeless and meticulously composed.”',
        author: 'Dev Sen',
        role: 'Creative Director, Oberoi Group',
        video: 'assets/videos/16201893_1080_1920_60fps.mp4'
      },
      {
        name: 'WILDCRAFT',
        quote: '“Documenting nature requires patience and grit. Envizon delivered breathtaking visuals.”',
        author: 'Rohan Mehta',
        role: 'Executive Producer, Wildcraft',
        video: 'assets/videos/8089116-uhd_4096_2160_25fps.mp4'
      },
      {
        name: 'AMARA',
        quote: '“Flawless post-production and editing. They brought our brand film vision alive.”',
        author: 'Ira Menon',
        role: 'Chief Brand Officer, Amara',
        video: 'assets/videos/kode-landing.mp4'
      }
    ];

    const quoteEl = proofSection.querySelector('[data-proof-quote]');
    const creditEl = proofSection.querySelector('[data-proof-credit]');
    const counterEl = proofSection.querySelector('[data-proof-counter]');
    const playToggleBtn = proofSection.querySelector('[data-proof-play-toggle]');
    const logoItems = Array.from(proofSection.querySelectorAll('.logo-item'));
    const bgVideoA = proofSection.querySelector('[data-proof-video="a"]');
    const bgVideoB = proofSection.querySelector('[data-proof-video="b"]');

    if (!quoteEl || !creditEl || !logoItems.length) return;

    let currentIndex = 0;
    let isPlaying = true;
    let activeVideoTag = 'a';
    let progressTimer = null;
    let progressVal = 0;
    const CYCLE_DURATION = 6000;
    const INTERVAL_STEP = 50;

    const videoCache = {};
    clients.forEach((c) => {
      if (!videoCache[c.video]) {
        const v = document.createElement('video');
        v.src = c.video;
        v.preload = 'auto';
        videoCache[c.video] = v;
      }
    });

    const updateCounter = (index) => {
      if (counterEl) {
        counterEl.textContent = `0${index + 1} / 0${clients.length}`;
      }
    };

    const updateVideoBackground = (videoUrl) => {
      const activeVideo = activeVideoTag === 'a' ? bgVideoA : bgVideoB;
      const nextVideo = activeVideoTag === 'a' ? bgVideoB : bgVideoA;

      if (!activeVideo || !nextVideo) return;

      let sourceTag = nextVideo.querySelector('source');
      if (!sourceTag) {
        sourceTag = document.createElement('source');
        nextVideo.appendChild(sourceTag);
      }

      if (sourceTag.src.indexOf(videoUrl) === -1) {
        sourceTag.src = videoUrl;
        nextVideo.load();
      }

      nextVideo.play().catch(() => {});

      nextVideo.classList.add('is-active');
      activeVideo.classList.remove('is-active');

      activeVideoTag = activeVideoTag === 'a' ? 'b' : 'a';
    };

    const setProgress = (index, val) => {
      logoItems.forEach((item, idx) => {
        const fill = item.querySelector('.logo-item__fill');
        if (!fill) return;
        if (idx === index) {
          fill.style.transform = `scaleX(${val})`;
        } else if (idx < index) {
          fill.style.transform = 'scaleX(1)';
        } else {
          fill.style.transform = 'scaleX(0)';
        }
      });
    };

    const showClient = (index, immediate = false) => {
      if (index < 0) index = clients.length - 1;
      if (index >= clients.length) index = 0;
      currentIndex = index;

      const client = clients[currentIndex];

      logoItems.forEach((item, idx) => {
        const isActive = idx === currentIndex;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      updateCounter(currentIndex);
      updateVideoBackground(client.video);

      if (immediate) {
        quoteEl.textContent = client.quote;
        creditEl.innerHTML = `<span class="proof__author">${client.author}</span> / <span class="proof__role">${client.role}</span>`;
        quoteEl.classList.remove('is-transitioning');
        creditEl.classList.remove('is-transitioning');
      } else {
        quoteEl.classList.add('is-transitioning');
        creditEl.classList.add('is-transitioning');

        setTimeout(() => {
          quoteEl.textContent = client.quote;
          creditEl.innerHTML = `<span class="proof__author">${client.author}</span> / <span class="proof__role">${client.role}</span>`;
          quoteEl.classList.remove('is-transitioning');
          creditEl.classList.remove('is-transitioning');
        }, 300);
      }

      resetProgress();
    };

    const resetProgress = () => {
      clearInterval(progressTimer);
      progressVal = 0;
      setProgress(currentIndex, 0);

      if (isPlaying) {
        startProgressTimer();
      }
    };

    const startProgressTimer = () => {
      clearInterval(progressTimer);
      const increment = INTERVAL_STEP / CYCLE_DURATION;

      progressTimer = setInterval(() => {
        progressVal += increment;
        if (progressVal >= 1) {
          progressVal = 1;
          setProgress(currentIndex, 1);
          clearInterval(progressTimer);
          showClient(currentIndex + 1);
        } else {
          setProgress(currentIndex, progressVal);
        }
      }, INTERVAL_STEP);
    };

    const togglePlay = () => {
      isPlaying = !isPlaying;
      if (playToggleBtn) {
        const icon = playToggleBtn.querySelector('i');
        const statusSpan = playToggleBtn.querySelector('.proof__status');
        if (icon) {
          icon.className = isPlaying ? 'ph-light ph-pause' : 'ph-light ph-play';
        }
        if (statusSpan) {
          statusSpan.textContent = isPlaying ? 'AUTO' : 'PAUSED';
        }
      }
      if (isPlaying) {
        startProgressTimer();
      } else {
        clearInterval(progressTimer);
      }
    };

    logoItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
        showClient(idx);
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = (idx + 1) % clients.length;
          logoItems[next].focus();
          showClient(next);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = (idx - 1 + clients.length) % clients.length;
          logoItems[prev].focus();
          showClient(prev);
        }
      });
    });

    if (playToggleBtn) {
      playToggleBtn.addEventListener('click', togglePlay);
    }

    const proofBody = proofSection.querySelector('.proof__body');
    if (proofBody) {
      proofBody.addEventListener('mouseenter', () => {
        if (isPlaying) clearInterval(progressTimer);
      });
      proofBody.addEventListener('mouseleave', () => {
        if (isPlaying) startProgressTimer();
      });
    }

    showClient(0, true);
  };

  initCustomButtons();
  initClientProofSection();

  document.querySelector('[data-back-top]').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
})();

