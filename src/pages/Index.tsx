import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { homepageGalleryImages } from "@/data/gallery";

import heroImg from "@/assets/hero-roof.jpg";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import TrustBadges from "@/components/TrustBadges";
import ServiceCard from "@/components/ServiceCard";
import ReviewMarquee from "@/components/ReviewMarquee";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTAPanel from "@/components/CTAPanel";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef } from "react";


const Index = () => {
  const uspRef = useStaggerReveal<HTMLDivElement>(0.15, 80);
  const locationsRef = useStaggerReveal<HTMLDivElement>(0.2, 60);
  const galleryRef = useStaggerReveal<HTMLDivElement>(0.15, 80);
  const servicesRef = useStaggerReveal<HTMLDivElement>(0.15, 80);
  const reviewHeadingRef = useScrollReveal<HTMLDivElement>();
  const uspHeadingRef = useScrollReveal<HTMLDivElement>();
  const locHeadingRef = useScrollReveal<HTMLDivElement>();
  const galleryHeadingRef = useScrollReveal<HTMLDivElement>();
  const servicesHeadingRef = useScrollReveal<HTMLDivElement>();

  // Parallax
  const heroBgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const h = () => {
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <Layout>
      <SEO title="Expert Roofing Services in Blackpool & Lancashire | Lake Side Roofing Group" description="Lake Side Roofing Group. Family-run roofers in Blackpool serving the Fylde Coast & Lancashire. Free roof inspection & no-obligation quote. 24/7 emergency call-outs." />

      {/* Hero */}
      <section className="relative bg-secondary hero-clip overflow-hidden">
        <img ref={heroBgRef} src={heroImg} alt="Slate roof on a Lake District cottage by Lake Side Roofing Group" className="absolute inset-0 w-full h-[120%] object-cover opacity-20" loading="eager" fetchPriority="high" width={1920} height={1080} style={{ willChange: "transform" }} />
        <div className="relative container-content py-24 md:py-36 lg:py-44 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 anim-hero-h1 max-w-4xl mx-auto leading-tight">
            Lake Side Roofing Group: Expert Roofing Services in Blackpool & the North West
          </h1>
          <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans leading-relaxed anim-hero-sub">
            Family-run. Fully insured. Keeping roofs over Blackpool, the Fylde Coast & Lancashire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center anim-hero-cta">
            <Link to="/book" className="btn-primary text-base">Get Your Free Roof Inspection</Link>
            <a href="tel:07480104865" className="btn-secondary border-secondary-foreground/30 text-secondary-foreground hover:bg-primary hover:border-primary">Call 07480 104865</a>
          </div>
          <div className="mt-10 anim-hero-badges">
            <TrustBadges variant="dark" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-light section-padding overflow-hidden">
        <div className="container-content">
          <div className="text-center mb-6 scroll-reveal" ref={reviewHeadingRef}>
            <h2 className="text-2xl md:text-3xl text-foreground">What Our Customers Say</h2>
            <div className="heading-rule-center anim-heading-rule" />
          </div>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto text-center mb-12 scroll-reveal" ref={useScrollReveal<HTMLDivElement>()}>
            Lake Side Roofing Group is a family-run roofing company based in Blackpool, Lancashire, serving homeowners and businesses across the Fylde Coast, Lancashire, and the Lake District. We specialise in emergency roof repairs, roof replacements, flat roofing, chimney repairs, guttering, and more, with a free roof inspection on every single job.
          </p>
        </div>
        <ReviewMarquee />
        <div className="text-center mt-8">
          <Link to="/reviews" className="inline-block text-primary font-sans font-semibold hover:underline">View All Reviews →</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-dark section-padding">
        <div className="container-content text-center">
          <div ref={uspHeadingRef} className="scroll-reveal">
            <h2 className="text-2xl md:text-3xl text-secondary-foreground">Why Choose Lake Side Roofing Group</h2>
            <div className="heading-rule-center anim-heading-rule" />
          </div>
          <div ref={uspRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Free Roof Inspection", desc: "We thoroughly inspect your roof before every job — no guesswork, just an accurate assessment." },
              { title: "24/7 Emergency Call-Outs", desc: "Roof emergencies don't wait. Neither do we. Available 24 hours, 7 days a week." },
              { title: "Family-Run Business", desc: "A family operation from day one. Lake District and Lancashire roofing specialists." },
              { title: "Fully Insured Tradesmen", desc: "Full public liability and employer's liability insurance on every job." },
              { title: "All Work Guaranteed", desc: "Every job comes with our written workmanship guarantee for your peace of mind." },
              { title: "Lake District & Lancashire", desc: "Serving the region with expert knowledge. We know these roofs inside out." },
            ].map(u => (
              <div key={u.title} className="text-left p-6 scroll-reveal">
                <h3 className="text-base text-gold mb-2">{u.title}</h3>
                <p className="text-secondary-foreground/70 font-sans text-sm leading-relaxed">{u.desc}</p>
                {"link" in u && u.link && (
                  <Link to={u.link} className="inline-block mt-2 text-primary font-sans text-sm font-semibold hover:underline">Learn more →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-light section-padding">
        <div className="container-content text-center">
          <div ref={locHeadingRef} className="scroll-reveal">
            <h2 className="text-2xl md:text-3xl">Areas We Cover</h2>
            <div className="heading-rule-center anim-heading-rule" />
          </div>
          <p className="text-muted-foreground font-sans mb-8">From Blackpool and the Fylde Coast to Lancashire and the Lake District. Your local roofer across the North West.</p>
          <div ref={locationsRef} className="flex flex-wrap justify-center gap-3">
            {locations.map(l => (
              <Link key={l.slug} to={`/locations/${l.slug}`} className="scroll-reveal px-5 py-2 bg-surface text-primary font-sans font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-all text-sm">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-surface section-padding">
        <div className="container-content text-center">
          <div ref={galleryHeadingRef} className="scroll-reveal">
            <h2 className="text-2xl md:text-3xl">Our Recent Work</h2>
            <div className="heading-rule-center anim-heading-rule" />
          </div>
          <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {homepageGalleryImages.map((img, i) => (
              <div key={i} className="scroll-reveal aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary transition-colors group">
                <img
                  src={img.src}
                  alt={img.alt}
                  title={img.title}
                  loading="lazy"
                  decoding="async"
                  width={img.width}
                  height={img.height}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <Link to="/gallery" className="inline-block mt-8 text-primary font-sans font-semibold hover:underline">View Full Gallery →</Link>
        </div>
      </section>

      {/* Our Roofing Services */}
      <section className="section-light section-padding">
        <div className="container-content">
          <div className="text-center mb-6" ref={servicesHeadingRef}>
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl text-foreground">Our Roofing Services Across Blackpool & the North West</h2>
              <div className="heading-rule-center anim-heading-rule" />
            </div>
          </div>
          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.slug} className="scroll-reveal">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <CTAPanel />
    </Layout>
  );
};

export default Index;
