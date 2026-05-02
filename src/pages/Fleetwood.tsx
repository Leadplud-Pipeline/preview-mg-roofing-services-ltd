import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Anchor, Drone, Phone, MapPin } from "@phosphor-icons/react";

const nearbyAreas = [
  { name: "Blackpool", slug: "blackpool" },
  { name: "Thornton-Cleveleys", slug: "thornton-cleveleys" },
  { name: "Poulton-le-Fylde", slug: "poulton-le-fylde" },
  { name: "Lancaster", slug: "lancaster" },
  { name: "Preston", slug: "preston" },
];

const faqs = [
  { q: "Do you cover all of Fleetwood?", a: "Yes. We cover the whole of Fleetwood including the town centre, Broadwater, Rossall, Rossall Point, and all surrounding streets and estates. Being based in Blackpool means we can usually reach you the same day." },
  { q: "Why do roofs in Fleetwood need specialist attention?", a: "Fleetwood sits at the northern tip of the Fylde Peninsula where it receives the full force of North Atlantic weather systems. Roofs here experience stronger winds, higher salt air exposure, and more frequent storm damage than almost anywhere else in Lancashire. We use corrosion-resistant fixings and storm-rated materials on all Fleetwood jobs." },
  { q: "How quickly can you respond to an emergency in Fleetwood?", a: "We aim to respond to emergency call-outs in Fleetwood within the hour from our Blackpool base. Call us any time on 07480 104865, available 24 hours, 7 days a week." },
  { q: "Do you offer free roof inspections in Fleetwood?", a: "Yes. Every job starts with a free drone inspection. We survey your roof from the air, assess the full extent of any damage, and provide a complete written quote at no charge." },
  { q: "Do you carry out emergency repairs in Fleetwood after storms?", a: "Yes. Storm damage is the most common emergency call we receive from Fleetwood. We can usually attend the same day, make your roof weatherproof immediately, and provide a full quote for permanent repair work." },
];

const whyCards = [
  { icon: Anchor, title: "Coastal Specialist", text: "Fleetwood is one of the most exposed coastal locations in Lancashire. We use storm-rated materials and techniques on every Fleetwood job." },
  { icon: Drone, title: "Free Drone Inspection", text: "Every Fleetwood job starts with a free aerial roof survey. No ladders, no scaffolding, no charge." },
  { icon: Phone, title: "24/7 Emergency Cover", text: "Storms hit Fleetwood hard and fast. Our emergency call-out service is available 24 hours, 7 days a week." },
  { icon: MapPin, title: "Blackpool Based", text: "Fast response from our nearby Blackpool base. We know the roads and we know the roofs." },
];

const Fleetwood = () => {
  const ctaRef = useScrollReveal<HTMLElement>(0.2);

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://www.lakesideroofinggroup.co.uk/locations/fleetwood";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
    robots.content = "index, follow";
    return () => { canonical?.remove(); robots?.remove(); };
  }, []);

  return (
    <Layout>
      <SEO title="Roofing Services in Fleetwood | Lake Side Roofing Group" description="Expert roofers in Fleetwood. Lake Side Roofing Group. Free drone inspection, 24/7 emergency call-outs, all work guaranteed. Based in nearby Blackpool." />

      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: "Fleetwood" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Roofing Services in Fleetwood</h1>
          <div className="heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl leading-relaxed mb-8">
            Lake Side Roofing Group provides roofing services across Fleetwood and the surrounding north Fylde area. Based in nearby Blackpool, we cover the whole of Fleetwood, from the Victorian terraces of the town centre to the residential estates of Broadwater and Rossall.
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
            Lake Side Roofing Group provides roofing services across Fleetwood and the surrounding north Fylde area. Based in nearby Blackpool, we cover the whole of Fleetwood, from the Victorian terraces of the town centre to the residential estates of Broadwater and Rossall. Fleetwood is one of the most exposed locations on the Lancashire coast, sitting at the northern tip of the Fylde Peninsula where the River Wyre meets the Irish Sea. Roofs in this area face some of the harshest conditions anywhere in Lancashire. We have the experience and materials to roof Fleetwood properties properly. Every job starts with a free drone inspection and a full written quote.
          </p>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Why Fleetwood Roofs Need Coastal Expertise</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            Fleetwood's position at the tip of the Fylde Peninsula means it receives the full force of North Atlantic weather systems before they reach inland Lancashire. Roofs in Fleetwood experience stronger winds, higher salt air exposure, and more frequent storm damage than virtually anywhere else in the county. We treat every Fleetwood roof as a coastal specialist job, using corrosion-resistant fixings, reinforced ridge and hip tile bedding, and storm-rated flat roof membranes where appropriate.
          </p>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl mb-4">Our Roofing Services in Fleetwood</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground mb-6">We provide the following roofing services to homeowners and businesses across Fleetwood:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl text-secondary-foreground mb-4">Why Fleetwood Homeowners Choose Lake Side</h2>
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
          <h2 className="text-xl md:text-2xl mb-4">Areas Near Fleetwood We Also Cover</h2>
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
          <h2 className="text-xl md:text-2xl mb-4">Our Recent Work in Fleetwood</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            We regularly carry out roofing work across Fleetwood, from emergency storm damage repairs on seafront properties to full roof replacements on the residential estates of Broadwater and Rossall Point. We have carried out chimney repairs and repointing on older terraced properties in the town centre, flat roof replacements on commercial units along the waterfront, and extensive gutter and fascia work following salt air corrosion across multiple Fleetwood streets.
          </p>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Frequently Asked Questions: Roofing in Fleetwood</h2>
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
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">Need a Roofer in Fleetwood?</h2>
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
          { "@type": "ListItem", position: 3, name: "Fleetwood", item: { "@type": "Thing", "@id": "https://www.lakesideroofinggroup.co.uk/locations/fleetwood" } },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      })}} />
    </Layout>
  );
};

export default Fleetwood;
