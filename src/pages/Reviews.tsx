import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCard from "@/components/ReviewCard";
import CTAPanel from "@/components/CTAPanel";

const reviews = [
  { name: "Margaret H.", text: "Absolutely brilliant job on our roof replacement. The team were professional, tidy, and finished ahead of schedule. Couldn't recommend them highly enough.", platform: "Facebook", location: "Ormskirk" },
  { name: "David T.", text: "Called them on a Sunday morning with water coming through our ceiling. They were here within two hours and had it sorted. Lifesavers.", platform: "Facebook", location: "Windermere" },
  { name: "Sarah & James P.", text: "We had three quotes and Lake Side were the most thorough by far. The inspection showed us exactly what needed doing. Fair price, excellent work.", platform: "Facebook", location: "Preston" },
  { name: "Robert W.", text: "Had our gutters replaced and fascias done. Clean, efficient job. The lads were polite and left the place spotless. Will use again for any roofing work.", platform: "Facebook", location: "Kendal" },
  { name: "Christine L.", text: "Emergency repair after a storm took some tiles off. They came out the same day and made everything watertight. Very grateful for the quick response.", platform: "Facebook", location: "Southport" },
  { name: "Alan & Pat M.", text: "Lake Side re-roofed our cottage using proper Westmorland slate. Beautiful job that matches the original perfectly. True craftsmen.", platform: "Google", location: "Keswick" },
];

const Reviews = () => (
  <Layout>
    <SEO title="Customer Reviews | Lake Side Roofing Group" description="Read what our customers say about Lake Side Roofing Group. Trusted roofers in the Lake District & Lancashire." robots="noindex, nofollow" />
    <section className="section-dark section-padding">
      <div className="container-content">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews" }]} />
        <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">What Our Customers Say</h1>
        <div className="heading-rule" />
        {/* Add real reviews and review platform links when provided by client */}
      </div>
    </section>
    <section className="section-light section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
        </div>
      </div>
    </section>
    <CTAPanel />
  </Layout>
);
export default Reviews;
