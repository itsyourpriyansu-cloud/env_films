(() => {
  const ARTICLES = [
    {
      slug: "what-the-light-is-really-doing",
      title: "What the Light Is Really Doing.",
      category: "Craft",
      date: "06.08.2026",
      iso: "2026-08-06",
      read: "6 min read",
      hero: "assets/images/bts.jpg",
      image: "assets/images/journal-sunrise-crew.jpg",
      alt: "Film crew preparing a lighting setup",
      dek: "Before a single frame is composed, the light has already decided what the scene means.",
      lead: "Every film is lit twice. Once by the available world, and once by a decision.",
      quote: "Light is not decoration. It is the first piece of direction.",
      caption: "On set / first light",
      notesTitle: "What the light must answer.",
      sections: [
        [
          "Light arrives with an opinion",
          "A location is never visually neutral. Window direction, reflected colour and the speed of a moving sun all suggest a mood before a lamp is switched on. The useful question is not how to make a place brighter, but what the light should reveal.",
        ],
        [
          "Shape before equipment",
          "We begin with contrast, direction and movement. Equipment comes later. A small source in the right place can carry more meaning than a large setup that treats every surface equally.",
        ],
        [
          "Protect the choice",
          "The lighting idea has to survive coverage, performance and the grade. That means recording the intention clearly enough for every department to keep working toward the same image.",
        ],
      ],
      notes: [
        "Decide what the audience should notice first.",
        "Build around the location’s strongest natural behaviour.",
        "Leave enough consistency for the edit without flattening the scene.",
      ],
    },
    {
      slug: "scouting-for-atmosphere",
      title: "Scouting for Atmosphere, Not Just a Location.",
      category: "Field notes",
      date: "24.07.2026",
      iso: "2026-07-24",
      read: "5 min read",
      hero: "assets/images/case-field-notes-poster.jpg",
      image: "assets/images/case-field-notes-meghalaya-road.jpg",
      alt: "Misty landscape during a location scout",
      dek: "A beautiful place is not automatically the right place. We scout for what a location makes possible.",
      lead: "The best location does narrative work before the camera begins.",
      quote:
        "A scout is a rehearsal for the conditions, not a hunt for a postcard.",
      caption: "Location scout / atmosphere",
      notesTitle: "What we test on a scout.",
      sections: [
        [
          "Look beyond the frame",
          "A recce has to account for access, sound, weather, sun path and the movement of people—not only the angle that first catches the eye. The strongest option gives the scene room to happen.",
        ],
        [
          "Listen to the place",
          "Background noise, surfaces and changing public activity affect performance and recording. Ten quiet minutes on a scout can prevent hours of compromise on the shoot.",
        ],
        [
          "Return at the right hour",
          "A location seen at noon may be a different location at dawn. When atmosphere matters, we revisit at the time the scene will actually be photographed.",
        ],
      ],
      notes: [
        "Walk the route that crew and equipment must take.",
        "Record light and sound at the intended shoot hour.",
        "Find a practical alternative before it becomes necessary.",
      ],
    },
    {
      slug: "ten-decisions",
      title: "The Ten Decisions Before “Action.”",
      category: "Production",
      date: "12.06.2026",
      iso: "2026-06-12",
      read: "6 min read",
      hero: "assets/images/hero.jpg",
      image: "assets/images/process-03.png",
      alt: "Film production planning and shot preparation",
      dek: "The most valuable work on set often happens before the first take.",
      lead: "A calm set is usually the visible result of invisible decisions.",
      quote:
        "Preparation is not about removing surprise. It is about protecting the idea from avoidable noise.",
      caption: "Pre-production / decision map",
      notesTitle: "The decisions that protect a shoot.",
      sections: [
        [
          "Resolve the purpose",
          "Every shot should know its job: introduce information, hold an emotion or move the story. Without that clarity, coverage expands while meaning gets thinner.",
        ],
        [
          "Sequence the real day",
          "The ideal shot order rarely matches the practical one. Light, talent, location access and company moves have to become a schedule that still respects performance.",
        ],
        [
          "Share the plan",
          "A decision is only useful when the relevant department can act on it. References, floor plans and a concise shot logic create a common picture before the camera rolls.",
        ],
      ],
      notes: [
        "Name the non-negotiable frames.",
        "Schedule for light and performance, not page order.",
        "Give every department the same current plan.",
      ],
    },
    {
      slug: "colour-is-a-character",
      title: "Colour Is a Character, Not a Filter.",
      category: "Post-production",
      date: "30.05.2026",
      iso: "2026-05-30",
      read: "5 min read",
      hero: "assets/images/service-post-production.jpg",
      image: "assets/images/case-after-dark-lighting.jpg",
      alt: "Colour grading monitors in a post-production suite",
      dek: "The grade should complete the emotional logic of the image, not sit on top of it.",
      lead: "Colour begins in production and becomes precise in post.",
      quote: "A look works when the audience feels it before they notice it.",
      caption: "Post-production / colour pass",
      notesTitle: "How we hold a colour language.",
      sections: [
        [
          "Start before the grade",
          "Palette, wardrobe, production design and lighting create the raw relationships. Post can refine those choices, but it cannot replace a colour idea that was never present.",
        ],
        [
          "Build rules, not presets",
          "A coherent look describes how skin, highlights, shadows and key brand colours should behave across changing scenes. That system is more useful than applying the same treatment to every shot.",
        ],
        [
          "Watch the sequence",
          "An excellent isolated frame can still disrupt a film. We grade through transitions so colour supports the rhythm of the whole piece.",
        ],
      ],
      notes: [
        "Define palette relationships during pre-production.",
        "Protect skin and essential product colour.",
        "Review scenes in sequence, not only as hero stills.",
      ],
    },
    {
      slug: "hour-before-sunrise",
      title: "The Unglamorous Hour Before Sunrise.",
      category: "Behind the scenes",
      date: "18.05.2026",
      iso: "2026-05-18",
      read: "4 min read",
      hero: "assets/images/journal-sunrise-crew.jpg",
      image: "assets/images/bts.jpg",
      alt: "Crew preparing equipment before sunrise",
      dek: "The image lasts seconds. The preparation for it begins in darkness.",
      lead: "Golden hour rewards teams that are ready before it starts.",
      quote: "The quietest hour on set often carries the most coordination.",
      caption: "Before sunrise / crew call",
      notesTitle: "How we earn the short window.",
      sections: [
        [
          "Arrive before the picture",
          "In the dark, departments can build, check and rehearse without spending the light the scene depends on. Every case, cable and mark needs a place.",
        ],
        [
          "Rehearse the movement",
          "Camera and performance are walked through before the sky reaches the intended level. When the window opens, the team is refining rather than discovering.",
        ],
        [
          "Know when to stop",
          "Changing light creates urgency, but rushing past continuity creates a different problem. We prioritise the frames that carry the scene and let secondary coverage adapt.",
        ],
      ],
      notes: [
        "Pre-light and mark positions whenever access allows.",
        "Rehearse without exhausting the performance.",
        "Rank shots before the light begins to change.",
      ],
    },
    {
      slug: "shoot-on-film",
      title: "Why We Still Shoot Some Scenes on Film.",
      category: "Craft",
      date: "02.05.2026",
      iso: "2026-05-02",
      read: "5 min read",
      hero: "assets/images/journal-film-camera.jpg",
      image: "assets/images/journal-silhouette-sunset.jpg",
      alt: "Film camera and photographic film stock",
      dek: "Grain is not a flaw to fix. Sometimes it is the texture a memory needs.",
      lead: "The capture format is a storytelling decision, not a badge of taste.",
      quote: "Film matters when its limits make the scene more specific.",
      caption: "Format test / texture",
      notesTitle: "When film earns its place.",
      sections: [
        [
          "Choose for the image",
          "Film brings a particular response to highlight, colour and movement. Those qualities should solve a story problem rather than simply signal nostalgia.",
        ],
        [
          "Accept the discipline",
          "Finite stock changes the pace of a set. Rehearsal becomes more deliberate and the moment of rolling carries a useful concentration.",
        ],
        [
          "Plan the workflow",
          "Stock, processing, scanning and matching require decisions early. A hybrid production works best when the handoff between formats is designed, not improvised.",
        ],
      ],
      notes: [
        "Test stock against skin, wardrobe and practical light.",
        "Budget the complete workflow, not only camera time.",
        "Use format changes with a clear narrative reason.",
      ],
    },
    {
      slug: "casting-without-a-script",
      title: "Casting Without a Script.",
      category: "Documentary",
      date: "21.04.2026",
      iso: "2026-04-21",
      read: "5 min read",
      hero: "assets/images/case-nexora-laptop.jpg",
      image: "assets/images/case-nexora-team.jpg",
      alt: "Documentary subject in a working environment",
      dek: "For documentary-led films, presence matters more than a perfect line reading.",
      lead: "Real voices become compelling when the set gives them room to remain real.",
      quote: "Cast for perspective, then create conditions for attention.",
      caption: "Documentary portrait / conversation",
      notesTitle: "How we protect an honest voice.",
      sections: [
        [
          "Find a point of view",
          "We look for people with lived detail and a way of seeing the subject. Confidence on camera helps, but specificity is what gives an interview weight.",
        ],
        [
          "Replace lines with prompts",
          "A useful prompt opens a memory or opinion. It does not tell the subject what the finished sentence should sound like.",
        ],
        [
          "Keep the room small",
          "A lighter footprint reduces the pressure to perform. Clear consent, patient listening and fewer interruptions usually lead to better material.",
        ],
      ],
      notes: [
        "Choose perspective over polish.",
        "Ask prompts that invite examples and memory.",
        "Explain where and how the material will be used.",
      ],
    },
    {
      slug: "the-edit",
      title: "The Edit Is Where the Film Gets Rewritten.",
      category: "Post-production",
      date: "09.04.2026",
      iso: "2026-04-09",
      read: "6 min read",
      hero: "assets/images/journal-edit-timeline.jpg",
      image: "assets/images/service-post-production.jpg",
      alt: "Editing timeline in a post-production suite",
      dek: "The script provides a route. The footage decides the final journey.",
      lead: "Editing is not assembly; it is the second act of authorship.",
      quote: "The cut reveals what the film is actually about.",
      caption: "Edit suite / first assembly",
      notesTitle: "What guides the cut.",
      sections: [
        [
          "Watch without defending",
          "The first assembly is evidence. Moments that felt important on set may not carry the same weight in sequence, while a small reaction can become the centre of a scene.",
        ],
        [
          "Cut for intention",
          "Pace is not simply speed. We shape the time an audience needs to understand, anticipate or feel before the film moves on.",
        ],
        [
          "Make feedback specific",
          "Useful review notes describe the response that is missing or the information that is unclear. That gives the editor a problem to solve rather than a frame to obey.",
        ],
      ],
      notes: [
        "Find the emotional spine before refining detail.",
        "Let reaction and silence carry meaning.",
        "Frame feedback around the intended audience response.",
      ],
    },
    {
      slug: "wedding-documentary",
      title: "A Wedding Is Also a Documentary.",
      category: "Wedding films",
      date: "28.03.2026",
      iso: "2026-03-28",
      read: "5 min read",
      hero: "assets/images/case-old-worlds-challenge.jpg",
      image: "assets/images/case-old-worlds-twilight.jpg",
      alt: "Wedding venue at warm evening light",
      dek: "The scale may be cinematic, but the moments cannot be repeated.",
      lead: "A wedding film succeeds when craft stays alert to what is real.",
      quote: "The schedule gives us events. Observation gives us the story.",
      caption: "Wedding film / observed moment",
      notesTitle: "How we stay present.",
      sections: [
        [
          "Know the structure",
          "Rituals, entrances and speeches give the day an architecture. Understanding that order lets camera teams anticipate without directing every interaction.",
        ],
        [
          "Watch the edges",
          "The most revealing moments often happen beside the planned one: a held breath, a glance across a room, a family member arriving just in time.",
        ],
        [
          "Build memory, not coverage",
          "The edit needs atmosphere, transitions and sound as much as key events. Those fragments turn a record of the day into an experience of it.",
        ],
      ],
      notes: [
        "Learn the ritual and family dynamics in advance.",
        "Cover essential events while another camera watches reactions.",
        "Record room tone, voices and details that carry memory.",
      ],
    },
    {
      slug: "shot-list",
      title: "Building a Shot List That Survives the Day.",
      category: "Pre-production",
      date: "15.03.2026",
      iso: "2026-03-15",
      read: "5 min read",
      hero: "assets/images/process-03.png",
      image: "assets/images/process-04.png",
      alt: "Production team planning a film shoot",
      dek: "A useful shot list is a decision tool, not a document the day is forced to obey.",
      lead: "The list must preserve the idea while making room for reality.",
      quote:
        "Plan the reason for each shot, then stay flexible about the route.",
      caption: "Pre-production / shot logic",
      notesTitle: "A list built for the real day.",
      sections: [
        [
          "Write the purpose",
          "Alongside lens and movement, we note what each shot contributes. If time changes, purpose makes it easier to combine, adapt or release coverage intelligently.",
        ],
        [
          "Group the dependencies",
          "Talent, props, light direction and location moves reveal the true production order. Organising around those dependencies keeps the day efficient.",
        ],
        [
          "Create priorities",
          "Essential, valuable and optional frames should be visible before the shoot. The hierarchy turns schedule pressure into a clear creative decision.",
        ],
      ],
      notes: [
        "Describe the narrative job beside the technical setup.",
        "Group shots by real production dependencies.",
        "Mark priorities before the first setup.",
      ],
    },
  ];

  const params = new URLSearchParams(location.search);
  const requested = params.get("article");
  const index = Math.max(
    0,
    ARTICLES.findIndex((item) => item.slug === requested),
  );
  const article = ARTICLES[index];
  const next = ARTICLES[(index + 1) % ARTICLES.length];
  const related = [
    ARTICLES[(index + 2) % ARTICLES.length],
    ARTICLES[(index + 5) % ARTICLES.length],
    ARTICLES[(index + 8) % ARTICLES.length],
  ];
  const all = (selector) => [...document.querySelectorAll(selector)];
  const setText = (selector, value) =>
    all(selector).forEach((node) => {
      node.textContent = value;
    });
  setText("[data-article-title]", article.title);
  setText("[data-article-category]", article.category);
  setText("[data-article-date]", article.date);
  setText("[data-article-read]", article.read);
  setText("[data-article-dek]", article.dek);
  setText("[data-article-lead]", article.lead);
  setText("[data-article-quote]", article.quote);
  setText("[data-article-caption]", article.caption);
  setText("[data-notes-title]", article.notesTitle);
  all("[data-article-date]").forEach((node) =>
    node.setAttribute("datetime", article.iso),
  );
  const hero = document.querySelector("[data-article-hero]");
  hero.src = article.hero;
  hero.alt = article.alt;
  const image = document.querySelector("[data-article-image]");
  image.src = article.image;
  image.alt = article.alt;
  document.querySelector("[data-article-copy]").innerHTML = article.sections
    .map(
      ([title, body]) => `<section><h2>${title}</h2><p>${body}</p></section>`,
    )
    .join("");
  document.querySelector("[data-article-notes]").innerHTML = article.notes
    .map((note) => `<li>${note}</li>`)
    .join("");
  document.querySelector("[data-related-articles]").innerHTML = related
    .map(
      (item) =>
        `<a class="more-card" href="journal-post.html?article=${item.slug}"><img src="${item.hero}" alt="" loading="lazy"><p class="mono">${item.category} / ${item.date}</p><h3>${item.title}</h3></a>`,
    )
    .join("");
  const nextLink = document.querySelector("[data-next-link]");
  nextLink.href = `journal-post.html?article=${next.slug}`;
  const nextImage = document.querySelector("[data-next-image]");
  nextImage.src = next.hero;
  setText("[data-next-title]", next.title);
  setText("[data-next-category]", next.category);
  document.title = `${article.title} | Envizon Films Journal`;
  document.querySelector('meta[name="description"]').content = article.dek;
  document.querySelector("#article-schema").textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.dek,
    datePublished: article.iso,
    author: { "@type": "Organization", name: "Envizon Films" },
    image: article.hero,
  });
  document
    .querySelectorAll(".internal-rail a")
    .forEach((link) =>
      link.addEventListener("click", () =>
        link.setAttribute("aria-current", "true"),
      ),
    );
})();
