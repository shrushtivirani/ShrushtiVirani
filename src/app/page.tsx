"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowDown,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Plus,
  Sparkles
} from "lucide-react";

const sections = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Playground", href: "#playground" },
  { label: "Contact", href: "#contact" }
];

const shelfItems = [
  {
    id: "about",
    label: "About Me",
    note: "Curious by nature",
    image: "/images/stickers/cat-keychain.png",
    className: "item-cat"
  },
  {
    id: "experience",
    label: "Experience",
    note: "Spicy brain, soft heart",
    image: "/images/stickers/chili.png",
    className: "item-chili"
  },
  {
    id: "projects",
    label: "Projects",
    note: "Talent pipelines, polished flows",
    image: "/images/stickers/pani-puri.png",
    className: "item-puri"
  },
  {
    id: "playground",
    label: "Playground",
    note: "Hot ideas, happy noodles",
    image: "/images/stickers/ramen.png",
    className: "item-ramen"
  },
  {
    id: "sweet",
    label: "Sweet Spot",
    note: "Kind details, clear rituals",
    image: "/images/stickers/dessert.png",
    className: "item-dessert"
  },
  {
    id: "design",
    label: "Design Bits",
    note: "Tiny polish station",
    image: "/images/stickers/makeup.png",
    className: "item-makeup"
  },
  {
    id: "secret",
    label: "Secret Shelf",
    note: "Netflix queue: spooky, cozy, repeat",
    image: "/images/stickers/horror-tapes.png",
    className: "item-horror"
  }
];

const finds = [
  ["Offer Letters", "Careful document craft"],
  ["Candidate Care", "Warm hiring touchpoints"],
  ["Workflow Moves", "Workday, Dayforce, ServiceNow"],
  ["People Ops", "Employee lifecycle support"]
];

