(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const PROJECTS_DATA = {
    'still-moving': {
      slug: 'still-moving',
      indexStr: '01 / 12',
      client: 'NIYOJAK',
      title: 'STILL MOVING.',
      titleHtml: '<span class="cs-hero__title-line"><span>STILL</span></span><span class="cs-hero__title-line"><span>MOVING.</span></span>',
      category: 'BRAND FILM',
      year: '2026',
      runtime: '00:45',
      location: 'HYDERABAD / INDIA',
      heroVideo: 'assets/videos/8089116-uhd_4096_2160_25fps.mp4',
      poster: 'assets/images/case-still-moving-hyderabad-sunset.jpg',
      summary: 'A quiet brand film about financial planning and the momentum inside every decision, created by Envizon Films.',
      services: 'CONCEPT DEVELOPMENT · SCRIPT · PRODUCTION · EDIT · COLOUR · SOUND',
      askList: 'BRAND FILM · CAMPAIGN CUTS · SOCIAL EDITS',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Make finance<br>feel like life.',
      challengeBody: 'Niyojak needed to talk about financial planning without falling into the usual language of numbers, charts and future promises. The real challenge was simpler: make people feel what those decisions are ultimately for.',
      challengeImage: 'assets/images/case-still-moving-challenge.jpg',
      ideaTitle: 'One road.<br>A few choices.<br>Everything ahead.',
      ideaBody: 'Instead of explaining financial planning, the film follows one traveller through a series of quiet decisions. The road becomes the metaphor. Each choice changes what comes next without the film needing to say it directly.',
      ideaFrames: ['assets/images/service-case-study-road.jpg', 'assets/images/case-still-moving-turn.jpg', 'assets/images/case-still-moving-opening.jpg'],
      frames: [
        { img: 'assets/images/case-still-moving-hyderabad-sunset.jpg', title: 'FRAME 01 / THE DEPARTURE', time: '00:04', loc: 'HYDERABAD' },
        { img: 'assets/images/case-still-moving-pause.jpg', title: 'FRAME 02 / THE PAUSE', time: '00:12', loc: '' },
        { img: 'assets/images/service-case-study-road.jpg', title: 'FRAME 03 / THE DECISION', time: '00:20', loc: '' },
        { img: 'assets/images/case-still-moving-turn.jpg', title: 'FRAME 04 / THE TURN', time: '00:28', loc: '' },
        { img: 'assets/images/case-still-moving-opening.jpg', title: 'FRAME 05 / THE OPENING', time: '00:32', loc: '' },
        { img: 'assets/images/case-still-moving-hyderabad-day.jpg', title: 'FRAME 06 / WHAT COMES NEXT', time: '00:42', loc: 'HYDERABAD' }
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
      prevSlug: 'wedding-story',
      nextSlug: 'after-dark'
    },
    'after-dark': {
      slug: 'after-dark',
      indexStr: '02 / 12',
      client: 'VOLTARC',
      title: 'NIGHT BELONGS TO US.',
      titleHtml: '<span class="cs-hero__title-line"><span>NIGHT</span></span><span class="cs-hero__title-line"><span>BELONGS TO US.</span></span>',
      category: 'COMMERCIAL',
      year: '2026',
      runtime: '00:45',
      location: 'BENGALURU / INDIA',
      heroVideo: 'assets/videos/8089116-uhd_4096_2160_25fps.mp4',
      poster: 'assets/images/case-after-dark-poster.jpg',
      summary: 'A high-contrast nocturnal commercial capturing silent velocity and urban night travel for Voltarc electric scooters.',
      services: 'CREATIVE DIRECTION · CINEMATOGRAPHY · EDITING · COLOR GRADING · SOUND DESIGN',
      askList: 'TV COMMERCIAL · DIGITAL LAUNCH · STILLS LIBRARY',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Reframe urban<br>night travel.',
      challengeBody: 'Voltarc wanted to position electric mobility not just as an eco-conscious alternative, but as a thrilling, quiet nocturnal experience through Bengaluru\'s sleeping streets.',
      challengeImage: 'assets/images/case-after-dark-apartments.jpg',
      ideaTitle: 'Silence<br>in motion.<br>Neon shadows.',
      ideaBody: 'Filmed in high contrast low-light digital cinematography, capturing neon reflections and quiet velocity across urban arteries as the city sleeps.',
      ideaFrames: ['assets/images/case-after-dark-dusk.jpg', 'assets/images/case-after-dark-towersilhouette.jpg', 'assets/images/case-after-dark-challenge.jpg'],
      frames: [
        { img: 'assets/images/case-after-dark-poster.jpg', title: 'FRAME 01 / THE CITY AT REST', time: '00:05', loc: 'BENGALURU' },
        { img: 'assets/images/case-after-dark-dusk.jpg', title: 'FRAME 02 / DUSK HANDOVER', time: '00:14', loc: '' },
        { img: 'assets/images/case-after-dark-towersilhouette.jpg', title: 'FRAME 03 / THE SIGNAL', time: '00:22', loc: '' },
        { img: 'assets/images/case-after-dark-raincyclist.jpg', title: 'FRAME 04 / RAIN & REFLECTION', time: '00:30', loc: '' },
        { img: 'assets/images/case-after-dark-challenge.jpg', title: 'FRAME 05 / SILENT VELOCITY', time: '00:38', loc: '' },
        { img: 'assets/images/case-after-dark-drone.jpg', title: 'FRAME 06 / BEHIND THE LENS', time: '00:44', loc: 'BENGALURU' }
      ],
      credits: {
        client: 'VOLTARC',
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
      indexStr: '03 / 12',
      client: 'VILASA PALACES',
      title: 'TIME STANDS STILL.',
      titleHtml: '<span class="cs-hero__title-line"><span>TIME</span></span><span class="cs-hero__title-line"><span>STANDS STILL.</span></span>',
      category: 'HOSPITALITY FILM',
      year: '2025',
      runtime: '01:15',
      location: 'UDAIPUR / INDIA',
      heroVideo: 'assets/videos/16201893_1080_1920_60fps.mp4',
      poster: 'assets/images/case-old-worlds-twilight.jpg',
      summary: 'A sensory narrative celebrating heritage craft, architectural grandeur, and quiet luxury at Vilasa Palaces, Udaipur.',
      services: 'CONCEPT · CINEMATOGRAPHY · ART DIRECTION · EDIT · COLOR',
      askList: 'BRAND HERITAGE FILM · SOCIAL SUITE · EDITORIAL',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Capture timeless<br>palace luxury.',
      challengeBody: 'Vilasa Palaces required a sensory narrative highlighting heritage craft, architectural grandeur, and hyper-personalised hospitality without relying on conventional voiceovers.',
      challengeImage: 'assets/images/case-old-worlds-day.jpg',
      ideaTitle: 'Sanctuary<br>of quiet elegance.<br>Palace shadows.',
      ideaBody: 'Natural light studies focusing on textures, water reflections, and tactile details that evoke calmness and historic splendor across regal archways.',
      ideaFrames: ['assets/images/case-old-worlds-hills.jpg', 'assets/images/case-old-worlds-archway.jpg', 'assets/images/case-old-worlds-challenge.jpg'],
      frames: [
        { img: 'assets/images/case-old-worlds-twilight.jpg', title: 'FRAME 01 / THE ARRIVAL', time: '00:08', loc: 'UDAIPUR' },
        { img: 'assets/images/case-old-worlds-hills.jpg', title: 'FRAME 02 / THE COURTYARD', time: '00:20', loc: '' },
        { img: 'assets/images/case-old-worlds-day.jpg', title: 'FRAME 03 / THE ARCHWAY', time: '00:35', loc: '' },
        { img: 'assets/images/case-old-worlds-majestic.jpg', title: 'FRAME 04 / WATER MIRROR', time: '00:48', loc: '' },
        { img: 'assets/images/case-old-worlds-archway.jpg', title: 'FRAME 05 / MARBLE RHYTHM', time: '01:02', loc: '' },
        { img: 'assets/images/case-old-worlds-challenge.jpg', title: 'FRAME 06 / GOLDEN HOUR', time: '01:12', loc: 'UDAIPUR' }
      ],
      credits: {
        client: 'VILASA PALACES',
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
      indexStr: '04 / 12',
      client: 'TRAILBORN',
      title: 'INTO THE BORDERLANDS.',
      titleHtml: '<span class="cs-hero__title-line"><span>INTO THE</span></span><span class="cs-hero__title-line"><span>BORDERLANDS.</span></span>',
      category: 'DOCUMENTARY',
      year: '2025',
      runtime: '02:30',
      location: 'MEGHALAYA / INDIA',
      heroVideo: 'assets/videos/13434213_3840_2160_24fps.mp4',
      poster: 'assets/images/case-field-notes-poster.jpg',
      summary: 'An unscripted expedition documentary following trail guides through wet forests and living root bridges in Eastern India, for Trailborn outdoor gear.',
      services: 'FIELD DIRECTION · DOCUMENTARY CINEMATOGRAPHY · EDITING · SOUND DESIGN',
      askList: 'DOCUMENTARY FEATURETTE · TRAILER · EXPEDITION STILLS',
      roleSummary: 'DIRECTION + FIELD PRODUCTION + POST',
      challengeTitle: 'Test human<br>resilience.',
      challengeBody: 'Trailborn needed an unscripted documentary exploring remote trail guides navigating torrential rain and rugged terrain in Eastern India.',
      challengeImage: 'assets/images/case-field-notes-challenge.jpg',
      ideaTitle: 'Raw elements.<br>Unbroken paths.<br>True wilderness.',
      ideaBody: 'Handheld 16mm-style digital textures capturing humidity, mist, and authentic human stamina under extreme natural conditions.',
      ideaFrames: ['assets/images/case-field-notes-shillong.jpg', 'assets/images/case-field-notes-waterfall2.jpg', 'assets/images/case-field-notes-ancient.jpg'],
      frames: [
        { img: 'assets/images/case-field-notes-poster.jpg', title: 'FRAME 01 / MIST RIDGE', time: '00:15', loc: 'MEGHALAYA' },
        { img: 'assets/images/case-field-notes-shillong.jpg', title: 'FRAME 02 / LIVING BRIDGE', time: '00:45', loc: '' },
        { img: 'assets/images/case-field-notes-riwai.jpg', title: 'FRAME 03 / RIWAI CROSSING', time: '01:10', loc: '' },
        { img: 'assets/images/case-field-notes-waterfall1.jpg', title: 'FRAME 04 / RAIN CANOPY', time: '01:40', loc: '' },
        { img: 'assets/images/case-field-notes-waterfall2.jpg', title: 'FRAME 05 / CHERRAPUNJI FALLS', time: '02:05', loc: '' },
        { img: 'assets/images/case-field-notes-ancient.jpg', title: 'FRAME 06 / ANCIENT ROOTS', time: '02:25', loc: 'MEGHALAYA' }
      ],
      credits: {
        client: 'TRAILBORN',
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
      indexStr: '05 / 12',
      client: 'SAMVAAD STUDIOS',
      title: 'STUDIO CONVERSATIONS.',
      titleHtml: '<span class="cs-hero__title-line"><span>STUDIO</span></span><span class="cs-hero__title-line"><span>CONVERSATIONS.</span></span>',
      category: 'PODCAST SERIES',
      year: '2025',
      runtime: '45:00',
      location: 'HYDERABAD / INDIA',
      heroVideo: 'assets/videos/podcast.mp4',
      poster: 'assets/images/case-new-forms-poster.jpg',
      summary: 'An intimate studio podcast series exploring deep creative conversations, brand journeys, and visionary insights for Samvaad Studios.',
      services: 'CREATIVE DIRECTION · MULTI-CAM PRODUCTION · EDIT · AUDIO MASTERING · GRAPHICS',
      askList: 'PODCAST SERIES · EPISODIC CUTS · REELS & SHORTS',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Bring authentic conversation<br>to life.',
      challengeBody: 'Samvaad Studios wanted to move beyond traditional corporate videos and launch a podcast series that captures authentic dialogues, deep human stories, and thought leadership in a visually immersive studio setup.',
      challengeImage: 'assets/images/case-new-forms-setup.jpg',
      ideaTitle: 'Multi-camera warmth<br>& studio clarity.',
      ideaBody: 'Combining warm cinematic studio lighting, multi-angle camera coverage, and pristine audio production to create an engaging visual podcast experience.',
      ideaFrames: ['assets/images/case-new-forms-mic.jpg', 'assets/images/case-new-forms-closeup.jpg', 'assets/images/case-new-forms-hosts.jpg'],
      frames: [
        { img: 'assets/images/case-new-forms-poster.jpg', title: 'FRAME 01 / STUDIO SETUP', time: '02:15', loc: 'HYDERABAD' },
        { img: 'assets/images/case-new-forms-mic.jpg', title: 'FRAME 02 / MIC CHECK', time: '14:20', loc: '' },
        { img: 'assets/images/case-new-forms-closeup.jpg', title: 'FRAME 03 / DIALOGUE CUT', time: '28:45', loc: '' },
        { img: 'assets/images/case-new-forms-hosts.jpg', title: 'FRAME 04 / GUEST INSIGHT', time: '35:10', loc: '' },
        { img: 'assets/images/case-new-forms-twowomen.jpg', title: 'FRAME 05 / KEY TAKEAWAY', time: '41:05', loc: '' },
        { img: 'assets/images/case-new-forms-challenge.jpg', title: 'FRAME 06 / CLOSING MOMENT', time: '44:30', loc: 'HYDERABAD' }
      ],
      credits: {
        client: 'SAMVAAD STUDIOS',
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
      nextSlug: 'dhaaga'
    },
    'dhaaga': {
      slug: 'dhaaga',
      indexStr: '06 / 12',
      client: 'DHAAGA',
      title: 'THREADS OF NOW.',
      titleHtml: '<span class="cs-hero__title-line"><span>THREADS</span></span><span class="cs-hero__title-line"><span>OF NOW.</span></span>',
      category: 'DIGITAL CONTENT',
      year: '2026',
      runtime: '00:30',
      location: 'JAIPUR / INDIA',
      heroVideo: 'assets/videos/kode-landing.mp4',
      poster: 'assets/images/case-dhaaga-model1.jpg',
      summary: 'A vertical-first content system for Dhaaga, turning Jaipur\'s block-print heritage into reels-ready fashion stories.',
      services: 'CONCEPT DEVELOPMENT · SCRIPT · PRODUCTION · EDIT · COLOUR · SOUND',
      askList: 'REELS SERIES · SHORTS · STILLS LIBRARY',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Make heritage<br>feel like now.',
      challengeBody: 'Dhaaga needed its centuries-old block-printing craft to read as contemporary fashion content, built for scroll speed without losing the hand behind every print.',
      challengeImage: 'assets/images/case-dhaaga-challenge.jpg',
      ideaTitle: 'One print.<br>A hundred retakes.<br>Every thread visible.',
      ideaBody: 'The film stays close: hands, dye, wood, cloth. Each vertical cut pairs the artisan\'s process with the finished look, so the product story and the maker\'s story play as one.',
      ideaFrames: ['assets/images/case-dhaaga-model2.jpg', 'assets/images/case-dhaaga-textiles.jpg', 'assets/images/case-dhaaga-painting.jpg'],
      frames: [
        { img: 'assets/images/case-dhaaga-model1.jpg', title: 'FRAME 01 / THE LOOK', time: '00:03', loc: 'JAIPUR' },
        { img: 'assets/images/case-dhaaga-model2.jpg', title: 'FRAME 02 / THE DRAPE', time: '00:09', loc: '' },
        { img: 'assets/images/case-dhaaga-poster.jpg', title: 'FRAME 03 / THE STAMP', time: '00:14', loc: '' },
        { img: 'assets/images/case-dhaaga-blocks.jpg', title: 'FRAME 04 / THE CARVER', time: '00:19', loc: '' },
        { img: 'assets/images/case-dhaaga-textiles.jpg', title: 'FRAME 05 / THE PALETTE', time: '00:24', loc: '' },
        { img: 'assets/images/case-dhaaga-painting.jpg', title: 'FRAME 06 / THE DETAIL', time: '00:29', loc: 'JAIPUR' }
      ],
      credits: {
        client: 'DHAAGA',
        production: 'ENVIZON FILMS',
        director: 'ANANYA RAO',
        dp: 'IRA MENON',
        producer: 'MIRA SHAH',
        editor: 'ROHAN MEHTA',
        colourist: 'DEV SEN',
        sound: 'VIKRAM MALHOTRA',
        location: 'JAIPUR / INDIA'
      },
      prevSlug: 'new-forms',
      nextSlug: 'aroha-wellness'
    },
    'aroha-wellness': {
      slug: 'aroha-wellness',
      indexStr: '07 / 12',
      client: 'AROHA WELLNESS',
      title: 'DRINK THE DAY IN.',
      titleHtml: '<span class="cs-hero__title-line"><span>DRINK THE</span></span><span class="cs-hero__title-line"><span>DAY IN.</span></span>',
      category: 'COMMERCIAL',
      year: '2026',
      runtime: '00:30',
      location: 'MUMBAI / INDIA',
      heroVideo: 'assets/videos/8089116-uhd_4096_2160_25fps.mp4',
      poster: 'assets/images/case-aroha-poster.jpg',
      summary: 'A sun-lit product commercial for Aroha Wellness, turning everyday Indian ingredients into a modern beverage line.',
      services: 'CREATIVE DIRECTION · FOOD STYLING · CINEMATOGRAPHY · EDIT · COLOUR GRADING',
      askList: 'TV COMMERCIAL · DIGITAL CUTDOWNS · STILLS LIBRARY',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Make wellness<br>taste like home.',
      challengeBody: 'Aroha Wellness didn\'t want another clean-label ad full of studio gloss. The brief was to shoot ingredients — amla, tulsi, mint — the way a home kitchen actually sees them.',
      challengeImage: 'assets/images/case-aroha-lassi.jpg',
      ideaTitle: 'Real ingredients.<br>Real light.<br>No filter needed.',
      ideaBody: 'Shot entirely in natural daylight with unstyled produce, the film treats each recipe like a small ritual, letting texture and steam do what a voiceover usually has to.',
      ideaFrames: ['assets/images/case-aroha-tulsi.jpg', 'assets/images/case-aroha-mango.jpg', 'assets/images/case-aroha-sparkling.jpg'],
      frames: [
        { img: 'assets/images/case-aroha-poster.jpg', title: 'FRAME 01 / THE INGREDIENT', time: '00:03', loc: 'MUMBAI' },
        { img: 'assets/images/case-aroha-tulsi.jpg', title: 'FRAME 02 / THE INFUSION', time: '00:09', loc: '' },
        { img: 'assets/images/case-aroha-lassi.jpg', title: 'FRAME 03 / THE HERITAGE', time: '00:14', loc: '' },
        { img: 'assets/images/case-aroha-mango.jpg', title: 'FRAME 04 / THE COOLER', time: '00:19', loc: '' },
        { img: 'assets/images/case-aroha-sparkling.jpg', title: 'FRAME 05 / THE FIZZ', time: '00:24', loc: '' },
        { img: 'assets/images/case-aroha-lemonwater.jpg', title: 'FRAME 06 / THE POUR', time: '00:29', loc: 'MUMBAI' }
      ],
      credits: {
        client: 'AROHA WELLNESS',
        production: 'ENVIZON FILMS',
        director: 'DEV SEN',
        dp: 'ANANYA RAO',
        producer: 'IRA MENON',
        editor: 'MIRA SHAH',
        colourist: 'ROHAN MEHTA',
        sound: 'AUDIO MONKS',
        location: 'MUMBAI / INDIA'
      },
      prevSlug: 'dhaaga',
      nextSlug: 'lakshya-learning'
    },
    'lakshya-learning': {
      slug: 'lakshya-learning',
      indexStr: '08 / 12',
      client: 'LAKSHYA LEARNING',
      title: 'EVERY CHILD, A HEADSTART.',
      titleHtml: '<span class="cs-hero__title-line"><span>EVERY CHILD,</span></span><span class="cs-hero__title-line"><span>A HEADSTART.</span></span>',
      category: 'BRAND FILM',
      year: '2026',
      runtime: '00:50',
      location: 'NEW DELHI / INDIA',
      heroVideo: 'assets/videos/13434213_3840_2160_24fps.mp4',
      poster: 'assets/images/case-lakshya-poster.jpg',
      summary: 'A brand film for Lakshya Learning about what access to a good teacher actually changes in a child\'s life.',
      services: 'CONCEPT DEVELOPMENT · SCRIPT · PRODUCTION · EDIT · COLOUR · SOUND',
      askList: 'BRAND FILM · CAMPAIGN CUTS · SOCIAL EDITS',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Make learning<br>feel like momentum.',
      challengeBody: 'Lakshya Learning needed to talk about ed-tech without sounding like a pitch deck. The real story was simpler: what changes when a child gets one more chance to be seen.',
      challengeImage: 'assets/images/case-lakshya-challenge.jpg',
      ideaTitle: 'One classroom.<br>A hundred versions<br>of the same hope.',
      ideaBody: 'The film moves between a village school and a city library, following different children through the same quiet moment: someone finally explaining a thing so it makes sense.',
      ideaFrames: ['assets/images/case-lakshya-classroom.jpg', 'assets/images/case-lakshya-homework.jpg', 'assets/images/case-lakshya-librarystudy.jpg'],
      frames: [
        { img: 'assets/images/case-lakshya-poster.jpg', title: 'FRAME 01 / THE FOCUS', time: '00:05', loc: 'NEW DELHI' },
        { img: 'assets/images/case-lakshya-classroom.jpg', title: 'FRAME 02 / THE CLASSROOM', time: '00:14', loc: '' },
        { img: 'assets/images/case-lakshya-uniforms.jpg', title: 'FRAME 03 / THE NOTEBOOK', time: '00:22', loc: '' },
        { img: 'assets/images/case-lakshya-homework.jpg', title: 'FRAME 04 / THE PARTNERSHIP', time: '00:32', loc: '' },
        { img: 'assets/images/case-lakshya-librarystudy.jpg', title: 'FRAME 05 / THE MENTOR', time: '00:41', loc: '' },
        { img: 'assets/images/case-lakshya-challenge.jpg', title: 'FRAME 06 / THE SLATE', time: '00:48', loc: 'NEW DELHI' }
      ],
      credits: {
        client: 'LAKSHYA LEARNING',
        production: 'ENVIZON FILMS',
        director: 'MIRA SHAH',
        dp: 'ROHAN MEHTA',
        producer: 'ANANYA RAO',
        editor: 'IRA MENON',
        colourist: 'DEV SEN',
        sound: 'VIKRAM MALHOTRA',
        location: 'NEW DELHI / INDIA'
      },
      prevSlug: 'aroha-wellness',
      nextSlug: 'suvarna'
    },
    'suvarna': {
      slug: 'suvarna',
      indexStr: '09 / 12',
      client: 'SUVARNA',
      title: 'HEIRLOOMS, MADE TODAY.',
      titleHtml: '<span class="cs-hero__title-line"><span>HEIRLOOMS,</span></span><span class="cs-hero__title-line"><span>MADE TODAY.</span></span>',
      category: 'COMMERCIAL',
      year: '2026',
      runtime: '00:35',
      location: 'MUMBAI / INDIA',
      heroVideo: 'assets/videos/16201893_1080_1920_60fps.mp4',
      poster: 'assets/images/case-suvarna-poster.jpg',
      summary: 'A macro-led jewellery commercial for Suvarna, treating each piece like a small, wearable heirloom.',
      services: 'CREATIVE DIRECTION · MACRO CINEMATOGRAPHY · EDIT · COLOUR GRADING',
      askList: 'TV COMMERCIAL · SOCIAL CUTS · STILLS LIBRARY',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Make gold<br>feel personal.',
      challengeBody: 'Suvarna\'s pieces are made to be worn for decades, not just a wedding day. The film needed to sell craftsmanship and permanence, not just carats.',
      challengeImage: 'assets/images/case-suvarna-challenge.jpg',
      ideaTitle: 'Every piece,<br>a close read.<br>Nothing rushed.',
      ideaBody: 'Shot entirely in macro, the film lingers on filigree, clasps and stones long enough that the craft becomes the story, not the backdrop to one.',
      ideaFrames: ['assets/images/case-suvarna-jhumka.jpg', 'assets/images/case-suvarna-pendant.jpg', 'assets/images/case-suvarna-mangalsutra.jpg'],
      frames: [
        { img: 'assets/images/case-suvarna-poster.jpg', title: 'FRAME 01 / THE TROUSSEAU', time: '00:04', loc: 'MUMBAI' },
        { img: 'assets/images/case-suvarna-jhumka.jpg', title: 'FRAME 02 / THE JHUMKA', time: '00:10', loc: '' },
        { img: 'assets/images/case-suvarna-pendant.jpg', title: 'FRAME 03 / THE PENDANT', time: '00:16', loc: '' },
        { img: 'assets/images/case-suvarna-mangalsutra.jpg', title: 'FRAME 04 / THE MANGALSUTRA', time: '00:22', loc: '' },
        { img: 'assets/images/case-suvarna-earrings.jpg', title: 'FRAME 05 / THE PEACOCK', time: '00:28', loc: '' },
        { img: 'assets/images/case-suvarna-bangles.png', title: 'FRAME 06 / THE BANGLE', time: '00:33', loc: 'MUMBAI' }
      ],
      credits: {
        client: 'SUVARNA',
        production: 'ENVIZON FILMS',
        director: 'IRA MENON',
        dp: 'MIRA SHAH',
        producer: 'ROHAN MEHTA',
        editor: 'DEV SEN',
        colourist: 'ANANYA RAO',
        sound: 'VIKRAM MALHOTRA',
        location: 'MUMBAI / INDIA'
      },
      prevSlug: 'lakshya-learning',
      nextSlug: 'nexora'
    },
    'nexora': {
      slug: 'nexora',
      indexStr: '10 / 12',
      client: 'NEXORA TECHNOLOGIES',
      title: 'BUILT BY THE PEOPLE IN IT.',
      titleHtml: '<span class="cs-hero__title-line"><span>BUILT BY THE</span></span><span class="cs-hero__title-line"><span>PEOPLE IN IT.</span></span>',
      category: 'CORPORATE FILM',
      year: '2025',
      runtime: '00:55',
      location: 'PUNE / INDIA',
      heroVideo: 'assets/videos/kode-landing.mp4',
      poster: 'assets/images/case-nexora-poster.jpg',
      summary: 'A corporate film for Nexora Technologies that puts the engineers ahead of the org chart.',
      services: 'CREATIVE DIRECTION · ARCHITECTURAL CINEMATOGRAPHY · EDIT · MOTION GRAPHICS',
      askList: 'COMPANY FILM · LEADERSHIP CUTS · EMPLOYER BRANDING',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Make software<br>feel like people.',
      challengeBody: 'Nexora Technologies wanted a company film that didn\'t lean on stock footage of server rooms. The ask was to show the actual floor and the actual builders, without it turning into a recruitment brochure.',
      challengeImage: 'assets/images/case-nexora-openoffice.jpg',
      ideaTitle: 'One floor.<br>Every function.<br>The same energy.',
      ideaBody: 'The film moves through the Pune campus at a walking pace, letting real workstations, real meetings and real downtime stand in for the mission statement.',
      ideaFrames: ['assets/images/case-nexora-ergonomic.jpg', 'assets/images/case-nexora-desks.jpg', 'assets/images/case-nexora-laptop.jpg'],
      frames: [
        { img: 'assets/images/case-nexora-poster.jpg', title: 'FRAME 01 / THE ATRIUM', time: '00:06', loc: 'PUNE' },
        { img: 'assets/images/case-nexora-openoffice.jpg', title: 'FRAME 02 / THE FLOOR', time: '00:16', loc: '' },
        { img: 'assets/images/case-nexora-ergonomic.jpg', title: 'FRAME 03 / THE LOUNGE', time: '00:27', loc: '' },
        { img: 'assets/images/case-nexora-desks.jpg', title: 'FRAME 04 / THE ROW', time: '00:37', loc: '' },
        { img: 'assets/images/case-nexora-laptop.jpg', title: 'FRAME 05 / THE ENGINEER', time: '00:46', loc: '' },
        { img: 'assets/images/service-corporate-films.jpg', title: 'FRAME 06 / THE MEETING', time: '00:53', loc: 'PUNE' }
      ],
      credits: {
        client: 'NEXORA TECHNOLOGIES',
        production: 'ENVIZON FILMS',
        director: 'ROHAN MEHTA',
        dp: 'DEV SEN',
        producer: 'MIRA SHAH',
        editor: 'ANANYA RAO',
        colourist: 'IRA MENON',
        sound: 'VIKRAM MALHOTRA',
        location: 'PUNE / INDIA'
      },
      prevSlug: 'suvarna',
      nextSlug: 'yawatra'
    },
    'yawatra': {
      slug: 'yawatra',
      indexStr: '11 / 12',
      client: 'YAWATRA',
      title: 'SLOW DOWN TO ARRIVE.',
      titleHtml: '<span class="cs-hero__title-line"><span>SLOW DOWN</span></span><span class="cs-hero__title-line"><span>TO ARRIVE.</span></span>',
      category: 'TRAVEL FILM',
      year: '2026',
      runtime: '01:05',
      location: 'ALLEPPEY / INDIA',
      heroVideo: 'assets/videos/13434213_3840_2160_24fps.mp4',
      poster: 'assets/images/case-yawatra-poster.jpg',
      summary: 'A travel film for Yawatra following one houseboat through Kerala\'s backwaters, built to sell a pace rather than a destination.',
      services: 'CONCEPT · CINEMATOGRAPHY · DRONE · EDIT · COLOUR',
      askList: 'BRAND FILM · APP LAUNCH CUTS · SOCIAL SUITE',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Sell a pace,<br>not a place.',
      challengeBody: 'Yawatra needed a film that didn\'t just list backwater destinations. The task was to make stillness itself the selling point, for travellers used to itineraries packed hour to hour.',
      challengeImage: 'assets/images/case-yawatra-challenge.jpg',
      ideaTitle: 'One houseboat.<br>No itinerary.<br>Everywhere is the view.',
      ideaBody: 'The film follows a single houseboat from morning departure to evening mooring, with the palms, water lilies and passing boats doing the work a script usually would.',
      ideaFrames: ['assets/images/case-yawatra-alappuzha.jpg', 'assets/images/case-yawatra-vembanad.jpg', 'assets/images/case-yawatra-palms.jpg'],
      frames: [
        { img: 'assets/images/case-yawatra-poster.jpg', title: 'FRAME 01 / THE DEPARTURE', time: '00:08', loc: 'ALLEPPEY' },
        { img: 'assets/images/case-yawatra-alappuzha.jpg', title: 'FRAME 02 / THE PASSING BOAT', time: '00:22', loc: '' },
        { img: 'assets/images/case-yawatra-traditional.jpg', title: 'FRAME 03 / THE MONSOON LIGHT', time: '00:38', loc: '' },
        { img: 'assets/images/case-yawatra-vembanad.jpg', title: 'FRAME 04 / THE LILY FIELD', time: '00:52', loc: '' },
        { img: 'assets/images/case-yawatra-speedboat.jpg', title: 'FRAME 05 / THE OPEN WATER', time: '00:58', loc: '' },
        { img: 'assets/images/case-yawatra-palms.jpg', title: 'FRAME 06 / THE MOORING', time: '01:03', loc: 'ALLEPPEY' }
      ],
      credits: {
        client: 'YAWATRA',
        production: 'ENVIZON FILMS',
        director: 'DEV SEN',
        dp: 'ROHAN MEHTA',
        producer: 'ANANYA RAO',
        editor: 'IRA MENON',
        colourist: 'MIRA SHAH',
        sound: 'FIELD AUDIO STUDIOS',
        location: 'ALLEPPEY / INDIA'
      },
      prevSlug: 'nexora',
      nextSlug: 'wedding-story'
    },
    'wedding-story': {
      slug: 'wedding-story',
      indexStr: '12 / 12',
      client: 'WEDDING STORY',
      title: 'FOREVER BEGINS TODAY.',
      titleHtml: '<span class="cs-hero__title-line"><span>FOREVER</span></span><span class="cs-hero__title-line"><span>BEGINS TODAY.</span></span>',
      category: 'WEDDING FILM',
      year: '2026',
      runtime: '02:15',
      location: 'UDAIPUR / INDIA',
      heroVideo: 'assets/videos/wedding shoot.mp4',
      poster: 'assets/images/case-old-worlds-challenge.jpg',
      summary: 'A breathtaking cinematic wedding story capturing timeless emotions, intimate vows, and grand celebration at a Udaipur palace.',
      services: 'CREATIVE DIRECTION · CINEMATOGRAPHY · EDIT · COLOUR GRADING · SOUND DESIGN',
      askList: 'HERO WEDDING FILM · TEASER CUT · HIGHLIGHTS REEL',
      roleSummary: 'CREATIVE + PRODUCTION + POST',
      challengeTitle: 'Capture genuine<br>unscripted emotion.',
      challengeBody: 'Creating a wedding film that balances grand architectural celebration with tender, authentic human moments.',
      challengeImage: 'assets/images/case-old-worlds-day.jpg',
      ideaTitle: 'Cinematic light<br>& timeless rhythm.',
      ideaBody: 'Soft natural lighting, fluid movement, and evocative soundscapes to preserve raw emotion.',
      ideaFrames: ['assets/images/case-old-worlds-twilight.jpg', 'assets/images/case-old-worlds-archway.jpg', 'assets/images/case-old-worlds-majestic.jpg'],
      frames: [
        { img: 'assets/images/case-old-worlds-challenge.jpg', title: 'FRAME 01 / THE ARRIVAL', time: '00:15', loc: 'UDAIPUR' },
        { img: 'assets/images/case-old-worlds-archway.jpg', title: 'FRAME 02 / THE VOWS', time: '00:45', loc: '' },
        { img: 'assets/images/case-old-worlds-hills.jpg', title: 'FRAME 03 / THE COURTYARD', time: '01:10', loc: '' },
        { img: 'assets/images/case-old-worlds-majestic.jpg', title: 'FRAME 04 / THE RECEPTION', time: '01:35', loc: '' },
        { img: 'assets/images/case-old-worlds-day.jpg', title: 'FRAME 05 / THE CELEBRATION', time: '01:55', loc: '' },
        { img: 'assets/images/case-old-worlds-twilight.jpg', title: 'FRAME 06 / THE LAST DANCE', time: '02:10', loc: 'UDAIPUR' }
      ],
      credits: {
        client: 'PRIVATE WEDDING',
        production: 'ENVIZON FILMS',
        director: 'MIRA SHAH',
        dp: 'DEV SEN',
        producer: 'ROHAN MEHTA',
        editor: 'ANANYA RAO',
        colourist: 'IRA MENON',
        sound: 'VIKRAM MALHOTRA',
        location: 'UDAIPUR / INDIA'
      },
      prevSlug: 'yawatra',
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
