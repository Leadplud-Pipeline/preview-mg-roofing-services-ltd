import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import CTAPanel from "@/components/CTAPanel";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const About = () => {
  const storyRef = useScrollReveal<HTMLDivElement>();
  const statsRef = useStaggerReveal<HTMLDivElement>(0.2, 100);
  const accredRef = useScrollReveal<HTMLDivElement>();

  const stat2 = useCountUp(1000, "s");
  const stat4 = useCountUp(100, "%");

  return (
    <Layout>
      <SEO title="About Lake Side Roofing Group | Roofers in Cumbria & Lancashire" description="Learn about Lake Side Roofing Group, a family-run roofing company serving the Lake District & Lancashire." />
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4 anim-hero-h1">About Lake Side Roofing Group</h1>
          <div className="heading-rule anim-heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-2xl leading-relaxed anim-hero-sub">Trusted by homeowners across Cumbria and Lancashire.</p>
        </div>
      </section>
      <section className="section-light section-padding">
        <div ref={storyRef} className="container-content max-w-3xl scroll-reveal">
          <h2 className="text-xl md:text-2xl mb-4">Our Story</h2>
          <div className="heading-rule anim-heading-rule" />
          <div className="space-y-4 font-sans leading-relaxed text-muted-foreground">
            <p>Lake Side Roofing Group was founded with a simple mission: to provide honest, high-quality roofing services to homeowners and businesses across the Lake District and Lancashire. What started as a small family operation has grown into one of the region's most trusted roofing companies, but we've never lost the personal touch that set us apart from day one.</p>
            <p>Our team of time-served tradesmen brings decades of combined experience to every project. From emergency leak repairs on a stormy night to complete roof replacements on period properties, we approach every job with the same care and attention to detail. We treat every customer's home as if it were our own.</p>
            <p>Based in Ormskirk and serving the entire Lake District and Lancashire region, we're proud of the reputation we've built through thousands of completed projects. Our customers come back to us again and again, and they recommend us to their neighbours, friends, and family. That word-of-mouth trust is something no amount of advertising can buy.</p>
          </div>
        </div>
      </section>
      <section className="section-dark section-padding">
        <div className="container-content">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 scroll-reveal">
              <p ref={stat2.ref as React.RefObject<HTMLParagraphElement>} className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">{stat2.value}</p>
              <p className="text-sm font-heading uppercase tracking-wide text-secondary-foreground">Roofs Completed</p>
            </div>
            <div className="p-6 scroll-reveal">
              <p className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">24/7</p>
              <p className="text-sm font-heading uppercase tracking-wide text-secondary-foreground">Emergency Cover</p>
            </div>
            <div className="p-6 scroll-reveal">
              <p ref={stat4.ref as React.RefObject<HTMLParagraphElement>} className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">{stat4.value}</p>
              <p className="text-sm font-heading uppercase tracking-wide text-secondary-foreground">Workmanship Guarantee</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-light section-padding">
        <div ref={accredRef} className="container-content text-center scroll-reveal">
          <h2 className="text-xl md:text-2xl mb-4">Our Accreditations</h2>
          <div className="heading-rule-center anim-heading-rule" />
          <TrustBadges variant="light" />
        </div>
      </section>
      <CTAPanel />
    </Layout>
  );
};
export default About;
