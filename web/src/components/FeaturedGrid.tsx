import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    href: "/workshops",
    tag: "Workshops",
    title: "Hands in the earth",
    desc: "Clay, fire, and forest kitchens across the Ghats.",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/events",
    tag: "Events",
    title: "Circles under weather",
    desc: "Drums, monsoon tarps, and nowhere to be but here.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  },
  {
    href: "/camping",
    tag: "Camping",
    title: "Sleep where the ridge ends",
    desc: "Ridgeline camps with zero bars and one horizon.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
  },
];

export function FeaturedGrid() {
  return (
    <section id="featured" className="bg-ink px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="text-label text-muted">What we do</p>
          <div className="md:text-right">
            <h2 className="text-headline font-serif text-parchment">
              Experiences
              <span className="mt-2 block h-px w-full max-w-[12rem] bg-gold/80 md:ml-auto" />
            </h2>
          </div>
        </div>
        <hr className="hr-muted my-10" />

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:grid-rows-2 md:gap-2">
          <Link
            href={CARDS[0].href}
            className="group relative min-h-[55vh] overflow-hidden rounded-lg border border-coal md:row-span-2 md:min-h-[70vh]"
          >
            <CardInner {...CARDS[0]} />
          </Link>
          <Link
            href={CARDS[1].href}
            className="group relative min-h-[38vh] overflow-hidden rounded-lg border border-coal md:col-span-2 md:min-h-[35vh]"
          >
            <CardInner {...CARDS[1]} />
          </Link>
          <Link
            href={CARDS[2].href}
            className="group relative min-h-[38vh] overflow-hidden rounded-lg border border-coal md:col-span-2 md:min-h-[35vh]"
          >
            <CardInner {...CARDS[2]} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CardInner({
  tag,
  title,
  desc,
  image,
}: (typeof CARDS)[0]) {
  return (
    <>
      <div className="img-tint grain absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 z-[6] bg-ink/20 transition-colors duration-500 group-hover:bg-ink/35" />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
        <span className="text-label text-gold">{tag}</span>
        <h3 className="mt-3 text-title font-serif text-parchment">{title}</h3>
        <p className="mt-2 max-w-md text-small text-cream">{desc}</p>
        <span className="link-arrow mt-5">Explore →</span>
      </div>
    </>
  );
}
