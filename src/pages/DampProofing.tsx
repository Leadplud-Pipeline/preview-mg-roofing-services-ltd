import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locations } from "@/data/locations";
import {
  ArrowCircleUp, CloudRain, Thermometer, MagnifyingGlass, MapPin,
  House, ShieldCheck, Check, Phone, Wrench, Fire, Hammer
} from "@phosphor-icons/react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const trustBadges = [
  "Free Damp Survey",
  "No Obligation Quote",
  "Blackpool Based",
  "30+ Years Experience",
  "All Work Guaranteed",
  "Fully Insured",
];

const dampTypes = [
  {
    icon: ArrowCircleUp,
    title: "Rising Damp",
    desc: "Rising damp occurs when groundwater travels upward through walls and floors via capillary action. It is identified by tide marks on walls — typically appearing around one metre from floor level — peeling plaster, damaged skirting boards, and a persistent musty smell at ground level. In Blackpool's older Victorian and Edwardian terraced properties, original damp proof courses often fail or become bridged over time, allowing rising damp to take hold. We install new damp proof courses using chemical injection treatment and re-plaster affected walls to permanently resolve the problem.",
  },
  {
    icon: CloudRain,
    title: "Penetrating Damp",
    desc: "Penetrating damp enters horizontally through the external fabric of the building — through walls, around window and door frames, through failing pointing, or via roof and chimney defects. It is the most common type of damp in Blackpool's coastal properties because salt-laden winds off the Irish Sea constantly attack mortar joints and render, opening up microscopic pathways for moisture to enter. Unlike rising damp, penetrating damp can appear at any height on a wall. We identify every entry point, seal them permanently, and treat any internal damage.",
  },
  {
    icon: Thermometer,
    title: "Condensation Damp",
    desc: "Condensation is the most common form of damp in UK homes and is particularly prevalent in Blackpool's coastal climate where humidity levels are consistently higher than inland areas. It occurs when warm, moist air meets cold surfaces — causing water droplets to form on walls, windows, and ceilings. Left untreated, condensation leads to black mould growth, damaged plaster, and health problems including respiratory issues. We identify the root cause of your condensation problem and provide the right ventilation and treatment solution — not just a surface fix.",
  },
];

const includedItems = [
  { label: "Free Property Damp Survey", desc: "Full inspection of your Blackpool property to identify every source and type of damp — at no charge." },
  { label: "Moisture Testing & Diagnosis", desc: "We use professional moisture meters and testing equipment to accurately diagnose the type and extent of your damp problem." },
  { label: "Written Survey Report & Quote", desc: "A full written report detailing our findings and a clear, itemised quote for all recommended work — no hidden costs." },
  { label: "Chemical Damp Proof Course Injection", desc: "Industry-standard chemical DPC injection treatment for rising damp — creating a permanent moisture barrier in your walls." },
  { label: "Waterproof Render & Replastering", desc: "Salt-resistant tanking plaster and waterproof render applied after treatment to restore walls to a dry, finished condition." },
  { label: "Penetrating Damp Sealing", desc: "Identification and permanent sealing of all external entry points — pointing, render, window frames, and wall abutments." },
  { label: "Black Mould Treatment & Removal", desc: "Professional treatment and removal of existing black mould, with advice on preventing regrowth." },
  { label: "Condensation & Ventilation Solutions", desc: "Where condensation is the cause, we install the correct ventilation solution — from PIV units to extractor fans and passive vents." },
  { label: "Coastal-Specific Material Specification", desc: "We use corrosion-resistant, salt-tolerant materials on all Blackpool and Fylde Coast jobs — not standard inland treatments." },
  { label: "Full Written Workmanship Guarantee", desc: "All damp proofing work carries a full written workmanship guarantee for your complete peace of mind." },
];

