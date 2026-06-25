import { cn } from "@/lib/cn";

interface WavyBackgroundProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function WavyBackground({ className, variant = "light" }: WavyBackgroundProps) {
  const stroke = variant === "light" ? "#fbd98a" : "#2c4f8c";

  const lines = Array.from({ length: 14 }).map((_, i) => {
    const spread = 30 + i * 26;
    const curveUp = 60 + i * 4;
    const curveDown = 40 - i * 2;
    return (
      <path
        key={i}
        d={`M0 260 Q ${spread} ${260 - curveUp}, 320 260 T 640 ${260 + curveDown}`}
        stroke={stroke}
        strokeOpacity={0.45}
        strokeWidth="1"
        fill="none"
      />
    );
  });

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
      {lines}
    </svg>
  );
}