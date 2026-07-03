import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Stethoscope, Heart, Activity, Plus, Phone, Calendar, MapPin, Mail, Clock,
  ChevronDown, Star, ArrowRight, Baby, Flower2, Smile, Sparkles, Microscope,
  Dumbbell, ShieldCheck, Cpu, Wallet, Video, Ambulance, MessageCircle,
  Facebook, Instagram, Twitter, Linkedin, X, CheckCircle2, Menu
} from "lucide-react";

import heroDoctor from "@/assets/hero-doctor.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <CursorGlow />
      <div className="relative overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Doctors />
          <Appointment />
          <WhyUs />
          <Testimonials />
          <Gallery />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </>
  );
}

/* -------------------- Loader -------------------- */
function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid h-16 w-16 place-items-center rounded-2xl shadow-[var(--shadow-glow)]"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Plus className="h-8 w-8 text-white" strokeWidth={2.5} />
        </motion.div>
        <div className="font-display text-xl tracking-tight text-foreground">Apex Care Clinic</div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="h-full w-1/2 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------- Cursor Glow -------------------- */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-40 blur-3xl md:block"
      style={{ background: "radial-gradient(circle, rgba(15,139,141,0.35), transparent 60%)" }}
    />
  );
}

/* -------------------- Navbar -------------------- */
const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Book", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          scrolled ? "glass rounded-2xl py-2 shadow-[var(--shadow-soft)]" : ""
        }`}
        style={scrolled ? { margin: "0 1rem" } : undefined}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl shadow-[var(--shadow-soft)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Plus className="h-5 w-5 text-white" strokeWidth={2.6} />
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-tight">
            Apex Care
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#appointment"
            className="hidden rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] md:inline-flex"
            style={{ background: "var(--gradient-primary)" }}
          >
            Book Appointment
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 rounded-2xl glass p-4 shadow-[var(--shadow-soft)] md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* -------------------- Hero -------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100dvh] overflow-hidden pt-28">
      {/* animated gradient blobs */}
      <div className="blob left-[-10%] top-[10%] h-[400px] w-[400px]" style={{ background: "radial-gradient(circle, #0F8B8D 0%, transparent 70%)" }} />
      <div className="blob right-[-10%] top-[20%] h-[500px] w-[500px]" style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)", animationDelay: "3s" }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Text */}
        <motion.div
          style={{ y: y2, opacity }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-foreground/80 shadow-[var(--shadow-soft)]"
          >
            <span className="grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-teal opacity-75" style={{ background: "var(--teal)" }} />
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--teal)" }} />
            </span>
            NABH Accredited · Trusted since 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Your Health.<br />
            <span className="gradient-text italic">Our Priority.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            Compassionate healthcare with experienced doctors, modern facilities,
            and a serene environment designed around your comfort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#appointment"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_80px_-20px_rgba(15,139,141,0.55)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+911234567890"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" style={{ color: "var(--teal)" }} />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            {["24/7 Emergency", "Insurance Accepted", "Online Consults"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" style={{ color: "var(--teal)" }} />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md">
            <div
              className="absolute -inset-6 rounded-[2.5rem] opacity-60 blur-2xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative overflow-hidden rounded-[2.2rem] shadow-[var(--shadow-lift)]">
              <img
                src={heroDoctor}
                alt="Smiling doctor at Apex Care Clinic"
                width={1280}
                height={1600}
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <FloatingIcon className="absolute -left-6 top-10" delay={0}>
              <Stethoscope className="h-6 w-6" style={{ color: "var(--teal)" }} />
            </FloatingIcon>
            <FloatingIcon className="absolute -right-4 top-24" delay={1.2}>
              <Heart className="h-6 w-6" style={{ color: "var(--medical-blue)" }} />
            </FloatingIcon>
            <FloatingIcon className="absolute -left-8 bottom-32" delay={0.6}>
              <Activity className="h-6 w-6" style={{ color: "var(--medical-blue)" }} />
            </FloatingIcon>
            <FloatingIcon className="absolute -right-6 bottom-20" delay={1.8}>
              <Plus className="h-6 w-6" style={{ color: "var(--teal)" }} />
            </FloatingIcon>

            {/* Rating pill */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl glass px-5 py-3 shadow-[var(--shadow-soft)]"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs">
                <div className="font-semibold text-foreground">4.9 · 3,200 reviews</div>
                <div className="text-muted-foreground">Patients love us</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingIcon({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 + delay * 0.15, duration: 0.6, type: "spring" }}
      className={className}
    >
      <div
        className="grid h-14 w-14 place-items-center rounded-2xl glass shadow-[var(--shadow-soft)] floaty"
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* -------------------- Section wrapper -------------------- */
function Section({
  id, eyebrow, title, subtitle, children,
}: { id?: string; eyebrow?: string; title: React.ReactNode; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealBlock className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--teal)" }} />
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          )}
        </RevealBlock>
        {children}
      </div>
    </section>
  );
}

function RevealBlock({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------- Services -------------------- */
const SERVICES = [
  { icon: Stethoscope, name: "General Physician", desc: "Comprehensive checkups and everyday care." },
  { icon: Baby, name: "Pediatrics", desc: "Gentle, expert care for infants to teens." },
  { icon: Flower2, name: "Gynecology", desc: "Compassionate women's health at every stage." },
  { icon: Smile, name: "Dental Care", desc: "Modern dentistry with a calming touch." },
  { icon: Sparkles, name: "Skin Care", desc: "Dermatology and cosmetic wellness." },
  { icon: Microscope, name: "Diagnostics", desc: "Advanced labs, imaging and quick reports." },
  { icon: Dumbbell, name: "Physiotherapy", desc: "Recovery and mobility, personalized." },
];

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title={<>Care crafted for <span className="gradient-text italic">every stage of life.</span></>}
      subtitle="From routine visits to specialist consultations — everything under one calm, modern roof."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <RevealBlock key={s.name} delay={i * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[var(--shadow-card)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: "var(--gradient-soft)" }}
              >
                <s.icon className="h-7 w-7" style={{ color: "var(--teal)" }} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium" style={{ color: "var(--teal)" }}>
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </RevealBlock>
        ))}
      </div>
    </Section>
  );
}

/* -------------------- About with counters -------------------- */
const STATS = [
  { value: 20, suffix: "+", label: "Expert Doctors" },
  { value: 15, suffix: "", label: "Years of Care" },
  { value: 50000, suffix: "+", label: "Happy Patients" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <RevealBlock>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] opacity-50 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
              <img src={clinicInterior} alt="Apex Care Clinic interior" width={1400} height={1000} loading="lazy" className="h-[500px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl glass p-5 shadow-[var(--shadow-soft)] sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">NABH Accredited</div>
                  <div className="text-xs text-muted-foreground">Highest safety standards</div>
                </div>
              </div>
            </div>
          </div>
        </RevealBlock>

        <RevealBlock delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
            About Us
          </div>
          <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">
            A clinic built on <span className="gradient-text italic">trust, warmth</span> and quiet excellence.
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            For over 15 years, Apex Care has united world-class specialists, thoughtful design and honest,
            transparent care — so every visit feels less like a hospital, and more like coming home.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl glass p-5 shadow-[var(--shadow-soft)]">
                <div className="font-display text-4xl text-foreground">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

/* -------------------- Doctors -------------------- */
const DOCTORS = [
  { img: doctor1, name: "Dr. Arjun Mehta", spec: "General Physician", exp: "12 yrs", avail: "Mon – Sat" },
  { img: doctor2, name: "Dr. Hana Wei", spec: "Pediatrician", exp: "9 yrs", avail: "Mon – Fri" },
  { img: doctor3, name: "Dr. Elena Rossi", spec: "Gynecologist", exp: "14 yrs", avail: "Tue – Sat" },
  { img: doctor4, name: "Dr. Kabir Shah", spec: "Dental Surgeon", exp: "10 yrs", avail: "Mon – Sat" },
];

function Doctors() {
  return (
    <Section
      id="doctors"
      eyebrow="Meet the Team"
      title={<>Doctors who <span className="gradient-text italic">listen first.</span></>}
      subtitle="Board-certified specialists with warmth, patience and a modern approach."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DOCTORS.map((d, i) => (
          <RevealBlock key={d.name} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-3 shadow-[var(--shadow-card)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={d.img} alt={d.name} loading="lazy" width={800} height={1000}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl glass p-3 text-xs opacity-0 shadow-[var(--shadow-soft)] transition-all duration-500 group-hover:opacity-100">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" /> {d.avail}
                    </span>
                    <span className="font-semibold" style={{ color: "var(--teal)" }}>{d.exp}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-foreground">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.spec}</p>
                <a
                  href="#appointment"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </RevealBlock>
        ))}
      </div>
    </Section>
  );
}

/* -------------------- Appointment -------------------- */
function Appointment() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", dept: "", doctor: "", date: "", msg: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", phone: "", dept: "", doctor: "", date: "", msg: "" });
  };

  const input = "w-full rounded-2xl border border-white/60 bg-white/70 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 shadow-inner outline-none backdrop-blur transition-all focus:border-transparent focus:ring-2 focus:ring-[color:var(--teal)]/50";

  return (
    <section id="appointment" className="relative py-24 sm:py-32">
      <div className="blob left-[10%] top-[20%] h-[400px] w-[400px]" style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <RevealBlock className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>Book a Visit</div>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">
              Schedule in <span className="gradient-text italic">under a minute.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us a little about you and we'll confirm your appointment by phone within 15 minutes.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Call to book instantly", value: "+91 12345 67890" },
                { icon: Clock, label: "Consulting hours", value: "Mon – Sat · 8am – 9pm" },
                { icon: Ambulance, label: "Emergency", value: "24 / 7 available" },
              ].map((r) => (
                <div key={r.label} className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-soft)" }}>
                    <r.icon className="h-5 w-5" style={{ color: "var(--teal)" }} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{r.label}</div>
                    <div className="font-semibold text-foreground">{r.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealBlock>

          <RevealBlock delay={0.15} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-[2rem] glass p-8 shadow-[var(--shadow-lift)] sm:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="s"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[380px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="grid h-20 w-20 place-items-center rounded-full shadow-[var(--shadow-glow)]"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="mt-6 text-3xl">You're booked!</h3>
                    <p className="mt-2 max-w-sm text-muted-foreground">
                      Our team will call you within 15 minutes to confirm your appointment.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="f"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={submit}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-medium text-foreground/80">Full name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground/80">Phone</label>
                      <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} placeholder="+91 …" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground/80">Preferred date</label>
                      <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={input} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground/80">Department</label>
                      <select required value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })} className={input}>
                        <option value="">Select</option>
                        {SERVICES.map((s) => <option key={s.name}>{s.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground/80">Doctor</label>
                      <select value={form.doctor} onChange={(e) => setForm({ ...form, doctor: e.target.value })} className={input}>
                        <option value="">Any available</option>
                        {DOCTORS.map((d) => <option key={d.name}>{d.name}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-medium text-foreground/80">Message (optional)</label>
                      <textarea rows={3} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} className={input} placeholder="Anything we should know?" />
                    </div>
                    <button
                      type="submit"
                      className="group sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-2xl py-4 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      Confirm Appointment
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Why Us -------------------- */
const REASONS = [
  { icon: ShieldCheck, title: "Experienced Doctors", desc: "Specialists with 10+ years of clinical excellence." },
  { icon: Cpu, title: "Latest Equipment", desc: "State-of-the-art diagnostics and imaging." },
  { icon: Wallet, title: "Affordable Care", desc: "Transparent pricing, no hidden costs." },
  { icon: Video, title: "Online Consultation", desc: "Talk to a doctor from home in minutes." },
  { icon: Ambulance, title: "Emergency Support", desc: "24/7 emergency response you can trust." },
];

function WhyUs() {
  return (
    <Section
      eyebrow="Why Apex Care"
      title={<>The details you can <span className="gradient-text italic">feel.</span></>}
      subtitle="Small touches, thoughtful systems and honest medicine — everything designed around you."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <RevealBlock key={r.title} delay={i * 0.08}>
            <div className="group h-full rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[var(--shadow-card)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
              <div className="relative mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: "var(--gradient-soft)" }}>
                <r.icon className="h-8 w-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ color: "var(--medical-blue)" }} />
              </div>
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </RevealBlock>
        ))}
      </div>
    </Section>
  );
}

/* -------------------- Testimonials -------------------- */
const TESTIMONIALS = [
  { img: patient1, name: "Priya Sharma", role: "Patient · Pediatrics", quote: "Our daughter actually looks forward to her checkups. The team is unbelievably warm and patient." },
  { img: patient2, name: "Rohan Verma", role: "Patient · Cardiology", quote: "Modern, calm, efficient. I've never experienced a clinic that feels this considered from start to finish." },
  { img: patient3, name: "Ananya Iyer", role: "Patient · Dermatology", quote: "Beautiful space and honest advice. I left feeling truly cared for, not upsold." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <Section
      eyebrow="Testimonials"
      title={<>Loved by <span className="gradient-text italic">3,200+ patients.</span></>}
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] glass p-10 shadow-[var(--shadow-lift)] sm:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto flex justify-center">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <img src={t.img} alt={t.name} width={600} height={600} loading="lazy" className="h-12 w-12 rounded-full object-cover shadow-[var(--shadow-soft)]" />
                <div className="text-left">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              aria-label={`Show testimonial ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8" : "w-2 bg-muted-foreground/30"}`}
              style={k === i ? { background: "var(--gradient-primary)" } : undefined}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------- Gallery -------------------- */