const whyChooseCards = [
  { icon: MagnifyingGlass, title: "Free Survey — No Charge Ever", text: "We never charge for damp surveys. Some companies charge up to £79 just to visit your property. Our survey, moisture testing, written report, and quote are all completely free — with no obligation to proceed." },
  { icon: MapPin, title: "Blackpool Based — Fast Response", text: "We are based in Blackpool. That means faster response times, genuine local knowledge of Fylde Coast properties, and real accountability to our local community." },
  { icon: House, title: "Roof & Damp Under One Roof", text: "No other company in Blackpool offers both roofing and damp proofing. We fix the external cause and treat the internal damage — one company, one call, one guarantee." },
  { icon: ShieldCheck, title: "30+ Years Coastal Experience", text: "Three decades treating damp in Blackpool's coastal properties. We know these buildings, these conditions, and the right materials to use in a salt air environment." },
];

const faqs = [
  { q: "Is your damp survey really free in Blackpool?", a: "Yes — completely free. There is no charge for our damp survey, moisture testing, written report, or quote. Some damp proofing companies in Lancashire charge up to £79 for a survey. We do not charge anything. We are confident that once you see the quality of our survey and the transparency of our written report, you will want to proceed with us — but that is entirely your choice. Call us on 07480 104865 or book online to arrange your free survey." },
  { q: "What is rising damp and how do I know if I have it?", a: "Rising damp occurs when groundwater travels upward through your walls via capillary action. The most common signs are tide marks on walls at around one metre from floor level, peeling wallpaper or paint at low level, a persistent musty smell, damaged or rotting skirting boards, and white salt deposits on brickwork. If you notice any of these signs in your Blackpool property, call us for a free survey." },
  { q: "Why is damp worse in Blackpool than inland areas?", a: "Blackpool's coastal location means properties are exposed to salt-laden air off the Irish Sea, higher humidity levels, and more frequent wind-driven rain than inland Lancashire. Salt air accelerates the breakdown of mortar and render, opening pathways for moisture to penetrate walls. Many of Blackpool's Victorian and Edwardian properties also have ageing or failed damp proof courses that are no longer providing adequate protection." },
  { q: "How long does damp proofing take?", a: "The duration depends on the type and extent of damp. A chemical damp proof course injection for a standard Blackpool terraced property typically takes one to two days. Where replastering is required, the job may take three to five days in total. We will give you a clear, realistic timeline as part of your written quote before any work begins." },
  { q: "Can you fix both the roof and the damp?", a: "Yes — this is one of our key advantages over specialist damp proofing companies. Many damp problems start with a roofing defect such as failed flashing, cracked ridge tiles, or blocked guttering. We can repair the external roofing cause and treat the internal damp damage in one package. One company, one call, one guarantee." },
  { q: "Do you treat black mould as part of your damp proofing service?", a: "Yes — black mould treatment and removal is included as part of our damp proofing service. We treat existing mould, apply anti-fungal treatments, and address the underlying damp cause to prevent regrowth. Simply treating mould without fixing the damp that causes it is a temporary fix — we always treat the source." },
  { q: "Is your damp proofing work guaranteed?", a: "Yes — all our damp proofing work comes with a full written workmanship guarantee. We will also advise you on any ongoing maintenance required to keep your property protected long term." },
  { q: "Do you cover all areas of Blackpool for damp proofing?", a: "Yes — we cover the whole of Blackpool including Bispham, Norbreck, Layton, Marton, South Shore, North Shore, and all surrounding Fylde Coast areas. We also cover Preston, Ormskirk, Southport, Wigan, Lancaster, and across Cumbria and the Lake District." },
];

const relatedServices = [
  { name: "Emergency Roof Repairs", text: "Many damp problems start with a roof defect. We fix the roof that is causing the water ingress.", link: "/services/emergency-roof-repairs" },
  { name: "Lead Work & Flashing Repairs", text: "Failed flashing around chimneys and dormers is one of the most common causes of penetrating damp in Blackpool properties.", link: "/services/lead-work-flashing-repairs" },
  { name: "Chimney Repairs & Repointing", text: "Cracked chimney pointing and failed chimney stacks are a direct route for water penetration and subsequent damp.", link: "/services/chimney-repairs-repointing" },
];

