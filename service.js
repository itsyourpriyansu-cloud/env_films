(() => {
  "use strict";

  const SERVICES_DATA = {
    commercials: {
      slug: "commercials",
      number: "01 / 06",
      title: "Commercials.",
      eyebrow: "Capability / 01 of 06",
      position:
        "Films built to be seen in the first three seconds and remembered after.",
      heroVideo: "assets/videos/8089116-uhd_4096_2160_25fps.mp4",
      heroPoster: "assets/images/service-commercials.jpg",
      problemTitle: "Attention isn't given.<br>It's taken.",
      problemBody:
        "Most commercials are made to be liked. Ours are made to survive a skip button — three seconds earning the next three, and the next.",
      problemImage: "assets/images/case-after-dark-poster.jpg",
      problemImageAlt: "Bengaluru at night, lit for a commercial shoot",
      approachTitle: "One idea,<br>cut for every screen.",
      approachBody:
        "We shoot the hero film and its cutdowns as one system, not one film chopped down later — so the six-second version still feels like a decision, not a compromise.",
      approachMedia: {
        type: "video",
        src: "assets/videos/kode-landing.mp4",
        poster: "assets/images/service-commercials.jpg",
      },
      bestFor:
        "Product launches · Campaigns · TVC · Digital ads · Brand activation",
      weHandle:
        "Creative direction · Cinematography · Editing · Colour grading · Sound design",
      gallery: [
        {
          img: "assets/images/case-after-dark-poster.jpg",
          caption: "Voltarc, at night",
        },
        {
          img: "assets/images/case-suvarna-jhumka.jpg",
          caption: "Suvarna, in macro",
        },
        {
          img: "assets/images/case-aroha-poster.jpg",
          caption: "Aroha, in daylight",
        },
      ],
      proof: [
        {
          slug: "after-dark",
          title: "Night Belongs to Us.",
          client: "Voltarc / Commercial",
          img: "assets/images/case-after-dark-poster.jpg",
        },
        {
          slug: "suvarna",
          title: "Heirlooms, Made Today.",
          client: "Suvarna / Commercial",
          img: "assets/images/case-suvarna-poster.jpg",
        },
      ],
      ctaWorkHref: "case-studies.html?type=COMMERCIAL",
      prevSlug: "post-production",
      nextSlug: "brand-films",
    },
    "brand-films": {
      slug: "brand-films",
      number: "02 / 06",
      title: "Brand films.",
      eyebrow: "Capability / 02 of 06",
      position: "Purpose, translated into something people actually feel.",
      heroVideo: "assets/videos/kode-landing.mp4",
      heroPoster: "assets/images/service-brand-films.jpg",
      problemTitle: "Nobody remembers<br>a mission statement.",
      problemBody:
        "Brand values read fine on a slide and disappear by the next meeting. A brand film has to make the same idea impossible to forget.",
      problemImage: "assets/images/case-still-moving-challenge.jpg",
      problemImageAlt: "A quiet, human moment from a brand film shoot",
      approachTitle: "Find the human<br>truth first.",
      approachBody:
        "Before a single shot list, we find the one true thing the brand is actually for — script, casting and music all get built to protect that idea.",
      approachMedia: {
        type: "video",
        src: "assets/videos/8089116-uhd_4096_2160_25fps.mp4",
        poster: "assets/images/service-brand-films.jpg",
      },
      bestFor:
        "Brand story · Manifesto film · Founder story · Campaign film · Brand launch",
      weHandle:
        "Concept development · Script · Production · Edit · Colour · Sound",
      gallery: [
        {
          img: "assets/images/case-still-moving-hyderabad-sunset.jpg",
          caption: "Niyojak, departure",
        },
        {
          img: "assets/images/service-case-study-road.jpg",
          caption: "The road, as metaphor",
        },
        {
          img: "assets/images/case-lakshya-poster.jpg",
          caption: "Lakshya, in focus",
        },
      ],
      proof: [
        {
          slug: "still-moving",
          title: "Still Moving.",
          client: "Niyojak / Brand film",
          img: "assets/images/case-still-moving-hyderabad-sunset.jpg",
        },
        {
          slug: "lakshya-learning",
          title: "Every Child, a Headstart.",
          client: "Lakshya Learning / Brand film",
          img: "assets/images/case-lakshya-poster.jpg",
        },
      ],
      ctaWorkHref: "case-studies.html?type=BRAND%20FILM",
      prevSlug: "commercials",
      nextSlug: "corporate-films",
    },
    "corporate-films": {
      slug: "corporate-films",
      number: "03 / 06",
      title: "Corporate films.",
      eyebrow: "Capability / 03 of 06",
      position:
        "Clear enough for a boardroom. Honest enough for the people in it.",
      heroVideo: "assets/videos/kode-landing.mp4",
      heroPoster: "assets/images/service-corporate-films.jpg",
      problemTitle: "Most corporate films<br>explain nothing.",
      problemBody:
        "Stock footage of handshakes and skylines doesn't tell anyone what a company actually does, or why the people inside it stay.",
      problemImage: "assets/images/case-nexora-openoffice.jpg",
      problemImageAlt: "An open office floor mid-workday",
      approachTitle: "Point the camera<br>at real work.",
      approachBody:
        "We film the actual floor, the actual meetings, the actual builders — the org chart stays in the deck, not in the film.",
      approachMedia: {
        type: "video",
        src: "assets/videos/13434213_3840_2160_24fps.mp4",
        poster: "assets/images/case-nexora-poster.jpg",
      },
      bestFor:
        "Company films · Leadership stories · Employer branding · Industrial films · Investor communication",
      weHandle:
        "Creative direction · Architectural cinematography · Edit · Motion graphics",
      gallery: [
        {
          img: "assets/images/case-nexora-poster.jpg",
          caption: "Nexora, the atrium",
        },
        {
          img: "assets/images/case-nexora-laptop.jpg",
          caption: "Nexora, the engineer",
        },
        {
          img: "assets/images/service-corporate-films.jpg",
          caption: "On set, on location",
        },
      ],
      proof: [
        {
          slug: "nexora",
          title: "Built by the People in It.",
          client: "Nexora Technologies / Corporate film",
          img: "assets/images/case-nexora-poster.jpg",
        },
      ],
      ctaWorkHref: "case-studies.html?type=CORPORATE%20FILM",
      prevSlug: "brand-films",
      nextSlug: "digital-content",
    },
    "digital-content": {
      slug: "digital-content",
      number: "04 / 06",
      title: "Digital content.",
      eyebrow: "Capability / 04 of 06",
      position: "One shoot day. A month of feed-ready content.",
      heroVideo: "assets/videos/16201893_1080_1920_60fps.mp4",
      heroPoster: "assets/images/service-digital-content.jpg",
      problemTitle: "A 16:9 film<br>doesn't fit a phone.",
      problemBody:
        "Cropping a hero film for Reels after the fact always looks cropped. Vertical has to be planned before anyone presses record.",
      problemImage: "assets/images/case-dhaaga-model1.jpg",
      problemImageAlt: "A vertical-format fashion content shoot",
      approachTitle: "Shoot vertical<br>from frame one.",
      approachBody:
        "We block, light and cut every scene knowing exactly which format it lands in — 9:16, 1:1 or 16:9 — so nothing feels like an afterthought.",
      approachMedia: {
        type: "image",
        src: "assets/images/case-dhaaga-poster.jpg",
      },
      bestFor:
        "Social campaigns · Short-form films · Paid media · Vertical video · Content series",
      weHandle: "16:9 master · 9:16 social · 1:1 feed · Campaign cut-downs",
      gallery: [
        {
          img: "assets/images/case-dhaaga-model1.jpg",
          caption: "Dhaaga, the look",
        },
        {
          img: "assets/images/case-dhaaga-poster.jpg",
          caption: "Dhaaga, the stamp",
        },
        {
          img: "assets/images/case-dhaaga-textiles.jpg",
          caption: "Dhaaga, the palette",
        },
      ],
      proof: [
        {
          slug: "dhaaga",
          title: "Threads of Now.",
          client: "Dhaaga / Digital content",
          img: "assets/images/case-dhaaga-model1.jpg",
        },
      ],
      ctaWorkHref: "case-studies.html?type=DIGITAL%20CONTENT",
      prevSlug: "corporate-films",
      nextSlug: "motion-animation",
    },
    "motion-animation": {
      slug: "motion-animation",
      number: "05 / 06",
      title: "Motion / Animation.",
      eyebrow: "Capability / 05 of 06",
      position:
        "Design and movement, handled with the same care as live action.",
      heroVideo: "assets/videos/service-motion-abstract.mp4",
      heroPoster: "assets/images/service-motion-animation.jpg",
      problemTitle: "Some ideas<br>can't be filmed.",
      problemBody:
        "A product that doesn't exist yet, a system too abstract for a camera, a title sequence that needs to feel invented — live action runs out of road.",
      problemImage: "assets/images/service-motion-curves.jpg",
      problemImageAlt: "Abstract 3D render in blue and orange",
      approachTitle: "Motion in-house.<br>Everything else, in partnership.",
      approachBody:
        "Titles and motion graphics are ours end to end. For heavier 3D and VFX we bring in specialist partners we've already vetted, so the result still meets our bar.",
      approachMedia: {
        type: "image",
        src: "assets/images/service-motion-blocks.jpg",
      },
      bestFor:
        "Explainers · Title sequences · Abstract product visualisation · Campaign overlays",
      weHandle: "Motion graphics · Titles",
      gallery: [
        {
          img: "assets/images/service-motion-animation.jpg",
          caption: "The render",
        },
        {
          img: "assets/images/service-motion-curves.jpg",
          caption: "The surface",
        },
        {
          img: "assets/images/service-motion-blocks.jpg",
          caption: "The structure",
        },
      ],
      proofNote:
        "Motion and titles usually live inside another film rather than standing alone — here's where you've already seen ours at work.",
      proof: [
        {
          slug: "nexora",
          title: "Built by the People in It.",
          client: "Nexora Technologies / Corporate film",
          img: "assets/images/case-nexora-poster.jpg",
        },
      ],
      ctaWorkHref: "case-studies.html",
      prevSlug: "digital-content",
      nextSlug: "post-production",
    },
    "post-production": {
      slug: "post-production",
      number: "06 / 06",
      title: "Post-production.",
      eyebrow: "Capability / 06 of 06",
      position: "The shoot ends. The film gets made here.",
      heroVideo: "assets/videos/kode-landing.mp4",
      heroPoster: "assets/images/service-post-production.jpg",
      problemTitle: "A great shoot<br>can still fail here.",
      problemBody:
        "Footage that looked perfect on set can die in a flat edit or a rushed grade. Post isn't clean-up — it's where the film is actually decided.",
      problemImage: "assets/images/journal-edit-timeline.jpg",
      problemImageAlt: "Close-up of a video editing timeline",
      approachTitle: "Edit, colour<br>and sound as one pass.",
      approachBody:
        "The same team carries the film from assembly to final mix, so every decision in the grade still remembers what the edit was trying to say.",
      approachMedia: {
        type: "image",
        src: "assets/images/service-post-production.jpg",
      },
      bestFor: "Master films · Social edits · Launch cuts · Platform delivery",
      weHandle: "Edit · Colour · Sound design · Campaign versions",
      gallery: [
        {
          img: "assets/images/service-post-production.jpg",
          caption: "The grade",
        },
        {
          img: "assets/images/journal-edit-timeline.jpg",
          caption: "The timeline",
        },
        { img: "assets/images/case-new-forms-poster.jpg", caption: "The mix" },
      ],
      proof: [
        {
          slug: "old-worlds",
          title: "Time Stands Still.",
          client: "Vilasa Palaces / Hospitality film",
          img: "assets/images/case-old-worlds-twilight.jpg",
        },
        {
          slug: "new-forms",
          title: "Studio Conversations.",
          client: "Samvaad Studios / Podcast series",
          img: "assets/images/case-new-forms-poster.jpg",
        },
      ],
      ctaWorkHref: "case-studies.html",
      prevSlug: "motion-animation",
      nextSlug: "commercials",
    },
  };

  const setHtml = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value != null) node.innerHTML = value;
  };
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value != null) node.textContent = value;
  };

  const hydrateServicePage = () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("capability") || "commercials";
    const service = SERVICES_DATA[slug] || SERVICES_DATA["commercials"];
    document.querySelectorAll(".internal-rail a").forEach((link) => {
      const active =
        new URL(link.href, location.href).searchParams.get("capability") ===
        service.slug;
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });

    document.title = `${service.title.replace(/\.$/, "")} | Envizon Films`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", service.position);
    const schema = document.querySelector("#service-schema");
    if (schema)
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title.replace(/\.$/, ""),
        description: service.position,
        provider: { "@type": "Organization", name: "Envizon Films" },
      });

    const heroVideo = document.querySelector("[data-service-hero]");
    if (heroVideo) {
      heroVideo.setAttribute("poster", service.heroPoster);
      const source = heroVideo.querySelector("[data-service-hero-source]");
      if (source) source.setAttribute("src", service.heroVideo);
      heroVideo.load();
    }
    setText("[data-service-eyebrow]", service.eyebrow);
    setHtml("[data-service-title]", service.title);
    setText("[data-service-number]", service.number);
    setText("[data-service-position]", service.position);

    setHtml("[data-problem-title]", service.problemTitle);
    setText("[data-problem-body]", service.problemBody);
    const problemImage = document.querySelector("[data-problem-image]");
    if (problemImage) {
      problemImage.setAttribute("src", service.problemImage);
      problemImage.setAttribute("alt", service.problemImageAlt || "");
    }

    setHtml("[data-approach-title]", service.approachTitle);
    setText("[data-approach-body]", service.approachBody);
    const approachMediaEl = document.querySelector("[data-approach-media]");
    if (approachMediaEl && service.approachMedia) {
      const media = service.approachMedia;
      if (media.type === "video") {
        approachMediaEl.innerHTML = `<video autoplay muted loop playsinline preload="none" poster="${media.poster || ""}"><source src="${media.src}" type="video/mp4"></video>`;
      } else {
        approachMediaEl.innerHTML = `<img src="${media.src}" alt="" loading="lazy">`;
      }
    }

    setText("[data-bestfor-value]", service.bestFor);
    setText("[data-wehandle-value]", service.weHandle);

    const galleryImgs = document.querySelectorAll("[data-gallery-image]");
    galleryImgs.forEach((img) => {
      const i = Number(img.dataset.galleryImage);
      const frame = service.gallery[i];
      if (!frame) return;
      img.setAttribute("src", frame.img);
      img.setAttribute("alt", frame.caption);
    });
    document.querySelectorAll("[data-gallery-caption]").forEach((el) => {
      const i = Number(el.dataset.galleryCaption);
      const frame = service.gallery[i];
      if (frame) el.textContent = frame.caption;
    });

    if (service.proofNote) setText("[data-proof-note]", service.proofNote);
    const proofGrid = document.querySelector("[data-proof-grid]");
    if (proofGrid && service.proof) {
      const cards = service.proof.map((p) => ({
        href: `case-study.html?project=${p.slug}`,
        img: p.img,
        alt: p.title,
        client: p.client,
        title: p.title,
      }));
      // Always show two balanced cards, never one stretched or a lopsided row.
      if (cards.length === 1) {
        cards.push({
          href: service.ctaWorkHref,
          img: service.heroPoster,
          alt: "See more of the work",
          client: "Envizon Films / All work",
          title: "See more of the work.",
        });
      }
      proofGrid.innerHTML = cards
        .map(
          (c) => `
        <a class="related-card reveal" href="${c.href}">
          <img src="${c.img}" alt="${c.alt}" loading="lazy">
          <div><p class="mono">${c.client}</p><h3>${c.title}</h3></div>
        </a>
      `,
        )
        .join("");
    }
    const ctaWork = document.querySelector("[data-cta-work]");
    if (ctaWork) ctaWork.setAttribute("href", service.ctaWorkHref);

    const prevService = SERVICES_DATA[service.prevSlug];
    const nextService =
      SERVICES_DATA[service.nextSlug] || SERVICES_DATA["commercials"];
    const prevLink = document.querySelector("[data-prev-capability]");
    if (prevLink && prevService)
      prevLink.setAttribute(
        "href",
        `service.html?capability=${prevService.slug}`,
      );
    const nextLink = document.querySelector("[data-next-capability]");
    if (nextLink) {
      nextLink.setAttribute(
        "href",
        `service.html?capability=${nextService.slug}`,
      );
      nextLink.setAttribute(
        "aria-label",
        `View next capability: ${nextService.title}`,
      );
    }
    const nextImage = document.querySelector("[data-next-image]");
    if (nextImage) {
      nextImage.setAttribute("src", nextService.heroPoster);
      nextImage.setAttribute("alt", nextService.title);
    }
    setText("[data-next-number]", nextService.number);
    setHtml("[data-next-title]", nextService.title);
  };

  if (document.fonts?.ready) {
    document.fonts.ready.then(hydrateServicePage);
  } else {
    document.addEventListener("DOMContentLoaded", hydrateServicePage);
  }
})();
