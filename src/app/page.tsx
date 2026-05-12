"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { type FormEvent, type ReactNode, useState } from "react";

const navItems = [
  { label: "Home" },
  { label: "Plans" },
  { label: "About" },
  { label: "Contact" },
];

const stats = [
  { value: "4,000+", label: "Subscribers" },
  { value: "9", label: "Universities Served" },
  { value: "99%", label: "Uptime Guaranteed" },
];

const whyItems = [
  {
    title: "Honest Pricing",
    desc: "No hidden charges. No exaggerated claims. What you see is what you pay.",
    image: "/assets/home-honest-pricing.png",
    icon: ShieldCheck,
  },
  {
    title: "Real Support",
    desc: "Real people answering. Fast fixes. Technicians 7 days a week.",
    image: "/assets/home-real-support.png",
    icon: Headphones,
  },
  {
    title: "Community Fiber",
    desc: "Fiber that reaches barangays, condos, schools, and local businesses.",
    image: "/assets/home-community-fiber.png",
    icon: Users,
  },
  {
    title: "Zero Fine Print",
    desc: "No asterisks, no lock-in surprises, no runaround. Just reliable internet.",
    image: "/assets/home-zero-fine-print.png",
    icon: CheckCircle,
  },
];

const residentialPlans = [
  {
    name: "Fibex ELITE",
    price: "999",
    speed: "200",
    unit: "Mbps",
    desc: "Perfect for everyday browsing, streaming, and social media.",
    features: ["Unlimited data", "Free installation", "24/7 support", "Low latency"],
  },
  {
    name: "Fibex RUSH",
    price: "1,499",
    speed: "300",
    unit: "Mbps",
    desc: "Faster speeds for remote work, multitasking, and HD video calls.",
    features: ["Unlimited data", "Priority support", "Stable video calls", "Low latency"],
  },
  {
    name: "Fibex BLAZE",
    price: "1,999",
    speed: "400",
    unit: "Mbps",
    desc: "Blazing fast for gaming households and busy families.",
    features: ["Unlimited data", "Priority support", "Gaming-ready", "Free installation"],
    featured: true,
  },
  {
    name: "Fibex TURBO",
    price: "2,499",
    speed: "500",
    unit: "Mbps",
    desc: "Maximum speed for serious streamers, heavy downloaders, and SMEs.",
    features: ["Unlimited data", "VIP support", "Ultra-low latency", "Free installation"],
  },
  {
    name: "Fibex PREMIUM TURBO",
    price: "7,999",
    speed: "1,000",
    unit: "Mbps",
    desc: "Enterprise-grade gigabit fiber for power households.",
    features: ["Unlimited data", "Account manager", "SLA option", "Gigabit performance"],
  },
];

const businessPlans = [
  {
    name: "BUSINESS STARTER",
    price: "2,499",
    speed: "100",
    unit: "Mbps",
    desc: "Reliable fiber for small offices, cafes, and local businesses.",
    features: ["Business support", "Static IP available", "Unlimited data", "Free installation"],
  },
  {
    name: "BUSINESS PLUS",
    price: "2,700",
    speed: "150",
    unit: "Mbps",
    desc: "More bandwidth for growing teams and multi-device workspaces.",
    features: ["Priority support", "Static IP available", "Unlimited data", "Free installation"],
  },
  {
    name: "BUSINESS PRO",
    price: "3,299",
    speed: "200",
    unit: "Mbps",
    desc: "High-performance fiber for clinics, offices, and growing teams.",
    features: ["Dedicated support", "Static IP", "Unlimited data", "Low latency"],
    featured: true,
  },
  {
    name: "BUSINESS TURBO",
    price: "4,999",
    speed: "300",
    unit: "Mbps",
    desc: "Enterprise bandwidth for demanding operations and large teams.",
    features: ["SLA option", "Static IP", "Priority support", "Unlimited data"],
  },
  {
    name: "BUSINESS MAX",
    price: "9,999",
    speed: "500",
    unit: "Mbps",
    desc: "Maximum throughput for large offices and high-volume usage.",
    features: ["Account manager", "SLA + Static IP", "Business support", "Unlimited data"],
  },
];

