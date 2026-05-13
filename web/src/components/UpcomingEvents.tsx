import Link from "next/link";

const EVENTS = [
  {
    name: "Monsoon Gathering",
    dateBig: "12–14",
    monthLine: "July · 2026",
    place: "Coorg, Karnataka",
  },
  {
    name: "Solstice Fire Circle",
    dateBig: "21",
    monthLine: "June · 2026",
    place: "Wayanad, Kerala",
  },
  {
    name: "Forest Foraging Workshop",
    dateBig: "08",
    monthLine: "June · 2026",
    place: "Munnar, Kerala",
  },
  {
    name: "Clay & Campfire",
    dateBig: "29",
    monthLine: "June · 2026",
    place: "Kodaikanal, Tamil Nadu",
  },
];

function PinIcon() {
  return (
    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  );
}

export function UpcomingEvents() {
  return (
    <section className="bg-ink px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-label text-muted">Upcoming</p>
          <Link href="/events" className="link-arrow self-start sm:self-auto">
            View all events →
          </Link>
        </div>

        <div className="mt-12 flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:gap-6 [&::-webkit-scrollbar]:hidden">
          {EVENTS.map((e) => (
            <article
              key={e.name}
              className="card-dark min-w-[340px] shrink-0 snap-start rounded-lg border border-coal p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="flex flex-col gap-1">
                <span className="font-serif text-[3rem] font-light leading-none text-gold">{e.dateBig}</span>
                <span className="text-label text-muted">{e.monthLine}</span>
              </div>
              <h3 className="mt-6 text-title font-serif text-parchment">{e.name}</h3>
              <div className="mt-2 flex items-start gap-2 text-small text-muted">
                <PinIcon />
                <span>{e.place}</span>
              </div>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                <span className="text-label text-parchment/30">Limited spots</span>
                <Link href="/#join" className="btn-outline-sm shrink-0">
                  RSVP →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
