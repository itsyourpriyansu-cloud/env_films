(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const PROJECTS_DATA = {
    'still-moving': {
      slug: 'still-moving',
      indexStr: '01 / 05',
      client: 'NIYOJAK',
      title: 'STILL MOVING.',
      titleHtml: '<span class="cs-hero__title-line"><span>STILL</span></span><span class="cs-hero__title-line"><span>MOVING.</span></span>',
      category: 'BRAND FILM',
      year: '2026',
      runtime: '00:45',
      location: 'HYDERABAD / INDIA',
      heroVideo: 'assets/videos/8089116-uhd_4096_2160_25fps.mp4',
      poster: 'assets/images/work-05.jpg',
      summary: 'A quiet brand film about financial planning and the momentum inside every decision, created by Envizon Films.',
      services: 'CONCEPT DEVELOPMENT · SCRIPT · PRODUCTION · EDIT · COLOUR · SOUND',
      askList: 'BRAND FILM · CAMPAIGN CUTS · SOCIAL EDITS',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Make finance<br>feel like life.',
      challengeBody: 'Niyojak needed to talk about financial planning without falling into the usual language of numbers, charts and future promises. The real challenge was simpler: make people feel what those decisions are ultimately for.',
      challengeImage: 'assets/images/work-03.jpg',
      ideaTitle: 'One road.<br>A few choices.<br>Everything ahead.',
      ideaBody: 'Instead of explaining financial planning, the film follows one traveller through a series of quiet decisions. The road becomes the metaphor. Each choice changes what comes next without the film needing to say it directly.',
      ideaFrames: ['assets/images/work-05.jpg', 'assets/images/work-03.jpg', 'assets/images/work-01.jpg'],
      frames: [
        { img: 'assets/images/work-05.jpg', title: 'FRAME 01 / THE DEPARTURE', time: '00:04', loc: 'HYDERABAD' },
        { img: 'assets/images/work-01.jpg', title: 'FRAME 02 / THE PAUSE', time: '00:12', loc: '' },
        { img: 'assets/images/work-04.jpg', title: 'FRAME 03 / THE DECISION', time: '00:20', loc: '' },
        { img: 'assets/images/work-02.jpg', title: 'FRAME 04 / THE TURN', time: '00:28', loc: '' },
        { img: 'assets/images/hero.jpg', title: 'FRAME 05 / THE OPENING', time: '00:32', loc: '' },
        { img: 'assets/images/work-03.jpg', title: 'FRAME 06 / WHAT COMES NEXT', time: '00:42', loc: 'HYDERABAD' }
      ],
      credits: {
        client: 'NIYOJAK',
        production: 'ENVIZON FILMS',
        director: 'MIRA SHAH',
        dp: 'DEV SEN',
        producer: 'ROHAN MEHTA',
        editor: 'ANANYA RAO',
        colourist: 'IRA MENON',
        sound: 'VIKRAM MALHOTRA',
        location: 'HYDERABAD / INDIA'
      },
      prevSlug: 'new-forms',
      nextSlug: 'after-dark'
    },
    'after-dark': {
      slug: 'after-dark',
      indexStr: '02 / 05',
      client: 'ATHER',
      title: 'NIGHT BELONGS TO US.',
      titleHtml: '<span class="cs-hero__title-line"><span>NIGHT</span></span><span class="cs-hero__title-line"><span>BELONGS TO US.</span></span>',
      category: 'COMMERCIAL',
      year: '2026',
      runtime: '00:45',
      location: 'BENGALURU / INDIA',
      heroVideo: 'assets/videos/8089116-uhd_4096_2160_25fps.mp4',
      poster: 'assets/images/work-03.jpg',
      summary: 'A high-contrast nocturnal commercial capturing silent velocity and urban night travel for Ather electric vehicles.',
      services: 'CREATIVE DIRECTION · CINEMATOGRAPHY · EDITING · COLOR GRADING · SOUND DESIGN',
      askList: 'TV COMMERCIAL · DIGITAL LAUNCH · STILLS LIBRARY',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Reframe urban<br>night travel.',
      challengeBody: 'Ather wanted to position electric mobility not just as an eco-conscious alternative, but as a thrilling, quiet nocturnal experience through sleeping city streets.',
      challengeImage: 'assets/images/work-03.jpg',
      ideaTitle: 'Silence<br>in motion.<br>Neon shadows.',
      ideaBody: 'Filmed in high contrast low-light digital cinematography, capturing neon reflections and quiet velocity across urban arteries as the city sleeps.',
      ideaFrames: ['assets/images/work-03.jpg', 'assets/images/hero.jpg', 'assets/images/work-05.jpg'],
      frames: [
        { img: 'assets/images/work-03.jpg', title: 'FRAME 01 / THE SHADOWS', time: '00:05', loc: 'BENGALURU' },
        { img: 'assets/images/hero.jpg', title: 'FRAME 02 / NEON PULSE', time: '00:14', loc: '' },
        { img: 'assets/images/work-05.jpg', title: 'FRAME 03 / SILENT VELOCITY', time: '00:22', loc: '' },
        { img: 'assets/images/work-01.jpg', title: 'FRAME 04 / THE OVERPASS', time: '00:30', loc: '' },
        { img: 'assets/images/work-04.jpg', title: 'FRAME 05 / REFLECTION', time: '00:38', loc: '' },
        { img: 'assets/images/work-02.jpg', title: 'FRAME 06 / DAWN HORIZON', time: '00:44', loc: 'BENGALURU' }
      ],
      credits: {
        client: 'ATHER ENERGY',
        production: 'ENVIZON FILMS',
        director: 'MIRA SHAH',
        dp: 'ROHAN MEHTA',
        producer: 'DEV SEN',
        editor: 'ANANYA RAO',
        colourist: 'IRA MENON',
        sound: 'AUDIO MONKS',
        location: 'BENGALURU / INDIA'
      },
      prevSlug: 'still-moving',
      nextSlug: 'old-worlds'
    },
    'old-worlds': {
      slug: 'old-worlds',
      indexStr: '03 / 05',
      client: 'OBEROI',
      title: 'TIME STANDS STILL.',
      titleHtml: '<span class="cs-hero__title-line"><span>TIME</span></span><span class="cs-hero__title-line"><span>STANDS STILL.</span></span>',
      category: 'HOSPITALITY FILM',
      year: '2025',
      runtime: '01:15',
      location: 'UDAIPUR / INDIA',
      heroVideo: 'assets/videos/16201893_1080_1920_60fps.mp4',
      poster: 'assets/images/work-02.jpg',
      summary: 'A sensory narrative celebrating heritage craft, architectural grandeur, and quiet luxury at the Oberoi Udaivilas.',
      services: 'CONCEPT · CINEMATOGRAPHY · ART DIRECTION · EDIT · COLOR',
      askList: 'BRAND HERITAGE FILM · SOCIAL SUITE · EDITORIAL',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Capture timeless<br>palace luxury.',
      challengeBody: 'Oberoi required a sensory narrative highlighting heritage craft, architectural grandeur, and hyper-personalized hospitality without relying on conventional voiceovers.',
      challengeImage: 'assets/images/work-02.jpg',
      ideaTitle: 'Sanctuary<br>of quiet elegance.<br>Palace shadows.',
      ideaBody: 'Natural light studies focusing on textures, water reflections, and tactile details that evoke calmness and historic splendor across regal archways.',
      ideaFrames: ['assets/images/work-02.jpg', 'assets/images/work-04.jpg', 'assets/images/work-01.jpg'],
      frames: [
        { img: 'assets/images/work-02.jpg', title: 'FRAME 01 / THE ARCHWAY', time: '00:08', loc: 'UDAIPUR' },
        { img: 'assets/images/work-04.jpg', title: 'FRAME 02 / WATER MIRROR', time: '00:20', loc: '' },
        { img: 'assets/images/work-01.jpg', title: 'FRAME 03 / MARBLE RHYTHM', time: '00:35', loc: '' },
        { img: 'assets/images/work-03.jpg', title: 'FRAME 04 / GOLDEN HOUR', time: '00:48', loc: '' },
        { img: 'assets/images/work-05.jpg', title: 'FRAME 05 / SILENT COURTYARD', time: '01:02', loc: '' },
        { img: 'assets/images/hero.jpg', title: 'FRAME 06 / DUSK REFLECTION', time: '01:12', loc: 'UDAIPUR' }
      ],
      credits: {
        client: 'OBEROI HOTELS',
        production: 'ENVIZON FILMS',
        director: 'DEV SEN',
        dp: 'ANANYA RAO',
        producer: 'MIRA SHAH',
        editor: 'ROHAN MEHTA',
        colourist: 'IRA MENON',
        sound: 'VIKRAM MALHOTRA',
        location: 'UDAIPUR / INDIA'
      },
      prevSlug: 'after-dark',
      nextSlug: 'field-notes'
    },
    'field-notes': {
      slug: 'field-notes',
      indexStr: '04 / 05',
      client: 'WILDCRAFT',
      title: 'INTO THE BORDERLANDS.',
      titleHtml: '<span class="cs-hero__title-line"><span>INTO THE</span></span><span class="cs-hero__title-line"><span>BORDERLANDS.</span></span>',
      category: 'DOCUMENTARY',
      year: '2025',
      runtime: '02:30',
      location: 'MEGHALAYA / INDIA',
      heroVideo: 'assets/videos/13434213_3840_2160_24fps.mp4',
      poster: 'assets/images/work-04.jpg',
      summary: 'An unscripted expedition documentary following trail guides through wet forests and living root bridges in Eastern India.',
      services: 'FIELD DIRECTION · DOCUMENTARY CINEMATOGRAPHY · EDITING · SOUND DESIGN',
      askList: 'DOCUMENTARY FEATURETTE · TRAILER · EXPEDITION STILLS',
      roleSummary: 'DIRECTION + FIELD PRODUCTION + POST',
      challengeTitle: 'Test human<br>resilience.',
      challengeBody: 'Wildcraft needed an unscripted documentary exploring remote trail guides navigating torrential rain and rugged terrains in Eastern India.',
      challengeImage: 'assets/images/work-04.jpg',
      ideaTitle: 'Raw elements.<br>Unbroken paths.<br>True wilderness.',
      ideaBody: 'Handheld 16mm-style digital textures capturing humidity, mist, and authentic human stamina under extreme natural conditions.',
      ideaFrames: ['assets/images/work-04.jpg', 'assets/images/work-05.jpg', 'assets/images/hero.jpg'],
      frames: [
        { img: 'assets/images/work-04.jpg', title: 'FRAME 01 / MIST RIDGE', time: '00:15', loc: 'MEGHALAYA' },
        { img: 'assets/images/work-05.jpg', title: 'FRAME 02 / RAIN CANOPY', time: '00:45', loc: '' },
        { img: 'assets/images/hero.jpg', title: 'FRAME 03 / LIVING BRIDGE', time: '01:10', loc: '' },
        { img: 'assets/images/work-02.jpg', title: 'FRAME 04 / RUGGED PATH', time: '01:40', loc: '' },
        { img: 'assets/images/work-03.jpg', title: 'FRAME 05 / NIGHT CAMP', time: '02:05', loc: '' },
        { img: 'assets/images/work-01.jpg', title: 'FRAME 06 / SUMMIT CLEARING', time: '02:25', loc: 'MEGHALAYA' }
      ],
      credits: {
        client: 'WILDCRAFT INDIA',
        production: 'ENVIZON FILMS',
        director: 'ROHAN MEHTA',
        dp: 'IRA MENON',
        producer: 'DEV SEN',
        editor: 'ANANYA RAO',
        colourist: 'MIRA SHAH',
        sound: 'FIELD AUDIO STUDIOS',
        location: 'MEGHALAYA / INDIA'
      },
      prevSlug: 'old-worlds',
      nextSlug: 'new-forms'
    },
    'new-forms': {
      slug: 'new-forms',
      indexStr: '05 / 05',
      client: 'SATTVA',
      title: 'SHAPING THE FUTURE.',
      titleHtml: '<span class="cs-hero__title-line"><span>SHAPING THE</span></span><span class="cs-hero__title-line"><span>FUTURE.</span></span>',
      category: 'CORPORATE FILM',
      year: '2025',
      runtime: '01:00',
      location: 'HYDERABAD / INDIA',
      heroVideo: 'assets/videos/kode-landing.mp4',
      poster: 'assets/images/work-01.jpg',
      summary: 'A futuristic architectural corporate film blending sustainable design with high-tech urban spaces for Sattva.',
      services: 'CREATIVE DIRECTION · ARCHITECTURAL CINEMATOGRAPHY · EDIT · MOTION GRAPHICS',
      askList: 'CORPORATE ANTHEM · ARCHITECTURAL REEL · INVESTOR CUT',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Reimagine modern<br>workspaces.',
      challengeBody: 'Sattva required a forward-looking corporate anthem connecting sustainable architecture with high-tech human innovation.',
      challengeImage: 'assets/images/work-01.jpg',
      ideaTitle: 'Light, glass,<br>& structural rhythm.',
      ideaBody: 'Geometric camera sweeps, dramatic daylight transitions, and human-centric framing across modern architectural landmarks.',
      ideaFrames: ['assets/images/work-01.jpg', 'assets/images/work-03.jpg', 'assets/images/work-02.jpg'],
      frames: [
        { img: 'assets/images/work-01.jpg', title: 'FRAME 01 / GLASS FACADE', time: '00:06', loc: 'HYDERABAD' },
        { img: 'assets/images/work-03.jpg', title: 'FRAME 02 / SUNLIGHT AXIS', time: '00:18', loc: '' },
        { img: 'assets/images/work-02.jpg', title: 'FRAME 03 / ATRIUM PERSPECTIVE', time: '00:30', loc: '' },
        { img: 'assets/images/hero.jpg', title: 'FRAME 04 / URBAN RHYTHM', time: '00:42', loc: '' },
        { img: 'assets/images/work-04.jpg', title: 'FRAME 05 / HUMAN CONNECTION', time: '00:52', loc: '' },
        { img: 'assets/images/work-05.jpg', title: 'FRAME 06 / HORIZON VIEW', time: '00:58', loc: 'HYDERABAD' }
      ],
      credits: {
        client: 'SATTVA GROUP',
        production: 'ENVIZON FILMS',
        director: 'IRA MENON',
        dp: 'MIRA SHAH',
        producer: 'ROHAN MEHTA',
        editor: 'DEV SEN',
        colourist: 'ANANYA RAO',
        sound: 'VIKRAM MALHOTRA',
        location: 'HYDERABAD / INDIA'
      },
      prevSlug: 'field-notes',
      nextSlug: 'still-moving'
    }
  };

  window.ENVIZON_PROJECTS = PROJECTS_DATA;

  const hydrateProjectPage = () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('project') || 'still-moving';
    const project = PROJECTS_DATA[slug] || PROJECTS_DATA['still-moving'];

    // Update document title & meta description
    document.title = `${project.client} — ${project.title.replace('<br>', ' ')} | Envizon Films`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', project.summary);

    // 00. Hero
    const heroClient = document.querySelector('.cs-hero__client');
    const heroTitle = document.querySelector('.cs-hero__title');
    const metaItems = document.querySelectorAll('.cs-hero__meta-value');
    const heroVideo = document.querySelector('.cs-hero__media');

    if (heroClient) heroClient.textContent = `CLIENT / ${project.client}`;
    if (heroTitle) heroTitle.innerHTML = project.titleHtml;
    if (metaItems.length >= 4) {
      metaItems[0].textContent = project.category;
      metaItems[1].textContent = project.year;
      metaItems[2].textContent = project.runtime;
      metaItems[3].textContent = project.location;
    }

    if (heroVideo) {
      heroVideo.setAttribute('poster', project.poster);
      const source = heroVideo.querySelector('source');
      if (source) source.setAttribute('src', project.heroVideo);
      heroVideo.load();
    }

    // 01. Snapshot
    const snapTitle = document.querySelector('.cs-snapshot__title');
    const snapVals = document.querySelectorAll('.cs-snapshot__meta-val');
    const snapServices = document.querySelector('.cs-snapshot__services-list');

    if (snapTitle) snapTitle.textContent = project.summary;
    if (snapVals.length >= 6) {
      snapVals[0].textContent = project.client;
      snapVals[1].textContent = project.category;
      snapVals[2].textContent = project.year;
      snapVals[3].textContent = project.runtime;
      snapVals[4].textContent = project.location;
      snapVals[5].textContent = project.roleSummary;
    }
    if (snapServices) snapServices.textContent = project.services;

    // 02. Video Player
    const playerVideo = document.querySelector('[data-cs-player-video]');
    const filmCaption = document.querySelector('.cs-film-caption-row span:first-child');
    if (playerVideo) {
      playerVideo.setAttribute('poster', project.poster);
      const playerSource = playerVideo.querySelector('source');
      if (playerSource) playerSource.setAttribute('src', project.heroVideo);
      playerVideo.load();
    }
    if (filmCaption) {
      filmCaption.textContent = `${project.client} / ${project.title.replace('<br>', ' ')} — ${project.category} / ${project.runtime}`;
    }

    // 03. Challenge
    const chTitle = document.querySelector('#challenge-title');
    const chBody = document.querySelector('.cs-challenge__body');
    const chAsk = document.querySelector('.cs-challenge__ask-list');
    const chImg = document.querySelector('.cs-challenge__visual img');

    if (chTitle) chTitle.innerHTML = project.challengeTitle;
    if (chBody) chBody.textContent = project.challengeBody;
    if (chAsk) chAsk.textContent = project.askList;
    if (chImg) chImg.setAttribute('src', project.challengeImage);

    // 04. Big Idea
    const ideaTitle = document.querySelector('#idea-title');
    const ideaBody = document.querySelector('.cs-idea__body');
    const ideaFrameImgs = document.querySelectorAll('.cs-idea__hero-frame img');

    if (ideaTitle) ideaTitle.innerHTML = project.ideaTitle;
    if (ideaBody) ideaBody.textContent = project.ideaBody;
    if (ideaFrameImgs.length && project.ideaFrames) {
      ideaFrameImgs.forEach((img, i) => {
        if (project.ideaFrames[i]) img.setAttribute('src', project.ideaFrames[i]);
      });
    }

    // 05. Frames Showcase
    const frameItems = document.querySelectorAll('.cs-frame-block');
    if (frameItems.length >= 4 && project.frames.length >= 6) {
      const allImgs = document.querySelectorAll('.cs-frame-item img');
      const allMetas = document.querySelectorAll('.cs-frame-meta');

      project.frames.forEach((f, i) => {
        if (allImgs[i]) allImgs[i].setAttribute('src', f.img);
        if (allMetas[i]) {
          const badge = allMetas[i].querySelector('.cs-frame-title-badge');
          if (badge) badge.textContent = f.title;
        }
      });
    }

    // 12. Credits
    const creditNames = document.querySelectorAll('.cs-credit-name');
    if (creditNames.length >= 9 && project.credits) {
      creditNames[0].textContent = project.credits.client;
      creditNames[1].textContent = project.credits.production;
      creditNames[2].textContent = project.credits.director;
      creditNames[3].textContent = project.credits.dp;
      creditNames[4].textContent = project.credits.producer;
      creditNames[5].textContent = project.credits.editor;
      creditNames[6].textContent = project.credits.colourist;
      creditNames[7].textContent = project.credits.sound;
      creditNames[8].textContent = project.credits.location;
    }

    // 13. Next Project
    const nextProject = PROJECTS_DATA[project.nextSlug] || PROJECTS_DATA['after-dark'];
    const prevLink = document.querySelector('.cs-next-project__prev-link');
    const nextCard = document.querySelector('.cs-next-project__card');
    const nextIndexStr = document.querySelector('.cs-next-project__top-bar span:last-child');
    const nextBg = document.querySelector('.cs-next-project__bg');
    const nextSub = document.querySelector('.cs-next-project__sub');
    const nextTitle = document.querySelector('.cs-next-project__title');

    if (prevLink) prevLink.setAttribute('href', `case-study.html?project=${project.prevSlug}`);
    if (nextCard) {
      nextCard.setAttribute('href', `case-study.html?project=${project.nextSlug}`);
      nextCard.setAttribute('aria-label', `View next project: ${nextProject.client} — ${nextProject.title}`);
    }
    if (nextIndexStr) nextIndexStr.textContent = `CASE STUDY ${project.indexStr}`;
    if (nextBg) nextBg.setAttribute('src', nextProject.poster);
    if (nextSub) nextSub.textContent = `NEXT / ${nextProject.indexStr.split('/')[0].trim()} · ${nextProject.client}`;
    if (nextTitle) nextTitle.innerHTML = nextProject.title;

    // 10. Related Work Section Hydration
    const relatedCards = document.querySelectorAll('.cs-related-card');
    const otherSlugs = Object.keys(PROJECTS_DATA).filter((s) => s !== project.slug);
    relatedCards.forEach((card, i) => {
      if (otherSlugs[i]) {
        const relData = PROJECTS_DATA[otherSlugs[i]];
        card.setAttribute('href', `case-study.html?project=${relData.slug}`);
        const img = card.querySelector('.cs-related-card__media img');
        const h3 = card.querySelector('.cs-related-card__info h3');
        const p = card.querySelector('.cs-related-card__info p');
        if (img) img.setAttribute('src', relData.poster);
        if (h3) h3.textContent = relData.title.replace('<br>', ' ');
        if (p) p.textContent = `${relData.client} / ${relData.category} / ${relData.year}`;
      }
    });
  };

  // Initialize Case Study GSAP Animations & Interactions
  const initCSAnimations = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // 01. Hero Entrance Sequence
    const heroTitleLines = document.querySelectorAll('.cs-hero__title-line > span');
    const heroMetaItems = document.querySelectorAll('.cs-hero__meta-item');
    const heroClient = document.querySelector('.cs-hero__client');
    const heroWatch = document.querySelector('.cs-hero__watch');
    const heroMedia = document.querySelector('.cs-hero__media');
    const heroSection = document.querySelector('.cs-hero');

    if (prefersReducedMotion) {
      if (heroTitleLines.length) gsap.set(heroTitleLines, { yPercent: 0 });
      if (heroMetaItems.length) gsap.set(heroMetaItems, { opacity: 1, y: 0 });
      if (heroClient) gsap.set(heroClient, { opacity: 1, y: 0 });
      if (heroWatch) gsap.set(heroWatch, { opacity: 1 });
    } else {
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      if (heroClient) {
        heroTl.fromTo(heroClient, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1);
      }

      if (heroTitleLines.length) {
        heroTl.to(heroTitleLines, {
          yPercent: 0,
          duration: 1.0,
          stagger: 0.08
        }, 0.2);
      }

      if (heroMetaItems.length) {
        heroTl.fromTo(heroMetaItems, 
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.04, ease: 'power2.out' },
          0.6
        );
      }

      if (heroWatch) {
        heroTl.fromTo(heroWatch,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.85
        );
      }

      // Hero Scroll Motion
      if (heroSection && heroMedia) {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
            invalidateOnRefresh: true
          }
        })
          .to('.cs-hero__titles', { y: -50, ease: 'none' }, 0)
          .to(heroMedia, { scale: 1.025, ease: 'none' }, 0)
          .to('.cs-hero__meta-grid', { opacity: 0.25, ease: 'none' }, 0);
      }
    }

    // 02. Section Progress Bar & Section Index (Desktop)
    const fixedProgressBar = document.querySelector('[data-cs-fixed-progress]');
    const fixedProgressFill = document.querySelector('[data-cs-fixed-fill]');
    const fixedNum = document.querySelector('[data-cs-fixed-num]');

    if (fixedProgressBar && fixedProgressFill) {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const progress = self.progress;
          fixedProgressFill.style.height = `${progress * 100}%`;
          if (progress > 0.04 && progress < 0.96) {
            fixedProgressBar.classList.add('is-active');
          } else {
            fixedProgressBar.classList.remove('is-active');
          }

          if (fixedNum) {
            const secIndex = Math.min(14, Math.floor(progress * 14) + 1);
            fixedNum.textContent = secIndex < 10 ? `0${secIndex}` : `${secIndex}`;
          }
        }
      });
    }

    // 03. Section 04: Big Idea Multi-Frame Crossfade
    const ideaFrame = document.querySelector('.cs-idea__hero-frame');
    const ideaImgs = document.querySelectorAll('.cs-idea__hero-frame img');
    const ideaIndicator = document.querySelector('[data-idea-frame-indicator]');

    if (ideaFrame && ideaImgs.length > 1 && !prefersReducedMotion) {
      ScrollTrigger.create({
        trigger: ideaFrame,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(ideaImgs.length - 1, Math.floor(self.progress * ideaImgs.length));
          ideaImgs.forEach((img, i) => {
            img.classList.toggle('is-active', i === idx);
          });
          if (ideaIndicator) {
            ideaIndicator.textContent = `FRAME 0${idx + 1} / 0${ideaImgs.length}`;
          }
        }
      });
    }

    // 04. Frame Study Image Clip-Path Reveal
    const frameItems = document.querySelectorAll('.cs-frame-item');
    frameItems.forEach((item) => {
      const img = item.querySelector('img');
      if (prefersReducedMotion) {
        gsap.set(item, { clipPath: 'inset(0% 0% 0% 0%)' });
        if (img) gsap.set(img, { scale: 1 });
        return;
      }

      gsap.fromTo(item,
        { clipPath: 'inset(8% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );

      if (img) {
        gsap.fromTo(img,
          { scale: 1.03 },
          {
            scale: 1,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    // 05. Next Project Image Scroll Scale
    const nextBg = document.querySelector('.cs-next-project__bg');
    if (nextBg && !prefersReducedMotion) {
      gsap.fromTo(nextBg,
        { scale: 1.05 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: '.cs-next-project',
            start: 'top 90%',
            end: 'bottom top',
            scrub: 0.5
          }
        }
      );
    }
  };

  // Custom Main Film Video Player Logic
  const initCSVideoPlayer = () => {
    const wrapper = document.querySelector('[data-cs-player-wrapper]');
    const video = document.querySelector('[data-cs-player-video]');
    const bigPlayBtn = document.querySelector('[data-cs-play-big]');
    const playPauseBtn = document.querySelector('[data-cs-play-pause]');
    const progressBar = document.querySelector('[data-cs-progress-bar]');
    const progressFill = document.querySelector('[data-cs-progress-fill]');
    const timeDisplay = document.querySelector('[data-cs-time]');
    const volumeBtn = document.querySelector('[data-cs-volume]');
    const fullscreenBtn = document.querySelector('[data-cs-fullscreen]');
    const heroVideo = document.querySelector('.cs-hero__media');

    if (!wrapper || !video) return;

    const formatTime = (seconds) => {
      if (isNaN(seconds)) return '00:00';
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const updatePlayState = () => {
      const isPlaying = !video.paused && !video.ended;
      wrapper.classList.toggle('is-playing', isPlaying);

      if (playPauseBtn) {
        const icon = playPauseBtn.querySelector('i');
        if (icon) {
          icon.className = isPlaying ? 'ph-light ph-pause' : 'ph-light ph-play';
        }
        playPauseBtn.setAttribute('aria-label', isPlaying ? 'Pause video' : 'Play video');
      }

      if (heroVideo && isPlaying) {
        heroVideo.pause();
      }
    };

    const togglePlay = () => {
      if (video.paused || video.ended) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const updateProgress = () => {
      if (!video.duration) return;
      const pct = (video.currentTime / video.duration) * 100;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (timeDisplay) {
        timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
      }
    };

    const seek = (e) => {
      if (!progressBar || !video.duration) return;
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const clamped = Math.max(0, Math.min(1, pos));
      video.currentTime = clamped * video.duration;
      updateProgress();
    };

    const toggleMute = () => {
      video.muted = !video.muted;
      if (volumeBtn) {
        const icon = volumeBtn.querySelector('i');
        if (icon) {
          icon.className = video.muted ? 'ph-light ph-speaker-slash' : 'ph-light ph-speaker-high';
        }
        volumeBtn.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
      }
    };

    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        wrapper.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    };

    video.addEventListener('play', updatePlayState);
    video.addEventListener('pause', updatePlayState);
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateProgress);
    video.addEventListener('click', togglePlay);

    if (bigPlayBtn) bigPlayBtn.addEventListener('click', togglePlay);
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlay);
    if (volumeBtn) volumeBtn.addEventListener('click', toggleMute);
    if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

    if (progressBar) {
      let isDragging = false;
      progressBar.addEventListener('click', seek);
      progressBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        seek(e);
      });
      window.addEventListener('mousemove', (e) => {
        if (isDragging) seek(e);
      });
      window.addEventListener('mouseup', () => {
        isDragging = false;
      });
    }

    const watchBtn = document.querySelector('[data-cs-watch-film]');
    if (watchBtn) {
      watchBtn.addEventListener('click', () => {
        const target = document.querySelector('#film');
        if (target) {
          target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          setTimeout(() => togglePlay(), 600);
        }
      });
    }
  };

  const initCS = () => {
    hydrateProjectPage();
    initCSAnimations();
    initCSVideoPlayer();
  };

  if (document.fonts?.ready) {
    document.fonts.ready.then(initCS);
  } else {
    document.addEventListener('DOMContentLoaded', initCS);
  }
})();

