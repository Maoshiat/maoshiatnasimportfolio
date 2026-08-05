import Image from "next/image";

const roles = [
  {
    company: "Radisson Blu",
    role: "People & Culture Coordinator",
    dates: "Dec 2025 — Present",
    intro: "Supporting the complete employee experience within a fast-paced hospitality environment.",
    bullets: [
      "Support employee relations casework across disciplinary actions, grievances, leave, performance reviews, and exit interviews.",
      "Coordinate recruitment and onboarding, including interviews, orientations, documentation, and HRIS updates.",
      "Partner with HR leadership on training, appraisals, engagement initiatives, benefits, and policy communication.",
    ],
  },
  {
    company: "Smart Group of Industries Limited",
    role: "Workforce Management Executive",
    dates: "Apr 2023 — Jan 2024",
    intro: "Strengthened hiring operations, workforce records, and cross-functional compliance.",
    bullets: [
      "Drove full-cycle recruitment by streamlining sourcing, screening, and selection.",
      "Led onboarding and background verification for 50+ hires, reducing onboarding delays by 30%.",
      "Maintained audit-ready HR records and helped strengthen workforce planning and policy compliance.",
    ],
  },
  {
    company: "Unilever",
    role: "HR Intern",
    dates: "Aug 2022 — Nov 2022",
    intro: "Applied digital thinking to HR documentation, access, and workforce compliance.",
    bullets: [
      "Created job descriptions and compliance documents, cutting access approval time by 25%.",
      "Digitized 300+ employee records to improve access control and policy compliance.",
      "Coordinated a third-party biometric system aligned with labor law and internal policies.",
    ],
  },
];

const expertise = [
  ["I", "Employee experience", "Engagement, employee relations, and policy communication"],
  ["II", "Talent acquisition", "Recruitment, interviews, onboarding, and verification"],
  ["III", "HR operations", "HRIS, audit-ready records, appraisals, and leave management"],
  ["IV", "People partnership", "Manager support, teamwork, and conflict resolution"],
  ["V", "Policy & compliance", "Labor-law awareness and consistent process execution"],
  ["VI", "Digital awareness", "Record digitization and cross-functional systems coordination"],
];

const metrics = [
  ["300+", "employee records digitized"],
  ["50+", "new hires onboarded"],
  ["30%", "fewer onboarding delays"],
  ["25%", "faster access approvals"],
];

const workSamples = [
  {
    organization: "Radisson Blu",
    thesis: "Culture became a programme people could join, shape, and remember.",
    studies: [
      {
        type: "Sports tournament · 2026",
        title: "Football Premier League",
        summary:
          "Coordinated the associates’ inter-departmental tournament from kickoff to trophy, using friendly competition to build camaraderie across teams.",
        contribution: "Tournament coordination · cross-department participation · end-to-end delivery",
      },
      {
        type: "Recognition programme",
        title: "Associate of the Year",
        summary:
          "Supported the annual recognition night across stage performances, nominee announcements, and the live run-of-show behind the booth.",
        contribution: "Opening performance · nominee recognition · live show control",
      },
      {
        type: "Employee welfare · recurring forum",
        title: "Female Associate Welfare Meeting",
        summary:
          "Helped sustain a structured monthly forum where female associates could raise concerns directly and help shape workplace welfare initiatives.",
        contribution: "Listening channel · recurring facilitation · welfare follow-through",
      },
      {
        type: "Culture & CSR calendar",
        title: "Moments that made the year visible",
        summary:
          "Activated sustainability and national-heritage moments across the property, connecting the employee experience to a wider social calendar.",
        contribution: "Earth Hour · Victory Day · Pohela Boishakh",
      },
    ],
  },
  {
    organization: "Smart Group",
    thesis: "Good coordination made complex days feel effortless.",
    studies: [
      {
        type: "Stakeholder experience",
        title: "Industrial Site Visit",
        summary:
          "Hosted stakeholders on-site and coordinated logistics and walkthroughs so the visit stayed informative, confident, and on schedule.",
        contribution: "Visitor hosting · on-site logistics · walkthrough coordination",
      },
      {
        type: "Year-round team culture · 2025",
        title: "Football League & Annual Picnic",
        summary:
          "Supported two very different shared experiences—competitive sport and a company-wide day out—to strengthen connection beyond daily operations.",
        contribution: "Tournament delivery · employee picnic · cross-functional coordination",
      },
    ],
  },
  {
    organization: "Unilever",
    thesis: "Leadership visibility brought quality culture onto the floor.",
    studies: [
      {
        type: "World Quality Week",
        title: "Director-led Production Floor Visit",
        summary:
          "Walked the production floor alongside directors, connecting shop-floor quality practice with visible leadership attention.",
        contribution: "Floor engagement · leadership visibility · quality communication",
      },
    ],
  },
];

