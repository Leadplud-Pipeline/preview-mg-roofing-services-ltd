import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Phone, ShieldCheck, CheckCircle, X,
  Drone, CalendarCheck, ChatText, FileText
} from "@phosphor-icons/react";

const checklistItems = [
  { label: "Ridge and Hip Tiles", desc: "Checking for cracked, loose, or missing ridge tiles, common after coastal wind events." },
  { label: "Roof Tiles and Slates", desc: "Identifying slipped, cracked, broken, or missing tiles across all roof slopes." },
  { label: "Lead Flashing", desc: "Inspecting flashing around chimneys, dormers, and abutments for lifting, cracking, or salt corrosion." },
  { label: "Chimney Stacks", desc: "Checking for cracked pointing, spalling brickwork, and chimney pot condition, particularly important on Blackpool's older properties." },
  { label: "Flat Roof Membranes", desc: "Identifying blistering, cracking, ponding water, or membrane failure on flat roof sections." },
  { label: "Gutters and Downpipes", desc: "Checking for blockages, sagging, broken joints, and overflow damage, accelerated by salt air on the Fylde Coast." },
  { label: "Fascias and Soffits", desc: "Inspecting uPVC and timber roofline components for damage, rot, or displacement." },
  { label: "Valleys", desc: "Checking lead or fibre glass valley gutters for cracking, blockage, or wear." },
  { label: "Velux and Roof Windows", desc: "Inspecting flashings and seals around all roof windows for water ingress risk." },
  { label: "Moss and Algae Growth", desc: "Identifying moss, lichen, and algae that can lift tiles and block drainage, very common in the damp coastal Lancashire climate." },
  { label: "Storm Damage", desc: "Assessing any damage caused by recent coastal wind or rain events across the whole roof surface." },
  { label: "General Wear and Age", desc: "Overall assessment of the roof's condition and remaining lifespan to help you plan maintenance proactively." },
];

const comparisonRows = [
  { traditional: "Ladders or scaffolding required just to inspect", drone: "No ladders, no scaffolding. The drone does it all safely" },
  { traditional: "Limited visibility: inspector can only see what they can physically reach", drone: "Full 360° aerial coverage of every surface, ridge, valley, and chimney" },
  { traditional: "Risk of damage to gutters, fascias, or render from ladder contact", drone: "Zero contact with your property during the inspection" },
  { traditional: "Rough estimate often given before seeing the full picture", drone: "Accurate written quote based on exactly what the drone footage shows" },
  { traditional: "You take the roofer's word for what they found", drone: "You see the footage yourself for full transparency" },
  { traditional: "Often charged as a separate survey fee", drone: "Completely free on every job, no hidden charges" },
];

const faqs = [
  { q: "Is the drone roof survey really completely free?", a: "Yes, completely free. There is no charge for the drone inspection, the footage review, or the written quote. We carry out the full survey at no cost and with no obligation to use our services afterwards. We are confident that once you see the quality of our work and the transparency of our process, you will want to proceed, but that is entirely your decision." },
  { q: "How long does a drone roof survey take in Blackpool?", a: "The drone flight itself typically takes 20 to 30 minutes depending on the size and complexity of the roof. We then spend time reviewing the footage with you on site and explaining what we have found. The whole process from arrival to written quote is usually completed within 60 to 90 minutes." },
  { q: "Do I need to do anything to prepare for the drone survey?", a: "No preparation is needed on your part. We bring all the equipment and handle everything. You just need to be present so we can walk through the findings with you. If there are any trees or obstacles close to the roof, it is helpful to mention these when booking." },
  { q: "Can a drone survey identify all types of roof damage?", a: "A drone survey identifies the vast majority of roof issues including missing or cracked tiles, ridge tile problems, flashing failures, chimney damage, flat roof issues, moss growth, and gutter problems. For suspected internal structural issues, a physical inspection may also be recommended. We will advise you if this is the case." },
  { q: "Do you carry out drone surveys across the whole of Blackpool?", a: "Yes. We carry out free drone surveys across the whole of Blackpool including Bispham, Norbreck, Layton, Marton, South Shore, North Shore, and all surrounding areas. We also cover the full Fylde Coast including Thornton-Cleveleys, Poulton-le-Fylde, Lytham St Annes, and Fleetwood." },
  { q: "What happens after the drone survey?", a: "After the survey we provide you with a full written quote for any work we recommend. You are under no obligation to proceed. If you choose to go ahead, we will arrange a start date and handle everything from materials to completion. If you decide not to proceed, there is no charge and no pressure." },
];