(() => {
  'use strict';

  const projects = window.ENVIZON_PROJECTS || {};
  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get('project') || 'still-moving';
  const project = projects[requestedSlug] || projects['still-moving'];
  if (!project) return;

  const plainTitle = project.title.replace(/<[^>]+>/g, ' ');
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };
  const setHtml = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.innerHTML = value;
  };
  const setSource = (video, source, poster) => {
    if (!video) return;
    video.poster = poster;
    const sourceNode = video.querySelector('source');
    if (sourceNode && sourceNode.getAttribute('src') !== source) {
      sourceNode.src = source;
      video.load();
    }
  };
  const splitList = (value) => value.split('·').map((item) => item.trim()).filter(Boolean);
  const fillList = (selector, values) => {
    const list = document.querySelector(selector);
    if (!list) return;
    list.replaceChildren(...values.map((value) => {
      const item = document.createElement('li');
      item.textContent = value;
      return item;
    }));
  };

  document.title = `${project.client} — ${plainTitle} | Envizon Films`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = project.summary;

  setText('[data-project-client]', `Client / ${project.client}`);
  setText('[data-project-title]', plainTitle);
  setText('[data-project-index]', project.indexStr);
  setText('[data-project-category]', project.category);
  setText('[data-project-location]', project.location);
  setText('[data-project-summary]', project.summary);
  setText('[data-project-role]', project.roleSummary);
  setText('[data-project-services]', project.services);
  setText('[data-meta="client"]', project.client);
  setText('[data-meta="category"]', project.category);
  setText('[data-meta="year"]', project.year);
  setText('[data-meta="runtime"]', project.runtime);
  setText('[data-meta="location"]', project.location);
  setText('[data-meta="role"]', project.roleSummary);
  setText('[data-film-title]', plainTitle);
  setText('[data-film-caption]', `${project.client} / ${plainTitle} — ${project.category} / ${project.runtime}`);
  setHtml('[data-challenge-title]', project.challengeTitle);
  setText('[data-challenge-body]', project.challengeBody);
  setHtml('[data-idea-title]', project.ideaTitle);
  setText('[data-idea-body]', project.ideaBody);
  setText('[data-scope-title]', project.roleSummary);
  fillList('[data-ask-list]', splitList(project.askList));
  fillList('[data-scope-services]', splitList(project.services));
  fillList('[data-scope-deliverables]', splitList(project.askList));

  const heroVideo = document.querySelector('[data-project-hero]');
  const playerVideo = document.querySelector('[data-player-video]');
  setSource(heroVideo, project.heroVideo, project.poster);
  setSource(playerVideo, project.heroVideo, project.poster);

  const challengeImage = document.querySelector('[data-challenge-image]');
  if (challengeImage) challengeImage.src = project.challengeImage;
  const ideaImage = document.querySelector('[data-idea-image]');
  if (ideaImage) ideaImage.src = project.ideaFrames[0];

  document.querySelectorAll('[data-frame]').forEach((figure) => {
    const frame = project.frames[Number(figure.dataset.frame)];
    if (!frame) return;
    const image = figure.querySelector('img');
    const labels = figure.querySelectorAll('figcaption span');
    if (image) {
      image.src = frame.img;
      image.alt = frame.title.replace(/\//g, '—');
    }
    if (labels[0]) labels[0].textContent = frame.title;
    if (labels[1]) labels[1].textContent = [frame.time, frame.loc].filter(Boolean).join(' / ');
  });

  const creditLabels = {
    client: 'Client', production: 'Production', director: 'Director', dp: 'Director of photography',
    producer: 'Producer', editor: 'Editor', colourist: 'Colourist', sound: 'Sound', location: 'Location'
  };
  const credits = document.querySelector('[data-credits]');
  if (credits) {
    credits.replaceChildren(...Object.entries(project.credits).map(([key, value]) => {
      const wrapper = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = creditLabels[key] || key;
      detail.textContent = value;
      wrapper.append(term, detail);
      return wrapper;
    }));
  }

  const otherProjects = Object.values(projects).filter((entry) => entry.slug !== project.slug).slice(0, 3);
  document.querySelectorAll('[data-related]').forEach((card, index) => {
    const related = otherProjects[index];
    if (!related) return;
    card.href = `case-study.html?project=${related.slug}`;
    card.setAttribute('aria-label', `View ${related.title} for ${related.client}`);
    const image = card.querySelector('img');
    if (image) { image.src = related.poster; image.alt = `${related.title} project frame`; }
    const meta = card.querySelector('p');
    const title = card.querySelector('h3');
    if (meta) meta.textContent = `${related.client} / ${related.category} / ${related.year}`;
    if (title) title.textContent = related.title;
  });

  const next = projects[project.nextSlug] || projects['still-moving'];
  const nextLink = document.querySelector('[data-next-project]');
  const previousLink = document.querySelector('[data-prev-project]');
  if (nextLink) nextLink.href = `case-study.html?project=${next.slug}`;
  if (previousLink) previousLink.href = `case-study.html?project=${project.prevSlug}`;
  const nextImage = document.querySelector('[data-next-image]');
  if (nextImage) { nextImage.src = next.poster; nextImage.alt = `Next project: ${next.title}`; }
  setText('[data-next-index]', `Next / ${next.indexStr}`);
  setText('[data-next-client]', `${next.client} / ${next.category}`);
  setText('[data-next-title]', next.title);

  const schema = document.querySelector('#project-schema');
  if (schema) schema.textContent = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'VideoObject', name: project.title,
    description: project.summary, thumbnailUrl: project.poster, contentUrl: project.heroVideo,
    uploadDate: `${project.year}-01-01`, productionCompany: { '@type': 'Organization', name: 'Envizon Films' }
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wrapper = document.querySelector('[data-player-wrapper]');
  const bigPlay = document.querySelector('[data-player-big-play]');
  const toggle = document.querySelector('[data-player-toggle]');
  const seek = document.querySelector('[data-player-seek]');
  const time = document.querySelector('[data-player-time]');
  const mute = document.querySelector('[data-player-mute]');
  const fullscreen = document.querySelector('[data-player-fullscreen]');
  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return '00:00';
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
  };
  const updatePlayer = () => {
    if (!playerVideo || !wrapper) return;
    const playing = !playerVideo.paused && !playerVideo.ended;
    wrapper.classList.toggle('is-playing', playing);
    if (toggle) {
      toggle.setAttribute('aria-label', playing ? 'Pause film' : 'Play film');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = playing ? 'ph-light ph-pause' : 'ph-light ph-play';
    }
    if (time) time.textContent = `${formatTime(playerVideo.currentTime)} / ${formatTime(playerVideo.duration)}`;
    if (seek && playerVideo.duration) seek.value = String((playerVideo.currentTime / playerVideo.duration) * 1000);
    if (playing && heroVideo) heroVideo.pause();
  };
  const togglePlayback = () => {
    if (!playerVideo) return;
    if (playerVideo.paused || playerVideo.ended) playerVideo.play().catch(() => {});
    else playerVideo.pause();
  };
  if (playerVideo) {
    playerVideo.addEventListener('play', updatePlayer);
    playerVideo.addEventListener('pause', updatePlayer);
    playerVideo.addEventListener('timeupdate', updatePlayer);
    playerVideo.addEventListener('loadedmetadata', updatePlayer);
    playerVideo.addEventListener('click', togglePlayback);
  }
  [bigPlay, toggle].forEach((button) => button?.addEventListener('click', togglePlayback));
  seek?.addEventListener('input', () => {
    if (playerVideo?.duration) playerVideo.currentTime = (Number(seek.value) / 1000) * playerVideo.duration;
  });
  mute?.addEventListener('click', () => {
    if (!playerVideo) return;
    playerVideo.muted = !playerVideo.muted;
    mute.setAttribute('aria-label', playerVideo.muted ? 'Unmute film' : 'Mute film');
    const icon = mute.querySelector('i');
    if (icon) icon.className = playerVideo.muted ? 'ph-light ph-speaker-slash' : 'ph-light ph-speaker-high';
  });
  fullscreen?.addEventListener('click', () => {
    if (!wrapper) return;
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else wrapper.requestFullscreen().catch(() => {});
  });
  document.querySelector('[data-watch-film]')?.addEventListener('click', () => {
    document.querySelector('#film')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    window.setTimeout(() => playerVideo?.play().catch(() => {}), reducedMotion ? 0 : 500);
  });

  if (heroVideo && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && playerVideo?.paused) heroVideo.play().catch(() => {});
      else heroVideo.pause();
    }, { threshold: 0.15 }).observe(heroVideo);
  }
})();
