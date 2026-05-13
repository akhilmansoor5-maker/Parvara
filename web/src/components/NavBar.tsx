"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/workshops", label: "Workshops" },
  { href: "/events", label: "Events" },
  { href: "/camping", label: "Camping" },
  { href: "/community", label: "Community" },
];

export function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[500] h-[72px] transition-all duration-[400ms] ease-out ${
        scrolled || menuOpen
          ? "border-b border-coal bg-ink/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-[1.3rem] font-normal italic tracking-[0.15em] text-parchment transition-colors duration-300 hover:text-gold"
        >
          PARVARA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative font-sans text-[0.7rem] font-light uppercase tracking-[0.15em] transition-colors duration-300 ${
                  active ? "text-gold" : "text-parchment/60 hover:text-gold"
                }`}
              >
                {l.label}
                {active ? (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#join" className="btn-ember-sm inline-flex">
            Book Now →
          </Link>
          <button
            type="button"
            className="relative z-[520] flex h-10 w-10 flex-col items-center justify-center md:hidden"
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-px w-6 bg-parchment transition-all duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`my-1.5 block h-px w-6 bg-parchment transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-parchment transition-all duration-300 ${
                menuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[72px] z-[510] bg-ash transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-8 px-10 py-16">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-serif text-4xl font-light italic text-parchment/90"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#join" className="btn-ember-sm mt-6 w-max" onClick={() => setMenuOpen(false)}>
            Book Now →
          </Link>
        </nav>
      </div>
    </header>
  );
}
