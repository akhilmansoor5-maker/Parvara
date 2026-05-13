import Image from "next/image";
import Link from "next/link";

const COLLAGE = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&w=700&q=80",
];

export function AboutStrip() {
  return (
    <section className="relative overflow-hidden bg-ash py-32 grain">
      <div className="relative z-10 mx-auto grid max-w-[1600px] gap-16 px-5 md:grid-cols-5 md:gap-12 md:px-10 lg:px-16">
        <div className="relative md:col-span-3">
          <span
            className="pointer-events-none absolute -left-4 top-0 select-none font-serif text-[clamp(6rem,18vw,12rem)] font-light leading-none text-coal md:-left-8"
            aria-hidden
          >
            04
          </span>
          <p className="text-label text-ember">About PARVARA</p>
          <h2 className="relative mt-6 max-w-xl text-headline font-serif text-parchment">
            We believe in the power of gathering
          </h2>
          <p className="relative mt-8 max-w-lg text-small text-cream">
            PARVARA is a slow ledger of nights around coals, mist in shola, and circles where no one asks
            what you do for work. We host workshops, rituals, and camps for humans who still want to feel
            weather on their skin — mostly in the Western Ghats and the high country beyond.
          </p>
          <Link href="/about" className="link-arrow mt-10">
            Read our story →
          </Link>
        </div>

        <div className="relative md:col-span-2">
          <div className="relative mx-auto grid max-w-sm grid-cols-2 gap-3 md:mx-0 md:max-w-none">
            <div className="relative aspect-[3/4] -translate-y-6 overflow-hidden rounded-sm border border-coal">
              <Image src={COLLAGE[0]} alt="" fill className="object-cover" sizes="200px" />
            </div>
            <div className="relative aspect-[3/4] translate-x-2 -translate-y-2 overflow-hidden rounded-sm border border-coal">
              <Image src={COLLAGE[1]} alt="" fill className="object-cover" sizes="200px" />
            </div>
            <div className="relative col-span-2 aspect-[16/10] translate-x-4 overflow-hidden rounded-sm border border-coal">
              <Image src={COLLAGE[2]} alt="" fill className="object-cover" sizes="400px" />
            </div>
            <div className="relative col-span-2 -mt-4 aspect-[16/9] -translate-x-3 overflow-hidden rounded-sm border border-coal">
              <Image src={COLLAGE[3]} alt="" fill className="object-cover" sizes="400px" />
            </div>
          </div>
          <p className="mt-8 text-center text-label text-muted md:text-left">
            Our community in the wild
          </p>
        </div>
      </div>
    </section>
  );
}
