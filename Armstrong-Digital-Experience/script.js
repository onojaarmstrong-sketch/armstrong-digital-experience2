const socialLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/armstrong-onoja-34a217286/" },
  { label: "X / Twitter", url: "https://x.com/amstrongonojaa" },
  { label: "Instagram · Stronger Together Foundation", url: "https://www.instagram.com/stron_gertogetherfoundation/" },
  { label: "TikTok · @onojaarmstrong", url: "https://www.tiktok.com/@onojaarmstrong" },
];

const articles = [
  {
    slug: "digital-evidence-nigerian-courts",
    category: "Law & Society",
    title: "Screenshots in the Courtroom: Digital Evidence and Section 84",
    summary: "Why a message or web page is not automatically proof, and how Nigerian evidence law approaches computer-generated records.",
    tags: ["Nigeria", "Evidence", "Litigation"],
    body: `
      <p>Messages, emails, bank alerts and social-media posts can all become relevant in a dispute. A screenshot may be useful, but a picture of a screen does not by itself establish who created the content, whether it has changed, or how it was produced.</p>
      <h2>Start with the record and its context</h2>
      <p>When preserving a digital record, keep the original device or file where possible, note how and when a copy was made, and avoid editing the material. Context matters: a partial screenshot can leave out the surrounding conversation or information needed to understand it.</p>
      <h2>What Section 84 is about</h2>
      <p>Section 84 of Nigeria's Evidence Act addresses the admissibility of statements produced by computers and sets conditions concerning the computer and the way the record was created. The exact requirements depend on the document and the current statutory text; a court decides admissibility in the context of the evidence before it.</p>
      <h2>A practical lesson</h2>
      <p>Do not wait until a dispute to think about records. Keep reliable backups, document your process, and get legal advice before relying on digital material in a real case. This overview is educational, not a checklist for court.</p>
      <aside class="article-note"><strong>Keep learning:</strong> Check the current Evidence Act and any amendments, then verify relevant authorities in reliable law reports. This article is general commentary, not legal advice.</aside>
    `,
    references: [
      { label: "Evidence Act 2011 — Law Nigeria", url: "https://www.lawnigeria.com/LawsoftheFederation/EVIDENCE-ACT,-2011.html" },
      { label: "Search for Kubor v. Dickson (2013)", url: "https://www.google.com/search?q=Kubor+v+Dickson+2013+4+NWLR+Pt+1345+534" },
    ],
  },
  {
    slug: "data-privacy-nigeria-ndpa",
    category: "Law & Society",
    title: "Your Data, Their Database: A Guide to Nigeria's Data Protection Act",
    summary: "A plain-language introduction to personal data, responsible collection, and the Nigeria Data Protection Act 2023.",
    tags: ["Privacy", "Data protection", "Nigeria"],
    body: `
      <p>Signing up for a service, opening an account or ordering a meal can involve sharing personal information. Data-protection rules help shape what organisations should do with that information and what people can ask about its use.</p>
      <h2>Why the 2023 Act matters</h2>
      <p>The Nigeria Data Protection Act 2023 established the Nigeria Data Protection Commission and provides a statutory framework for processing personal data. Its requirements depend on the circumstances, the organisation and the data involved, so a short overview cannot replace the Act itself.</p>
      <h2>Good questions to ask</h2>
      <ul><li>What information is actually needed for this service?</li><li>Why is it being collected, and how will it be used?</li><li>Who can access it, and how is it protected?</li><li>How can a person ask about or exercise rights over their data?</li></ul>
      <h2>Privacy starts in product design</h2>
      <p>Clear notices, limited collection, sensible access controls and an understandable way to contact the organisation are practical starting points. For a real compliance decision, check current guidance from the Commission and consult a qualified professional.</p>
      <aside class="article-note"><strong>Note:</strong> This is educational commentary, not legal advice. Check the current Act and official guidance before acting.</aside>
    `,
    references: [
      { label: "Nigeria Data Protection Commission", url: "https://ndpc.gov.ng/" },
      { label: "Nigeria Data Protection Act 2023 — NDPC", url: "https://ndpc.gov.ng/Files/Nigeria_Data_Protection_Act_2023.pdf" },
    ],
  },
  {
    slug: "ai-legal-research-assistant-not-authority",
    category: "Artificial Intelligence",
    title: "AI in Legal Research: A Useful Assistant, an Unreliable Authority",
    summary: "Generative AI can help organise research, but plausible-looking case citations still need to be verified against reliable sources.",
    tags: ["AI", "Legal research", "Professional practice"],
    body: `
      <p>Generative AI can help summarise material, suggest search terms or organise a first draft. But fluent writing is not proof of accuracy. A system may produce a case name, quotation or citation that looks convincing and is still wrong.</p>
      <h2>Use it as a lead, not a source</h2>
      <p>Verify every statute, case, quotation and pinpoint reference against a primary or trusted legal source. Read the actual judgment and check that it supports the point being made. The professional still owns the research and the final work.</p>
      <h2>Protect confidential information</h2>
      <p>Before entering sensitive material into an AI service, understand its data practices and follow applicable duties and workplace policies. A convenient tool is not automatically appropriate for confidential facts.</p>
      <h2>A practical workflow</h2>
      <ol><li>Ask AI for research leads or an outline, not final authority.</li><li>Locate each source independently.</li><li>Read and verify the source in context.</li><li>Remove unsupported claims and protect confidential information.</li></ol>
      <aside class="article-note"><strong>Takeaway:</strong> Treat AI output as a starting point for human research and judgment, never as a substitute for checking the law.</aside>
    `,
    references: [
      { label: "Mata v. Avianca, Inc. — CourtListener docket", url: "https://www.courtlistener.com/docket/63107798/mata-v-avianca-inc/" },
    ],
  },
  {
    slug: "human-judgement-vs-machine-intelligence",
    category: "Artificial Intelligence",
    title: "Human Judgment and Machine Intelligence: Who Decides?",
    summary: "Automation can help with scale and patterns; people remain responsible for context, fairness and consequential decisions.",
    tags: ["AI", "Ethics", "Governance"],
    body: `
      <p>It is more useful to ask which parts of a decision a machine can support than to frame artificial intelligence as simply replacing people. Systems can help sort large volumes of information, but they can also reproduce gaps in their data or fail in unfamiliar situations.</p>
      <h2>Where automation can help</h2>
      <p>Well-tested systems may assist with repetitive tasks such as sorting documents or identifying items for further review. Their output should be understood in light of how the system was designed, what data it uses and where it is likely to fail.</p>
      <h2>People and accountability</h2>
      <p>For decisions affecting rights, opportunities or livelihoods, a responsible process needs a way to challenge errors, consider context and identify who is accountable. Human involvement only helps when reviewers have enough information, authority and time to intervene meaningfully.</p>
      <h2>Design for review</h2>
      <p>Good systems make their limits visible, test for uneven outcomes and give affected people a clear route to question decisions. The aim is not merely to add a human sign-off, but to design a process that can catch and correct mistakes.</p>
      <aside class="article-note"><strong>Takeaway:</strong> Automation should support accountable decision-making, not make responsibility disappear.</aside>
    `,
    references: [
      { label: "EU Artificial Intelligence Act — EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
      { label: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" },
    ],
  },
];

const technologyTerms = [
  ["HTML", "The markup that gives a web page its structure and meaning."],
  ["CSS", "The rules that control a page's layout, colours, type and responsive appearance."],
  ["JavaScript", "A programming language that makes web pages respond to people and data."],
  ["React", "A JavaScript library for building interfaces from reusable components."],
  ["Next.js", "A framework built around React for creating web applications and their routes."],
  ["API", "A defined way for software systems to request and exchange information."],
  ["Git", "A version-control tool that records changes so work can be reviewed and recovered."],
  ["Artificial intelligence", "A broad field of methods that enable computers to perform tasks such as prediction, generation or classification."],
];

function socialAnchor(item, extraClass = "") {
  return `<a class="${extraClass}" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}<span aria-hidden="true"> ↗</span></a>`;
}

function articleCard(article, compact = false) {
  return `<article class="story-card${compact ? " story-card-compact" : ""}">
    <p class="card-kicker">${article.category}</p>
    <h3><a href="/knowledge/${article.slug}">${article.title}</a></h3>
    <p>${article.summary}</p>
    <a class="arrow-link" href="/knowledge/${article.slug}">Read article <span aria-hidden="true">↗</span></a>
  </article>`;
}

function heroArt() {
  return `<div class="discipline-field" aria-label="Explore the three focus areas">
    <div class="field-ring field-ring-one"></div><div class="field-ring field-ring-two"></div>
    <div class="field-center"><span>A/</span><small>LAW × TECHNOLOGY<br />× INNOVATION</small></div>
    <button class="field-discipline field-law" type="button" data-focus="law" aria-pressed="false"><strong>Law</strong><span>Reasoning, justice, governance</span></button>
    <button class="field-discipline field-technology" type="button" data-focus="technology" aria-pressed="false"><strong>Technology</strong><span>React, Next.js, AI, products</span></button>
    <button class="field-discipline field-innovation" type="button" data-focus="innovation" aria-pressed="false"><strong>Innovation</strong><span>Building, ventures, impact</span></button>
    <p class="field-caption" id="field-caption" aria-live="polite">Move across the field — or focus a discipline.</p>
  </div>`;
}

function homePage() {
  return `<section class="hero page-width">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Law × Technology × Innovation</p>
        <h1>The future belongs to those who <em>connect ideas.</em></h1>
        <p class="intro">I’m Armstrong Onoja — a law graduate, entrepreneur and emerging technology enthusiast. I’m building at the intersection of legal reasoning, digital innovation and community impact.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/projects">Explore my work <span aria-hidden="true">↗</span></a>
          <a class="button button-outline" href="/knowledge">Visit the Knowledge Hub</a>
          <a class="text-link" href="/connect">Let’s connect</a>
        </div>
        <div class="hero-facts"><span>LL.B · Second Class Upper</span><span>Bingham University</span></div>
      </div>
      ${heroArt()}
    </section>
    <section class="section-block section-muted">
      <div class="page-width">
        <div class="section-heading">
          <div><p class="eyebrow">01 · The thinking behind the work</p><h2>Ideas into systems.<br />Knowledge into impact.</h2></div>
          <p class="section-aside">A developing practice in law, technology and leadership — learning openly and building with purpose.</p>
        </div>
        <div class="discipline-grid">
          <a class="discipline-card" href="/knowledge"><span class="roman">I</span><h3>The legal mind</h3><p>Legal reasoning, justice, governance and the changing practice of law in a digital society.</p><span class="arrow-link">Explore law & society ↗</span></a>
          <a class="discipline-card" href="/technology"><span class="roman">II</span><h3>The technology mind</h3><p>Web development, AI and digital systems — explained clearly while the learning continues.</p><span class="arrow-link">Visit the Technology Lab ↗</span></a>
          <a class="discipline-card" href="/projects"><span class="roman">III</span><h3>The builder</h3><p>Community initiatives and business ventures, shaped by service, leadership and practical work.</p><span class="arrow-link">See the projects ↗</span></a>
        </div>
      </div>
    </section>
    <section class="section-block page-width">
      <div class="section-heading">
        <div><p class="eyebrow">02 · The Knowledge Laboratory</p><h2>Writing to understand.<br />Learning to share.</h2></div>
        <a class="arrow-link" href="/knowledge">All knowledge articles ↗</a>
      </div>
      <div class="story-grid">${articles.map((item) => articleCard(item, true)).join("")}</div>
    </section>
    <section class="section-block section-muted">
      <div class="page-width">
        <div class="section-heading">
          <div><p class="eyebrow">03 · Projects & initiatives</p><h2>Things being built —<br />honestly labelled.</h2></div>
          <a class="arrow-link" href="/projects">Explore all projects ↗</a>
        </div>
        <div class="project-teasers">
          <a href="/projects#armstrong-platform" class="project-teaser"><span class="teaser-mark">A/</span><span><small>DIGITAL PRODUCT · IN PROGRESS</small><strong>ARMSTRONG Digital Platform</strong></span><span aria-hidden="true">↗</span></a>
          <a href="/projects#stronger-together" class="project-teaser"><span class="teaser-mark">ST</span><span><small>COMMUNITY INITIATIVE</small><strong>Stronger Together Foundation</strong></span><span aria-hidden="true">↗</span></a>
          <a href="/projects#extacy-lounge" class="project-teaser"><span class="teaser-mark">EX</span><span><small>BUSINESS VENTURE</small><strong>Extacy Lounge</strong></span><span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
    <section class="brief-section page-width">
      <div><p class="eyebrow">04 · The Armstrong Brief</p><h2>Ideas worth <em>connecting</em>, delivered occasionally.</h2>
        <p>New articles, lessons from building and notes on law, technology and innovation. No noise.</p></div>
      <a class="button button-primary" href="mailto:onojaarmstrong@gmail.com?subject=The%20Armstrong%20Brief">Ask to receive the Brief <span aria-hidden="true">↗</span></a>
    </section>`;
}

function aboutPage() {
  return `<section class="page-hero page-width">
      <p class="eyebrow">About</p><h1>Onoja Armstrong Adaofuoyi</h1>
      <p class="page-intro">A law graduate, entrepreneur and emerging technology enthusiast exploring how legal thinking and digital innovation can create meaningful impact.</p>
    </section>
    <section class="section-block page-width about-layout">
      <figure class="portrait-placeholder">
        <img src="/assets/armstrong-avatar.svg" alt="Non-identifying ARMSTRONG avatar illustration, not a photograph of Armstrong." />
        <figcaption><strong>ARMSTRONG · Concept artwork</strong><span>A branded illustration until you choose to add a personal photo.</span></figcaption>
      </figure>
      <div class="about-copy">
        <p class="eyebrow">The work in progress</p>
        <h2>Think critically.<br />Build intelligently.</h2>
        <p>I earned an LL.B with Second Class Upper Division from Bingham University in Nasarawa State and am a Nigerian Bar Aspirant currently completing vocational training at the Nigerian Law School, Yenagoa Campus.</p>
        <p>Alongside legal training, I build ventures and community initiatives, and I’m developing skills in web development, artificial intelligence and digital innovation. My aim is to connect sound reasoning with practical solutions that serve people.</p>
        <div class="tag-list"><span>Legal practice</span><span>Technology</span><span>Entrepreneurship</span><span>Public leadership</span><span>Social impact</span></div>
      </div>
    </section>
    <section class="section-block section-muted">
      <div class="page-width">
        <p class="eyebrow">A personal philosophy</p><h2 class="section-title">Meaningful impact starts<br />with taking responsibility.</h2>
        <div class="values-grid">
          <article><span>01</span><h3>Think critically</h3><p>Question assumptions, weigh evidence and stay open to better answers.</p></article>
          <article><span>02</span><h3>Build with purpose</h3><p>Learn the tools, start with real needs and improve through experience.</p></article>
          <article><span>03</span><h3>Serve together</h3><p>Bring people together to support communities and create lasting value.</p></article>
        </div>
      </div>
    </section>
    <section class="section-block page-width">
      <p class="eyebrow">Leadership & experience</p><h2 class="section-title">Responsibility, service<br />and learning.</h2>
      <p class="body-lead">Former Student Provost and Executive President of Bingham University Students’ Representative Council. Experience includes student governance, institutional representation, advocacy, community development, project coordination and strategic leadership.</p>
      <a class="arrow-link" href="/journey">Explore the full journey ↗</a>
    </section>`;
}

function knowledgePage() {
  return `<section class="page-hero page-width">
      <p class="eyebrow">The Knowledge Laboratory</p><h1>Writing to understand.<br /><em>Publishing to share.</em></h1>
      <p class="page-intro">Plain-language learning notes on Nigerian law, digital rights, artificial intelligence and the tools shaping our work. Articles are educational commentary, not legal advice.</p>
    </section>
    <section class="section-block page-width">
      <div class="topic-strip"><span>LAW & SOCIETY</span><span>DATA PROTECTION</span><span>AI & ETHICS</span><span>LEGAL TECHNOLOGY</span></div>
      <div class="section-heading article-list-heading"><div><p class="eyebrow">Learn and explore</p><h2>Knowledge, made practical.</h2></div><p class="section-aside">Each article includes key ideas and further reading. Check current law and primary sources before relying on legal information.</p></div>
      <div class="story-grid">${articles.map((item) => articleCard(item)).join("")}</div>
    </section>
    <section class="section-block section-muted">
      <div class="page-width knowledge-note"><div><p class="eyebrow">A note on legal content</p><h2>Learning in public,<br />with care.</h2></div><p>These articles are personal educational commentary. They do not create a lawyer-client relationship, replace legal advice or claim to state every exception. Laws and guidance can change; consult current primary sources and a qualified legal practitioner for a specific situation.</p></div>
    </section>`;
}

function articlePage(article) {
  return `<section class="page-hero page-width article-heading">
      <a class="back-link" href="/knowledge">← Knowledge Hub</a><p class="eyebrow">${article.category}</p>
      <h1>${article.title}</h1><p class="page-intro">${article.summary}</p>
      <div class="tag-list">${article.tags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
    </section>
    <article class="article-body">
      <p class="article-disclaimer">Educational commentary · Not legal advice</p>
      ${article.body}
      <section class="references"><h2>References & further reading</h2><ul>${article.references.map((ref) => `<li>${socialAnchor(ref)}</li>`).join("")}</ul></section>
      <a class="back-link" href="/knowledge">← Back to the Knowledge Hub</a>
    </article>
    <section class="section-block section-muted"><div class="page-width"><p class="eyebrow">Keep exploring</p><div class="story-grid">${articles.filter((item) => item.slug !== article.slug).slice(0, 2).map((item) => articleCard(item, true)).join("")}</div></div></section>`;
}

function technologyPage() {
  return `<section class="page-hero page-width">
      <p class="eyebrow">The Technology Lab</p><h1>Learn openly.<br /><em>Build thoughtfully.</em></h1>
      <p class="page-intro">A practical learning path from web fundamentals to useful digital products — documenting the process without claiming mastery.</p>
    </section>
    <section class="section-block section-muted"><div class="page-width roadmap">
      <div><p class="eyebrow">01 · The roadmap</p><h2>Learn → Experiment<br />→ Build → Improve</h2><p>Start with fundamentals, make small experiments, ship useful work and learn from feedback.</p></div>
      <ol class="roadmap-steps"><li><span>01</span><div><h3>Learn the foundations</h3><p>HTML, CSS, JavaScript and core interface concepts.</p></div></li><li><span>02</span><div><h3>Experiment in small steps</h3><p>Rebuild examples, test ideas and write notes in plain language.</p></div></li><li><span>03</span><div><h3>Build and share</h3><p>Use React and related tools to turn useful ideas into working projects.</p></div></li><li><span>04</span><div><h3>Improve responsibly</h3><p>Review accessibility, privacy, reliability and real user feedback.</p></div></li></ol>
    </div></section>
    <section class="section-block page-width">
      <p class="eyebrow">02 · Glossary</p><h2 class="section-title">Technical terms,<br />explained for humans.</h2>
      <div class="glossary-grid">${technologyTerms.map(([term, definition], index) => `<article class="glossary-card"><span>0${index + 1}</span><h3>${term}</h3><p>${definition}</p></article>`).join("")}</div>
    </section>
    <section class="section-block section-dark"><div class="page-width toolkit">
      <div><p class="eyebrow">03 · Current toolkit</p><h2>Tools I’m learning<br />and using.</h2></div>
      <div class="tag-list"><span>HTML & CSS</span><span>JavaScript</span><span>React</span><span>Next.js</span><span>Git & GitHub</span><span>Vercel</span><span>AI tools · used critically</span></div>
    </div></section>`;
}

function projectCard(id, mark, type, title, description, details) {
  return `<article class="project-card" id="${id}">
    <div class="project-card-top"><span class="teaser-mark">${mark}</span><span class="project-status">${type}</span></div>
    <h2>${title}</h2><p class="project-description">${description}</p>
    <div class="project-detail"><h3>Focus</h3><p>${details}</p></div>
  </article>`;
}

function projectsPage() {
  return `<section class="page-hero page-width">
      <p class="eyebrow">Projects & initiatives</p><h1>From idea <em>to impact.</em></h1>
      <p class="page-intro">A portfolio of community work, entrepreneurship and digital experiments — with clear descriptions of what each is and who it serves.</p>
    </section>
    <section class="section-block page-width projects-list">
      ${projectCard("stronger-together", "ST", "COMMUNITY INITIATIVE", "Stronger Together Foundation", "A community-driven humanitarian initiative promoting unity, dignity, compassion and social impact — one community at a time.", "Founded in 2026. The Foundation focuses on community outreach, educational support, child welfare, donations and grassroots development for vulnerable children, underserved families, orphans and communities in need. Armstrong leads its vision, partnerships, project coordination and community engagement.")}
      <figure class="project-photo-slot foundation-photo">
        <img src="/assets/foundation-community.svg" alt="Conceptual illustration of people connected by a shared light for Stronger Together Foundation; not an actual outreach photo." />
        <figcaption><strong>Stronger Together · Concept artwork</strong><p>Illustrative, not a documentary event photo. Replace with an approved outreach image if desired.</p></figcaption>
      </figure>
      <div class="activity-panel"><h3>Community work</h3><ul><li><strong>Nasarawa State:</strong> Valentine’s community outreach in Karu, including support for Basira Academy and an orphanage community.</li><li><strong>Abuja:</strong> Children’s footwear support initiative.</li><li><strong>Bayelsa State:</strong> Independence outreach themed “Light of Unity.”</li><li><strong>Benue State:</strong> An earlier humanitarian outreach to an IDP camp in 2020.</li></ul><p class="fine-print">The 2020 outreach is presented as earlier service work, separate from the Foundation’s 2026 founding.</p>${socialAnchor({ label: "Follow Stronger Together on Instagram", url: "https://www.instagram.com/stron_gertogetherfoundation/" }, "arrow-link")}</div>
      ${projectCard("extacy-lounge", "EX", "HOSPITALITY & ENTERTAINMENT", "Extacy Lounge", "A hospitality and entertainment business offering lounge experiences, relaxation, social gatherings, music and nightlife.", "As co-founder and business lead, Armstrong contributes to business development, strategy, operations and brand growth. Building the venture has been a lesson in resilience, leadership and the realities of running a business.")}
      <figure class="project-photo-slot lounge-photo">
        <img src="/assets/extacy-lounge.svg" alt="Concept illustration of a black-and-gold lounge interior; not a photograph of the actual Extacy Lounge venue." />
        <figcaption><strong>Extacy Lounge · Concept artwork</strong><p>A branded scene, not a photograph of the actual venue.</p></figcaption>
      </figure>
      <blockquote class="project-quote">“Sometimes, you start a business trying to build a business, and the business ends up building you.”</blockquote>
      ${projectCard("armstrong-platform", "A/", "DIGITAL PRODUCT", "ARMSTRONG Knowledge Hub", "This platform connects a personal portfolio with a knowledge hub about law, technology and innovation.", "Designed to make learning visible, connect ideas across disciplines and share practical notes in clear language.")}
      ${projectCard("next-experiment", "→", "EXPLORING", "The next digital experiment", "A space for a future legal-tech tool, community resource or small AI experiment.", "The next project will be selected around a real problem, a small first prototype and a way to measure whether it helps.")}
    </section>`;
}

const milestones = [
  { date: "2020", title: "Early humanitarian service", text: "Participated in an outreach to an IDP camp in Benue State." },
  { date: "2022–2023", title: "Student Provost", text: "Bingham University Students’ Representative Council." },
  { date: "2023–2024", title: "Executive President", text: "Led the Bingham University Students’ Representative Council, with a focus on representation, advocacy and student leadership." },
  { date: "2025", title: "Bachelor of Laws (LL.B)", text: "Graduated from Bingham University with Second Class Upper Division." },
  { date: "2025", title: "Co-founded Extacy Lounge", text: "Started a hospitality and entertainment venture and learned from the day-to-day work of building a business." },
  { date: "November 2025", title: "Registered with the Nigerian Law School", text: "Began the next stage of professional legal training." },
  { date: "2026", title: "Nigerian Law School", text: "Bar vocational training at the Yenagoa Campus, Bayelsa State." },
  { date: "June–July 2026", title: "Legal externship", text: "Maple Law Firm — exposure to litigation, corporate and commercial practice, property and criminal law." },
  { date: "2026", title: "Founded Stronger Together Foundation", text: "Established a community initiative for humanitarian support and grassroots development." },
  { date: "2026–present", title: "Technology learning", text: "Developing skills in web development, React, artificial intelligence and digital innovation." },
];

function journeyPage() {
  return `<section class="page-hero page-width"><p class="eyebrow">The journey</p><h1>Not a straight line.<br /><em>A widening one.</em></h1><p class="page-intro">From legal education to student leadership, entrepreneurship, community service and technology.</p></section>
    <section class="section-block page-width"><div class="timeline">${milestones.map((item) => `<article class="timeline-item"><span class="timeline-date">${item.date}</span><div><h2>${item.title}</h2><p>${item.text}</p></div></article>`).join("")}</div></section>`;
}

function connectPage() {
  return `<section class="page-hero page-width"><p class="eyebrow">Connect</p><h1>Good ideas grow<br /><em>in conversation.</em></h1><p class="page-intro">For collaborations, questions about law and technology, community initiatives, business or a thoughtful exchange, find me through these channels.</p></section>
    <section class="section-block section-muted"><div class="page-width connect-layout">
      <div><p class="eyebrow">Get in touch</p><h2>Let’s start<br />a conversation.</h2><p class="section-aside">For collaborations, community initiatives, business and thoughtful conversations.</p></div>
      <div class="connect-links">
        <div class="contact-methods">
          <a href="mailto:onojaarmstrong@gmail.com"><span>Email</span><strong>onojaarmstrong@gmail.com</strong></a>
          <a href="tel:09132803881"><span>Phone</span><strong>09132803881</strong></a>
        </div>
        <p class="eyebrow">Professional links</p>
        <div class="social-list">${socialLinks.map((item) => socialAnchor(item)).join("")}</div>
      </div>
    </div></section>
    <section class="section-block page-width"><p class="eyebrow">Based in</p><h2 class="section-title">Nigeria</h2><p class="body-lead">Open to meaningful conversations and collaborations across law, technology, entrepreneurship and community development.</p></section>`;
}

const routeInfo = {
  "/": { title: "ARMSTRONG — Law × Technology × Innovation", render: homePage },
  "/about": { title: "About | ARMSTRONG", render: aboutPage },
  "/knowledge": { title: "Knowledge Hub | ARMSTRONG", render: knowledgePage },
  "/technology": { title: "Technology Lab | ARMSTRONG", render: technologyPage },
  "/projects": { title: "Projects | ARMSTRONG", render: projectsPage },
  "/journey": { title: "Journey | ARMSTRONG", render: journeyPage },
  "/connect": { title: "Connect | ARMSTRONG", render: connectPage },
};

function cleanPath(pathname) {
  const path = pathname.replace(/\/+$/, "");
  return path || "/";
}

function renderRoute() {
  const path = cleanPath(window.location.pathname);
  const article = path.startsWith("/knowledge/")
    ? articles.find((item) => path === `/knowledge/${item.slug}`)
    : undefined;
  const page = routeInfo[path];
  const main = document.querySelector("#main");

  if (article) {
    document.title = `${article.title} | ARMSTRONG`;
    main.innerHTML = articlePage(article);
  } else if (page) {
    document.title = page.title;
    main.innerHTML = page.render();
  } else {
    document.title = "Page not found | ARMSTRONG";
    main.innerHTML = `<section class="page-hero page-width"><p class="eyebrow">404 · Not found</p><h1>This page isn’t here.</h1><a class="button button-primary" href="/">Return home</a></section>`;
  }

  document.querySelector("#mobile-nav").hidden = true;
  document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#menu-toggle").setAttribute("aria-label", "Open menu");
  window.scrollTo(0, 0);
}

document.addEventListener("click", (event) => {
  const focusButton = event.target.closest("[data-focus]");
  if (focusButton) {
    document.querySelectorAll("[data-focus]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button === focusButton));
    });
    const focusCopy = {
      law: "Law — reasoning, justice, governance and the changing practice of law.",
      technology: "Technology — React, Next.js, artificial intelligence and digital products.",
      innovation: "Innovation — building ventures, community initiatives and meaningful impact.",
    };
    document.querySelector("#field-caption").textContent = focusCopy[focusButton.dataset.focus];
    return;
  }

  const link = event.target.closest("a");
  if (!link || link.target || link.origin !== window.location.origin) return;
  const url = new URL(link.href);
  if (url.pathname === window.location.pathname && url.hash) return;
  event.preventDefault();
  window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
  renderRoute();
  if (url.hash) {
    requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView();
    });
  }
});

