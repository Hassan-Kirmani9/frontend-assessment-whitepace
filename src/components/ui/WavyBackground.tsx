import { cn } from "@/lib/cn";

interface WavyBackgroundProps {
  className?: string;
  variant?: "light" | "dark";
}

/**
 * Purely decorative layered wave-line pattern, matching the faint
 * background lines behind the hero and dark CTA sections in the design.
 * aria-hidden because it carries no content.
 */
export default function WavyBackground({ className, variant = "light" }: WavyBackgroundProps) {
  const stroke = variant === "light" ? "#fde9a8" : "#2c4f8c";

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none", className)}
      width="640"
      height="420"
      viewBox="0 0 640 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${60 + i * 30} C 160 ${10 + i * 30}, 320 ${110 + i * 30}, 480 ${50 + i * 30} S 640 ${90 + i * 30}, 640 ${60 + i * 30}`}
          stroke={stroke}
          strokeOpacity={0.5}
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
