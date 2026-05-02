import type { Icon } from "@phosphor-icons/react";
import {
  Wrench, House, HouseLine, Stack, Triangle, Drop, Columns, Fire
} from "@phosphor-icons/react";

export interface ServiceData {
  slug: string;
  name: string;
  shortDesc: string;
  heroDesc: string;
  icon: Icon;
  included: string[];
  whyChoose: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDesc: string;
}

export const services: ServiceData[] = [
  {
    slug: "emergency-roof-repairs",
    name: "Emergency Roof Repairs",
    shortDesc: "24-hour emergency call-outs for storm damage, leaks, and urgent roof repairs.",
    heroDesc: "When your roof fails, every minute counts. Lake Side Roofing Group provides 24-hour emergency roof repairs across the Lake District and Lancashire. Whether it's storm damage, a sudden leak, or structural failure, our experienced team responds fast to secure your property and prevent further damage.",
    icon: Wrench,
    included: [
      "24-hour emergency call-out service, 7 days a week",
      "Temporary weatherproofing and tarpaulin cover",
      "Full damage assessment and roof inspection",
      "Emergency tile and slate replacement",
      "Storm damage repairs including ridge tiles and flashing",
      "Leak detection and immediate repair",
      "Insurance report documentation and photography",
      "Follow-up permanent repair quotation"
    ],
    whyChoose: [
      "We respond within hours, not days. Available 24/7, 365 days a year.",
      "Extensive experience dealing with Lake District weather damage.",
      "We carry emergency materials on every van for immediate repairs.",
      "We provide full photographic reports for your insurance claim."
    ],
    faqs: [
      { q: "How quickly can you respond to an emergency roof repair?", a: "We aim to respond to all emergency calls within 2-4 hours. Our vans carry essential materials so we can begin temporary repairs immediately upon arrival." },
      { q: "Do you provide emergency roof repairs at weekends?", a: "Yes. Our emergency service runs 24 hours a day, 7 days a week, including weekends and bank holidays. Call 07480 104865 any time." },
      { q: "Will my insurance cover emergency roof repairs?", a: "Most home insurance policies cover storm damage and emergency repairs. We provide full photographic documentation and written reports to support your claim." },
      { q: "What counts as an emergency roof repair?", a: "Any situation where your roof is actively leaking, has suffered storm damage, or where there is a risk of further structural damage. Missing tiles, collapsed ridges, and fallen chimneys all qualify." },
      { q: "How much do emergency roof repairs cost?", a: "Costs vary depending on the severity of the damage. We provide a clear quote before starting any permanent work. Emergency temporary weatherproofing is charged at a fair call-out rate." }
    ],
    relatedSlugs: ["roof-replacement", "pitched-roof-repair", "gutter-cleaning-replacement"],
    metaTitle: "Emergency Roof Repairs in the Lake District & Lancashire | Lake Side Roofing Group",
    metaDesc: "24-hour emergency roof repairs across the Lake District & Lancashire. Storm damage, leaks, urgent repairs. Call Lake Side Roofing Group on 07480 104865."
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortDesc: "Complete roof replacements with premium materials and a full workmanship guarantee.",
    heroDesc: "A full roof replacement is one of the most important investments you'll make in your property. Lake Side Roofing Group delivers complete roof replacements across the Lake District and Lancashire using time-tested methods and premium materials, backed by our full workmanship guarantee.",
    icon: House,
    included: [
      "Free roof inspection and detailed roof survey",
      "Full removal of existing roof covering",
      "Inspection and repair of roof timbers and battens",
      "Installation of breathable roofing membrane",
      "New tiles, slates, or chosen roofing material",
      "Ridge tiles, hip tiles, and dry ridge systems",
      "New lead flashing to all abutments and valleys",
      "Full scaffold erection and dismantling",
      "Site clearance and waste disposal",
      "Written workmanship guarantee"
    ],
    whyChoose: [
      "We've replaced hundreds of roofs across Cumbria and Lancashire.",
      "We use only premium materials from trusted UK suppliers.",
      "Every replacement includes a free roof inspection to assess the full scope before quoting.",
      "All work is fully guaranteed and we remain available for aftercare."
    ],
    faqs: [
      { q: "How long does a full roof replacement take?", a: "Most residential roof replacements take between 5 and 10 working days, depending on the size and complexity of the roof. We provide a clear timeline before work begins." },
      { q: "How much does a new roof cost in the Lake District?", a: "A full roof replacement typically costs between £5,000 and £15,000 depending on the property size, materials chosen, and access requirements. We provide free no-obligation quotes." },
      { q: "Do I need planning permission for a roof replacement?", a: "In most cases, a like-for-like roof replacement does not require planning permission. If you're changing materials or altering the roofline, we'll advise you on whether consent is needed." },
      { q: "What materials do you use for roof replacements?", a: "We work with natural slate, concrete tiles, clay tiles, and synthetic alternatives. We'll recommend the best option for your property type, budget, and local character." },
      { q: "Will you handle the scaffolding?", a: "Yes. All scaffolding is included in our quotation. We arrange erection, hire, and dismantling as part of the project." }
    ],
    relatedSlugs: ["new-roof-installation", "pitched-roof-repair", "gutter-cleaning-replacement"],
    metaTitle: "Roof Replacement in the Lake District & Lancashire | Lake Side Roofing Group",
    metaDesc: "Complete roof replacements with premium materials and full guarantee. Free roof inspection included. Lake Side Roofing Group."
  },
  {
    slug: "new-roof-installation",
    name: "New Roof Installation",
    shortDesc: "New build and extension roofing, designed and installed to the highest standards.",
    heroDesc: "Whether you're building a new home, adding an extension, or converting a space, Lake Side Roofing Group provides expert new roof installations across the Lake District and Lancashire. From initial design consultation to final inspection, we deliver roofs built to last.",
    icon: HouseLine,
    included: [
      "Design consultation and specification planning",
      "Full roof structure installation on new builds",
      "Extension and conservatory roofing",
      "Timber frame and truss installation",
      "Breathable membrane and insulation",
      "Tile, slate, or flat roofing finish",
      "All flashing, valleys, and ridge work",
      "Building regulations compliance",
      "Final inspection and sign-off"
    ],
    whyChoose: [
      "We work closely with builders and architects to deliver roofs that meet exacting specifications.",
      "Our team has installed roofs on properties from modern new builds to barn conversions.",
      "We ensure full compliance with current building regulations.",
      "Every installation is backed by our workmanship guarantee."
    ],
    faqs: [
      { q: "Can you install a roof on a new build extension?", a: "Yes. We regularly install roofs on extensions, garden rooms, and new build properties. We work with your builder or directly with you to ensure the roof meets all specifications." },
      { q: "What types of new roof can you install?", a: "We install pitched roofs, flat roofs, and combination designs using slate, tile, GRP fibreglass, EPDM rubber, and more. We'll recommend the best solution for your project." },
      { q: "Do you handle building regulations for new roofs?", a: "Yes. We ensure all new roof installations comply with current building regulations, including insulation standards and fire safety requirements." },
      { q: "How long does a new roof installation take?", a: "Timelines vary based on the project size. A typical extension roof takes 3-5 days, while a full new build roof may take 1-3 weeks. We provide a schedule before starting." },
      { q: "Do you provide a guarantee on new roof installations?", a: "Yes. All new roof installations come with our full workmanship guarantee. Material warranties from manufacturers also apply." }
    ],
    relatedSlugs: ["roof-replacement", "flat-roof-installation-repair", "chimney-repairs-repointing"],
    metaTitle: "New Roof Installation in the Lake District & Lancashire | Lake Side Roofing Group",
    metaDesc: "Expert new roof installations for new builds and extensions across the Lake District & Lancashire. Building regs compliant. Free quotes from Lake Side Roofing Group."
  },
  {
    slug: "flat-roof-installation-repair",
    name: "Flat Roof Installation & Repair",
    shortDesc: "GRP fibreglass and EPDM flat roofing: installed, repaired, and guaranteed.",
    heroDesc: "Flat roofs require specialist knowledge and materials to perform reliably in the North West's demanding climate. Lake Side Roofing Group installs and repairs flat roofs across the Lake District and Lancashire using modern GRP fibreglass and EPDM rubber systems that outperform traditional felt by decades.",
    icon: Stack,
    included: [
      "Full flat roof survey and assessment",
      "Removal of old felt or failed covering",
      "Deck inspection and timber repairs",
      "GRP fibreglass or EPDM rubber installation",
      "Edge trims, upstands, and detailing",
      "Insulation to current building regulations",
      "Drainage and outlet installation",
      "Flat roof repairs and patch work",
      "Written guarantee on all work"
    ],
    whyChoose: [
      "We use GRP fibreglass and EPDM, systems with 25-30 year life expectancy.",
      "No more felt roofs that fail every 5-10 years.",
      "Fully compliant with current building regulations including insulation standards.",
      "We repair existing flat roofs as well as installing new ones."
    ],
    faqs: [
      { q: "What is the best flat roofing material?", a: "GRP fibreglass is our recommended system for most flat roofs. It creates a seamless, waterproof surface that typically lasts 25-30 years. EPDM rubber is an excellent alternative for larger areas." },
      { q: "How long does a flat roof last?", a: "A modern GRP fibreglass flat roof typically lasts 25-30 years with minimal maintenance. Traditional felt roofs last only 10-15 years, which is why we recommend upgrading." },
      { q: "Can you repair my existing flat roof?", a: "Yes. We repair all types of flat roofs including felt, GRP, EPDM, and asphalt. For roofs beyond economic repair, we'll recommend a full replacement." },
      { q: "Do flat roofs need insulation?", a: "Yes. Current building regulations require flat roofs to meet minimum insulation standards. We include appropriate insulation in all new flat roof installations." },
      { q: "How much does a new flat roof cost?", a: "A GRP fibreglass flat roof typically costs between £60-£90 per square metre installed, depending on the specification and access. We provide free no-obligation quotes." }
    ],
    relatedSlugs: ["new-roof-installation", "roof-replacement", "chimney-repairs-repointing"],
    metaTitle: "Flat Roof Installation & Repair in the Lake District & Lancashire | Lake Side Roofing Group",
    metaDesc: "GRP fibreglass and EPDM flat roof installation and repair across the Lake District & Lancashire. 25-year systems. Free quotes from Lake Side Roofing Group."
  },
  {
    slug: "pitched-roof-repair",
    name: "Pitched Roof Repair",
    shortDesc: "Tile and slate repairs, ridge re-bedding, valley repairs, and leak fixes.",
    heroDesc: "From slipped slates to cracked tiles, damaged ridges to leaking valleys. Lake Side Roofing Group provides expert pitched roof repairs across the Lake District and Lancashire. We fix problems at their source, not just the symptoms, using traditional methods and quality materials.",
    icon: Triangle,
    included: [
      "Free roof inspection to identify all issues",
      "Tile and slate replacement",
      "Ridge tile re-bedding and dry ridge installation",
      "Valley and hip repairs",
      "Leak tracing and repair",
      "Mortar and pointing repairs",
      "Timber and batten repairs where needed",
      "Full clean-up and waste removal"
    ],
    whyChoose: [
      "Our roof inspections catch problems invisible from ground level.",
      "We carry a wide range of replacement tiles and slates to match existing roofs.",
      "We repair the root cause, not just the visible symptom.",
      "Extensive experience with every type of pitched roof in the region."
    ],
    faqs: [
      { q: "How do I know if my pitched roof needs repairing?", a: "Common signs include missing or slipped tiles, damp patches on ceilings, moss or lichen growth, damaged ridge tiles, and visible daylight in the loft. We offer free roof inspections to assess your roof's condition." },
      { q: "Can you match my existing tiles or slates?", a: "Yes. We carry a wide stock of replacement tiles and slates and can source specialist or reclaimed materials to match older properties." },
      { q: "How much does a pitched roof repair cost?", a: "Minor repairs such as replacing a few tiles start from around £150-£300. Larger repairs involving ridges, valleys, or multiple areas cost more. We provide clear quotes before any work begins." },
      { q: "Do you repair slate roofs?", a: "Yes. We specialise in natural slate repair, which is common across Lake District properties. We source quality replacement slates to match your existing roof." },
      { q: "Will a repair fix my roof leak?", a: "In most cases, yes. We trace leaks to their source using a combination of internal inspection and roof survey. We fix the cause, not just the visible damage." }
    ],
    relatedSlugs: ["roof-replacement", "emergency-roof-repairs", "gutter-cleaning-replacement"],
    metaTitle: "Pitched Roof Repair in the Lake District & Lancashire | Lake Side Roofing Group",
    metaDesc: "Expert pitched roof repairs: tiles, slates, ridges, valleys, and leaks. Free roof inspection. Lake Side Roofing Group."
  },
  {
    slug: "gutter-cleaning-replacement",
    name: "Gutter Cleaning & Replacement",
    shortDesc: "Gutter cleaning, repairs, and full replacement to protect your property from water damage.",
    heroDesc: "Blocked or damaged gutters are one of the most common causes of damp, staining, and structural damage to UK properties. Lake Side Roofing Group provides professional gutter cleaning and replacement across the Lake District and Lancashire, keeping your rainwater system flowing and your property protected.",
    icon: Drop,
    included: [
      "Full gutter clean and debris removal",
      "Downpipe clearance and flush",
      "Gutter seal and joint repairs",
      "Bracket replacement and realignment",
      "Full gutter replacement in uPVC, cast iron, or aluminium",
      "Fascia board inspection during gutter work",
      "Gutter guard installation to prevent future blockages",
      "Safe working at height with full access equipment"
    ],
    whyChoose: [
      "We clean and inspect gutters from roof level, not just from a ladder, giving a complete picture.",
      "We replace damaged sections on the spot rather than scheduling a separate visit.",
      "We fit gutter guards to prevent recurring blockages from leaves and moss.",
      "Our team is fully insured for all work at height."
    ],
    faqs: [
      { q: "How often should gutters be cleaned?", a: "We recommend cleaning gutters at least once a year, ideally in late autumn after leaf fall. Properties near trees may benefit from twice-yearly cleaning." },
      { q: "What are the signs of blocked gutters?", a: "Water overflowing during rain, green algae staining on walls, damp patches inside the property, and sagging or pulling-away gutters are all common signs of blockages." },
      { q: "Can you replace just part of my guttering?", a: "Yes. We can replace individual damaged sections, fittings, or downpipes without replacing the entire system, provided the remaining guttering is in good condition." },
      { q: "What type of guttering do you recommend?", a: "For most residential properties, high-quality uPVC guttering offers excellent performance and value. For period properties, we also install cast iron and aluminium systems." },
      { q: "How much does gutter cleaning cost?", a: "Gutter cleaning for a typical semi-detached house costs between £75 and £150. Larger or more complex properties cost more. We provide quotes before any work starts." }
    ],
    relatedSlugs: ["upvc-fascias-soffits-guttering", "pitched-roof-repair", "chimney-repairs-repointing"],
    metaTitle: "Gutter Cleaning & Replacement in the Lake District & Lancashire | Lake Side Roofing Group",
    metaDesc: "Professional gutter cleaning and replacement across the Lake District & Lancashire. Prevent water damage. Free quotes from Lake Side Roofing Group."
  },
  {
    slug: "upvc-fascias-soffits-guttering",
    name: "uPVC Fascias, Soffits & Guttering",
    shortDesc: "Complete roofline replacement: fascias, soffits, bargeboards, and guttering in uPVC.",
    heroDesc: "Your roofline is your property's first line of defence against the elements. Lake Side Roofing Group provides complete uPVC fascia, soffit, and guttering installation and replacement across the Lake District and Lancashire, transforming tired, rotting timber rooflines into maintenance-free uPVC systems.",
    icon: Columns,
    included: [
      "Full roofline survey and quotation",
      "Removal of old timber fascias, soffits, and bargeboards",
      "Inspection and treatment of rafter feet",
      "Installation of new uPVC fascia boards",
      "uPVC soffit boards and ventilation",
      "Bargeboard replacement",
      "New uPVC guttering and downpipes",
      "Colour-matched fittings and trims",
      "Full clean-up and waste disposal"
    ],
    whyChoose: [
      "uPVC roofline never needs painting, won't rot, and lasts for decades.",
      "We inspect rafter feet during every installation, catching hidden timber damage early.",
      "Wide range of colours and styles to suit your property.",
      "Complete roofline transformation in as little as 2-3 days."
    ],
    faqs: [
      { q: "What are fascias and soffits?", a: "Fascias are the vertical boards at the edge of your roof that support the bottom row of tiles and hold the guttering. Soffits are the horizontal boards underneath the fascia that close the gap between the wall and the roof edge." },
      { q: "Why should I replace timber fascias with uPVC?", a: "Timber fascias require regular painting and are prone to rotting, especially in the North West climate. uPVC is maintenance-free, weatherproof, and typically lasts 20-30 years." },
      { q: "How long does a roofline replacement take?", a: "A full roofline replacement on a typical semi-detached house takes 2-3 days. Larger or more complex properties may take longer." },
      { q: "Can you match uPVC to my existing windows?", a: "Yes. We offer a wide range of uPVC colours including white, black, anthracite grey, and woodgrain finishes to complement your windows and doors." },
      { q: "How much does a full roofline replacement cost?", a: "A full uPVC roofline replacement for a semi-detached house typically costs between £1,500 and £3,000 depending on the size and access. We provide free detailed quotes." }
    ],
    relatedSlugs: ["gutter-cleaning-replacement", "pitched-roof-repair", "roof-replacement"],
    metaTitle: "uPVC Fascias, Soffits & Guttering in the Lake District & Lancashire | Lake Side Roofing Group",
    metaDesc: "Complete uPVC roofline replacement: fascias, soffits, guttering. Maintenance-free finish. Free quotes from Lake Side Roofing Group."
  },
  {
    slug: "chimney-repairs-repointing",
    name: "Chimney Repairs & Repointing",
    shortDesc: "Chimney stack repairs, repointing, lead flashing, and pot replacement.",
    heroDesc: "Chimneys are exposed to the worst of the North West weather, and they're often the first part of a property to show signs of deterioration. Lake Side Roofing Group provides expert chimney repairs and repointing across the Lake District and Lancashire, from crumbling mortar to leaning stacks.",
    icon: Fire,
    included: [
      "Chimney stack inspection and survey",
      "Full repointing in lime or cement mortar",
      "Chimney pot replacement and re-seating",
      "Lead flashing renewal around chimney base",
      "Chimney cap and cowl installation",
      "Stack rebuilding where required",
      "Chimney removal (partial or full)",
      "Scaffold or cherry picker access as needed"
    ],
    whyChoose: [
      "Chimneys in the Lake District face extreme weather. We understand the materials and methods needed.",
      "We use lime mortar on older properties to prevent damage from incompatible modern cement.",
      "Our roof inspections allow us to assess chimney condition without costly scaffolding for the survey.",
      "We combine chimney work with other roof repairs for cost efficiency."
    ],
    faqs: [
      { q: "How do I know if my chimney needs repointing?", a: "Look for crumbling mortar between the bricks or stones, white salt staining, damp patches on the chimney breast inside the house, or loose chimney pots. Our free roof inspection gives a detailed view." },
      { q: "What is the difference between lime mortar and cement mortar?", a: "Lime mortar is softer and more flexible than cement. It's essential for older properties built with lime mortar, as hard cement can trap moisture and cause the stonework to deteriorate." },
      { q: "How much does chimney repointing cost?", a: "Chimney repointing typically costs between £300 and £800 depending on the size of the stack and access requirements. Full chimney rebuilds cost more. We provide detailed quotes." },
      { q: "Can you remove a chimney stack?", a: "Yes. We can remove chimney stacks partially (above roofline) or fully, with appropriate structural support. Planning permission may be required for listed properties." },
      { q: "Do chimney repairs require scaffolding?", a: "Most chimney repairs require scaffolding or cherry picker access for safe working at height. This is included in our quotation." }
    ],
    relatedSlugs: ["upvc-fascias-soffits-guttering", "pitched-roof-repair", "roof-replacement"],
    metaTitle: "Chimney Repairs & Repointing in the Lake District & Lancashire | Lake Side Roofing Group",
    metaDesc: "Expert chimney repairs, repointing, and lead flashing. Lime and cement mortar. Free roof inspection. Lake Side Roofing Group."
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
