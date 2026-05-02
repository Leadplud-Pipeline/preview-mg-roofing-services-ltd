import { useEffect } from "react";

import GoogleReviewCard from "@/components/GoogleReviewCard";
import logo from "@/assets/logo-hd.png";
import jamesPhoto from "@/assets/james-team.jpg";

const ThankYouInspection = () => {
  // noindex + title
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) metaRobots.setAttribute("content", "noindex, nofollow, noarchive, noodp");
    else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow, noarchive, noodp";
      document.head.appendChild(meta);
    }
    document.title = "Appointment Booked | Lake Side Roofing Group";
  }, []);

  // Meta Pixel — fires Schedule on load
  useEffect(() => {
    const pixelScript = document.createElement("script");
    pixelScript.textContent = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1472438861134731');
      fbq('track', 'Schedule');
    `;
    document.head.appendChild(pixelScript);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1472438861134731&ev=PageView&noscript=1" />';
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      pixelScript.remove();
      noscript.remove();
    };
  }, []);

  // Hide chat widgets
  useEffect(() => {
    const hideChat = () => {
      const selectors = [
        '#tidio-chat', '#tidio-chat-iframe', '.tidio-mobile-chat',
        '[id^="tidio"]', '[class^="tidio"]', '#crisp-chatbox', '.crisp-client',
        '#chat-widget-container', 'iframe[title*="chat" i]',
        'div[id*="chat" i]', 'div[class*="chat" i]',
      ];
      selectors.forEach(s => {
        document.querySelectorAll(s).forEach(el => {
          (el as HTMLElement).style.setProperty('display', 'none', 'important');
        });
      });
      const style = document.createElement('style');
      style.id = 'hide-chat-ty';
      style.innerHTML = `
        #tidio-chat, #tidio-chat-iframe, [id^="tidio"],
        #crisp-chatbox, .crisp-client, #chat-widget-container,
        iframe[title*="chat" i], div[id*="chat" i], div[class*="chat" i] {
          display: none !important; visibility: hidden !important;
          opacity: 0 !important; pointer-events: none !important;
        }
      `;
      if (!document.getElementById('hide-chat-ty')) document.head.appendChild(style);
    };
    hideChat();
    const t1 = setTimeout(hideChat, 500);
    const t2 = setTimeout(hideChat, 1500);
    const t3 = setTimeout(hideChat, 3000);
    const t4 = setTimeout(hideChat, 5000);
    const observer = new MutationObserver(() => hideChat());
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      observer.disconnect();
      const s = document.getElementById('hide-chat-ty');
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* SECTION 1 — Header */}
      <header className="w-full bg-secondary border-b border-white/10">
        <div className="flex items-center justify-center py-4 px-4">
          <img src={logo} alt="Lake Side Roofing Group logo" width={220} height={88} className="h-14 w-auto object-contain" />
        </div>
      </header>

      {/* SECTION 2 — Confirmation */}
      <main className="flex-1 w-full max-w-lg mx-auto px-5 py-10 md:py-16 flex flex-col items-center">
        <section className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-4">
            Your Appointment Is Booked
          </h1>
          <p className="text-lg md:text-xl font-heading font-bold text-primary leading-snug mb-3">
            We have emailed and texted you confirming the date and time. Please mark this in your calendar now.
          </p>
          <p className="text-base md:text-lg text-white font-sans">
            We look forward to meeting and speaking with you then
          </p>
        </section>

        {/* SECTION 3 — Divider */}
        <div className="w-16 h-0.5 bg-primary rounded-full mb-8" />

        {/* SECTION 4 — James photo */}
        <section className="flex flex-col items-center mb-8">
          <img
            src={jamesPhoto}
            alt="James Mason, Owner"
            className="w-20 h-20 rounded-full object-cover border-2 border-primary mb-2"
          />
          <span className="text-sm text-primary font-sans font-semibold">James Mason, Owner</span>
          <span className="text-sm text-white font-sans mt-1 text-center">
            He will be coming out to inspect your roof personally.
          </span>
        </section>

        {/* SECTION 5 — Google review card */}
        <div className="w-full mb-8">
          <GoogleReviewCard />
        </div>
      </main>

      {/* SECTION 6 — Footer */}
      <footer className="w-full bg-secondary border-t border-white/10 py-4">
        <p className="text-center text-white text-xs font-sans">
          © 2026 Lakeside Roofing Group
        </p>
      </footer>
    </div>
  );
};

export default ThankYouInspection;
