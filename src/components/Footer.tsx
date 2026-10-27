import * as React from "react";
import TheDukePeek from "../assets/web-absolute-png/TheDuke.png";
// import { Link } from "react-router-dom";
import bluesky from '../assets/SocialIcons/footer/Bluesky_Icon_Blue.png';
import youtube from '../assets/SocialIcons/footer/Youtube_Icon_Blue.png';
import instagram from '../assets/SocialIcons/footer/Instagram_Icon_Blue.png';
import facebook from '../assets/SocialIcons/footer/Facebook_Icon_Blue_002.png';
import tiktok from '../assets/SocialIcons/footer/TikTok_Icon_Blue.png';
// import { StoreIcon } from "lucide-react";
import store from '../assets/SocialIcons/footer/store.png';

type LinkItem = { label: string; href: string };
type Column = { title: string; links: LinkItem[] };
type Social = { label: string; href: string; imgSrc: string };
type Qr = { label: string; href: string; imgSrc: string };

interface FooterProps {
  columns?: Column[];
  socials?: Social[];
  qr?: Qr;
  onSubscribe?: (email: string) => void;
  className?: string;
}

const defaultColumns: Column[] = [
  {
    title: "Explore",
    links: [
      { label: "Fat Butters' Jetpack Ride", href: "/fat-butters" },
      { label: "Spite Castle", href: "/spite-castle" },
      { label: "Catch of the Night", href: "/catch-night" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Other Works", href: "/other-works" },
      { label: "Contact Us", href: "/contact" },
    //   { label: "", href: "#" },
    ],
  },
  {
    title: "Comics",
    links: [
      { label: "Monster Mall", href: "/monster-mall" },
      { label: "Bestest Bear", href: "/bestest-bear" },
    //   { label: "Contact", href: "#" },
    ],
  },
];

const defaultSocials: Social[] = [
  { label: "Store", href: "http://shop.simeck.com/", imgSrc: store },
  { label: "bluesky", href: "https://bsky.app/profile/thesimeckian.bsky.social", imgSrc: bluesky },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCfTUGJu9uG_W4JISLfQlK9Q", imgSrc: youtube },
  { label: "Instagram", href: "https://www.instagram.com/thesimeckian/", imgSrc: instagram },
  { label: "Facebook", href: "https://www.facebook.com/simeck.entertainment/", imgSrc: facebook },
  { label: "TikTok", href: "https://www.tiktok.com/@thesimeckian", imgSrc: tiktok },
];

const Qr : Qr = { label: "QR", href: "#", imgSrc: "/qr.png" };

const Footer: React.FC<FooterProps> = ({
  columns = defaultColumns,
  socials = defaultSocials,
  onSubscribe,
  className = "",
}) => {
  const [email, setEmail] = React.useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    onSubscribe?.(email);
    setEmail("");
  }

  const LinkComponent = ({ href, children, ...props}: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  )

  return (
    <footer className={`mt-16 ${className}`}>
      <div className="container mx-auto px-4 relative overflow-visible">
        {/* Desktop version */}
        <div
          className="pointer-events-none select-none absolute left-1/2 hidden lg:block"
          style={{
            top: '-252px',
            transform: 'translateX(-52%)',
            height: '460px'
          }}
        >
          <img
            src={TheDukePeek}
            alt="The Duke cheering"
            className="h-full w-auto drop-shadow-2xl opacity-70"
          />
        </div>
        
        {/* Mobile version */}
        <div
          className="lg:hidden pointer-events-none select-none absolute"
          style={{
            top: '-163px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '300px'
          }}
        >
          <img
            src={TheDukePeek}
            alt="The Duke cheering"
            className="h-full w-auto drop-shadow-2xl opacity-70"
          />
        </div>

        <div className=" w-full  rounded-2xl bg-[#1a2d65]/90 text-white shadow-lg">
          <div className="px-5 py-8 sm:px-8 md:px-10 md:py-12">
            {/* ===== Mobile (accordion) ===== */}
            <div className="lg:hidden">
              <div className="divide-y divide-white/10">
                {columns.map((col) => (
                  <details key={col.title} className="group py-3">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-lg font-semibold tracking-tight">
                      <span>{col.title}</span>
                      <span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 transition group-open:rotate-180">
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>
                    </summary>
                    <ul className="pb-4 pl-1 pt-1 space-y-3">
                      {col.links.map((l) => (
                        <li key={`${col.title}-${l.label}`}>
                          <LinkComponent
                            href={l.href}
                            className="inline-block text-[16px] leading-6 text-white/90 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded px-1"
                          >
                            {l.label}
                          </LinkComponent>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}

                {/* Connect */}
                <div className="py-4">
                  <h3 className="text-lg font-semibold tracking-tight">Connect</h3>
                  <ul className="mt-4 flex flex-wrap items-center gap-3">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          aria-label={s.label}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                        >
                          <img src={s.imgSrc} alt="" className="h-6 w-6" width={24} height={24} />
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Newsletter - single field + button */}
                  <form onSubmit={submit} className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-white/90">
                      Join our newsletter
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="min-w-0 flex-1 rounded-md bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/60"
                      />
                      <button
                        type="submit"
                        className="shrink-0 rounded-md bg-white/15 px-4 py-2 text-sm font-medium hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-white/70">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* ===== Desktop / large screens (grid) ===== */}
            <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-10">
              {columns.map((col) => (
                <nav key={col.title} aria-label={col.title}>
                  <h3 className="text-xl font-medium tracking-tight">{col.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={`${col.title}-${l.label}`}>
                        <LinkComponent
                          href={l.href}
                         className="inline-block px-3 text-[17px] leading-6 text-white/90 hover:underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
                        >
                          {l.label}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}

              <section aria-label="Connect">
                <h3 className="text-xl font-medium tracking-tight">Connect</h3>
                <ul className="mt-5 flex flex-wrap items-center gap-3">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        aria-label={s.label}
                        className="inline-flex items-center justify-center  hover:scale-110 duration-200 focus:outline-none focus:ring-2 focus:ring-white/60"
                      >
                        <img src={s.imgSrc} alt="" className="h-7 w-7" width={28} height={28} />
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="">
                    <a href={Qr.href} className="inline-flex items-center justify-center   focus:outline-none">
                        <img src={Qr.imgSrc} alt="" className="px-11 mt-3 w-full" width={28} height={28} />
                    </a>
                    {/* <span className="text-white/90">{Qr.label}</span> */}
                </ul>

                <form onSubmit={submit} className="mt-2 space-y-2">
                  <label className="block text-sm font-medium text-white/90">
                    Join our newsletter
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-md bg-white px-3 py-2 text-[13px] text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/60"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-white/15 px-4 py-2 text-sm font-medium hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    Subscribe
                  </button>
                </form>
              </section>
            </div>

            {/* Bottom bar */}
            <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/70">
              © {new Date().getFullYear()} simeck entertainment. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
