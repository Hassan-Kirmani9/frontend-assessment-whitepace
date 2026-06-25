import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

interface SplitFeatureProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  imageSide?: "left" | "right";
  visual: ReactNode;
  background?: "white" | "mist";
  centerOnMobile?: boolean;
}

export default function SplitFeature({
  id,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = "#pricing",
  imageSide = "right",
  visual,
  background = "white",
  centerOnMobile = false,
}: SplitFeatureProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 sm:py-20", background === "mist" && "bg-mist")}
    >
      <Container
        className={cn(
          "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16",
          imageSide === "left" && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <div
            className={cn(
              "max-w-lg",
              centerOnMobile && "mx-auto flex flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
            )}
          >
            {eyebrow && (
              <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">{description}</p>
            <div className="mt-8">
              <Button href={ctaHref} size="lg">
                {ctaLabel} →
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>{visual}</Reveal>
      </Container>
    </section>
  );
}