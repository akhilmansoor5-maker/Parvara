"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="join" className="relative overflow-hidden bg-ember py-24 grain">
      <div className="relative z-10 mx-auto grid max-w-[1600px] gap-12 px-5 md:grid-cols-5 md:gap-16 md:px-10 lg:px-16">
        <div className="md:col-span-3">
          <p className="text-label text-parchment/60">Stay in the loop</p>
          <h2 className="mt-4 text-headline font-serif text-parchment">Join the tribe.</h2>
          <p className="mt-6 max-w-md text-small text-parchment/60">
            Be the first to know about upcoming experiences.
          </p>
        </div>
        <div className="flex flex-col items-stretch justify-end gap-6 md:col-span-2">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label htmlFor="news-email" className="sr-only">
              Email
            </label>
            <input
              id="news-email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full border-0 border-b border-parchment/40 bg-transparent py-3 font-sans text-sm font-light text-parchment outline-none transition placeholder:text-parchment/40 focus:border-parchment"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="group relative text-label text-parchment transition-colors hover:text-parchment"
              >
                <span className="relative z-10">{sent ? "You’re in →" : "Subscribe →"}</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-parchment transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
