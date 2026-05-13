import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

type Props = {
  title: string;
  eyebrow?: string;
};

export function PlaceholderPage({ title, eyebrow = "Opening soon" }: Props) {
  return (
    <>
      <NavBar />
      <main className="min-h-[70vh] bg-ink px-5 pb-24 pt-28 md:px-10 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-muted">{eyebrow}</p>
          <h1 className="mt-8 text-headline font-serif text-parchment">{title}</h1>
          <p className="mx-auto mt-8 max-w-md text-small text-cream">
            This route is reserved for the full editorial build. The home journey is live — return anytime.
          </p>
          <Link href="/" className="link-arrow mt-12 inline-flex">
            Back home →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
