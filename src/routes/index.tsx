import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { VideoSlot } from "@/components/VideoSlot";
import heroRoof from "@/assets/hero-roof.jpg";
import leadwork from "@/assets/leadwork.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const PHONE = "+44 1332 417383";
const PHONE_HREF = "tel:+441332417383";
const EMAIL = "roddisroofing@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roddis Roofing | Roofing & Lead Work, Nottingham & Derbyshire" },
      {
        name: "description",
        content:
          "Family-run roofing and lead-work specialists covering Nottingham and Derbyshire. New roofs, repairs, flat roofing and heritage lead work. Free quotes.",
      },
      { property: "og:title", content: "Roddis Roofing | Nottingham & Derbyshire Roofers" },
      {
        property: "og:description",
        content:
          "Family-run roofing and lead-work specialists. Craftsmanship you can see from the ground. Get a free quote today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "New Roofs & Re-roofing",
    body: "Full strip and re-cover in slate, clay or concrete tile — breathable membranes, dry ridge systems, built to outlive us.",
  },
  {
    title: "Lead Work Specialists",
    body: "Chimney flashings, valleys, bay roofs and heritage detailing, dressed by hand to code-standard thickness.",
  },
  {
    title: "Flat Roofing",
    body: "EPDM, GRP fibreglass and single-ply systems with proper falls, trims and drainage that actually work.",
  },
  {
    title: "Roof Repairs",
    body: "Slipped tiles, leaks, storm damage. Diagnosed properly, fixed once — never patched to buy time.",
  },
  {
    title: "Guttering, Fascia & Soffit",
    body: "Seamless replacement in matched colours, with the fixings and brackets a wet Midlands winter demands.",
  },
  {
    title: "Chimneys & Pointing",
    body: "Repointing, rebuilds, pots, cowls and full weatherproofing of the most neglected part of any roof.",
  },
];

const process = [
  { step: "01", title: "Call & Chat", body: "Tell us what you've spotted. We'll tell you honestly if it's urgent." },
  { step: "02", title: "Roof Survey", body: "On-site inspection with photos from the ladder or drone so you see what we see." },
  { step: "03", title: "Clear Quote", body: "Fixed pricing, itemised materials, no vanishing figures or pressure." },
  { step: "04", title: "The Work", body: "Tidy site, scaffold where needed, daily updates and a clean sweep each evening." },
  { step: "05", title: "Sign Off", body: "Walkaround, aftercare notes and a guarantee in writing before we pack up." },
];

const reasons = [
  { title: "Family-run, not a call centre", body: "You speak to the people on your roof. Same names, start to finish." },
  { title: "Lead work done properly", body: "A specialism most roofers subcontract. We've been dressing lead for decades." },
  { title: "Fixed, honest pricing", body: "Quoted before we start. No mid-job surprises, no upsell theatre." },
  { title: "Fully insured & guaranteed", body: "Public liability cover and written workmanship guarantees as standard." },
];

const stats = [
  { value: "25+", label: "Years on the tools" },
  { value: "1,200+", label: "Roofs completed" },
  { value: "10 yr", label: "Workmanship guarantee" },
  { value: "5.0", label: "Average customer rating" },
];

const projects = [
  { img: project1, title: "Full Re-roof", place: "West Bridgford, Nottingham", w: 1200, h: 900 },
  { img: project4, title: "Victorian Slate Restoration", place: "Mapperley Park", w: 1200, h: 900 },
  { img: project2, title: "EPDM Flat Roof", place: "Ilkeston, Derbyshire", w: 1200, h: 900 },
  { img: project3, title: "Fascia & Guttering", place: "Long Eaton", w: 1200, h: 900 },
];

const reviews = [
  {
    quote:
      "They found the real cause of a leak two other firms had papered over. New lead flashing, done in a day, and the price didn't move an inch.",
    name: "Helen M.",
    place: "Beeston",
  },
  {
    quote:
      "Full re-roof on a 1930s semi. Scaffold up Monday, immaculate by Friday, drive swept every single evening. Genuinely faultless.",
    name: "David & Sue R.",
    place: "Derby",
  },
  {
    quote:
      "Storm took half the ridge off. They were out the next morning, made it safe, then came back and did it properly. Can't fault them.",
    name: "Andrew K.",
    place: "Arnold",
  },
];

