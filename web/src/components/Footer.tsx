import Link from "next/link";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/workshops", label: "Workshops" },
  { href: "/events", label: "Events" },
  { href: "/camping", label: "Camping" },
  { href: "/community", label: "Community" },
];

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-coal bg-ash">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-3 md:gap-8 md:px-10 lg:px-16">
        <div>
          <p className="font-serif text-[2rem] font-normal italic text-parchment">PARVARA</p>
          <p className="mt-4 max-w-xs text-label text-muted">
            Workshops · events · camping — for humans who still want weather on their skin.
          </p>
        </div>
        <nav className="flex flex-col gap-3">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-small text-cream transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex gap-4 text-parchment/80">
            <a
              href="https://instagram.com/parvara.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gold"
              aria-label="Instagram"
            >
              <IgIcon />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gold"
              aria-label="WhatsApp"
            >
              <WaIcon />
            </a>
          </div>
          <Link href="/#join" className="btn-ember w-max">
            Book an experience →
          </Link>
        </div>
      </div>
      <div className="border-t border-coal">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-6 text-label text-muted md:flex-row md:px-10 lg:px-16">
          <p>© 2025 PARVARA. All rights reserved.</p>
          <p>Made with 🔥 in India</p>
        </div>
      </div>
    </footer>
  );
}