const resumePanels = [
  {
    title: "Education",
    body: "Humber Polytechnic, Global Business Management - HR specialization. University of Mumbai, BMS - HR specialization."
  },
  {
    title: "Experience",
    body: "HR Operations Coordinator at TD Bank, Recruitment Specialist at Global HR, HR Intern at Randstad Canada, HR Specialist at Sterling."
  },
  {
    title: "Skills",
    body: "Workday, Workday Recruit, Dayforce, ServiceNow, Excel, SharePoint, Outlook, QuickBooks, First Advantage."
  },
  {
    title: "Achievements",
    body: "Supported 150+ onboarding journeys, improved retention by 10%, managed HR operations for 200+ staff, and handled high-volume candidate pipelines."
  }
];

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export default function Home() {
  const [active, setActive] = useState(shelfItems[0]);
  const [openPanel, setOpenPanel] = useState(0);
  const [horrorMode, setHorrorMode] = useState(false);

  const activeCopy = useMemo(
    () => `${active.label}: ${active.note}.`,
    [active]
  );

  return (
    <main className={horrorMode ? "curio-page horror-mode" : "curio-page"}>
      <header className="topbar" aria-label="Primary navigation">
        <a className="cabinet-mark" href="#top" aria-label="Shrushti home">
          <span>The</span>
          <strong>Tiny Cabinet</strong>
          <em>of Curiosities</em>
        </a>
        <nav>
          {sections.map((section) => (
            <a key={section.href} href={section.href}>
              {section.label}
            </a>
          ))}
        </nav>
        <button
          className="moon-button"
          type="button"
          onClick={() => setHorrorMode((value) => !value)}
          aria-pressed={horrorMode}
          aria-label="Toggle horror mode"
        >
          <Moon size={22} />
        </button>
      </header>

      <section id="top" className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Peek inside</p>
          <h1>Shrushti Virani</h1>
          <div className="ink-line" />
          <p className="subtitle">
            HR Coordinator and talent storyteller who loves{" "}
            <span>cute things</span> and <span>creepy stories</span>.
          </p>
          <a className="peek-link" href="#cabinet">
            Peek inside <ArrowDown size={16} />
          </a>
        </div>

        <div className="hero-still-life" aria-label="Curiosity desk">
          <Image
            src={assetPath("/images/stickers/flower-bottle.png")}
            alt="Watercolor green bottle with flowers"
            width={280}
            height={520}
            priority
          />
          <div className="taped-note">making people moments feel carefully collected</div>
          <div className="gold-frame">Curious by nature<br />HR by choice</div>
          <div className="lucky-note">good ideas grow here</div>
        </div>
      </section>

      <section id="cabinet" className="cabinet-wrap" aria-label="Interactive cabinet">
        <div className="paw-trail" aria-hidden="true">. . . . .</div>
        <div className="cabinet">
          {shelfItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id === "sweet" || item.id === "design" || item.id === "secret" ? "playground" : item.id}`}
              className={`cabinet-cell ${item.className}`}
              onMouseEnter={() => setActive(item)}
              onFocus={() => setActive(item)}
            >
              <Image src={assetPath(item.image)} alt="" fill sizes="(max-width: 768px) 45vw, 320px" />
              {item.id === "secret" ? (
                <div className="netflix-shelf-label" aria-hidden={!horrorMode}>
                  <small>Now Playing</small>
                  <strong>Shrushti&apos;s Cozy Horror Night</strong>
                </div>
              ) : null}
              <span>{item.label}</span>
            </a>
          ))}
          <div className="drawer-plaque">
            Collecting ideas, one tiny thing at a time.
          </div>
        </div>
        <p className="active-whisper" aria-live="polite">{activeCopy}</p>
      </section>

      <section id="about" className="split-section">
        <div>
          <p className="section-kicker">About</p>
          <h2>Warm with people. Precise with process.</h2>
        </div>
        <p>
          Shrushti is a Talent Acquisition and HR professional with 3+ years of
          experience across employee operations, recruiting, onboarding, HRIS
          workflows, and candidate experience.
        </p>
      </section>

      <section id="experience" className="timeline-section">
        <p className="section-kicker">Experience</p>
        <div className="timeline">
          {[
            ["TD Bank", "HR Operations Coordinator", "Apr 2025 - Present"],
            ["Global HR", "Recruitment Specialist", "May 2024 - Apr 2025"],
            ["Randstad Canada", "HR Intern", "Jan 2023 - Apr 2023"],
            ["Sterling", "Human Resource Specialist", "Jun 2019 - Aug 2021"]
          ].map(([company, role, time]) => (
            <article key={company}>
              <span>{time}</span>
              <h3>{company}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="finds-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Latest Finds</p>
            <h2>Little proof tags</h2>
          </div>
          <Sparkles size={24} />
        </div>
        <div className="find-tags">
          {finds.map(([title, body], index) => (
            <article key={title} className={`find-tag tag-${index}`}>
              <span>{title}</span>
              <p>{body}</p>
              <a href="#contact">ask more</a>
            </article>
          ))}
        </div>
      </section>

      <section id="playground" className="resume-contact-grid">
        <div className="playground-note">
          <p className="section-kicker">Playground</p>
          <h2>Sweet, spicy, a little haunted.</h2>
          <p>
            A tiny personality shelf for the things that do not belong on a
            formal resume, but absolutely belong on a personal website.
          </p>
        </div>

        <div className="resume-board">
          <p className="section-kicker">Resume</p>
          {resumePanels.map((panel, index) => (
            <button
              key={panel.title}
              type="button"
              className="resume-row"
              onClick={() => setOpenPanel(openPanel === index ? -1 : index)}
              aria-expanded={openPanel === index}
            >
              <span>{panel.title}</span>
              <Plus size={18} />
              {openPanel === index ? <small>{panel.body}</small> : null}
            </button>
          ))}
          <a
            className="download-button"
            href="https://drive.google.com/file/d/1OfbtjA_GJ34_2IefwtMfXWwf2actNHbe/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume <Download size={16} />
          </a>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p>Let&apos;s make cool things together.</p>
        <div className="contact-list">
          <a href="mailto:shrushtivirani27@gmail.com">
            <Mail size={16} /> shrushtivirani27@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/shrushtivirani" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> linkedin.com/in/shrushtivirani
          </a>
          <span>
            <MapPin size={16} /> Toronto, Canada
          </span>
        </div>
      </footer>
    </main>
  );
}
