import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTAPanel = ({ serviceName }: { serviceName?: string }) => {
  const ref = useScrollReveal<HTMLElement>(0.2);

  return (
    <section ref={ref} className="scroll-reveal section-dark section-padding">
      <div className="container-content text-center">
        <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">
          {serviceName
            ? `Need ${serviceName} in the Lake District or Lancashire?`
            : "Ready to Get Started?"}
        </h2>
        <div className="heading-rule-center anim-heading-rule" />
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
          Book your free roof inspection today. We'll assess your roof, provide a full written quote, and there's absolutely no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book" className="btn-primary">
            Book Your Free Roof Inspection
          </Link>
          <a href="tel:07480104865" className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
            Call 07480 104865
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAPanel;
