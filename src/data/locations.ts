export interface LocationData {
  slug: string;
  name: string;
  heroDesc: string;
  whyChoose: string[];
  nearbyLocations: string[];
  recentWork: string;
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDesc: string;
}

export const locations: LocationData[] = [
  {
    slug: "blackpool",
    name: "Blackpool",
    heroDesc: "As our home base, Blackpool is at the heart of everything we do. From the Victorian terraces near the Promenade to modern estates in Marton and Bispham, we know Blackpool roofs inside out. The coastal weather means roofs here face unique challenges, and we have the experience to handle them all.",
    whyChoose: [
      "Blackpool is our home base, so we're always nearby for fast response times.",
      "We've worked on hundreds of properties across Blackpool.",
      "We understand coastal roofing challenges: salt air, high winds, and driving rain.",
      "Our emergency service means we can be on your Blackpool roof within hours."
    ],
    nearbyLocations: ["thornton-cleveleys", "poulton-le-fylde", "lytham-st-annes", "fleetwood", "preston"],
    recentWork: "Recent projects in Blackpool include a full slate roof replacement on a Victorian terrace near the Promenade, emergency storm damage repairs in Bispham, and a complete flat roof installation on a commercial property in South Shore.",
    faqs: [
      { q: "Do you cover all areas of Blackpool?", a: "Yes. We cover the whole of Blackpool including Bispham, Norbreck, Layton, Marton, South Shore, and all surrounding areas." },
      { q: "How fast can you respond to an emergency in Blackpool?", a: "As Blackpool is our home base, we can typically respond to emergency calls within 1-2 hours." },
      { q: "Do you work on commercial properties in Blackpool?", a: "Yes. We handle both residential and commercial roofing across Blackpool, from guest houses to retail units." }
    ],
    metaTitle: "Roofing Services in Blackpool | Lake Side Roofing Group",
    metaDesc: "Expert roofers in Blackpool: roof repairs, replacements, flat roofing, and 24/7 emergencies. Locally based. Call 07480 104865."
  },
  {
    slug: "thornton-cleveleys",
    name: "Thornton-Cleveleys",
    heroDesc: "Thornton-Cleveleys sits along the Fylde Coast just north of Blackpool, with a mix of inter-war semis, post-war estates, and modern builds. The coastal exposure means roofs here need careful attention and quality materials to stand up to the elements.",
    whyChoose: [
      "Just minutes from our Blackpool base for rapid response.",
      "Experience with the full range of Thornton-Cleveleys property types.",
      "We specify marine-grade fixings for coastal properties.",
      "24/7 emergency call-outs available."
    ],
    nearbyLocations: ["blackpool", "poulton-le-fylde", "fleetwood"],
    recentWork: "Recent work in Thornton-Cleveleys includes ridge tile replacements, gutter overhauls on coastal semis, and a full re-roof on a detached bungalow in Cleveleys.",
    faqs: [
      { q: "Do you cover Thornton and Cleveleys?", a: "Yes, we cover both Thornton and Cleveleys as well as Anchorsholme, Norbreck, and surrounding areas." },
      { q: "Does the coastal weather affect roofs in Thornton-Cleveleys?", a: "Yes. Salt air and high winds can accelerate wear on fixings and mortar. We use marine-grade materials where appropriate." }
    ],
    metaTitle: "Roofing Services in Thornton-Cleveleys | Lake Side Roofing Group",
    metaDesc: "Expert roofers in Thornton-Cleveleys: roof repairs, replacements, and 24/7 emergencies. Fylde Coast specialists. Call 07480 104865."
  },
  {
    slug: "poulton-le-fylde",
    name: "Poulton-le-Fylde",
    heroDesc: "Poulton-le-Fylde is a charming market town on the Fylde with a mix of period cottages, Victorian terraces, and modern developments. We've been looking after roofs here for decades, and understand the local building styles and materials.",
    whyChoose: [
      "Close to our Blackpool base for fast response times.",
      "Experience with Poulton's older properties and conservation requirements.",
      "Full range of roofing services from repairs to complete replacements.",
      "Free roof inspection on every job."
    ],
    nearbyLocations: ["blackpool", "thornton-cleveleys", "fleetwood", "preston"],
    recentWork: "Recent projects in Poulton-le-Fylde include chimney repointing on a period cottage in the town centre, a full tile roof replacement on a 1930s semi, and emergency leak repairs on a detached home.",
    faqs: [
      { q: "Do you work on older properties in Poulton?", a: "Yes. We have extensive experience with period and heritage properties, using sympathetic materials and methods." },
      { q: "How quickly can you attend an emergency in Poulton-le-Fylde?", a: "Poulton is within our primary response area. We typically attend within 1-2 hours." }
    ],
    metaTitle: "Roofing Services in Poulton-le-Fylde | Lake Side Roofing Group",
    metaDesc: "Expert roofers in Poulton-le-Fylde: roof repairs, replacements, chimney work, and 24/7 emergencies. Call 07480 104865."
  },
  {
    slug: "lytham-st-annes",
    name: "Lytham St Annes",
    heroDesc: "Lytham St Annes is known for its elegant period properties, tree-lined avenues, and coastal charm. Roofs here range from grand Edwardian villas to modern apartments, and the coastal location demands quality workmanship and materials.",
    whyChoose: [
      "Extensive experience with Lytham's period and conservation-area properties.",
      "We use marine-grade fixings and specify materials suited to coastal conditions.",
      "Close to our Blackpool base for quick response times.",
      "Free roof inspection and no-obligation quotes."
    ],
    nearbyLocations: ["blackpool", "poulton-le-fylde", "preston"],
    recentWork: "Recent work in Lytham St Annes includes a natural slate re-roof on an Edwardian villa, lead valley replacements on a listed property, and flat roof installations on modern apartments in St Annes.",
    faqs: [
      { q: "Do you cover both Lytham and St Annes?", a: "Yes, we cover Lytham, St Annes, Ansdell, Fairhaven, and all surrounding areas." },
      { q: "Can you work on listed buildings in Lytham?", a: "Yes. We have experience working on listed and conservation-area properties, using approved materials and methods." }
    ],
    metaTitle: "Roofing Services in Lytham St Annes | Lake Side Roofing Group",
    metaDesc: "Expert roofers in Lytham St Annes: slate roofing, repairs, replacements, and 24/7 emergencies. Coastal roofing specialists. Call 07480 104865."
  },
  {
    slug: "fleetwood",
    name: "Fleetwood",
    heroDesc: "Fleetwood sits at the tip of the Fylde Peninsula, fully exposed to the Irish Sea. Roofs here take a real battering from coastal storms, salt air, and driving rain. We have decades of experience maintaining and repairing roofs in Fleetwood's challenging conditions.",
    whyChoose: [
      "Specialists in coastal roofing with marine-grade materials and fixings.",
      "Close to our Blackpool base for rapid response.",
      "Experience with Fleetwood's Victorian terraces and inter-war housing.",
      "24/7 emergency service for storm damage and leaks."
    ],
    nearbyLocations: ["thornton-cleveleys", "blackpool", "poulton-le-fylde"],
    recentWork: "Recent projects in Fleetwood include emergency storm damage repairs on seafront terraces, a complete re-roof on a 1930s semi, and gutter replacements on properties along the Esplanade.",
    faqs: [
      { q: "Do you cover all of Fleetwood?", a: "Yes, we cover the whole of Fleetwood including the seafront, Rossall, Broadwater, and all surrounding areas." },
      { q: "How do you handle the coastal conditions in Fleetwood?", a: "We specify marine-grade stainless steel fixings, high-performance felts, and storm-rated materials to withstand Fleetwood's exposed coastal location." }
    ],
    metaTitle: "Roofing Services in Fleetwood | Lake Side Roofing Group",
    metaDesc: "Expert roofers in Fleetwood: coastal roofing specialists, emergency repairs, and full replacements. Call 07480 104865."
  },
  {
    slug: "ormskirk",
    name: "Ormskirk",
    heroDesc: "As one of our home bases, Ormskirk sits at the heart of our service area. This historic market town in West Lancashire features a mix of period properties and modern estates, each with unique roofing requirements. From Victorian terraces near the town centre to detached homes around Ruff Lane, we know Ormskirk roofs inside out.",
    whyChoose: [
      "Ormskirk is our local base. We're minutes away for fast response times.",
      "We've worked on hundreds of properties across Ormskirk.",
      "We understand the mix of property types from Edge Hill terraces to Aughton detached homes.",
      "Our emergency service means we can be on your Ormskirk roof within hours."
    ],
    nearbyLocations: ["southport", "preston", "blackpool"],
    recentWork: "Recent projects in Ormskirk include a full slate roof replacement on a Victorian property near the town centre, emergency storm damage repairs on a detached home in Aughton, and a complete uPVC roofline transformation on a 1960s semi-detached house on Ruff Lane. Ormskirk properties range from period stone-built cottages to modern timber-frame estates, and we have experience with all types.",
    faqs: [
      { q: "Do you cover all areas of Ormskirk?", a: "Yes. We cover the whole of Ormskirk including Aughton, Scarth Hill, Town Green, and surrounding areas. We're locally based and can respond quickly." },
      { q: "How fast can you respond to an emergency in Ormskirk?", a: "As Ormskirk is our home base, we can typically respond to emergency calls within 1-2 hours during working hours, and within 2-4 hours outside normal hours." },
      { q: "Are you available for roofing work in Ormskirk at weekends?", a: "Yes. We work Monday to Saturday as standard, and our emergency service is available 24/7 including weekends and bank holidays." }
    ],
    metaTitle: "Roofing Services in Ormskirk | Lake Side Roofing Group",
    metaDesc: "Expert roofers in Ormskirk: roof repairs, replacements, guttering, and 24/7 emergencies. Locally based. Call 07480 104865."
  },
  {
    slug: "southport",
    name: "Southport",
    heroDesc: "Southport's elegant Victorian and Edwardian architecture demands skilled roofing work. From the grand properties along Lord Street to the residential streets of Birkdale and Ainsdale, Lake Side Roofing Group has been maintaining and repairing Southport's roofs for decades. The coastal location means roofs here face salt-laden winds, making quality materials and workmanship essential.",
    whyChoose: [
      "We understand the specific challenges of coastal roofing in Southport: salt air, wind exposure, and sand ingress.",
      "Southport's period properties require sympathetic materials and methods. We deliver both.",
      "Just a short drive from our Ormskirk base for fast response times.",
      "We've worked across Birkdale, Ainsdale, Churchtown, and central Southport."
    ],
    nearbyLocations: ["ormskirk", "preston", "blackpool"],
    recentWork: "Our Southport portfolio includes a full natural slate re-roof on a Victorian villa in Birkdale, chimney repointing on a Grade II-listed property near Lord Street, and multiple gutter replacements on the Edwardian terraces of Churchtown. Southport's proximity to the coast means roofs here face accelerated weathering, and we specify materials accordingly.",
    faqs: [
      { q: "Do you provide roofing services across all of Southport?", a: "Yes. We cover central Southport, Birkdale, Ainsdale, Churchtown, Marshside, Banks, and all surrounding areas." },
      { q: "Does coastal weather affect roofs in Southport?", a: "Yes. Salt-laden air and higher wind exposure can accelerate corrosion of metal fixings and deterioration of mortar. We specify marine-grade fixings and appropriate materials for coastal properties." },
      { q: "How quickly can you attend an emergency in Southport?", a: "Southport is within our primary response area. We typically attend emergency calls within 2-3 hours." }
    ],
    metaTitle: "Roofing Services in Southport | Lake Side Roofing Group",
    metaDesc: "Expert roofers in Southport: roof repairs, replacements, and 24/7 emergencies. Coastal roofing specialists. Call Lake Side Roofing Group on 07480 104865."
  },
  {
    slug: "preston",
    name: "Preston",
    heroDesc: "As Lancashire's only city, Preston presents a diverse roofing landscape, from the Victorian terraces of Avenham and Frenchwood to modern housing estates in Fulwood and Broughton. Lake Side Roofing Group serves homeowners and businesses across Preston with expert roofing services.",
    whyChoose: [
      "Preston is a key part of our Lancashire service area with excellent access via the M6 and M55.",
      "We've worked on properties across every Preston district, from Fulwood to Ribbleton.",
      "Our team understands the mix of old and new properties that define Preston's housing stock.",
      "Fast emergency response times across the city."
    ],
    nearbyLocations: ["ormskirk", "southport", "blackpool"],
    recentWork: "Recent Preston projects include a full roof replacement on a 1930s semi in Fulwood, emergency leak repairs on a terraced property in Ashton-on-Ribble, and a complete roofline overhaul on a detached home in Broughton. Preston's varied housing stock means we encounter everything from concrete tile roofs to original slate.",
    faqs: [
      { q: "Do you cover all areas of Preston?", a: "Yes. We serve Fulwood, Ashton-on-Ribble, Penwortham, Broughton, Ribbleton, Ingol, and all other Preston districts." },
      { q: "How quickly can you respond to emergencies in Preston?", a: "Preston is within our core service area. We typically respond to emergency calls within 2-3 hours." },
      { q: "Can you work on commercial properties in Preston?", a: "Yes. We provide roofing services to both residential and commercial clients across Preston, including flat roof systems for commercial premises." }
    ],
    metaTitle: "Roofing Services in Preston | Lake Side Roofing Group",
    metaDesc: "Expert roofers in Preston: repairs, replacements, flat roofing, and emergencies. Call Lake Side Roofing Group on 07480 104865."
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}
