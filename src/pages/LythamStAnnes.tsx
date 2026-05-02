import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { House, Drone, Diamond, Phone } from "@phosphor-icons/react";

const nearbyAreas = [
  { name: "Blackpool", slug: "blackpool" },
  { name: "Poulton-le-Fylde", slug: "poulton-le-fylde" },
  { name: "Preston", slug: "preston" },
  { name: "Southport", slug: "southport" },
  { name: "Chorley", slug: "chorley" },
];

const faqs = [
  { q: "Do you cover all of Lytham St Annes?", a: "Yes. We cover the whole of Lytham St Annes including Lytham town centre, St Annes seafront, Ansdell, Fairhaven, and all surrounding areas. We can usually reach you the same day from our Blackpool base." },
  { q: "Can you work on Victorian and Edwardian properties in Lytham?", a: "Absolutely. We have extensive experience with period properties across Lytham and understand the correct materials and techniques for heritage roofing. We match original materials wherever possible and always respect the character of the building." },
  { q: "How quickly can you respond to an emergency in Lytham St Annes?", a: "We aim to respond to emergency call-outs in Lytham St Annes within the hour. Call us any time on 07480 104865, available 24 hours, 7 days a week." },
  { q: "Do you offer free roof inspections in Lytham St Annes?", a: "Yes. Every job starts with a free drone inspection. We survey your roof safely and accurately and provide a full written quote with no charge and no obligation." },
  { q: "How much does a roof repair cost in Lytham St Annes?", a: "Costs vary depending on the type of repair, materials required, and the size and age of the property. We never quote without inspecting first. Our free drone survey means you get an accurate written price rather than a rough estimate over the phone." },
];

const whyCards = [
  { icon: House, title: "Period Property Expertise", text: "Lytham's Victorian and Edwardian homes need specialist knowledge. We have decades of experience with heritage roofing on the Fylde Coast." },
  { icon: Drone, title: "Free Drone Inspection", text: "Every Lytham St Annes job starts with a free aerial survey so you get an accurate quote based on what we actually find." },
  { icon: Diamond, title: "Premium Materials", text: "We use only high-quality materials appropriate for Lytham's property stock. No shortcuts on heritage homes." },
  { icon: Phone, title: "24/7 Emergency Cover", text: "Available around the clock for emergency call-outs across Lytham St Annes and the southern Fylde Coast." },
];

const LythamStAnnes = () => {
  const ctaRef = useScrollReveal<HTMLElement>(0.2);

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://www.lakesideroofinggroup.co.uk/locations/lytham-st-annes";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
    robots.content = "index, follow";
    return () => { canonical?.remove(); robots?.remove(); };
  }, []);

  return (
    <Layout>
      <SEO title="Roofing Services in Lytham St Annes | Lake Side Roofing Group" description="Expert roofers in Lytham St Annes. Lake Side Roofing Group. Free drone inspection, 24/7 emergency call-outs, all work guaranteed. Serving the Fylde Coast." />

      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: "Lytham St Annes" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Roofing Services in Lytham St Annes</h1>
          <div className="heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl leading-relaxed mb-8">
            From the elegant Victorian and Edwardian properties of Lytham town centre to the seafront homes along St Annes beach, we have the expertise to work on all property types in this area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book" className="btn-primary">Get Your Free Drone Inspection</Link>
            <a href="tel:07480104865" className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Call 07480 104865</a>
          </div>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <p className="font-sans text-muted-foreground leading-relaxed">
            Lake Side Roofing Group provides professional roofing services across Lytham St Annes and the surrounding Fylde Coast area. From the elegant Victorian and Edwardian properties of Lytham town centre to the seafront homes along St Annes beach, we have the expertise to work on all property types in this area. Lytham St Annes is known for its high-quality residential properties, many of which are period homes requiring specialist roofing knowledge and premium materials. Every job we carry out in Lytham St Annes starts with a free drone inspection and a full written quote with no obligation.
          </p>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Heritage Roofing in Lytham St Annes</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            Lytham St Annes sits on the southern Fylde Coast and is particularly exposed to south-westerly winds and sea air from the Irish Sea. The town's stock of Victorian and Edwardian properties requires careful, sympathetic roofing work. The wrong materials or techniques can cause long-term damage to period buildings. We have spent decades working on Lytham's heritage properties and understand the importance of matching original materials, respecting building proportions, and using traditional methods where appropriate.
          </p>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl mb-4">Our Roofing Services in Lytham St Annes</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground mb-6">We provide the following roofing services to homeowners and businesses across Lytham St Annes:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl text-secondary-foreground mb-4">Why Lytham St Annes Homeowners Choose Lake Side</h2>
          <div className="heading-rule" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {whyCards.map((card, i) => (
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

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Areas Near Lytham St Annes We Also Cover</h2>
          <div className="heading-rule" />
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map(n => (
              <Link key={n.slug} to={`/locations/${n.slug}`} className="px-4 py-2 bg-surface text-primary font-sans text-sm rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">{n.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Our Recent Work in Lytham St Annes</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            We regularly carry out roofing work across Lytham St Annes, from full roof replacements on Victorian terraces in Lytham town centre to flat roof repairs on beach-facing properties in St Annes. We have completed lead work and chimney repointing on several Edwardian properties along the Promenade and carried out emergency storm damage repairs on seafront homes following severe south-westerly weather events.
          </p>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Frequently Asked Questions: Roofing in Lytham St Annes</h2>
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

      <section ref={ctaRef} className="scroll-reveal section-dark section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">Need a Roofer in Lytham St Annes?</h2>
          <div className="heading-rule-center anim-heading-rule" />
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
            Book your free drone inspection today. Full written quote, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-primary">Book Your Free Inspection</Link>
            <a href="tel:07480104865" className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Call 07480 104865</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/" } },
          { "@type": "ListItem", position: 2, name: "Locations", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/locations" } },
          { "@type": "ListItem", position: 3, name: "Lytham St Annes", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/locations/lytham-st-annes" } },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      })}} />
    </Layout>
  );
};

export default LythamStAnnes;
