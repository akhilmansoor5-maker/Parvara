const PILLARS = [
  {
    n: "01",
    title: "Tribe",
    desc: "Small circles, deep memory. No one is anonymous by Sunday.",
  },
  {
    n: "02",
    title: "Wilderness",
    desc: "Terrain as host — mist, river stone, ridgeline wind.",
  },
  {
    n: "03",
    title: "Ritual",
    desc: "Fire, water, shared meals. Repetition with meaning, not for cameras.",
  },
  {
    n: "04",
    title: "Presence",
    desc: "Cloth bags for phones. Eyes remembering how to hold a gaze.",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-moss py-32 grain">
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <blockquote className="text-display text-center text-parchment/90">
          Not just a trip. A transformation.
        </blockquote>

        <div className="mt-24 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {PILLARS.map((p) => (
            <div key={p.title} className="max-w-[220px] sm:max-w-none">
              <p className="text-label text-parchment/30">{p.n}</p>
              <hr className="hr-muted my-4 w-10 border-parchment/10" />
              <h3 className="text-title font-serif text-parchment">{p.title}</h3>
              <p className="mt-4 text-small text-parchment/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
