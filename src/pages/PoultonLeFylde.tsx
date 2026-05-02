import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Drone, House, ShieldCheck } from "@phosphor-icons/react";

const nearbyAreas = [
  { name: "Blackpool", slug: "blackpool" },
  { name: "Thornton-Cleveleys", slug: "thornton-cleveleys" },
  { name: "Fleetwood", slug: "fleetwood" },
  { name: "Preston", slug: "preston" },
  { name: "Lancaster", slug: "lancaster" },
];

const faqs = [
  { q: "Do you cover all areas of Poulton-le-Fylde?", a: "Yes. We cover all of Poulton-le-Fylde including the town centre, Carleton, Singleton, and all surrounding villages and estates. Being based in Blackpool means we can usually be with you the same day." },
  { q: "Can you work on older stone and slate properties in Poulton-le-Fylde?", a: "Absolutely. We have extensive experience with traditional Lancashire building materials and have worked on heritage and period properties across Poulton for decades. We understand the correct materials and techniques required for older roofs." },
  { q: "How quickly can you respond to an emergency in Poulton-le-Fylde?", a: "We aim to respond to emergency call-outs in Poulton-le-Fylde within the hour. Call us any time on 07480 104865." },
  { q: "Do you offer free roof inspections in Poulton-le-Fylde?", a: "Yes. Every job starts with a free drone inspection. We assess your roof and provide a full written quote at no charge and with no obligation." },
];

const whyCards = [
  { icon: MapPin, title: "Blackpool Based", text: "Fast response times from our Blackpool base. Poulton-le-Fylde is on our doorstep." },
  { icon: Drone, title: "Free Drone Inspection", text: "Every Poulton job starts with a free aerial survey and full written quote." },
  { icon: House, title: "Heritage Property Experience", text: "We have worked on Poulton's older stone and slate properties for decades. We know how to do it right." },
  { icon: ShieldCheck, title: "All Work Guaranteed", text: "Every job in Poulton-le-Fylde comes with a full written workmanship guarantee." },
];

const PoultonLeFylde = () => {
  const ctaRef = useScrollReveal<HTMLElement>(0.2);

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://www.lakesideroofinggroup.co.uk/locations/poulton-le-fylde";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
    robots.content = "index, follow";
    return () => { canonical?.remove(); robots?.remove(); };
  }, []);

  return (
    <Layout>
      <SEO title="Roofing Services in Poulton-le-Fylde | Lake Side Roofing Group" description="Expert roofers in Poulton-le-Fylde. Lake Side Roofing Group. Free drone inspection, 24/7 emergency call-outs, all work guaranteed. Based in nearby Blackpool." />

      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: "Poulton-le-Fylde" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Roofing Services in Poulton-le-Fylde</h1>
          <div className="heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl leading-relaxed mb-8">
            Lake Side Roofing Group provides roofing services across Poulton-le-Fylde and the surrounding area. Based in nearby Blackpool, we serve homeowners and businesses throughout Poulton town centre, Carleton, Singleton, and all surrounding villages.
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
            Lake Side Roofing Group provides roofing services across Poulton-le-Fylde and the surrounding area. Based in nearby Blackpool, we serve homeowners and businesses throughout Poulton town centre, Carleton, Singleton, and all surrounding villages. Poulton-le-Fylde has a mix of older stone cottages, traditional Lancashire terraces, and newer housing developments, each with their own roofing requirements and challenges. We carry out everything from emergency repairs on period properties to full roof replacements on modern estates. Every job starts with a free drone inspection and a no-obligation written quote.
          </p>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Roofing in Poulton-le-Fylde: Local Knowledge</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            Poulton-le-Fylde sits just inland from the Fylde Coast, giving it slightly more shelter from direct coastal winds than Blackpool or Cleveleys. However, properties in Poulton still experience significant wind-driven rain during Lancashire winters, and the town's older stone and slate properties require specialist knowledge to roof correctly. We have extensive experience working with traditional Lancashire building materials and heritage roofing techniques across the Poulton area.
          </p>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl mb-4">Our Roofing Services in Poulton-le-Fylde</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground mb-6">We provide the following roofing services to homeowners and businesses across Poulton-le-Fylde:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl text-secondary-foreground mb-4">Why Poulton-le-Fylde Homeowners Choose Lake Side</h2>
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
          <h2 className="text-xl md:text-2xl mb-4">Areas Near Poulton-le-Fylde We Also Cover</h2>
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
          <h2 className="text-xl md:text-2xl mb-4">Our Recent Work in Poulton-le-Fylde</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            We regularly carry out roofing work across Poulton-le-Fylde, from slate roof repairs on the older properties around the town square to full roof replacements on newer residential developments in Carleton. We have completed chimney repointing and lead flashing work on several heritage properties in the conservation area and gutter replacement across multiple Poulton estates.
          </p>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Frequently Asked Questions: Roofing in Poulton-le-Fylde</h2>
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
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">Need a Roofer in Poulton-le-Fylde?</h2>
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
          { "@type": "ListItem", position: 3, name: "Poulton-le-Fylde", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/locations/poulton-le-fylde" } },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      })}} />
    </Layout>
  );
};

export default PoultonLeFylde;
