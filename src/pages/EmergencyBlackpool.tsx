import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Drop, Wind, Warning, House, CloudRain, Fire, DropHalf, Lightning,
  Phone, MapPin, Wrench, ShieldCheck, Clock, SealCheck
} from "@phosphor-icons/react";

const emergencyAreas = [
  { name: "Blackpool", slug: "blackpool" },
  { name: "Thornton-Cleveleys", slug: "thornton-cleveleys" },
  { name: "Poulton-le-Fylde", slug: "poulton-le-fylde" },
  { name: "Lytham St Annes", slug: "lytham-st-annes" },
  { name: "Fleetwood", slug: "fleetwood" },
  { name: "Ormskirk", slug: "ormskirk" },
  { name: "Southport", slug: "southport" },
  { name: "Preston", slug: "preston" },
  { name: "Wigan", slug: "wigan" },
  { name: "Chorley", slug: "chorley" },
  { name: "Windermere", slug: "windermere" },
  { name: "Kendal", slug: "kendal" },
  { name: "Keswick", slug: "keswick" },
  { name: "Lancaster", slug: "lancaster" },
];

const emergencyCards = [
  { icon: Drop, title: "Active Roof Leak", text: "Water coming through your ceiling or walls needs immediate attention." },
  { icon: Wind, title: "Storm Damage", text: "High winds have lifted, cracked, or removed tiles or slates from your roof." },
  { icon: Warning, title: "Fallen Tiles or Slates", text: "Missing tiles leave your roof exposed and are a safety hazard to people below." },
  { icon: House, title: "Structural Roof Damage", text: "Visible sagging, buckling, or collapse of any part of the roof structure." },
  { icon: CloudRain, title: "Felt or Membrane Exposed", text: "Roof felt or membrane is visible. Your roof is no longer weatherproof." },
  { icon: Fire, title: "Chimney Damage", text: "A cracked, leaning, or collapsed chimney stack is dangerous and urgent." },
  { icon: DropHalf, title: "Gutters Causing Water Damage", text: "Collapsed or blocked gutters sending water into your walls or foundations." },
  { icon: Lightning, title: "Post-Storm Inspection", text: "After severe coastal weather, a drone inspection confirms what's been damaged." },
];

const faqs = [
  { q: "How quickly can you get to me for an emergency roof repair in Blackpool?", a: "We aim to respond to emergency call-outs in Blackpool within the hour. We are based in Blackpool so response times across the Fylde Coast are fast. For properties slightly further afield (Preston, Wigan, or the Lake District) response times may be slightly longer but we always aim to reach you the same day." },
  { q: "Do you charge a call-out fee for emergency repairs in Blackpool?", a: "We do not charge a separate call-out fee. We will assess the damage when we arrive and provide you with a clear, transparent quote for any work needed before we begin. There are no hidden charges." },
  { q: "What should I do while waiting for the emergency roofer to arrive?", a: "If water is coming in, place buckets to collect it and move valuables away from the affected area. If tiles have fallen into a public area or onto a car, call us immediately and we will treat it as the highest priority. Do not attempt to get onto the roof yourself. This is dangerous, especially in the wet or windy conditions that often cause roof emergencies in Blackpool." },
  { q: "Can you fix my roof permanently during an emergency call-out?", a: "It depends on the extent of the damage and the materials required. In most cases we will make your roof immediately weatherproof and safe during the emergency visit, then arrange to return for any full repair or replacement work once materials have been sourced. We will always explain exactly what we have done and what is needed next." },
  { q: "Do you cover emergency roof repairs across the whole of Blackpool?", a: "Yes. We cover all areas of Blackpool including Bispham, Norbreck, South Shore, North Shore, Layton, Marton, Staining, and all surrounding Fylde Coast areas. We also cover Preston, Wigan, Southport, Lancaster, and across Cumbria and the Lake District." },
  { q: "Is your emergency roof repair service available on weekends and bank holidays?", a: "Yes. Our emergency call-out service runs 24 hours a day, 7 days a week, 365 days a year including all bank holidays and Christmas. Coastal storms do not respect bank holidays and neither do we." },
];