const testimonials = [
  {
    name: "Maria Santos",
    location: "San Fernando, Pampanga",
    plan: "Fibex BLAZE",
    text: "Finally, an ISP that actually delivers what they promise! I signed up for the BLAZE plan and my connection has been rock-solid since day one. No more buffering during our family video calls.",
  },
  {
    name: "Jomar Reyes",
    location: "Macabebe, Pampanga",
    plan: "Fibex RUSH",
    text: "Nagtatrabaho ako sa bahay at dati palagi akong nag-a-apologize sa mga clients dahil sa connection. Since lumipat sa Fibex, wala na. Consistent speed, laging stable.",
  },
  {
    name: "Cafe de Pampa",
    location: "Apalit, Pampanga",
    plan: "BUSINESS PRO",
    text: "We run a cafe and needed stable WiFi for both our POS system and customers. Fibex Business Pro has been flawless. Installation was fast, support is responsive. Highly recommend!",
  },
  {
    name: "Angelo Cruz",
    location: "Bitas, Pampanga",
    plan: "Fibex TURBO",
    text: "Hindi ko inexpect na ganito ka-consistent ang connection. Gaming, streaming, work — kaya ng kaya. Worth every peso. No hidden charges, exactly as advertised.",
  },
  {
    name: "Dr. Liza Mendoza",
    location: "San Fernando, Pampanga",
    plan: "BUSINESS PLUS",
    text: "Our clinic's telemedicine setup needed a reliable connection. Fibex delivered. The team was professional and the setup was clean. We've had zero downtime in months.",
  },
  {
    name: "Ryan Buenaventura",
    location: "Masantol, Pampanga",
    plan: "Fibex ELITE",
    text: "Matagal na kaming walang maaasahang internet dito sa amin. Fibex ang unang nagbigay ng tunay na fiber sa area namin. Grabe ang improvement sa aming pang-araw-araw.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

const contacts = [
  { label: "Email", value: "sales@fibexph.com", note: "For plan inquiries & applications", icon: Mail },
  { label: "Mobile", value: "0967-348-2428", note: "Call or text anytime", icon: Phone },
  { label: "Hotline", value: "0917-185-4410", note: "Call or text anytime", icon: Phone },
  { label: "Main Office", value: "Boulevard Plaza, Dolores, San Fernando", note: "Head office location", icon: MapPin },
  { label: "Branches", value: "Panipuan, San Fernando; Plaza Macabebe; MacArthur Highway, Apalit; Bitas-Batasan, Macabebe", note: "Serving Pampanga communities", icon: Building2 },
  { label: "Website", value: "www.fibexph.com", note: "Visit us online", icon: Globe2 },
];

type Plan = (typeof residentialPlans)[number];
type PageName = "Home" | "Plans" | "XureCheck" | "About" | "Contact";

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-3 text-[10px] font-bold uppercase tracking-[0.35em] ${light ? "text-white/45" : "text-[#0119FE]"}`}>
      {children}
    </div>
  );
}

function Header({ page, onNav }: { page: PageName; onNav: (page: PageName) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <button className="flex items-center gap-3" onClick={() => onNav("Home")} aria-label="Go to home">
          <Image src="/logos/blue_logo.png" alt="Fibex" width={132} height={48} className="h-8 w-auto" priority />
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={(event) => {
                event.preventDefault();
                onNav(item.label as PageName);
              }}
              className={`text-xs font-semibold uppercase tracking-[0.18em] transition hover:text-[#0119FE] ${
                page === item.label ? "text-[#0119FE]" : "text-black/55"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.button
            onClick={() => onNav("Contact")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0119FE] px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(1,25,254,0.22)] transition hover:bg-[#0014d7]"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        <button className="rounded-full border border-black/10 p-2 md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="border-t border-black/5 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(event) => {
                  event.preventDefault();
                  setMenuOpen(false);
                  onNav(item.label as PageName);
                }}
                className={`w-full rounded-xl px-2 py-2 text-left text-sm font-semibold uppercase tracking-[0.18em] ${
                  page === item.label ? "text-[#0119FE]" : "text-black/65"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onNav("Contact");
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0119FE] px-7 py-4 text-sm font-semibold text-white"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

function Hero({ onNav }: { onNav: (page: PageName) => void }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#ffffff] pt-[68px] lg:min-h-screen">
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:min-h-[calc(100vh-68px)] lg:px-[clamp(2.5rem,4.2vw,5.5rem)] lg:pb-[96px] lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-30 max-w-[560px] text-left lg:absolute lg:left-[clamp(2.5rem,5vw,6rem)] lg:top-[clamp(4rem,10vh,7rem)]"
        >
          <h1 className="font-black leading-[0.92] tracking-[-0.055em] text-black sm:tracking-[-0.065em]" style={{ fontFamily: "Origin Heavy" }}>
            <span className="block text-[clamp(3rem,14vw,5.6rem)] sm:text-[clamp(3.3rem,7vw,5.9rem)]">Zero lags,</span>
            <span className="block text-[clamp(3rem,14vw,5.6rem)] text-[#0119FE] sm:text-[clamp(3.3rem,7vw,5.9rem)]">Stable wins</span>
          </h1>
          <p className="mt-5 max-w-md text-base font-semibold leading-8 text-black/65">Your journey starts here</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0">
            <motion.button
              onClick={() => onNav("Plans")}
              className="inline-flex items-center justify-center rounded-full bg-[#0119FE] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(1,25,254,0.22)] transition hover:bg-[#0014d7] sm:mr-3 sm:px-9 sm:py-5"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.a
              href="#xurecheck"
              onClick={(event) => {
                event.preventDefault();
                onNav("Plans");
              }}
              className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white/75 px-8 py-4 text-base font-semibold text-black backdrop-blur-sm transition hover:bg-black hover:text-white sm:px-9 sm:py-5"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Try XureCheck
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none relative z-10 mx-auto -mt-3 flex min-h-[320px] w-full items-end justify-center overflow-hidden px-2 pt-6 sm:-mt-10 sm:min-h-[500px] sm:px-6 sm:pt-14 md:min-h-[540px] lg:absolute lg:inset-x-0 lg:bottom-[36px] lg:mt-0 lg:min-h-0 lg:overflow-visible lg:px-0 lg:pt-0"
          initial={{ opacity: 0, y: 46 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
        >
          <motion.div className="relative z-10 flex w-full justify-center lg:-translate-x-[clamp(2rem,5vw,6.5rem)] lg:translate-y-[clamp(0rem,1.5vh,1rem)]">
            <Image src="/assets/home-hero.png" alt="Fibex customers" width={1650} height={1820} priority className="h-[350px] w-auto max-w-none object-contain sm:h-[540px] md:h-[600px] lg:h-auto lg:w-[clamp(1060px,76vw,1500px)] lg:max-w-none" />
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 42 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.28 }} className="relative z-30 ml-auto mt-[-4rem] flex max-w-[460px] flex-col items-stretch sm:mt-[-6rem] sm:items-end lg:absolute lg:bottom-[clamp(7rem,14vh,10rem)] lg:right-[clamp(2.5rem,5.6vw,7rem)] lg:mt-0 lg:max-w-[clamp(230px,18vw,340px)]">
          <div className="rounded-[1.5rem] bg-[#0119FE] p-6 text-left shadow-[0_24px_80px_rgba(1,25,254,0.25)] sm:rounded-[1.8rem] sm:p-8 lg:p-[clamp(1.25rem,2vw,2rem)] lg:text-right">
            <p className="font-black leading-[1.03] tracking-[-0.03em] text-white" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(1.85rem,2.75vw,3.4rem)" }}>
              Speed<br />promised.<br />Speed<br />delivered.
            </p>
          </div>
          <div className="mt-4 flex flex-col items-stretch sm:items-start lg:items-end">
            <div className="rounded-full bg-[#F12400] px-6 py-4 text-center text-base font-black text-white sm:px-10 sm:text-lg" style={{ fontFamily: "Origin Heavy" }}>as low as ₱999 / month</div>
            <p className="mt-2 max-w-sm text-sm leading-7 text-black/55 lg:text-right"><strong>Unlimited data.</strong><br />Ideal for everyday streaming, gaming & WFH.</p>
          </div>
        </motion.div>
      </div>
      <div className="relative z-30 bg-black px-5 py-5 text-white lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
        <div className="mx-auto grid w-full grid-cols-1 gap-5 text-center sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + index * 0.12 }} className="border-white/10 sm:border-l first:sm:border-l-0">
              <div className="text-2xl font-black" style={{ fontFamily: "Origin Heavy" }}>{stat.value}</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.32em] text-white/55">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFibex() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Why Fibex</Eyebrow>
        <h2 className="font-black leading-[1.02] tracking-[-0.03em] text-black" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2.4rem,5vw,4rem)" }}>Built different.</h2>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <motion.article className="group h-full overflow-hidden rounded-[1.7rem] border border-black/5 bg-[#f6f6f6] shadow-sm" whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
              <div className="relative h-48 overflow-hidden bg-[#0119FE]">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white p-3 text-[#0119FE]"><item.icon className="h-5 w-5" /></div>
              </div>
              <div className="border-t-2 border-black p-6">
                <h3 className="mb-3 text-xl font-black text-black" style={{ fontFamily: "Origin Heavy" }}>{item.title}</h3>
                <p className="text-sm leading-7 text-black/60">{item.desc}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PlanCard({ plan, index, onApply }: { plan: Plan; index: number; onApply: () => void }) {
  const dark = plan.featured || index % 2 === 1;
  return (
    <motion.article
      layout
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.6rem] p-5 shadow-lg sm:p-7 ${dark ? "bg-[#0119FE] text-white shadow-blue-900/20" : "bg-white text-black shadow-black/5"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.015 }}
    >
      {plan.featured && <div className="absolute right-4 top-4 rounded-full bg-[#F12400] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white sm:right-5 sm:top-5 sm:px-4 sm:text-[10px] sm:tracking-[0.18em]">Popular</div>}
      <p className={`mb-3 text-[10px] font-bold uppercase tracking-[0.35em] ${dark ? "text-white/45" : "text-black/45"}`}>Fibex</p>
      <h3 className="min-h-12 pr-20 text-lg font-black leading-tight sm:text-xl" style={{ fontFamily: "Origin Heavy" }}>{plan.name}</h3>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-[3.25rem] font-black leading-none sm:text-[4rem]" style={{ fontFamily: "Origin Heavy" }}>{plan.speed}</span>
        <span className={`mb-3 text-sm font-semibold ${dark ? "text-white/65" : "text-black/45"}`}>{plan.unit}</span>
      </div>
      <div className="mt-2 text-lg font-semibold">₱{plan.price}<span className="text-sm font-normal opacity-70">/month</span></div>
      <p className={`mt-5 min-h-20 text-sm leading-7 ${dark ? "text-white/68" : "text-black/58"}`}>{plan.desc}</p>
      <div className={`my-5 h-px ${dark ? "bg-white/15" : "bg-black/10"}`} />
      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <CheckCircle className={`h-5 w-5 ${dark ? "text-white" : "text-[#0119FE]"}`} />
            {feature}
          </li>
        ))}
      </ul>
      <button onClick={onApply} className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${dark ? "bg-white text-[#0119FE] hover:bg-white/90" : "bg-[#0119FE] text-white hover:bg-[#0014d7]"}`}>Apply Now</button>
    </motion.article>
  );
}