const GALLERY = [
  { img: gallery1, span: "row-span-2" },
  { img: gallery2, span: "" },
  { img: gallery5, span: "" },
  { img: gallery3, span: "row-span-2" },
  { img: gallery4, span: "" },
  { img: gallery6, span: "" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <Section
        eyebrow="Inside Apex Care"
        title={<>A space designed to <span className="gradient-text italic">calm you.</span></>}
        subtitle="Take a look at the clinic — bright, spacious and thoughtfully composed."
      >
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((g, i) => (
            <RevealBlock key={i} delay={i * 0.06} className={g.span}>
              <button
                onClick={() => setOpen(g.img)}
                className="group relative h-full w-full overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
              >
                <img src={g.img} alt="Clinic gallery" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </RevealBlock>
          ))}
        </div>
      </Section>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-6 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={open}
              alt="Gallery preview"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-2xl"
            />
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/90">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------- FAQ -------------------- */
const FAQS = [
  { q: "How do I book an appointment?", a: "Use the booking form above, call us at +91 12345 67890, or WhatsApp us anytime — we confirm within 15 minutes." },
  { q: "Do you accept insurance?", a: "Yes, we're empaneled with all major insurers and offer cashless treatment for most plans." },
  { q: "Is emergency care available 24/7?", a: "Absolutely. Our emergency team is on-site round the clock, every day of the year." },
  { q: "Can I consult a doctor online?", a: "Yes. Book an online consultation and speak to any of our specialists via secure video call." },
  { q: "Where are you located?", a: "You'll find us at 42 Wellness Avenue, Bandra West, Mumbai. Ample parking available on-site." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section
      eyebrow="Questions"
      title={<>Frequently <span className="gradient-text italic">asked.</span></>}
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <RevealBlock key={f.q} delay={i * 0.05}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`w-full rounded-2xl border border-white/60 bg-white/70 p-6 text-left shadow-[var(--shadow-card)] backdrop-blur transition-all ${isOpen ? "shadow-[var(--shadow-soft)]" : ""}`}
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} style={{ color: "var(--teal)" }} />
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </RevealBlock>
          );
        })}
      </div>
    </Section>
  );
}