const EmergencyBlackpool = () => {
  const whatRef = useScrollReveal<HTMLElement>(0.15);
  const howRef = useScrollReveal<HTMLElement>(0.15);
  const areasRef = useScrollReveal<HTMLElement>(0.15);
  const faqRef = useScrollReveal<HTMLElement>(0.15);

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://www.lakesideroofinggroup.co.uk/emergency-roof-repair-blackpool";

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
    robots.content = "index, follow";

    const bcSchema = document.createElement("script");
    bcSchema.type = "application/ld+json";
    bcSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/" } },
        { "@type": "ListItem", position: 2, name: "Emergency Roof Repair Blackpool", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/emergency-roof-repair-blackpool" } },
      ],
    });
    document.head.appendChild(bcSchema);

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How quickly can you get to me for an emergency roof repair in Blackpool?", acceptedAnswer: { "@type": "Answer", text: "We aim to respond to emergency call-outs in Blackpool within the hour. We are based in Blackpool so response times across the Fylde Coast are fast." } },
        { "@type": "Question", name: "Do you charge a call-out fee for emergency repairs in Blackpool?", acceptedAnswer: { "@type": "Answer", text: "We do not charge a separate call-out fee. We will assess the damage when we arrive and provide you with a clear, transparent quote for any work needed before we begin." } },
        { "@type": "Question", name: "What should I do while waiting for the emergency roofer to arrive?", acceptedAnswer: { "@type": "Answer", text: "If water is coming in, place buckets to collect it and move valuables away from the affected area. Do not attempt to get onto the roof yourself. This is dangerous, especially in wet or windy conditions." } },
        { "@type": "Question", name: "Can you fix my roof permanently during an emergency call-out?", acceptedAnswer: { "@type": "Answer", text: "In most cases we will make your roof immediately weatherproof and safe during the emergency visit, then arrange to return for any full repair or replacement work once materials have been sourced." } },
        { "@type": "Question", name: "Is your emergency roof repair service available on weekends and bank holidays?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our emergency call-out service runs 24 hours a day, 7 days a week, 365 days a year including all bank holidays and Christmas." } },
      ],
    });
    document.head.appendChild(faqSchema);

    return () => {
      canonical?.remove();
      robots?.remove();
      bcSchema?.remove();
      faqSchema?.remove();
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Emergency Roof Repair Blackpool: 24 Hour Roofer | Lake Side Roofing Group"
        description="Emergency roof repair in Blackpool, available 24 hours, 7 days a week. Leaks, storm damage, fallen tiles. Call Lake Side Roofing Group now: 07480 104865."
      />

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#DC2626" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="container-content relative z-10 py-20 md:py-[140px] text-center">
          <Breadcrumbs items={[
            { name: "Home", href: "/" },
            { name: "Emergency Roof Repair Blackpool" },
          ]} />

          <h1 className="anim-hero-h1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Emergency Roof Repair in Blackpool
          </h1>
          <p className="anim-hero-sub text-lg md:text-xl text-white/90 font-sans max-w-2xl mx-auto mb-6">
            Available 24 Hours, 7 Days a Week, Including Weekends &amp; Bank Holidays
          </p>

          <a
            href="tel:07480104865"
            className="anim-hero-cta block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight hover:scale-105 transition-transform mb-4"
          >
            07480 104865
          </a>

          <p className="text-white/80 font-sans text-base md:text-lg max-w-xl mx-auto mb-8">
            Leaking roof? Storm damage? Tiles fallen? Call now. We aim to respond within the hour.
          </p>

          <a
            href="tel:07480104865"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[hsl(0,72%,45%)] rounded-sm font-sans font-bold text-lg transition-all hover:scale-[1.03] active:scale-95 emergency-phone"
          >
            <Phone size={24} weight="bold" />
            Call Now: 07480 104865
          </a>

          {/* Trust strip */}
          <div className="mt-10 py-4 flex flex-wrap justify-center gap-6 text-white/90 font-heading uppercase tracking-widest" style={{ fontSize: "13px" }}>
            {["24/7 Cover", "Blackpool Based", "Aim to Respond Within the Hour", "Fully Insured", "All Work Guaranteed"].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <ShieldCheck size={20} weight="duotone" className="text-white" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — STICKY MOBILE CALL BAR */}
      <a
        href="tel:07480104865"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[hsl(0,72%,45%)] text-white text-center py-3 font-sans font-bold text-sm tracking-wide"
      >
        🔴 Emergency Roofer Blackpool. Call Now: 07480 104865
      </a>

      {/* SECTION 3 — WHAT COUNTS AS AN EMERGENCY */}
      <section ref={whatRef} className="scroll-reveal py-12 md:py-20" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl text-foreground mb-3">Is Your Roof an Emergency?</h2>
          <div className="heading-rule" />
          <p className="text-muted-foreground font-sans max-w-3xl mb-10">
            If any of the following apply to your property in Blackpool or the Fylde Coast, call us immediately on{" "}
            <a href="tel:07480104865" className="text-[hsl(0,72%,45%)] font-semibold hover:underline">07480 104865</a>.
            Do not wait. Roof emergencies get worse and more expensive the longer they are left.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {emergencyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: "1px solid #E5E5E0", borderRadius: "8px", padding: "20px" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderTop = "3px solid #DC2626"; e.currentTarget.style.paddingTop = "18px"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderTop = "1px solid #E5E5E0"; e.currentTarget.style.paddingTop = "20px"; }}
              >
                <card.icon size={32} weight="duotone" style={{ color: "#DC2626" }} />
                <h3 className="font-heading font-bold uppercase tracking-wide" style={{ fontSize: "14px", color: "#111111" }}>{card.title}</h3>
                <p className="font-sans leading-relaxed" style={{ fontSize: "13px", color: "#6B7280" }}>{card.text}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground font-sans max-w-3xl mt-10">
            Blackpool's coastal location means storm events are more frequent and more damaging than inland areas. Salt-laden winds off the Irish Sea accelerate roof wear and increase the risk of sudden failures, especially on older properties in Layton, Marton, North Shore, and Bispham. If you are in any doubt, call us and we will advise you honestly.
          </p>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section ref={howRef} className="scroll-reveal section-dark section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-3">How Our Emergency Call-Out Works</h2>
          <div className="heading-rule-center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-10">
            {[
              { icon: Phone, title: "1. Call Us Now", text: "Call 07480 104865 any time, day or night. We answer 24 hours a day, 7 days a week. No answerphone, no waiting." },
              { icon: MapPin, title: "2. We Come to You", text: "We dispatch to your Blackpool property as fast as possible. We aim to be with you within the hour for urgent call-outs across the Fylde Coast." },
              { icon: Wrench, title: "3. We Make it Safe", text: "We assess the damage, make your roof weatherproof immediately, and provide a full written quote for any permanent repair work needed." },
            ].map((step) => (
              <div key={step.title} className="flex flex-col items-center gap-4">
                <step.icon size={48} weight="duotone" className="text-[hsl(var(--accent-gold))]" />
                <h3 className="font-heading font-bold uppercase tracking-wide text-white" style={{ fontSize: "16px" }}>{step.title}</h3>
                <p className="font-sans leading-relaxed max-w-xs" style={{ fontSize: "14px", color: "#C4C4D4" }}>{step.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 font-sans font-bold text-center" style={{ fontSize: "15px", color: "#D4A843" }}>
            All emergency work is fully insured and backed by our written workmanship guarantee.
          </p>
        </div>
      </section>

      {/* SECTION 5 — SECOND PHONE CTA */}
      <section style={{ backgroundColor: "#DC2626" }} className="py-12 md:py-16">
        <div className="container-content text-center">
          <p className="text-white font-sans mb-4" style={{ fontSize: "18px" }}>Don't wait. Every minute counts with a roof emergency.</p>
          <a href="tel:07480104865" className="block font-display font-bold text-white tracking-tight hover:scale-105 transition-transform mb-6" style={{ fontSize: "clamp(36px, 5vw, 48px)" }}>
            07480 104865
          </a>
          <a
            href="tel:07480104865"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-sm font-sans font-bold text-lg transition-all hover:scale-[1.03] active:scale-95"
            style={{ backgroundColor: "white", color: "#DC2626" }}
          >
            <Phone size={22} weight="bold" />
            Call Now
          </a>
        </div>
      </section>

      {/* SECTION 6 — AREAS COVERED */}
      <section ref={areasRef} className="scroll-reveal py-12 md:py-20" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl text-foreground mb-3">Emergency Roof Repair: Areas We Cover from Blackpool</h2>
          <div className="heading-rule" />
          <p className="text-muted-foreground font-sans max-w-3xl mb-8">
            We provide 24-hour emergency roof repair call-outs from our Blackpool base across the following areas. If you are unsure whether we cover your location, call us. We will always try to help.
          </p>
          <div className="flex flex-wrap gap-3">
            {emergencyAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/locations/${area.slug}`}
                className="px-4 py-2 bg-card border border-border rounded-sm font-sans text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section ref={faqRef} className="scroll-reveal section-padding bg-background">
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-foreground mb-3 text-center">Emergency Roof Repair Blackpool: Frequently Asked Questions</h2>
          <div className="heading-rule-center" />
          <div className="space-y-0">
            {faqs.map((item, i) => (
              <details key={i} className="group" style={{ borderBottom: "1px solid #E5E5E0" }}>
                <summary className="flex items-center justify-between cursor-pointer px-0 py-4 font-sans font-bold hover:opacity-80 transition-opacity" style={{ fontSize: "15px", color: "#111111" }}>
                  {item.q}
                  <span className="ml-4 text-lg transition-transform group-open:rotate-180 shrink-0">▾</span>
                </summary>
                <div className="font-sans leading-relaxed" style={{ fontSize: "14px", color: "#6B7280", paddingBottom: "16px" }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="section-dark section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-3">Your Roof Can't Wait. Neither Can We</h2>
          <div className="heading-rule-center" />
          <p className="text-[hsl(var(--text-light-muted))] font-sans mb-6">
            Based in Blackpool. Available now. Free call-out assessment.
          </p>
          <a href="tel:07480104865" className="block text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[hsl(var(--accent-gold))] tracking-tight hover:scale-105 transition-transform mb-8">
            07480 104865
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:07480104865"
              className="btn-primary gap-2"
            >
              <Phone size={20} weight="bold" />
              Call Now: 07480 104865
            </a>
            <Link to="/book" className="btn-secondary border-[hsl(var(--accent-gold))] text-[hsl(var(--accent-gold))] hover:bg-[hsl(var(--accent-gold))] hover:text-secondary">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom spacer for sticky mobile bar */}
      <div className="h-12 md:hidden" />
    </Layout>
  );
};

export default EmergencyBlackpool;