function HomePlansPreview({ onNav }: { onNav: (page: PageName) => void }) {
  const [category, setCategory] = useState<"residential" | "business" | "dia">("residential");
  const plans = category === "residential" ? residentialPlans : businessPlans;
  const copy = {
    residential: {
      eyebrow: "Residential Plans",
      title: "Honest plans. Real speeds.",
      sub: "From ₱999/mo · Unlimited data · Free installation · No lock-in",
    },
    business: {
      eyebrow: "Business Plans",
      title: "Built for business.",
      sub: "From ₱2,499/mo · Static IP available · Priority support",
    },
  };

  return (
    <section className="bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto flex w-full max-w-3xl overflow-x-auto rounded-full bg-black/10 p-1">
        {[
          { id: "residential", label: "Residential" },
          { id: "business", label: "Business" },
          { id: "dia", label: "Direct Internet Access" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCategory(tab.id as "residential" | "business" | "dia")}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition sm:flex-1 sm:px-6 ${
              category === tab.id ? "bg-[#0119FE] text-white shadow-lg shadow-blue-900/20" : "text-black/55 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {category === "dia" ? (
        <Reveal className="mx-auto mt-10 grid max-w-6xl overflow-hidden rounded-[1.5rem] bg-black text-white sm:mt-12 sm:rounded-[2rem] lg:grid-cols-2">
          <div className="relative min-h-[240px] sm:min-h-[320px]">
            <Image src="/assets/plans-dia.png" alt="Dedicated Internet Access" fill className="object-cover opacity-80" />
          </div>
          <div className="p-6 sm:p-12">
            <div className="mb-5 inline-flex rounded-full bg-[#F12400] px-5 py-2 text-xs font-black uppercase tracking-[0.18em]" style={{ fontFamily: "Origin Heavy" }}>DIA Line</div>
            <h3 className="text-3xl font-black leading-tight sm:text-4xl" style={{ fontFamily: "Origin Heavy" }}>Dedicated Fiber.<br />Just for you.</h3>
            <p className="mt-6 text-sm leading-8 text-white/62">Designed for large establishments that require secure, always-on internet through a dedicated, uncontended fiber connection.</p>
            <button onClick={() => onNav("Plans")} className="mt-8 rounded-full bg-[#0119FE] px-7 py-4 text-sm font-semibold text-white">Learn More & Request a Quote</button>
          </div>
        </Reveal>
      ) : (
        <>
          <Reveal className="mx-auto mt-12 max-w-3xl text-center">
            <Eyebrow>{copy[category].eyebrow}</Eyebrow>
            <h2 className="font-black leading-[1.03] tracking-[-0.03em] text-black" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2.15rem,4vw,3.4rem)" }}>{copy[category].title}</h2>
            <p className="mt-3 text-sm text-black/60">{copy[category].sub}</p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {plans.map((plan, index) => {
              const dark = index % 2 === 1 || plan.featured;
              return (
                <motion.button
                  key={plan.name}
                  onClick={() => onNav("Plans")}
                  className={`rounded-[1.3rem] p-5 text-left shadow-lg transition sm:p-6 ${dark ? "bg-[#0119FE] text-white shadow-blue-900/15" : "bg-white text-black shadow-black/5"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className={`mb-2 text-[9px] font-bold uppercase tracking-[0.32em] ${dark ? "text-white/45" : "text-black/45"}`}>Fibex</div>
                  <div className="mb-4 text-sm font-black leading-tight" style={{ fontFamily: "Origin Heavy" }}>{plan.name.replace("Fibex ", "").replace("BUSINESS ", "")}</div>
                  <div className={`text-4xl font-black leading-none sm:text-5xl ${dark ? "text-white" : "text-[#0119FE]"}`} style={{ fontFamily: "Origin Heavy" }}>{plan.speed}</div>
                  <div className={`mt-1 text-xs ${dark ? "text-white/55" : "text-black/45"}`}>{plan.unit}</div>
                  <div className="mt-5 text-sm font-semibold">₱{plan.price}<span className="text-xs font-normal opacity-70">/mo</span></div>
                </motion.button>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => onNav("Plans")} className="rounded-full bg-[#0119FE] px-8 py-4 text-sm font-semibold text-white">See All Plans</button>
          </div>
        </>
      )}
    </section>
  );
}

function PlansSection({ onApply }: { onApply: () => void }) {
  return (
    <section id="plans" className="scroll-mt-20 bg-white">
      <div className="bg-[#0119FE] px-5 py-16 text-center text-white sm:px-8 sm:py-20 lg:px-12">
        <Reveal className="mx-auto max-w-3xl">
          <Eyebrow light>Fibex Plans</Eyebrow>
          <h1 className="font-black leading-[1.03] tracking-[-0.03em]" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2.5rem,5vw,4.25rem)" }}>Pick your speed.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/70">All plans include unlimited data, free installation, and zero lock-in contracts. Prices exclusive of VAT.</p>
          <div className="mt-5 inline-flex rounded-full bg-[#F12400] px-6 py-2 text-xs font-black uppercase tracking-[0.12em]" style={{ fontFamily: "Origin Heavy" }}>No fine print. Just fast internet.</div>
        </Reveal>
      </div>

      <div className="sticky top-[68px] z-30 flex justify-start overflow-x-auto bg-black sm:justify-center">
        {[
          { href: "#section-residential", label: "Residential" },
          { href: "#section-business", label: "Business" },
          { href: "#section-dia", label: "Direct Internet Access" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 border-b-2 border-transparent px-4 py-4 text-center text-[11px] font-semibold tracking-[0.08em] text-white/45 transition hover:border-[#0119FE] hover:text-white sm:px-8 sm:text-sm">
            {item.label}
          </a>
        ))}
      </div>

      <div id="section-residential" className="scroll-mt-32 bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Eyebrow>Residential Plans</Eyebrow>
          <h2 className="font-black leading-[1.04] tracking-[-0.03em] text-black" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2rem,4vw,3rem)" }}>Honest plans. Real speeds.</h2>
          <p className="mt-3 text-sm text-black/60">Fast fiber installation · Reliable connection · Low latency for gaming & WFH</p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {residentialPlans.slice(0, 3).map((plan, index) => <PlanCard key={plan.name} plan={plan} index={index} onApply={onApply} />)}
        </div>
        <div className="mx-auto mt-5 grid max-w-4xl gap-5 md:grid-cols-2">
          {residentialPlans.slice(3).map((plan, index) => <PlanCard key={plan.name} plan={plan} index={index + 3} onApply={onApply} />)}
        </div>
        <p className="mt-10 text-center text-sm leading-7 text-black/50">Prices exclusive of VAT · Free installation · Low latency · <strong>Apply: sales@fibexph.com</strong></p>
      </div>

      <div id="section-business" className="scroll-mt-32 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <Eyebrow>Business Plans</Eyebrow>
          <h2 className="font-black leading-[1.04] tracking-[-0.03em] text-black" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2rem,4vw,3rem)" }}>Built for business.</h2>
          <p className="mt-3 text-sm text-black/60">Reliable fiber for SMEs, offices, clinics, cafes, and growing teams</p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {businessPlans.slice(0, 3).map((plan, index) => <PlanCard key={plan.name} plan={plan} index={index} onApply={onApply} />)}
        </div>
        <div className="mx-auto mt-5 grid max-w-4xl gap-5 md:grid-cols-2">
          {businessPlans.slice(3).map((plan, index) => <PlanCard key={plan.name} plan={plan} index={index + 3} onApply={onApply} />)}
        </div>
        <p className="mt-10 text-center text-sm leading-7 text-black/50">Business plans include static IP option · Priority support · <strong>sales@fibexph.com</strong></p>
      </div>

      <div id="section-dia" className="scroll-mt-32 bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="mb-5 inline-flex rounded-full bg-[#F12400] px-5 py-2 text-xs font-black uppercase tracking-[0.18em]" style={{ fontFamily: "Origin Heavy" }}>Dedicated Internet Access</div>
            <h2 className="font-black leading-[1.04]" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2rem,4vw,3rem)" }}>Enterprise-grade.<br /><span className="text-[#0119FE]">Uncompromised.</span></h2>
            <p className="mt-6 text-sm leading-8 text-white/60">The DIA Line is designed for large establishments that require high-performance, secure, and always-on internet connectivity. This service provides a dedicated, uncontended fiber connection exclusively assigned to the client — ensuring consistent speeds, low latency, and reliable uptime.</p>
            <button onClick={onApply} className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#0119FE] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0014d7]">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04]">
              <div className="relative h-64">
                <Image src="/assets/plans-dia.png" alt="Dedicated fiber service" fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-black leading-tight sm:text-3xl" style={{ fontFamily: "Origin Heavy" }}>Dedicated Fiber.<br />Just for you.</h3>
                <p className="mt-4 text-sm leading-8 text-white/60">Unlike shared connections, your DIA line is never congested — no matter the time of day. Built for hospitals, universities, government offices, data centers, and large commercial establishments.</p>
                <div className="mt-7 grid gap-3">
                  {["Uncontended bandwidth — never shared", "Symmetrical upload & download speeds", "Static IP address included", "99.9% Uptime SLA", "24/7 monitoring & rapid response", "Dedicated account manager", "Custom enterprise agreements"].map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-white/75"><CheckCircle className="h-5 w-5 text-[#0119FE]" />{point}</div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-8 bg-[#0119FE] px-5 py-12 text-white sm:grid-cols-2 sm:px-8 md:grid-cols-4 lg:px-12">
        {[
          { title: "Fast Installation", desc: "Scheduled within 3–5 business days. No long waits." },
          { title: "Reliable Fiber", desc: "Fiber-optic lines built above industry standards." },
          { title: "Low Latency", desc: "Ideal for gaming, video calls, and real-time apps." },
          { title: "No Hidden Fees", desc: "₱999 means ₱999. No fine print. Ever." },
        ].map((perk, index) => (
          <Reveal key={perk.title} delay={index * 0.05}>
            <div className="border-t-2 border-white/25 pt-6">
              <h3 className="font-black text-lg" style={{ fontFamily: "Origin Heavy" }}>{perk.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">{perk.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Testimonials</Eyebrow>
        <h2 className="font-black leading-[1.03] tracking-[-0.03em] text-black" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2.35rem,5vw,4rem)" }}>What our customers say.</h2>
        <p className="mt-4 text-black/60">Real people. Real speeds. Real satisfaction.</p>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}>
            <motion.article className="flex h-full min-h-[220px] flex-col rounded-2xl bg-[#f5f5f5] p-6 sm:p-7" whileHover={{ y: -6 }}>
              <div className="font-black text-5xl leading-none text-[#e6e9ff]" style={{ fontFamily: "Origin Heavy" }}>&quot;</div>
              <div className="mt-4 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[#F12400] text-[#F12400]" />)}</div>
              <p className="mt-4 flex-1 text-sm leading-7 text-black/70">{item.text}</p>
              <div className="mt-6 flex flex-col gap-4 border-t border-black/10 pt-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black/10 bg-[#0119FE] text-xs font-bold tracking-[0.08em] text-white">
                    {getInitials(item.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-black">{item.name}</div>
                    <div className="mt-1 truncate text-xs text-black/45">{item.location}</div>
                  </div>
                </div>
                <div className="w-fit shrink-0 rounded-md bg-[#e6e9ff] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#0119FE]">{item.plan}</div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutSection({ onNav }: { onNav: (page: PageName) => void }) {
  const aboutStats = [
    { value: "4,000", label: "Subscribers" },
    { value: "9", label: "Universities Served" },
    { value: "2021", label: "Year Established" },
    { value: "99%", label: "Uptime Commitment" },
  ];
  const values = [
    { title: "Honesty", desc: "No hidden charges. No exaggerated claims. Our prices never lie." },
    { title: "Service", desc: "Technicians 7 days a week. 24/7 monitoring. We actually show up." },
    { title: "Community", desc: "Fiber for barangays, schools, homes, cafes, and local businesses." },
    { title: "Fairness", desc: "What you pay for, you actually get. No asterisks and no runaround." },
  ];
  const responsibilities = [
    { title: "Bridge the Digital Divide", desc: "Providing reliable, affordable internet to underserved and rural communities so more Filipinos can access education, jobs, and opportunity." },
    { title: "Support Education", desc: "Supplying 9 universities in Pampanga with dedicated connections, and supporting students with stable, affordable plans." },
    { title: "Empower Local Businesses", desc: "Enabling SMEs, work-from-home entrepreneurs, and sari-sari stores with the connectivity they need to grow." },
    { title: "Serve Local Government", desc: "Providing dedicated fiber lines to municipalities in Pampanga, ensuring safe and reliable service for public institutions." },
    { title: "Community Involvement", desc: "Participating in disaster response, community programs, and local initiatives — not just as a provider, but as a true partner." },
    { title: "Transparent & Responsive", desc: "Fair pricing, honest policies, and quick action during outages — because social responsibility starts with how we treat our customers." },
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-white">
      <div className="relative h-[34vh] min-h-[240px] w-full overflow-hidden sm:h-[42vh] sm:min-h-[300px] lg:h-[56vh] lg:min-h-[420px]">
        <Image
          src="/assets/skyline_about.png"
          alt="Skyline view for Fibex about section"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="grid bg-[#000d99] px-5 text-white sm:grid-cols-2 sm:px-8 md:grid-cols-4 lg:px-12">
        {aboutStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <div className="border-b border-white/15 py-7 sm:py-9 md:border-b-0 md:border-r md:pl-6 last:border-b-0 last:md:border-r-0">
              <div className="font-black leading-none" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2rem,4vw,2.5rem)" }}>{stat.value}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.32em] text-white/50">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-12 lg:py-28">
        <Reveal>
          <Eyebrow>Our Story</Eyebrow>
          <h3 className="text-3xl font-black leading-tight text-black sm:text-4xl" style={{ fontFamily: "Origin Heavy" }}>Started with a simple belief.</h3>
          <div className="mt-7 space-y-5 text-sm leading-8 text-black/62">
            <p>Fibex began with the conviction that every Filipino deserves internet that is honest, reliable, and truly felt.</p>
            <p>No fine print. No exaggerated claims. Just clear plans, fair pricing, and customer care that actually shows up.</p>
            <p>What began as a challenger brand grew into a movement for fairness and transparency across households, students, and businesses.</p>
          </div>
        </Reveal>
        <div className="grid gap-5">
          {[
            { title: "Est. 2021", desc: "Established in Pampanga with a mission to make honest fiber accessible." },
            { title: "Built for Pampanga", desc: "Serving San Fernando, Santo Tomas, Minalin, Apalit, San Simon, Macabebe, and Masantol." },
            { title: "Registered & Secure", desc: "A duly registered corporation with a network built above industry standards." },
          ].map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <motion.div className="rounded-[1.4rem] bg-[#f5f5f5] p-7" whileHover={{ x: 8 }}>
                <h4 className="mb-2 text-xl font-black" style={{ fontFamily: "Origin Heavy" }}>{card.title}</h4>
                <p className="text-sm leading-7 text-black/60">{card.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <MissionCard image="/assets/about-quality-service.png" label="Mission" title="Highest quality. Honest service." />
          <MissionCard image="/assets/about-difference.png" label="Vision" title="Separate from the rest." dark />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <Reveal className="text-center"><h3 className="text-3xl font-black text-black sm:text-4xl" style={{ fontFamily: "Origin Heavy" }}>Built on values.</h3></Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <div className="border-t-2 border-black pt-6"><h4 className="mb-3 text-2xl font-black" style={{ fontFamily: "Origin Heavy" }}>{value.title}</h4><p className="text-sm leading-7 text-black/60">{value.desc}</p></div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Social Responsibility</Eyebrow>
          <h3 className="font-black leading-[1.04] text-black" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2.25rem,4vw,3rem)" }}>More than just internet.</h3>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {responsibilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <motion.div className="h-full rounded-[1.25rem] border-t-2 border-[#0119FE] bg-white p-7" whileHover={{ y: -6 }}>
                <h4 className="mb-3 text-sm font-semibold text-black">{item.title}</h4>
                <p className="text-sm leading-7 text-black/60">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBanner onNav={onNav} />
    </section>
  );
}

function MissionCard({ image, label, title, dark = false }: { image: string; label: string; title: string; dark?: boolean }) {
  return (
    <Reveal>
      <div className={`overflow-hidden rounded-[1.7rem] text-white ${dark ? "bg-[#000d99]" : "bg-[#0119FE]"}`}>
        <Image src={image} alt={title} width={800} height={460} className="h-48 w-full object-cover sm:h-56" />
        <div className="p-6 sm:p-8">
          <Eyebrow light>{label}</Eyebrow>
          <h3 className="text-2xl font-black sm:text-3xl" style={{ fontFamily: "Origin Heavy" }}>{title}</h3>
          <p className="mt-4 text-sm leading-8 text-white/70">We build reliable fiber service with transparent pricing, practical support, and a network designed to keep communities connected.</p>
        </div>
      </div>
    </Reveal>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const hours = [
    { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="bg-[#0119FE] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow light>Contact Fibex</Eyebrow>
            <h2 className="font-black leading-[1] tracking-[-0.03em]" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(3rem,6vw,5rem)" }}>We&apos;re here.<br />Let&apos;s connect.</h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/68">Tell us where you are, what you need, and our team will help you get connected.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Image src="/assets/contact-customer-service.png" alt="Fibex customer service" width={760} height={520} className="h-auto w-full rounded-[1.5rem] object-cover shadow-2xl sm:rounded-[2rem]" />
          </Reveal>
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#0119FE] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-xl lg:ml-auto">
            <h3 className="mb-10 text-3xl font-black" style={{ fontFamily: "Origin Heavy" }}>Get in touch.</h3>
            <div className="grid gap-7">{contacts.map((contact) => <ContactItem key={contact.label} {...contact} />)}</div>
            <div className="mt-10 border-t border-white/20 pt-8">
              <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.34em] text-white/38">Office Hours</div>
              <div className="grid gap-3">
                {hours.map((row) => (
                  <div key={row.day} className="flex flex-col gap-1 text-sm text-white/60 min-[420px]:flex-row min-[420px]:justify-between min-[420px]:gap-6">
                    <span className="font-semibold text-white">{row.day}</span>
                    <span>{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-2xl lg:mr-auto">
            {submitted ? (
              <Reveal>
                <div className="rounded-[1.8rem] bg-white p-6 shadow-sm sm:p-9">
                  <div className="mb-5 inline-flex rounded-full bg-[#0119FE] px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-white" style={{ fontFamily: "Origin Heavy" }}>Message received.</div>
                  <h3 className="text-3xl font-black text-black sm:text-4xl" style={{ fontFamily: "Origin Heavy" }}>We&apos;ll be in touch soon.</h3>
                  <p className="mt-5 text-sm leading-8 text-black/62">Thanks for reaching out. Our team will get back to you within 1-2 business days.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 rounded-full bg-[#0119FE] px-7 py-4 text-sm font-semibold text-white">Send Another Message</button>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handleSubmit} className="rounded-[1.8rem] bg-white p-6 shadow-sm sm:p-9">
                  <h3 className="text-3xl font-black text-black" style={{ fontFamily: "Origin Heavy" }}>Apply or inquire.</h3>
                  <p className="mt-2 text-sm text-black/50">Fill out the form and our team will get back to you within 1-2 business days.</p>
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" placeholder="Juan dela Cruz" required />
                    <Field label="Phone Number" placeholder="09XX-XXX-XXXX" />
                  </div>
                  <div className="mt-5"><Field label="Email Address" type="email" placeholder="juan@email.com" required /></div>
                  <label className="mt-5 block text-xs font-semibold tracking-[0.04em] text-black">Interested Plan</label>
                  <select className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#0119FE]">
                    <option>Select a plan...</option>
                    {[...residentialPlans, ...businessPlans].map((plan) => <option key={plan.name}>{plan.name} (₱{plan.price} / {plan.speed} {plan.unit})</option>)}
                    <option>Dedicated Internet Access</option>
                  </select>
                  <label className="mt-5 block text-xs font-semibold tracking-[0.04em] text-black">Message</label>
                  <textarea required rows={5} placeholder="Tell us your address, questions, or how we can help..." className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#0119FE]" />
                  <button className="mt-6 w-full rounded-full bg-[#0119FE] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0014d7]">Send Message</button>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text", required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-[0.04em] text-black">{label}{required ? " *" : ""}</label>
      <input required={required} type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#0119FE]" />
    </div>
  );
}

function ContactItem({ label, value, note, icon: Icon }: { label: string; value: string; note: string; icon: LucideIcon }) {
  return (
    <motion.div className="flex gap-4" whileHover={{ x: 5 }}>
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/15"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.34em] text-white/38">{label}</div>
        <div className="text-sm font-semibold leading-6">{value}</div>
        <div className="mt-1 text-xs leading-5 text-white/45">{note}</div>
      </div>
    </motion.div>
  );
}

function CtaBanner({ onNav }: { onNav: (page: PageName) => void }) {
  return (
    <section className="bg-[#0119FE] px-5 py-16 text-center text-white sm:px-8 sm:py-20 lg:px-12">
      <Reveal>
        <Eyebrow light>Ready?</Eyebrow>
        <h2 className="font-black leading-[1.04]" style={{ fontFamily: "Origin Heavy", fontSize: "clamp(2.5rem,5vw,4rem)" }}>WiFi for all.</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/65">Fast, reliable, and honest — for every home and business.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={() => onNav("Plans")} className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0119FE]">See Plans</button>
          <button onClick={() => onNav("Contact")} className="rounded-full border border-white/55 px-8 py-4 text-sm font-semibold text-white">Apply Now</button>
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ onNav }: { onNav: (page: PageName) => void }) {
  return (
    <footer className="bg-[#0119FE] px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logos/white_logo.png" alt="Fibex" width={230} height={92} className="h-auto w-[180px] sm:w-[230px]" />
          </div>
          <div className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-white/70 sm:text-base">True Speed. True Connection.</div>
          <p className="mt-5 max-w-md text-base leading-8 text-white/82 sm:text-lg">Honest, fast fiber internet for every Filipino household. No hidden fees. No runaround. Just real speed.</p>
        </div>
        <FooterColumn title="Plans" items={["Plans"]} onNav={onNav} />
        <FooterColumn title="Company" items={["About", "Contact"]} onNav={onNav} />
        <div><h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Contact</h4><div className="grid gap-3 text-sm text-white/85"><span>sales@fibexph.com</span><span>0967-348-2428</span><span>0917-185-4410</span><span>www.fibexph.com</span></div></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-5 border-t border-white/20 pt-7 text-xs text-white/68 sm:flex-row sm:items-center"><span>© 2025 Fibex Broadband Inc. All rights reserved. Philippines.</span><span className="w-fit rounded-full bg-[#F12400] px-5 py-2 font-black text-white" style={{ fontFamily: "Origin Heavy" }}>WiFi for All.</span></div>
    </footer>
  );
}

function FooterColumn({ title, items, onNav }: { title: string; items: PageName[]; onNav: (page: PageName) => void }) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{title}</h4>
      <div className="grid gap-3 text-sm text-white/85">
        {items.map((item) => {
          return <button key={item} onClick={() => onNav(item)} className="text-left transition hover:text-white">{item}</button>;
        })}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [page, setPage] = useState<PageName>("Home");

  function navigate(nextPage: PageName) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Header page={page} onNav={navigate} />
      {page === "Home" && (
        <>
          <Hero onNav={navigate} />
          <WhyFibex />
          <HomePlansPreview onNav={navigate} />
          <Testimonials />
          <CtaBanner onNav={navigate} />
        </>
      )}
      {page === "Plans" && (
        <div className="pt-[68px]">
          <PlansSection onApply={() => navigate("Contact")} />
        </div>
      )}
      {page === "About" && (
        <div className="pt-[68px]">
          <AboutSection onNav={navigate} />
        </div>
      )}
      {page === "Contact" && (
        <div className="pt-[68px]">
          <ContactSection />
        </div>
      )}
      <Footer onNav={navigate} />
    </main>
  );
}
