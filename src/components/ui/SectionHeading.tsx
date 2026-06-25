import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleAs = "h2",
  className,
  light = false,
}: SectionHeadingProps) {
  const TitleTag = titleAs;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-sm font-semibold uppercase tracking-wide",
            light ? "text-brand-200" : "text-brand-600"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <TitleTag
        className={cn(
          "font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-ink-500"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
