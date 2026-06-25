"use client";

import { useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/icons";
import { pricingPlans } from "@/data/content";
import { cn } from "@/lib/cn";

function PlanCard({ plan }: { plan: (typeof pricingPlans)[number] }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-lg",
        plan.featured
          ? "border-brand-200 bg-paper shadow-xl lg:-translate-y-3"
          : "border-accent-yellow/60 bg-paper"
      )}
    >
      {plan.featured && (
        <span className="mb-4 inline-block self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
          Most popular
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-ink-900">{plan.name}</h3>
      <p className="mt-4">
        <span className="font-display text-4xl font-extrabold text-ink-900">{plan.price}</span>
        {plan.priceNote && <span className="text-sm text-ink-500">{plan.priceNote}</span>}
      </p>
      <p className="mt-3 text-sm font-medium text-brand-600">{plan.tagline}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
            <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="#"
        variant={plan.featured ? "primary" : "outline"}
        className="mt-8 w-full justify-center"
      >
        {plan.ctaLabel}
      </Button>
    </div>
  );
}

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.clientWidth;
    const index = Math.round(track.scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(index, 0), pricingPlans.length - 1));
  }

  return (
    <section id="pricing" className="py-20 sm:py-28 scroll-mt-24">
      <Container>
        <SectionHeading
          align="center"
          title={
            <>
              Choose <Highlight>Your Plan</Highlight>
            </>
          }
          description="Whether you want to get organized, keep your personal life on track, or boost workplace productivity, whitepace has the right plan for you."
          className="mx-auto"
        />

        <ul className="mt-14 hidden grid-cols-1 gap-8 lg:grid lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} as="li" delay={i * 100} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 lg:hidden">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="w-[85%] flex-shrink-0 snap-center sm:w-[60%]">
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Choose pricing plan">
            {pricingPlans.map((plan, i) => (
              <button
                key={plan.id}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Show ${plan.name} plan`}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  i === activeIndex ? "w-6 bg-brand-500" : "bg-ink-900/15 hover:bg-ink-900/30"
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}