window.addEventListener("popstate", renderRoute);

const themeToggle = document.querySelector("#theme-toggle");
const themeStorageKey = "armstrong-theme-v2";
const savedTheme = localStorage.getItem(themeStorageKey);
const initialTheme = savedTheme === "light" ? "light" : "dark";
document.documentElement.dataset.theme = initialTheme;
themeToggle.setAttribute("aria-label", initialTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  localStorage.setItem(themeStorageKey, nextTheme);
});

const menuToggle = document.querySelector("#menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
  mobileNav.hidden = expanded;
});

const searchDialog = document.querySelector("#search-dialog");
const searchInput = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");
const searchableItems = [
  ...Object.entries(routeInfo).filter(([path]) => path !== "/").map(([path, page]) => ({
    title: page.title.replace(" | ARMSTRONG", ""),
    description: "Explore this section of the site.",
    href: path,
  })),
  ...articles.map((item) => ({ title: item.title, description: item.summary, href: `/knowledge/${item.slug}` })),
  ...technologyTerms.map(([term, definition]) => ({ title: term, description: definition, href: "/technology" })),
];

document.querySelector("#search-open").addEventListener("click", () => {
  searchDialog.showModal();
  searchInput.focus();
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const results = query
    ? searchableItems.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(query)).slice(0, 8)
    : [];
  searchResults.innerHTML = results.length
    ? results.map((item) => `<a href="${item.href}"><strong>${item.title}</strong><span>${item.description}</span></a>`).join("")
    : query ? `<p class="empty-search">No matching pages or topics.</p>` : `<p class="empty-search">Search pages, articles and glossary terms.</p>`;
});

searchResults.addEventListener("click", (event) => {
  if (event.target.closest("a")) searchDialog.close();
});

renderRoute();
