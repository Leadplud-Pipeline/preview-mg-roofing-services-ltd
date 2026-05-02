import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Drone, Phone, CalendarCheck } from "@phosphor-icons/react";

const nearbyAreas = [
  { name: "Blackpool", slug: "blackpool" },
  { name: "Poulton-le-Fylde", slug: "poulton-le-fylde" },
  { name: "Fleetwood", slug: "fleetwood" },
  { name: "Lytham St Annes", slug: "lytham-st-annes" },
  { name: "Preston", slug: "preston" },
];

const faqs = [
  { q: "Do you cover all of Thornton-Cleveleys?", a: "Yes. We cover the whole of Thornton-Cleveleys including Cleveleys seafront, Thornton town centre, Skippool, and all surrounding streets and estates. Being based in nearby Blackpool means we can usually reach you the same day." },
  { q: "How quickly can you respond to an emergency in Thornton-Cleveleys?", a: "For emergency call-outs in Thornton-Cleveleys we aim to respond within the hour. Call us on 07480 104865 any time, day or night." },
  { q: "Do you offer free roof inspections in Thornton-Cleveleys?", a: "Yes. Every job starts with a completely free drone inspection. We assess your roof safely and accurately and provide a full written quote with no obligation." },
  { q: "Are roofs in Thornton-Cleveleys more at risk from coastal weather?", a: "Yes. The coastal location means stronger winds, salt air exposure, and more frequent storm events than inland areas. Flat roofs, ridge tiles, and lead flashing are particularly vulnerable. We specialise in roofing solutions built to handle these conditions." },
];

const whyCards = [
  { icon: MapPin, title: "Blackpool Based", text: "Fast response from our nearby Blackpool base, usually same day across Thornton-Cleveleys." },
  { icon: Drone, title: "Free Drone Inspection", text: "Every Thornton-Cleveleys job starts with a free aerial roof survey before we quote." },
  { icon: Phone, title: "24/7 Emergency Cover", text: "Coastal storms hit Cleveleys hard. We're available around the clock for emergency call-outs." },
  { icon: CalendarCheck, title: "Experienced Roofers", text: "Years of working on Fylde Coast properties. We know these roofs inside out." },
];

const ThorntonCleveleys = () => {
  const ctaRef = useScrollReveal<HTMLElement>(0.2);

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://www.lakesideroofinggroup.co.uk/locations/thornton-cleveleys";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
    robots.content = "index, follow";
    return () => { canonical?.remove(); robots?.remove(); };
  }, []);

  return (
    <Layout>
      <SEO title="Roofing Services in Thornton-Cleveleys | Lake Side Roofing Group" description="Expert roofers in Thornton-Cleveleys. Lake Side Roofing Group. Free drone inspection, 24/7 emergency call-outs, all work guaranteed. Based in nearby Blackpool." />

      {/* HERO */}
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: "Thornton-Cleveleys" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Roofing Services in Thornton-Cleveleys</h1>
          <div className="heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl leading-relaxed mb-8">
            Lake Side Roofing Group provides professional roofing services across Thornton-Cleveleys and the surrounding Fylde Coast area. Based in nearby Blackpool, we offer fast response times across Thornton, Cleveleys, and all connecting streets and estates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book" className="btn-primary">Get Your Free Drone Inspection</Link>
            <a href="tel:07480104865" className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">Call 07480 104865</a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <p className="font-sans text-muted-foreground leading-relaxed">
            Lake Side Roofing Group provides professional roofing services across Thornton-Cleveleys and the surrounding Fylde Coast area. Based in nearby Blackpool, we offer fast response times across Thornton, Cleveleys, and all connecting streets and estates. From the traditional semi-detached properties of Thornton to the seafront homes along the Cleveleys promenade, we understand the specific roofing challenges that coastal Lancashire properties face. Every job starts with a free drone inspection and a full written quote, no obligation, no surprises.
          </p>
        </div>
      </section>

      {/* COASTAL CONTEXT */}
      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Coastal Roofing Challenges in Thornton-Cleveleys</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            Thornton-Cleveleys sits directly on the Lancashire coast, making roofs in this area particularly vulnerable to westerly winds and salt air off the Irish Sea. Flat roofs on extensions and garages are especially prone to membrane failure after severe coastal storms. We carry out more emergency flat roof repairs in Thornton-Cleveleys following winter storms than almost anywhere else on the Fylde Coast.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl mb-4">Our Roofing Services in Thornton-Cleveleys</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground mb-6">We provide the following roofing services to homeowners and businesses across Thornton-Cleveleys and the Fylde Coast:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-dark section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl text-secondary-foreground mb-4">Why Thornton-Cleveleys Homeowners Choose Lake Side</h2>
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

      {/* NEARBY AREAS */}
      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Areas Near Thornton-Cleveleys We Also Cover</h2>
          <div className="heading-rule" />
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map(n => (
              <Link key={n.slug} to={`/locations/${n.slug}`} className="px-4 py-2 bg-surface text-primary font-sans text-sm rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">{n.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Our Recent Work in Thornton-Cleveleys</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            We regularly carry out roofing work across Thornton-Cleveleys, from pitched roof repairs and full re-roofs on the residential streets of Thornton to emergency flat roof repairs on seafront properties in Cleveleys. We have completed chimney repointing work on the older properties along Victoria Road and gutter replacement work across multiple estates following storm seasons.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Frequently Asked Questions: Roofing in Thornton-Cleveleys</h2>
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

      {/* CTA */}
      <section ref={ctaRef} className="scroll-reveal section-dark section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">Need a Roofer in Thornton-Cleveleys?</h2>
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
          { "@type": "ListItem", position: 3, name: "Thornton-Cleveleys", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/locations/thornton-cleveleys" } },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      })}} />
    </Layout>
  );
};

export default ThorntonCleveleys;
