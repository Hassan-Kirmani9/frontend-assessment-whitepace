"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import { ArrowRightIcon, QuoteIcon, StarIcon } from "@/components/ui/icons";
import { testimonials } from "@/data/content";
import { cn } from "@/lib/cn";

function TestimonialCard({
  testimonial,
  isFeatured,
}: {
  testimonial: (typeof testimonials)[number];
  isFeatured: boolean;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between gap-6 rounded-2xl p-7 shadow-sm transition-colors duration-300",
        isFeatured ? "bg-brand-500 text-white" : "bg-paper text-ink-900 border border-ink-900/8"
      )}
    >
      <div>
        <QuoteIcon className={cn("h-7 w-7", isFeatured ? "text-white/70" : "text-brand-200")} />
        <blockquote className={cn("mt-4 text-sm leading-relaxed", isFeatured ? "text-white/95" : "text-ink-700")}>
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-brand-100">
            <Image src={testimonial.avatar} alt="" fill sizes="40px" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold">{testimonial.name}</p>
            <p className={cn("text-xs", isFeatured ? "text-white/70" : "text-ink-500")}>{testimonial.role}</p>
          </div>
        </div>
        <div className={cn("flex gap-0.5", isFeatured ? "text-accent-yellow-soft" : "text-accent-yellow")} aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, starIdx) => (
            <StarIcon key={starIdx} className="h-3.5 w-3.5" aria-hidden="true" />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pageCount = testimonials.length;
  const trackRef = useRef<HTMLDivElement | null>(null);

  function goTo(index: number) {
    const next = ((index % pageCount) + pageCount) % pageCount;
    setPage(next);
    const track = trackRef.current;
    if (track) {
      const slide = track.children[next] as HTMLElement | undefined;
      if (slide) track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    }
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.clientWidth;
    const index = Math.round(track.scrollLeft / slideWidth);
    setPage(Math.min(Math.max(index, 0), pageCount - 1));
  }

  return (
    <section id="testimonials" className="py-20 sm:py-28 scroll-mt-24" aria-roledescription="carousel">
      <Container className="flex flex-col items-center">
        <SectionHeading
          align="center"
          title={
            <>
              See what our <Highlight>trusted users</Highlight> say
            </>
          }
          className="mx-auto"
        />

        <div className="mt-12 w-full">
          <ul className="hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-3" aria-live="polite">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} as="li" delay={i * 90}>
                <TestimonialCard testimonial={t} isFeatured={i === page} />
              </Reveal>
            ))}
          </ul>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => (
              <div key={t.id} className="w-[85%] flex-shrink-0 snap-center">
                <TestimonialCard testimonial={t} isFeatured={i === page} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                    i === page ? "w-6 bg-brand-500" : "bg-ink-900/15 hover:bg-ink-900/30"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}