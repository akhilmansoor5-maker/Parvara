const ROW1 = ["Workshops", "Events", "Camping", "Wilderness", "Fire", "Forest"];
const ROW2 = ["Community", "Ritual", "Gather", "India", "Nature", "Belong"];

function Row({
  words,
  reverse,
  className,
}: {
  words: string[];
  reverse?: boolean;
  className?: string;
}) {
  const cells = [...words, ...words, ...words, ...words];
  return (
    <div className={`overflow-hidden py-3 ${className ?? ""}`}>
      <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-stretch" aria-hidden={dup === 1}>
            {cells.map((w, i) => (
              <span key={`${dup}-${i}`} className="flex shrink-0 items-center">
                {i > 0 ? (
                  <span className="mx-3 h-3 w-px shrink-0 self-center bg-coal" aria-hidden />
                ) : null}
                <span className="text-label text-muted">{w}</span>
                <span className="mx-2 text-ember" aria-hidden>
                  ·
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeTicker() {
  return (
    <div className="w-full border-y border-coal bg-ash">
      <Row words={ROW1} className="border-b border-coal" />
      <Row words={ROW2} reverse />
    </div>
  );
}