const DampProofing = () => {
  const cardsRef = useStaggerReveal<HTMLDivElement>(0.15, 80);
  const includedRef = useStaggerReveal<HTMLDivElement>(0.1, 60);
  const whyRef = useStaggerReveal<HTMLDivElement>(0.15, 80);
  const ctaRef = useScrollReveal<HTMLElement>(0.2);

  return (
    <Layout>
      <SEO
        title="Damp Proofing Blackpool & Fylde Coast | Free Survey | Lake Side Roofing Group"
        description="Expert damp proofing in Blackpool & the Fylde Coast — free survey, no obligation, all work guaranteed. Rising damp, penetrating damp & mould treatment. Call Lake Side Roofing Group: 07480 104865."
        canonical="https://www.lakesideroofinggroup.co.uk/services/damp-proofing"
      />

      {/* SECTION 1 — HERO */}
      <section className="section-dark section-padding">
        <div className="container-content text-center">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Damp Proofing" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-6">Damp Proofing in Blackpool &amp; the Fylde Coast</h1>
          <div className="heading-rule-center" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Free damp survey. No obligation. All work fully guaranteed. Blackpool's coastal specialist in rising damp, penetrating damp, and mould treatment — with over 30 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/book" className="btn-primary text-base">Book Your Free Damp Survey</Link>
            <a href="tel:07480104865" className="btn-secondary border-secondary-foreground/30 text-secondary-foreground hover:bg-primary hover:border-primary">Call 07480 104865</a>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map(badge => (
              <span key={badge} className="flex items-center gap-2 px-3 py-2 text-xs md:text-sm font-heading uppercase tracking-wide text-secondary-foreground">
                <Check size={16} weight="bold" className="text-gold" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRO */}
      <section className="section-light section-padding">
        <div className="container-content">
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-4xl mx-auto">
            Lake Side Roofing Group provides professional damp proofing services to homeowners and businesses across Blackpool, the Fylde Coast, and Lancashire. As a Blackpool-based company with over 30 years of experience, we understand the specific damp challenges that coastal properties face — from the salt-laden air that accelerates penetrating damp to the wind-driven rain that forces moisture through ageing mortar and render. We treat every type of damp correctly at the source, and every job starts with a completely free survey and written quote. No charge. No obligation. No guesswork.
          </p>
        </div>
      </section>

      {/* SECTION 3 — FREE SURVEY BANNER */}
      <section className="section-padding" style={{ backgroundColor: 'hsl(16, 75%, 45%)' }}>
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-4xl text-white font-display mb-4">Our Damp Survey Is 100% Free</h2>
          <p className="text-white/90 font-sans text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Some damp proofing companies charge up to £79 just to survey your property. We don't. Every Lake Side Roofing Group damp survey is completely free — we inspect your property thoroughly, identify every source of moisture, and provide a full written quote at no charge and with no obligation to proceed.
          </p>
          <Link to="/book" className="inline-block px-8 py-4 bg-white font-heading uppercase tracking-wide font-bold text-sm rounded-sm transition-all hover:opacity-90" style={{ color: 'hsl(16, 75%, 45%)' }}>
            Book Your Free Survey Today
          </Link>
        </div>
      </section>

      {/* SECTION 4 — THREE TYPES OF DAMP */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-content">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl">Types of Damp We Treat in Blackpool</h2>
            <div className="heading-rule-center" />
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed">
              Blackpool's coastal location creates conditions for all three types of damp. We identify and treat each one correctly.
            </p>
          </div>
          <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dampTypes.map(d => (
              <div key={d.title} className="scroll-reveal bg-white border border-border rounded-lg p-8">
                <d.icon size={40} weight="duotone" className="text-primary mb-4" />
                <h3 className="text-lg font-display mb-3">{d.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY COASTAL DAMP IS DIFFERENT */}
      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl mb-4">Why Coastal Damp Is Different in Blackpool</h2>
          <div className="heading-rule" />
          <div className="max-w-4xl space-y-4 mb-12">
            <p className="text-muted-foreground font-sans leading-relaxed">
              Blackpool's location on the Irish Sea creates damp conditions that are more aggressive and harder to treat than in inland properties. Salt-laden air off the coast is constantly deposited onto your property's external surfaces — penetrating porous brick and mortar, carrying moisture deep into wall structures, and accelerating the breakdown of render, pointing, and flashing. A property in Blackpool or Fleetwood faces levels of wind-driven moisture that simply do not exist in Lancashire towns twenty miles inland.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Many of Blackpool's housing stock was built in the Victorian and Edwardian era — without modern damp proof courses, with lime mortar that has degraded over a century of coastal weather, and with building techniques that were never designed to handle sustained salt air exposure. We have spent over 30 years treating damp in these properties and understand exactly how coastal conditions accelerate the problem. Our treatments are specified for the Fylde Coast environment — not generic solutions copied from an inland property manual.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "30+", label: "Years treating damp in Blackpool & Fylde Coast properties" },
              { number: "100%", label: "Free surveys — no charge to inspect and quote" },
              { number: "3", label: "Types of damp we identify and treat correctly" },
            ].map(stat => (
              <div key={stat.number} className="section-dark rounded-lg p-8 text-center">
                <p className="text-4xl md:text-5xl font-display text-gold mb-2">{stat.number}</p>
                <p className="text-secondary-foreground/80 font-sans text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHAT'S INCLUDED */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl mb-4">What's Included in Every Damp Proofing Job</h2>
          <div className="heading-rule" />
          <div ref={includedRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includedItems.map(item => (
              <div key={item.label} className="scroll-reveal flex items-start gap-4 p-4 bg-white rounded-lg border border-border">
                <Check size={24} weight="bold" className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-display mb-1">{item.label}</h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — ROOFER + DAMP PROOFER ADVANTAGE */}
      <section className="section-dark section-padding">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">One Company. One Call. Roof and Damp Sorted.</h2>
          <div className="heading-rule" />
          <div className="max-w-4xl space-y-4 mb-10">
            <p className="text-secondary-foreground/80 font-sans leading-relaxed">
              Many damp problems in Blackpool properties start with a roofing issue — a failed flashing around the chimney, a cracked ridge tile letting water in, or a blocked gutter sending water back into the roofline. Specialist damp proofing companies can treat the damp but cannot fix the roof that caused it. Specialist roofers can fix the roof but cannot treat the damp it has already caused inside.
            </p>
            <p className="text-secondary-foreground/80 font-sans leading-relaxed">
              Lake Side Roofing Group does both. We are the only company in Blackpool that can inspect your roof with a drone, identify the source of the problem, fix the external defect, and treat the internal damp — all in one package, from one company, with one guarantee. No passing the problem between trades. No gaps in accountability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Fix the Cause", text: "We repair the roof, chimney, or guttering defect that is allowing water into your property in the first place." },
              { title: "Treat the Damage", text: "We then treat the internal damp damage the water ingress has caused — replastering, mould treatment, and damp proofing." },
            ].map(card => (
              <div key={card.title} className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-base font-display mb-2 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — SERVICE AREAS */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl mb-4">Damp Proofing Across Blackpool &amp; Lancashire</h2>
          <div className="heading-rule" />
          <p className="text-muted-foreground font-sans mb-8 max-w-3xl leading-relaxed">
            We provide damp proofing services across the following areas. Based in Blackpool, we offer fast response times across the whole Fylde Coast and Lancashire:
          </p>
          <div className="flex flex-wrap gap-3">
            {locations.map(l => (
              <Link key={l.slug} to={`/locations/${l.slug}`} className="px-5 py-2 bg-white text-primary font-sans font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-all text-sm border border-border">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHY CHOOSE US */}
      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl mb-4">Why Blackpool Homeowners Choose Lake Side Roofing Group for Damp Proofing</h2>
          <div className="heading-rule" />
          <div ref={whyRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseCards.map(card => (
              <div key={card.title} className="scroll-reveal bg-surface border border-border rounded-lg p-6">
                <card.icon size={32} weight="duotone" className="text-primary mb-3" />
                <h3 className="text-base font-display mb-2">{card.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="section-light section-padding border-t border-border">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl mb-4">Damp Proofing Blackpool — Frequently Asked Questions</h2>
          <div className="heading-rule" />
          <div className="space-y-3 max-w-4xl">
            {faqs.map((item, i) => (
              <details key={i} className="group border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-sans font-semibold text-foreground hover:bg-surface transition-colors">
                  {item.q}
                  <span className="ml-4 text-primary transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <div className="px-5 pb-4 text-muted-foreground leading-relaxed font-sans">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — RELATED SERVICES */}
      <section className="section-light section-padding border-t border-border">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl mb-4">Related Services</h2>
          <div className="heading-rule" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map(s => (
              <Link key={s.link} to={s.link} className="block bg-surface border border-border rounded-lg p-6 card-hover">
                <h3 className="text-base font-display mb-2">{s.name}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-3">{s.text}</p>
                <span className="text-primary font-sans text-sm font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section ref={ctaRef} className="section-dark section-padding scroll-reveal">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-4xl text-secondary-foreground mb-4">Damp Problem in Blackpool or the Fylde Coast?</h2>
          <div className="heading-rule-center" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Book your free damp survey today. We inspect your property, identify every source of moisture, and provide a full written quote — no charge, no obligation, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-primary text-base">Book Your Free Damp Survey</Link>
            <a href="tel:07480104865" className="btn-secondary border-secondary-foreground/30 text-secondary-foreground hover:bg-primary hover:border-primary">Call 07480 104865</a>
          </div>
        </div>
      </section>

      {/* JSON-LD: BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/" } },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/services" } },
          { "@type": "ListItem", "position": 3, "name": "Damp Proofing", "item": { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/services/damp-proofing" } }
        ]
      })}} />

      {/* JSON-LD: FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Is your damp survey really free in Blackpool?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — completely free. There is no charge for our damp survey, moisture testing, written report, or quote. Some companies charge up to £79 for a survey. We do not charge anything." }},
          { "@type": "Question", "name": "What is rising damp and how do I know if I have it?", "acceptedAnswer": { "@type": "Answer", "text": "Rising damp occurs when groundwater travels upward through walls. Signs include tide marks at one metre from floor level, peeling paint, musty smell, damaged skirting boards, and white salt deposits on brickwork." }},
          { "@type": "Question", "name": "Why is damp worse in Blackpool than inland areas?", "acceptedAnswer": { "@type": "Answer", "text": "Blackpool's coastal location means salt air, higher humidity, and wind-driven rain accelerate the breakdown of mortar and render, allowing moisture to penetrate walls faster than in inland properties." }},
          { "@type": "Question", "name": "Can you fix both the roof and the damp?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we repair the external roofing defect causing water ingress and treat the internal damp damage. One company, one call, one guarantee." }},
          { "@type": "Question", "name": "How long does damp proofing take?", "acceptedAnswer": { "@type": "Answer", "text": "A chemical DPC injection for a standard terraced property takes one to two days. With replastering, three to five days total. We provide a clear timeline in your written quote." }},
          { "@type": "Question", "name": "Is your damp proofing work guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — all damp proofing work comes with a full written workmanship guarantee." }}
        ]
      })}} />

      {/* JSON-LD: Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Damp Proofing Blackpool",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Lake Side Roofing Group",
          "telephone": "07480104865",
          "address": { "@type": "PostalAddress", "streetAddress": "23 Vicarage Lane", "addressLocality": "Blackpool", "postalCode": "FY4 4EF", "addressRegion": "Lancashire", "addressCountry": "GB" }
        },
        "areaServed": "Blackpool, Fylde Coast and Lancashire, North West England",
        "description": "Professional damp proofing services in Blackpool and the Fylde Coast. Rising damp, penetrating damp, condensation, and mould treatment. Free survey and written quote on every job. Coastal specialist with 30+ years experience.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP",
          "description": "Free damp survey, moisture testing, written report and quote — no charge, no obligation"
        }
      })}} />
    </Layout>
  );
};

export default DampProofing;