const areas = [
  "Nottingham",
  "Derby",
  "West Bridgford",
  "Beeston",
  "Arnold",
  "Ilkeston",
  "Long Eaton",
  "Hucknall",
  "Ripley",
  "Belper",
  "Heanor",
  "Stapleford",
  "Mapperley",
  "Sandiacre",
  "Kimberley",
  "Chilwell",
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="surface-navy hidden md:block">
        <div className="shell flex h-10 items-center justify-between text-[0.78rem]">
          <p className="opacity-80">Family-run roofing & lead-work specialists — Nottingham & Derbyshire</p>
          <div className="flex items-center gap-6">
            <a href={PHONE_HREF} className="opacity-90 transition-opacity hover:opacity-100">
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="opacity-90 transition-opacity hover:opacity-100">
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled ? "border-border bg-white/85 backdrop-blur-xl" : "border-transparent bg-white"
        }`}
      >
        <nav className="shell flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-navy text-primary-foreground">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 3 2 11h3v10h6v-6h2v6h6V11h3z" />
              </svg>
            </span>
            <span className="font-display text-lg leading-none font-extrabold tracking-tight text-navy">
              RODDIS
              <span className="block text-[0.6rem] font-semibold tracking-[0.34em] text-muted-foreground">
                ROOFING
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {[
              ["Services", "#services"],
              ["About", "#about"],
              ["Process", "#process"],
              ["Projects", "#projects"],
              ["Reviews", "#reviews"],
              ["Areas", "#areas"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-muted-foreground transition-colors hover:text-navy"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-navy-deep hover:shadow-[var(--shadow-glow)]"
          >
            Get a Free Quote
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-white">
        <div className="shell grid items-center gap-16 pt-16 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pt-24 lg:pb-28">
          <div>
            <Reveal>
              <p className="eyebrow">Nottingham &amp; Derbyshire · Est. family trade</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.95] font-extrabold text-navy">
                Roofs built to be
                <span className="relative ml-3 inline-block text-sky">
                  forgotten
                  <span className="absolute inset-x-0 -bottom-1 h-[3px] bg-sky/30" />
                </span>
                <br />
                — for the next thirty years.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A family-run team of roofers and lead-work specialists. No sales patter, no
                subcontracted shortcuts — just tight detailing, honest pricing and a roof you never
                have to think about again.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group relative overflow-hidden bg-navy px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-lift)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                >
                  <span className="relative z-10">Get a Free Quote</span>
                  <span className="absolute inset-0 -translate-x-full bg-[var(--gradient-sheen)] transition-transform duration-700 group-hover:translate-x-full" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="border border-navy/15 px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-mist"
                >
                  {PHONE}
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl font-extrabold text-navy">{s.value}</dt>
                    <dd className="mt-1 text-xs tracking-wide text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative">
              <img
                src={heroRoof}
                alt="Newly finished slate roof with hand-dressed lead detailing on a brick house"
                width={1920}
                height={1280}
                fetchPriority="high"
                className="h-[420px] w-full object-cover shadow-[var(--shadow-lift)] lg:h-[620px]"
              />
              <div className="float-slow absolute -bottom-8 -left-8 hidden w-64 bg-white p-6 shadow-[var(--shadow-lift)] sm:block">
                <p className="eyebrow">Guarantee</p>
                <p className="mt-3 font-display text-2xl font-extrabold text-navy">10 years</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Written workmanship cover on every full roof.
                </p>
              </div>
              <div className="absolute -top-6 -right-4 hidden bg-sky px-5 py-4 text-primary-foreground shadow-[var(--shadow-glow)] lg:block">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase opacity-80">
                  Free
                </p>
                <p className="font-display text-sm font-bold">No-obligation survey</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* marquee */}
        <div className="overflow-hidden border-y border-border bg-mist py-4">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-12">
                {[
                  "Slate & Tile",
                  "Lead Work",
                  "Flat Roofing",
                  "Storm Damage",
                  "Chimneys",
                  "Guttering",
                  "Heritage Detailing",
                  "Emergency Repairs",
                ].map((t) => (
                  <span
                    key={t + k}
                    className="text-sm font-semibold tracking-[0.18em] text-navy/45 uppercase"
                  >
                    {t} <span className="ml-12 text-sky">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="shell py-24 lg:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">What we do</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-extrabold text-navy">
              Every part of the roof, by the people who specialise in it.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} className="bg-white">
              <article className="group h-full bg-white p-9 transition-colors hover:bg-mist">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold tracking-[0.2em] text-sky">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-border transition-all group-hover:w-16 group-hover:bg-sky" />
                </div>
                <h3 className="mt-8 font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BACKGROUND VIDEO SLOT #1 */}
      <VideoSlot
        background
        label="Background video slot 1"
        hint="Aerial roof flyover or team-at-work loop. Drop in /public/videos and pass src."
        className="relative h-[460px] w-full lg:h-[540px]"
        overlay={
          <div className="pointer-events-none absolute inset-0 flex items-end">
            <div className="shell pointer-events-auto pb-12">
              <Reveal>
                <p className="max-w-xl font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-tight font-extrabold text-primary-foreground">
                  Twenty-five years above Nottingham's rooftops.
                </p>
              </Reveal>
            </div>
          </div>
        }
      />

      {/* ABOUT */}
      <section id="about" className="shell grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal className="relative">
          <img
            src={aboutTeam}
            alt="The Roddis Roofing family team in workwear beside their van"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-[420px] w-full object-cover shadow-[var(--shadow-lift)] lg:h-[560px]"
          />
          <img
            src={leadwork}
            alt="Roofer hand-dressing lead flashing around a chimney"
            width={1200}
            height={1500}
            loading="lazy"
            className="absolute -right-6 -bottom-10 hidden h-56 w-44 border-8 border-white object-cover shadow-[var(--shadow-lift)] md:block"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About Roddis Roofing</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
              A family name on every roof we finish.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Roddis Roofing is a family business, run the way family businesses used to be. The
                person who quotes your job is the person on the scaffold, and the reputation on the
                line is ours — not a franchise's.
              </p>
              <p>
                Lead work is where we made our name. It's a slow, physical craft that most firms
                subcontract away, and it's the detail that decides whether a roof lasts ten years or
                forty. We dress it by hand, to code, every time.
              </p>
              <p>
                We work across Nottingham and Derbyshire on everything from a single slipped slate
                to full heritage re-roofs — and we'd rather tell you your roof is fine than sell you
                one you don't need.
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Fully insured", "Free surveys", "Local & family-run", "Written guarantees"].map(
                (t) => (
                  <span
                    key={t}
                    className="border border-navy/12 bg-mist px-4 py-2 text-xs font-semibold tracking-wide text-navy"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="surface-navy relative overflow-hidden py-24 lg:py-32">
        <div className="hairline-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="shell relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="text-[0.72rem] font-bold tracking-[0.22em] text-sky-soft uppercase">
                Why choose us
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-extrabold">
                The difference is in the details you'll never see.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href="#contact"
                className="mt-10 inline-block bg-white px-8 py-4 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Get a Free Quote
              </a>
            </Reveal>
          </div>

          <ul className="grid gap-px bg-white/12 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 80}>
                <div className="h-full bg-[oklch(0.31_0.09_260)] p-8">
                  <span className="font-display text-3xl font-extrabold text-sky-soft/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-75">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* STATS / TRUST */}
      <section className="shell py-20 lg:py-24">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="bg-white px-8 py-12 text-center">
                <p className="font-display text-[clamp(2.4rem,4vw,3.4rem)] leading-none font-extrabold text-navy">
                  {s.value}
                </p>
                <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-mist py-24 lg:py-32">
        <div className="shell">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">The process</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
                Five steps, no surprises.
              </h2>
            </Reveal>
          </div>

          <ol className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 90}>
                <div className="h-full border-t-2 border-navy/10 pt-6 transition-colors hover:border-sky">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-sky">
                    {p.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FULL-WIDTH VIDEO SECTION */}
      <section className="shell py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Watch</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
              A day on the roof with the Roddis team.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120} className="mt-14">
          <VideoSlot
            label="Full-width video section"
            hint="Your main brand or project film sits here — 16:9 recommended."
            className="aspect-video w-full border border-border"
          />
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="shell pb-24 lg:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">Recent work</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
                Projects across Nottingham &amp; Derbyshire.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <a href={`mailto:${EMAIL}`} className="text-sm font-semibold text-sky hover:underline">
              Request full portfolio →
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <figure className="group relative overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} in ${p.place}`}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 lg:h-[380px]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.235_0.075_262/0.92)] to-transparent p-7 pt-16 text-primary-foreground">
                  <p className="text-[0.68rem] font-bold tracking-[0.2em] text-sky-soft uppercase">
                    {p.place}
                  </p>
                  <p className="mt-2 font-display text-xl font-bold">{p.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-mist py-24 lg:py-32">
        <div className="shell">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">Reviews</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
                Word of mouth keeps us busy.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <blockquote className="flex h-full flex-col justify-between bg-white p-9 shadow-[var(--shadow-soft)]">
                  <div>
                    <div className="flex gap-1 text-sky">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg key={s} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                          <path d="m12 2 3 6.5 7 .9-5 4.8 1.2 7L12 17.8 5.8 21.2 7 14.2 2 9.4l7-.9z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-6 text-base leading-relaxed text-navy">“{r.quote}”</p>
                  </div>
                  <footer className="mt-8 border-t border-border pt-5 text-sm">
                    <span className="font-semibold text-navy">{r.name}</span>
                    <span className="text-muted-foreground"> · {r.place}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="shell py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Service areas</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
                Covering Nottingham, Derby and everywhere between.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Not on the list? If you're within roughly 30 miles of Nottingham, call us — we
                almost certainly cover you.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {areas.map((a, i) => (
              <Reveal key={a} delay={i * 30}>
                <div className="bg-white px-5 py-6 text-center text-sm font-semibold text-navy transition-colors hover:bg-sky hover:text-primary-foreground">
                  {a}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND VIDEO SLOT #2 — CONTACT CTA */}
      <VideoSlot
        background
        label="Background video slot 2"
        hint="Short atmospheric loop behind this call to action."
        className="relative min-h-[520px] w-full"
        overlay={
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-[oklch(0.235_0.075_262/0.55)]" />
            <div className="shell relative grid min-h-[520px] place-items-center py-24 text-center">
              <div className="max-w-2xl">
                <Reveal>
                  <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.03] font-extrabold text-primary-foreground">
                    Get a free, no-obligation roof quote.
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
                    Send a photo or book a survey. We'll tell you honestly what needs doing, what
                    can wait, and exactly what it costs.
                  </p>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                      href={PHONE_HREF}
                      className="bg-white px-8 py-4 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
                    >
                      Call {PHONE}
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="border border-white/40 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
                    >
                      Email us
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        }
      />

      {/* CONTACT + FOOTER */}
      <footer id="contact" className="bg-white py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Contact</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-extrabold text-navy">
                Let's talk about your roof.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-12 space-y-8">
                <div className="border-t border-border pt-6">
                  <dt className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={PHONE_HREF}
                      className="font-display text-2xl font-bold text-navy hover:text-sky"
                    >
                      {PHONE}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-border pt-6">
                  <dt className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-display text-xl font-bold break-all text-navy hover:text-sky"
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-border pt-6">
                  <dt className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Social
                  </dt>
                  <dd className="mt-2 font-display text-xl font-bold text-navy">@roddisroofing</dd>
                </div>
                <div className="border-t border-border pt-6">
                  <dt className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Coverage
                  </dt>
                  <dd className="mt-2 text-base text-muted-foreground">
                    Nottingham, Derbyshire &amp; surrounding areas
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <form
              className="surface-navy p-9 lg:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget as HTMLFormElement);
                const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nPostcode: ${f.get(
                  "postcode",
                )}\n\n${f.get("message")}`;
                window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Free quote request",
                )}&body=${encodeURIComponent(body)}`;
              }}
            >
              <h3 className="font-display text-2xl font-extrabold">Request a free quote</h3>
              <p className="mt-2 text-sm opacity-70">
                We reply to most enquiries the same working day.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { name: "name", label: "Your name", type: "text" },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "postcode", label: "Postcode", type: "text" },
                ].map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-70">
                      {f.label}
                    </span>
                    <input
                      required
                      name={f.name}
                      type={f.type}
                      className="mt-2 w-full border-b border-white/25 bg-transparent py-3 text-base outline-none transition-colors placeholder:text-white/40 focus:border-white"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-70">
                    What needs doing?
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-white/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-white"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-9 w-full bg-white px-8 py-4 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Get a Free Quote
              </button>
            </form>
          </Reveal>
        </div>

        <div className="shell mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Roddis Roofing. Family-run roofing & lead-work specialists.</p>
          <p>Nottingham &amp; Derbyshire · {PHONE}</p>
        </div>
      </footer>
    </div>
  );
}