const chitraPieces = [
  ["/chitra/kundan-sun.jpeg", "Kundan and pearl earrings", "Kundan study"],
  ["/chitra/gold-bangles.jpeg", "Delicate gold bangles", "Golden orbit"],
  ["/chitra/silver-jhumka.jpeg", "Silver crystal jhumka earrings", "Silver cascade"],
  ["/chitra/crystal-gold-jhumka.jpeg", "Gold crystal jhumka earrings", "Gilded bell"],
  ["/chitra/pearl-floral-set.jpeg", "Gold and pearl floral jewelry set", "Pearled flora"],
  ["/chitra/emerald-drops.jpeg", "Emerald drop earrings", "Emerald moons"],
  ["/chitra/ganesh-enamel.jpeg", "Colorful Ganesh enamel earrings", "Enamel talisman"],
  ["/chitra/crystal-leaf-ring.jpeg", "Crystal leaf ring", "Leaf and light"],
  ["/chitra/twin-square-ring.jpeg", "Twin square crystal ring", "Twin geometry"],
  ["/chitra/antique-gold-jhumka.jpeg", "Antique gold jhumka earrings", "Antique bell"],
];

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Maoshiat Nasim, back to top">
          <span>MN</span>
          <b>Maoshiat Nasim</b>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work-samples">Samples</a>
          <a href="#expertise">Expertise</a>
        </nav>
        <a className="headerLink" href="#contact">Let&apos;s talk <span>↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <p className="eyebrow"><span>01</span> People &amp; Culture · HR Operations</p>
          <h1 id="hero-title">Work is a<br />human system.</h1>
          <p className="heroLead">
            I&apos;m <strong>Maoshiat Nasim</strong>, an HR professional turning thoughtful
            people practices into clear, compliant, and engaging employee experiences.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#experience">View experience <span>↓</span></a>
            <a className="quietAction" href="#about">My approach</a>
          </div>
        </div>

        <figure className="heroStudy botanicalStudy">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/og.png`}
            alt="A Renaissance-inspired botanical and mechanical study representing growth and organizational systems"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <figcaption>
            <span>Study for a machine-garden, MMXXVI</span>
            <span>Growth · systems · possibility</span>
          </figcaption>
          <i className="cropMark markOne" aria-hidden="true" />
          <i className="cropMark markTwo" aria-hidden="true" />
        </figure>

        <p className="heroAside">The whole is understood through close attention to its parts.</p>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="sectionIndex">
          <span>02</span>
          <p>Approach</p>
        </div>
        <div className="aboutMain">
          <h2 id="about-title">People-first thinking,<br />operational discipline.</h2>
          <div className="aboutCopy">
            <p className="lead">
              I bring together an academic foundation in Economics and an MBA in HR
              Management with hands-on experience across hospitality, manufacturing,
              and FMCG.
            </p>
            <div>
              <p>
                My work spans the employee lifecycle, from attracting and onboarding
                talent to supporting employee relations, performance, engagement, and
                exits. I care about getting the human details right while keeping
                records accurate, processes consistent, and workplaces compliant.
              </p>
              <p>
                I translate policy into practical guidance and use digital tools to
                make HR operations more reliable, helping managers lead with confidence
                and employees receive a fair, seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Selected impact">
        {metrics.map(([number, label], index) => (
          <article key={number}>
            <span>0{index + 1}</span>
            <strong>{number}</strong>
            <p>{label}</p>
          </article>
        ))}
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="experienceHeader">
          <div className="sectionIndex lightIndex"><span>03</span><p>Folio 02 · Praxis</p></div>
          <div>
            <h2 id="experience-title">The record<br />of practice.</h2>
            <p>Selected experience across employee relations, talent acquisition, HR operations, and workforce compliance.</p>
          </div>
        </div>
        <div className="roleList">
          {roles.map((role, index) => (
            <article key={role.company}>
              <div className="roleNumber">0{index + 1}</div>
              <div className="roleHeading">
                <p>{role.company}</p>
                <h3>{role.role}</h3>
                <time>{role.dates}</time>
                <em>{role.intro}</em>
              </div>
              <ul>
                {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence" id="work-samples" aria-labelledby="samples-title">
        <div className="evidenceHeader">
          <div className="sectionIndex"><span>04</span><p>Interleaf · Evidentia</p></div>
          <div>
            <p className="sectionLabel">Selected work samples</p>
            <h2 id="samples-title">The proof lives<br />in the practice.</h2>
            <p className="evidenceLead">
              Seven assignments across three organizations—presented here as an
              on-page record of what I helped coordinate, activate, and deliver.
            </p>
          </div>
        </div>

        <div className="archiveScope" aria-label="Scope of work samples">
          <span>Employer branding</span>
          <span>Employee welfare</span>
          <span>Corporate events</span>
          <span>Cross-functional delivery</span>
          <span>Sports tournaments</span>
        </div>

        <div className="workArchive">
          {workSamples.map((sample, chapterIndex) => (
            <article className="workChapter" key={sample.organization}>
              <header>
                <div className="chapterNumber">0{chapterIndex + 1}</div>
                <div>
                  <p>Chapter {String(chapterIndex + 1).padStart(2, "0")}</p>
                  <h3>{sample.organization}</h3>
                </div>
                <em>{sample.thesis}</em>
              </header>
              <div className="chapterStudies">
                {sample.studies.map((study, studyIndex) => (
                  <section className="workStudy" key={study.title}>
                    <div className="studyFigure" aria-hidden="true">
                      <span>{String(studyIndex + 1).padStart(2, "0")}</span>
                      <div className="studyGlyph"><i /><b /></div>
                    </div>
                    <div className="studyCopy">
                      <p>{study.type}</p>
                      <h4>{study.title}</h4>
                      <div className="studyNarrative">
                        <p>{study.summary}</p>
                        <small>{study.contribution}</small>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="evidenceFooter">
          <p><strong>7</strong> assignments <i /> <strong>3</strong> organizations <i /> the complete story is now on this page</p>
          <a className="folioDownload" href={assetPath("/work-samples/Maoshiat-Nasim-Work-Samples.pptx")} download>
            Original presentation archive <span>↓</span>
          </a>
        </div>
      </section>

      <section className="expertise" id="expertise" aria-labelledby="expertise-title">
        <aside className="folioAside">
          <span>Folio 03</span>
          <b>Studia</b>
          <p>Six studies in the careful architecture of a workplace.</p>
        </aside>
        <div className="expertiseMain">
          <p className="sectionLabel">The instruments of the work</p>
          <h2 id="expertise-title">Studies in human potential.</h2>
          <p className="expertiseLead">A practical HR toolkit grounded in empathy, organization, and responsible execution.</p>
          <div className="plates">
            {expertise.map(([number, title, description]) => (
              <article key={title}>
                <span>{number}</span>
                <div className="plateGlyph" aria-hidden="true"><i /><b /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="venture" id="chitra" aria-labelledby="venture-title">
        <div className="venturePrelude">
          <div className="ventureSeal" aria-hidden="true"><span>C</span></div>
          <div>
            <p className="sectionLabel">An entrepreneurial experiment</p>
            <h2 id="venture-title">Chitra</h2>
            <p className="scriptNote">from ornament to enterprise</p>
          </div>
          <div className="ventureCopy">
            <p>
              Built and scaled an e-commerce jewelry business, managing 100+ orders and
              five vendor relationships while overseeing inventory, logistics, and customer service.
            </p>
            <div className="ventureMetric"><strong>20%</strong><span>sales growth in six months through digital campaigns</span></div>
          </div>
        </div>

        <div className="chitraCabinet">
          <div className="cabinetHeading">
            <p className="sectionLabel">The merchant&apos;s cabinet · ten studies</p>
            <h3>A small catalogue.<br />A complete business education.</h3>
            <p>Product selection, visual merchandising, vendor coordination, inventory, fulfilment, and customer trust—held in every frame.</p>
          </div>
          <div className="jewelMosaic">
            {chitraPieces.map(([src, alt, caption], index) => (
              <figure key={src}>
                <Image
                  src={assetPath(src)}
                  alt={alt}
                  fill
                  sizes="(max-width: 760px) 50vw, 28vw"
                />
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footerCompass" aria-hidden="true"><i /><i /><span>MN</span></div>
        <p className="sectionLabel">The next blank page</p>
        <h2>Let us build a better<br />employee experience.</h2>
        <p className="footerLead">Open to meaningful conversations about people, culture, and the systems that help both thrive.</p>
        <a className="primaryAction footerAction" href="#top">Return to the beginning <span>↑</span></a>
        <div className="footerBottom">
          <span>Maoshiat Nasim · HR &amp; People Operations</span>
          <span>Chattogram, Bangladesh</span>
          <span>Codex complete · MMXXVI</span>
        </div>
      </footer>
    </main>
  );
}
