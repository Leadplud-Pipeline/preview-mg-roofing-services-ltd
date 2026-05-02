import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import { services } from "@/data/services";
import { Phone, Envelope, Clock, FacebookLogo, MapPin } from "@phosphor-icons/react";

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", location: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); navigate("/thank-you"); };

  return (
    <Layout>
      <SEO title="Contact Lake Side Roofing Group | Free Roofing Estimates" description="Get in touch with Lake Side Roofing Group for free roofing estimates. Call 07480 104865 or fill in our contact form." />
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Get in Touch</h1>
          <div className="heading-rule" />
        </div>
      </section>
      <section className="section-light section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl md:text-2xl mb-4">Contact Details</h2>
              <div className="heading-rule" />
              <div className="space-y-4 mb-8">
                <a href="tel:07480104865" className="flex items-center gap-3 font-sans text-foreground hover:text-primary transition-colors">
                  <Phone size={20} weight="bold" className="text-primary" /> 07480 104865
                </a>
                <a href="mailto:info@lakesideroofinggroup.co.uk" className="flex items-center gap-3 font-sans text-foreground hover:text-primary transition-colors">
                  <Envelope size={20} weight="bold" className="text-primary" /> info@lakesideroofinggroup.co.uk
                </a>
                <a href="https://www.facebook.com/people/Lakeside-Roofing-Group/61582355876872/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-foreground hover:text-primary transition-colors">
                  <FacebookLogo size={20} weight="bold" className="text-primary" /> Facebook
                </a>
                <div className="flex items-start gap-3 font-sans text-foreground">
                  <Clock size={20} weight="bold" className="text-primary mt-0.5" />
                  <div>
                    <p>Monday – Friday: 06:00 – 18:00</p>
                    <p>Saturday & Sunday: 08:00 – 17:00</p>
                    <p className="text-primary font-semibold">24hr Emergency Calls Taken</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 font-sans text-foreground">
                  <MapPin size={20} weight="bold" className="text-primary mt-0.5" />
                  <div>
                    <p>23 Vicarage Lane</p>
                    <p>Blackpool, FY4 4EF</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe title="Lake Side Roofing Group, 23 Vicarage Lane, Blackpool, FY4 4EF" src="https://maps.google.com/maps?q=23+Vicarage+Lane,+Blackpool,+FY4+4EF&output=embed" width="100%" height="400" style={{ border: 0, borderRadius: '8px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl mb-4">Send Us a Message</h2>
              <div className="heading-rule" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label htmlFor="name" className="block text-sm font-sans font-medium text-foreground mb-1">Full Name</label><input id="name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm font-sans bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                <div><label htmlFor="phone" className="block text-sm font-sans font-medium text-foreground mb-1">Phone Number</label><input id="phone" type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm font-sans bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                <div><label htmlFor="email" className="block text-sm font-sans font-medium text-foreground mb-1">Email</label><input id="email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm font-sans bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                <div><label htmlFor="service" className="block text-sm font-sans font-medium text-foreground mb-1">Service Required</label>
                  <select id="service" required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm font-sans bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div><label htmlFor="location" className="block text-sm font-sans font-medium text-foreground mb-1">Your Location</label><input id="location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm font-sans bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                <div><label htmlFor="message" className="block text-sm font-sans font-medium text-foreground mb-1">Message</label><textarea id="message" rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm font-sans bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" /></div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <EmergencyBanner />
    </Layout>
  );
};
export default Contact;