/* -------------------- Contact -------------------- */
function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Visit Us"
      title={<>Come say <span className="gradient-text italic">hello.</span></>}
      subtitle="We're in the heart of Bandra West. Walk in for a tour anytime."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <RevealBlock className="lg:col-span-2">
          <div className="h-full rounded-3xl glass p-8 shadow-[var(--shadow-soft)]">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "42 Wellness Avenue, Bandra West, Mumbai 400050" },
                { icon: Phone, label: "Phone", value: "+91 12345 67890" },
                { icon: Mail, label: "Email", value: "care@apexcare.clinic" },
                { icon: Clock, label: "Hours", value: "Mon – Sat · 8am – 9pm · Sun 9am – 2pm" },
                { icon: Ambulance, label: "Emergency", value: "+91 98765 43210 · 24 / 7" },
              ].map((r) => (
                <div key={r.label} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-soft)" }}>
                    <r.icon className="h-5 w-5" style={{ color: "var(--teal)" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.label}</div>
                    <div className="mt-1 font-medium text-foreground">{r.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>
        <RevealBlock delay={0.15} className="lg:col-span-3">
          <div className="h-full overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
            <iframe
              title="Apex Care Clinic map"
              src="https://www.google.com/maps?q=Bandra+West+Mumbai&output=embed"
              className="h-[480px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealBlock>
      </div>
    </Section>
  );
}

/* -------------------- WhatsApp FAB -------------------- */
function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/911234567890"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-30" />
      <MessageCircle className="relative h-6 w-6 text-white" />
    </a>
  );
}

/* -------------------- Footer -------------------- */
function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/60 bg-gradient-to-b from-transparent to-white/60 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
              <Plus className="h-5 w-5 text-white" strokeWidth={2.6} />
            </span>
            <span className="font-display text-lg font-semibold">Apex Care Clinic</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Compassionate healthcare with experienced doctors and modern facilities. Your health, our priority — always.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-sm items-center gap-2 rounded-full glass p-1.5 shadow-[var(--shadow-soft)]">
            <input aria-label="Email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ background: "var(--gradient-primary)" }}>Subscribe</button>
          </form>
        </div>
        <div>
          <h4 className="font-display text-base">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a className="transition-colors hover:text-foreground" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base">Connect</h4>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Ic, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full glass shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5">
                <Ic className="h-4 w-4" style={{ color: "var(--teal)" }} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">care@apexcare.clinic<br />+91 12345 67890</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border/60 px-4 pt-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Apex Care Clinic. All rights reserved.
      </div>
    </footer>
  );
}