const DroneRoofSurveyBlackpool = () => {
  const whatRef = useScrollReveal<HTMLElement>(0.15);
  const compRef = useScrollReveal<HTMLElement>(0.15);
  const checkRef = useScrollReveal<HTMLElement>(0.15);
  const howRef = useScrollReveal<HTMLElement>(0.15);
  const contextRef = useScrollReveal<HTMLElement>(0.15);
  const faqRef = useScrollReveal<HTMLElement>(0.15);
  const ctaRef = useScrollReveal<HTMLElement>(0.2);

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://www.lakesideroofinggroup.co.uk/services/drone-roof-survey-blackpool";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
    robots.content = "index, follow";

    const bcSchema = document.createElement("script");
    bcSchema.type = "application/ld+json";
    bcSchema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/" } },
        { "@type": "ListItem", position: 2, name: "Services", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/services" } },
        { "@type": "ListItem", position: 3, name: "Drone Roof Survey Blackpool", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/services/drone-roof-survey-blackpool" } },
      ],
    });
    document.head.appendChild(bcSchema);

    const svcSchema = document.createElement("script");
    svcSchema.type = "application/ld+json";
    svcSchema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Free Drone Roof Survey Blackpool",
      provider: {
        "@type": "HomeAndConstructionBusiness", name: "Lake Side Roofing Group",
        telephone: "07480104865",
        address: { "@type": "PostalAddress", streetAddress: "23 Vicarage Lane", addressLocality: "Blackpool", postalCode: "FY4 4EF", addressRegion: "Lancashire", addressCountry: "GB" },
      },
      areaServed: "Blackpool and the Fylde Coast, Lancashire",
      description: "Free drone roof survey service in Blackpool and across the Fylde Coast. No ladders, no scaffolding, no charge. Full written quote included on every inspection.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP", description: "Free drone roof inspection and written quote, no obligation" },
    });
    document.head.appendChild(svcSchema);

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is the drone roof survey really completely free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. There is no charge for the drone inspection, the footage review, or the written quote. No obligation to proceed." } },
        { "@type": "Question", name: "How long does a drone roof survey take in Blackpool?", acceptedAnswer: { "@type": "Answer", text: "The drone flight takes 20 to 30 minutes. The whole process from arrival to written quote is usually 60 to 90 minutes." } },
        { "@type": "Question", name: "Do you carry out drone surveys across the whole of Blackpool?", acceptedAnswer: { "@type": "Answer", text: "Yes. We cover the whole of Blackpool including Bispham, Norbreck, Layton, Marton, South Shore, North Shore, and all Fylde Coast areas." } },
        { "@type": "Question", name: "What happens after the drone survey?", acceptedAnswer: { "@type": "Answer", text: "We provide a full written quote for any work we recommend. No obligation to proceed, no charge for the survey." } },
        { "@type": "Question", name: "Can a drone survey identify all types of roof damage?", acceptedAnswer: { "@type": "Answer", text: "A drone survey identifies the vast majority of roof issues including missing tiles, ridge problems, flashing failures, chimney damage, flat roof issues, moss growth, and gutter problems." } },
      ],
    });
    document.head.appendChild(faqSchema);

    return () => { canonical?.remove(); robots?.remove(); bcSchema?.remove(); svcSchema?.remove(); faqSchema?.remove(); };
  }, []);

  return (
    <Layout>
      <SEO
        title="Free Drone Roof Survey Blackpool | Lake Side Roofing Group"
        description="Free drone roof survey in Blackpool & the Fylde Coast. Lake Side Roofing Group. No ladders, no scaffolding, no charge. Accurate written quote on every job. Call 07480 104865."
      />

      {/* SECTION 1 — HERO */}
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Drone Roof Survey Blackpool" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Free Drone Roof Survey in Blackpool</h1>
          <div className="heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl leading-relaxed mb-8">
            No ladders. No scaffolding. No charge. A complete aerial roof inspection and full written quote, completely free on every job across the Fylde Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/book" className="btn-primary">Book Your Free Drone Survey</Link>
            <a href="tel:07480104865" className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Call 07480 104865</a>
          </div>
          <div className="flex flex-wrap gap-5 text-secondary-foreground/80 text-xs md:text-sm font-heading uppercase tracking-widest">
            {["100% Free", "No Obligation", "Blackpool Based", "Fully Insured", "Written Quote Included"].map(b => (
              <span key={b} className="flex items-center gap-1.5">
                <ShieldCheck size={18} weight="duotone" className="text-gold" /> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRO */}
      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <p className="font-sans text-muted-foreground leading-relaxed">
            Lake Side Roofing Group offers a completely free drone roof survey to every customer in Blackpool and across the Fylde Coast. Before we provide a single quote or recommend any work, we inspect your roof from the air using a professional drone, giving us a full, accurate picture of your roof's condition without putting a single ladder against your property. This means you get an honest, detailed written quote based on what we actually find, not a rough estimate based on a view from the street. And it costs you absolutely nothing.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHAT IS A DRONE ROOF SURVEY */}
      <section ref={whatRef} className="scroll-reveal section-padding" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">What Is a Drone Roof Survey?</h2>
          <div className="heading-rule" />
          <div className="font-sans text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>A drone roof survey is an aerial inspection of your roof carried out using a professional camera drone. Instead of erecting scaffolding or leaning ladders against your property just to take a look, we fly the drone above and around your roof to capture high-resolution images and video of every surface, tile, ridge, chimney, flashing, and gutter.</p>
            <p>The drone can reach areas that are impossible to inspect safely from ground level, including the rear slopes of complex roofs, hidden valleys, chimney backs, and flat roof sections behind parapet walls. Nothing is missed.</p>
            <p>Once the survey is complete, we review the footage with you, explain exactly what we have found, and provide a full written quote for any work required. The entire process (survey, review, and written quote) is completely free and carries no obligation to proceed.</p>
          </div>

          {/* Stat panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "100%", label: "Of our Blackpool jobs start with a free drone survey" },
              { num: "0", label: "Cost to you for the full inspection and written quote" },
              { num: "12", label: "Point checklist on every survey" },
            ].map(s => (
              <div key={s.num} className="section-dark rounded-lg p-6 text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">{s.num}</p>
                <p className="text-secondary-foreground/70 font-sans text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMPARISON TABLE */}
      <section ref={compRef} className="scroll-reveal section-light section-padding">
        <div className="container-content max-w-4xl">
          <h2 className="text-xl md:text-2xl mb-4">Why a Drone Survey Is Better Than a Traditional Roof Inspection</h2>
          <div className="heading-rule" />
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left font-heading uppercase tracking-wide text-sm p-4 bg-surface border border-border">Traditional Roof Inspection</th>
                  <th className="text-left font-heading uppercase tracking-wide text-sm p-4 bg-surface border border-border">Lake Side Drone Survey</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 border border-border font-sans text-sm text-muted-foreground align-top">
                      <span className="inline-flex items-start gap-2">
                        <X size={18} weight="bold" className="text-destructive shrink-0 mt-0.5" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="p-4 border border-border font-sans text-sm text-foreground align-top">
                      <span className="inline-flex items-start gap-2">
                        <CheckCircle size={18} weight="duotone" className="text-primary shrink-0 mt-0.5" />
                        {row.drone}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT WE LOOK FOR */}
      <section ref={checkRef} className="scroll-reveal section-padding" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="container-content max-w-4xl">
          <h2 className="text-xl md:text-2xl mb-4">What Our Drone Survey Checks in Blackpool</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground mb-8">
            Blackpool's coastal location creates specific roof vulnerabilities that require a thorough inspection. Our drone survey checks every one of the following on every property in Blackpool and the Fylde Coast:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklistItems.map(item => (
              <div key={item.label} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <CheckCircle size={22} weight="duotone" className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans font-bold text-foreground text-sm mb-1">{item.label}</p>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — HOW IT WORKS */}
      <section ref={howRef} className="scroll-reveal section-dark section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-3">How the Free Drone Survey Works</h2>
          <div className="heading-rule-center" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            {[
              { icon: Phone, num: "1", title: "Book Online or Call", text: "Book your free drone survey online at /book or call us on 07480 104865. We'll arrange a convenient time to visit your Blackpool property." },
              { icon: Drone, num: "2", title: "We Fly the Drone", text: "Our team arrives and flies the drone around your entire roof. The inspection typically takes 20 to 30 minutes. No scaffolding, no ladders, no disruption." },
              { icon: ChatText, num: "3", title: "We Review With You", text: "We go through the drone footage with you on site, explaining exactly what we have found in plain English. No jargon, no scare tactics." },
              { icon: FileText, num: "4", title: "You Receive a Written Quote", text: "We provide a full written quote for any work required. No obligation to proceed. No charge for the survey or the quote. Ever." },
            ].map(step => (
              <div key={step.num} className="flex flex-col items-center gap-4">
                <span className="text-3xl font-display font-bold text-gold">{step.num}</span>
                <step.icon size={40} weight="duotone" className="text-gold" />
                <h3 className="text-sm font-heading font-bold uppercase tracking-wide text-secondary-foreground">{step.title}</h3>
                <p className="text-secondary-foreground/70 font-sans text-sm leading-relaxed max-w-xs">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — BLACKPOOL SPECIFIC CONTEXT */}
      <section ref={contextRef} className="scroll-reveal section-padding" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Why Drone Surveys Are Especially Important for Blackpool Properties</h2>
          <div className="heading-rule" />
          <div className="font-sans text-muted-foreground leading-relaxed space-y-4">
            <p>Blackpool's coastal environment accelerates roof wear in ways that are not always visible from street level. Salt air corrodes metal fixings and lead flashing from the inside out, meaning a roof can look perfectly fine from the ground while significant corrosion is already taking place underneath. Strong westerly winds can partially lift ridge tiles without fully dislodging them, leaving them vulnerable to the next storm without any visible sign of damage from below.</p>
            <p>A drone survey catches all of this. It is the only way to get a truly accurate picture of a Blackpool roof's condition without spending money on scaffolding. We have found significant hidden damage on Blackpool roofs that the homeowner had no idea about, and caught problems early enough to fix them at a fraction of the cost of leaving them.</p>
            <p>We carry out free drone surveys across the whole of Blackpool, from Bispham and Norbreck in the north to South Shore and Squires Gate in the south, and across the whole of the Fylde Coast.</p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section ref={faqRef} className="scroll-reveal section-light section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Drone Roof Survey Blackpool: Frequently Asked Questions</h2>
          <div className="heading-rule" />
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="group border border-border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-sans font-semibold text-foreground hover:bg-surface transition-colors">
                  {item.q}
                  <span className="ml-4 text-primary transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <div className="px-5 pb-4 text-muted-foreground leading-relaxed font-sans">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section ref={ctaRef} className="scroll-reveal section-dark section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">Book Your Free Drone Roof Survey in Blackpool</h2>
          <div className="heading-rule-center anim-heading-rule" />
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
            No ladders. No charge. No obligation. Just an honest picture of your roof and a written quote you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-primary">Book Your Free Survey</Link>
            <a href="tel:07480104865" className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Call 07480 104865</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DroneRoofSurveyBlackpool;
