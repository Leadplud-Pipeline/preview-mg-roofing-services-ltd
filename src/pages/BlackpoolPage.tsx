import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wind, Drop, ShieldCheck, MapPin, Drone, Phone, CalendarCheck } from "@phosphor-icons/react";

const BlackpoolPage = () => {
  const ctaRef = useScrollReveal<HTMLElement>(0.2);

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.lakesideroofinggroup.co.uk/locations/blackpool";

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "index, follow";

    return () => {
      canonical?.remove();
      robots?.remove();
    };
  }, []);

  const nearbyAreas = [
    { name: "Thornton-Cleveleys", slug: "thornton-cleveleys" },
    { name: "Poulton-le-Fylde", slug: "poulton-le-fylde" },
    { name: "Lytham St Annes", slug: "lytham-st-annes" },
    { name: "Fleetwood", slug: "fleetwood" },
    { name: "Preston", slug: "preston" },
  ];

  const faqs = [
    { q: "Do you cover all areas of Blackpool?", a: "Yes. We cover the whole of Blackpool including Bispham, Norbreck, Layton, Marton, South Shore, North Shore, Thornton-Cleveleys, and all surrounding areas. As a Blackpool-based company, we know every part of the town and can usually get out to you the same day for urgent work." },
    { q: "How quickly can you respond to an emergency in Blackpool?", a: "For emergency roof repairs in Blackpool, we aim to respond within the hour. We offer a 24-hour emergency call-out service, 7 days a week, including weekends and bank holidays. Call us on 07480 104865 for immediate assistance." },
    { q: "Do you offer a free roof inspection in Blackpool?", a: "Yes. Every job starts with a completely free drone inspection. We use a drone to assess your roof safely and accurately without any ladders or scaffolding, then provide a full written quote at no charge and with no obligation to proceed." },
    { q: "Are Blackpool roofs more prone to damage than inland properties?", a: "Yes. Blackpool's coastal location means roofs are exposed to salt air, stronger winds, and more frequent storm events than properties further inland. This accelerates wear on ridge tiles, flashing, guttering fixings, and flat roof membranes. We specialise in roofing solutions built to handle the Fylde Coast's conditions." },
    { q: "How much does a new roof cost in Blackpool?", a: "The cost of a full roof replacement in Blackpool typically ranges from £4,500 to £14,000 depending on the size of the property, the pitch of the roof, and the materials chosen. We never quote without inspecting first. Our free drone survey means we can give you an accurate written price rather than a rough estimate." },
    { q: "Do you work on both residential and commercial properties in Blackpool?", a: "Yes. We carry out roofing work on all types of residential properties across Blackpool, as well as commercial buildings, guesthouses, and holiday accommodation along the seafront and throughout the town." },
    { q: "Are you members of any trade bodies or accredited schemes?", a: "Lake Side Roofing Group is fully insured with public liability and employer's liability insurance on every job. All work carries a full written workmanship guarantee. We are also listed on Google and Facebook where you can read reviews from previous Blackpool customers." },
  ];

  return (
    <Layout>
      <SEO
        title="Roofing Services in Blackpool | Lake Side Roofing Group"
        description="Lake Side Roofing Group: expert roofers based in Blackpool. Free drone inspection, 24/7 emergency call-outs, all work guaranteed. Serving Blackpool & the Fylde Coast."
      />

      {/* SECTION 1 — HERO */}
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: "Blackpool" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Roofing Services in Blackpool</h1>
          <div className="heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl leading-relaxed mb-8">
            Lake Side Roofing Group is based in Blackpool. Your local roofer on the Fylde Coast, trusted by homeowners across Lancashire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book" className="btn-primary">Get Your Free Drone Inspection in Blackpool</Link>
            <a href="tel:07480104865" className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Call 07480 104865</a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRO (static HTML for SEO) */}
      <section className="section-light section-padding">
        <div className="container-content max-w-4xl">
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Lake Side Roofing Group is a family-run roofing company based in Blackpool, Lancashire. We provide a full range of roofing services to homeowners and businesses across Blackpool and the wider Fylde Coast, from Thornton-Cleveleys and Poulton-le-Fylde to Lytham St Annes and Fleetwood. With extensive experience working on Blackpool's coastal properties, we understand the unique challenges that salt air, strong coastal winds, and the Fylde Coast's weather conditions create for roofs in this area. Every job starts with a free drone inspection so we can assess your roof accurately and provide a full written quote. No ladders, no obligation, no surprises.
          </p>
        </div>
      </section>

      {/* SECTION 3 — COASTAL ROOFING (unique to Blackpool) */}
      <section className="section-surface section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl mb-4">Why Blackpool Roofs Need Specialist Attention</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed max-w-4xl mb-10">
            Blackpool's coastal location creates roofing challenges that don't exist inland. Salt-laden air accelerates the corrosion of metal fixings, flashing, and guttering. Strong westerly winds off the Irish Sea put constant pressure on ridge tiles, chimney stacks, and flat roof membranes. Properties along the seafront and in areas like Bispham, Norbreck, and South Shore are particularly exposed. At Lake Side Roofing Group, we've spent years working on Blackpool's housing stock, from the traditional terraced properties of Layton and Marton to the Victorian-era homes of the North Shore. We know what fails first on a coastal roof, and we know how to fix it properly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-hover p-6 flex flex-col items-start">
              <Wind size={36} weight="duotone" className="text-primary mb-4" />
              <h3 className="text-base font-heading uppercase tracking-wide text-foreground mb-2">Coastal Wind Damage</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">Ridge tiles, chimney stacks, and flat roof edges are the first to go in coastal storms. We repair and reinforce them to last.</p>
            </div>
            <div className="card-hover p-6 flex flex-col items-start">
              <Drop size={36} weight="duotone" className="text-primary mb-4" />
              <h3 className="text-base font-heading uppercase tracking-wide text-foreground mb-2">Salt Air Corrosion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">Metal fixings, lead flashing, and guttering corrode faster in coastal air. We use corrosion-resistant materials on all Blackpool jobs.</p>
            </div>
            <div className="card-hover p-6 flex flex-col items-start">
              <ShieldCheck size={36} weight="duotone" className="text-primary mb-4" />
              <h3 className="text-base font-heading uppercase tracking-wide text-foreground mb-2">Storm-Ready Roofing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">All our Blackpool installations are specified to handle the Fylde Coast's weather, from materials through to fixing methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES IN BLACKPOOL */}
      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl mb-4">Our Roofing Services in Blackpool</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground mb-4">We provide the following roofing services to homeowners and businesses across Blackpool and the Fylde Coast:</p>
          <p className="font-sans text-muted-foreground mb-6">
            We offer a free drone roof survey on every Blackpool job. <Link to="/services/drone-roof-survey-blackpool" className="text-primary font-semibold hover:underline">Find out more about our drone inspection service</Link>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY LAKE SIDE IN BLACKPOOL */}
      <section className="section-dark section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl text-secondary-foreground mb-4">Why Blackpool Homeowners Choose Lake Side Roofing Group</h2>
          <div className="heading-rule" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              { icon: MapPin, title: "Based in Blackpool", text: "We're not a national company sending contractors from miles away. We're based right here in Blackpool, which means faster response times, local knowledge, and genuine accountability." },
              { icon: Drone, title: "Free Drone Inspection", text: "We inspect every Blackpool roof with a drone before quoting, so you get an accurate written quote based on what we actually find, not a rough estimate over the phone." },
              { icon: Phone, title: "24/7 Emergency Cover", text: "Coastal storms don't keep business hours. Our emergency call-out service covers Blackpool and the Fylde Coast 24 hours a day, 7 days a week including bank holidays." },
              { icon: CalendarCheck, title: "Experienced Fylde Coast Roofers", text: "We've been working on Blackpool's roofs for years. We know the properties, the weather, and the materials that last in this environment." },
            ].map((card, i) => (
              <div key={i} className="border border-border/20 rounded-lg p-6 flex gap-4 items-start">
                <card.icon size={36} weight="duotone" className="text-accent-gold shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-heading uppercase tracking-wide text-secondary-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-secondary-foreground/80 leading-relaxed font-sans">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — NEARBY AREAS */}
      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Areas Near Blackpool We Also Cover</h2>
          <div className="heading-rule" />
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map(n => (
              <Link key={n.slug} to={`/locations/${n.slug}`} className="px-4 py-2 bg-surface text-primary font-sans text-sm rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">{n.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — RECENT WORK */}
      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Our Recent Work in Blackpool</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            We regularly carry out roofing work across all areas of Blackpool, from full roof replacements on terraced homes in Layton and Marton to flat roof repairs on seafront properties in Bispham and North Shore. We've completed chimney repointing work on Victorian-era properties in the town centre, Velux installations on extensions in South Shore, and emergency storm damage repairs across the Fylde Coast following severe weather. Our drone inspection service means every Blackpool customer gets an accurate picture of their roof before any work begins.
          </p>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Frequently Asked Questions: Roofing in Blackpool</h2>
          <div className="heading-rule" />
          <div className="space-y-3">
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

      {/* SECTION 9 — CTA PANEL */}
      <section ref={ctaRef} className="scroll-reveal section-dark section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">Need a Roofer in Blackpool?</h2>
          <div className="heading-rule-center anim-heading-rule" />
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
            Book your free drone inspection today. We'll assess your roof, provide a full written quote, and there's absolutely no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-primary">Book Your Free Inspection</Link>
            <a href="tel:07480104865" className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Call 07480 104865</a>
          </div>
        </div>
      </section>

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/" } },
          { "@type": "ListItem", position: 2, name: "Locations", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/locations" } },
          { "@type": "ListItem", position: 3, name: "Blackpool", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/locations/blackpool" } }
        ]
      })}} />

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Do you cover all areas of Blackpool?", acceptedAnswer: { "@type": "Answer", text: "Yes. We cover the whole of Blackpool including Bispham, Norbreck, Layton, Marton, South Shore, North Shore, Thornton-Cleveleys, and all surrounding areas. As a Blackpool-based company, we know every part of the town and can usually get out to you the same day for urgent work." } },
          { "@type": "Question", name: "How quickly can you respond to an emergency in Blackpool?", acceptedAnswer: { "@type": "Answer", text: "For emergency roof repairs in Blackpool, we aim to respond within the hour. We offer a 24-hour emergency call-out service, 7 days a week, including weekends and bank holidays. Call us on 07480 104865 for immediate assistance." } },
          { "@type": "Question", name: "Do you offer a free roof inspection in Blackpool?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every job starts with a completely free drone inspection. We use a drone to assess your roof safely and accurately without any ladders or scaffolding, then provide a full written quote at no charge and with no obligation to proceed." } },
          { "@type": "Question", name: "Are Blackpool roofs more prone to damage than inland properties?", acceptedAnswer: { "@type": "Answer", text: "Yes. Blackpool's coastal location means roofs are exposed to salt air, stronger winds, and more frequent storm events than properties further inland. This accelerates wear on ridge tiles, flashing, guttering fixings, and flat roof membranes. We specialise in roofing solutions built to handle the Fylde Coast's conditions." } },
          { "@type": "Question", name: "How much does a new roof cost in Blackpool?", acceptedAnswer: { "@type": "Answer", text: "The cost of a full roof replacement in Blackpool typically ranges from £4,500 to £14,000 depending on the size of the property, the pitch of the roof, and the materials chosen. Our free drone survey means we can give you an accurate written price rather than a rough estimate." } },
        ]
      })}} />
    </Layout>
  );
};

export default BlackpoolPage;
