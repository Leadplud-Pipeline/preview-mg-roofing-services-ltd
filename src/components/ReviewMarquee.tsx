import { useRef, useEffect, useState, useCallback } from "react";
import { Star } from "@phosphor-icons/react";

interface Review {
  name: string;
  text: string;
  date: string;
  location: string;
}

const AVATAR_COLOURS = [
  "bg-[#5C6BC0]", "bg-[#26A69A]", "bg-[#EF5350]", "bg-[#AB47BC]",
  "bg-[#FFA726]", "bg-[#42A5F5]", "bg-[#66BB6A]", "bg-[#EC407A]",
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const ReviewCard = ({ review, colourClass }: { review: Review; colourClass: string }) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHARS = 120;
  const isLong = review.text.length > MAX_CHARS;
  const displayText = !expanded && isLong ? review.text.slice(0, MAX_CHARS) + "…" : review.text;

  return (
    <div className="w-[260px] sm:w-[320px] md:w-[340px] flex-shrink-0 rounded-xl bg-card border border-border/30 p-4 sm:p-5 flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 select-none">
      {/* Avatar + Name + Google icon */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${colourClass} flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-bold text-sm">{getInitials(review.name)}</span>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground leading-tight">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.date}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} weight="fill" className="text-amber-400" />
        ))}
      </div>

      {/* Review text */}
      <div className="flex-1">
        <p className="text-sm text-foreground/80 font-sans leading-relaxed">
          "{displayText}"
        </p>
        {isLong && (
          <button
            className="text-xs text-primary font-semibold mt-1 hover:underline cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v); }}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>

      {/* Footer */}
      <p className="text-xs text-muted-foreground/60">Posted on Google</p>
    </div>
  );
};

// ── Marquee Row ──────────────────────────────────────────────────────────────

interface MarqueeRowProps {
  items: Review[];
  direction?: "left" | "right";
  speed?: number;
  paused: boolean;
}

const REPEAT = 6;

const MarqueeRow = ({ items, direction = "left", speed = 30, paused }: MarqueeRowProps) => {
  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const tick = useCallback(
    (now: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = now;
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (!paused && trackRef.current) {
        const singleSetWidth = trackRef.current.scrollWidth / REPEAT;
        offsetRef.current += (speed * delta) / 1000;
        if (offsetRef.current >= singleSetWidth) offsetRef.current -= singleSetWidth;

        const tx = direction === "left" ? -offsetRef.current : offsetRef.current - singleSetWidth;
        setTranslateX(tx);
      }

      rafRef.current = requestAnimationFrame(tick);
    },
    [paused, speed, direction]
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const repeated = Array.from({ length: REPEAT }, () => items).flat();

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex gap-4 will-change-transform py-2"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {repeated.map((review, i) => (
          <ReviewCard
            key={i}
            review={review}
            colourClass={AVATAR_COLOURS[i % AVATAR_COLOURS.length]}
          />
        ))}
      </div>
    </div>
  );
};

// ── Public component ─────────────────────────────────────────────────────────

const ALL_REVIEWS: Review[] = [
  { name: "Margaret H.", text: "Absolutely brilliant job on our roof replacement. The team were professional, tidy, and finished ahead of schedule. Couldn't recommend them highly enough.", date: "2 weeks ago", location: "Ormskirk" },
  { name: "David T.", text: "Called them on a Sunday morning with water coming through our ceiling. They were here within two hours and had it sorted. Lifesavers.", date: "1 month ago", location: "Windermere" },
  { name: "Sarah & James P.", text: "We had three quotes and Lake Side were the most thorough by far. The inspection showed us exactly what needed doing. Fair price, excellent work.", date: "3 weeks ago", location: "Preston" },
  { name: "John N.", text: "We honestly can't thank Lakeside Roofing Group enough. From the moment we contacted James, everything changed. Out within 24 hours, repairs done within the same week, to a very high standard.", date: "1 week ago", location: "Blackpool" },
  { name: "Karen B.", text: "Had a leak above my bedroom for months. Other roofers couldn't find the source. These lads found it in 20 minutes. Fixed same day. Brilliant service.", date: "2 months ago", location: "Lytham St Annes" },
  { name: "Peter S.", text: "Competitive quote, arrived on time, cleaned up perfectly after. You could not tell they'd been there. Five stars all the way.", date: "5 days ago", location: "Fleetwood" },
  { name: "Diane M.", text: "The team replaced our chimney stack and re-felted the flat roof extension. Excellent craftsmanship and very reasonably priced. Would 100% use again.", date: "3 months ago", location: "Lancaster" },
  { name: "Rob & Lynn C.", text: "Got three quotes, all were higher than Lakeside. They did a perfect job and left the garden spotless. Cannot fault them one bit.", date: "6 weeks ago", location: "Thornton Cleveleys" },
];

const mid = Math.ceil(ALL_REVIEWS.length / 2);
const row1 = ALL_REVIEWS.slice(0, mid);
const row2 = ALL_REVIEWS.slice(mid);

const ReviewMarquee = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <MarqueeRow items={row1} direction="left" speed={25} paused={paused} />
      <MarqueeRow items={row2} direction="right" speed={20} paused={paused} />
    </div>
  );
};

export default ReviewMarquee;
