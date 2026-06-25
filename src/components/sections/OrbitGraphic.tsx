import { BrandMarkIcon } from "@/components/ui/service-icons";

const dots = [
  { x: 30, y: 9, color: "#FBBF24" },
  { x: 86, y: 21, color: "#3B82F6" },
  { x: 54, y: 23, color: "#10B981" },
  { x: 4, y: 51, color: "#EF4444" },
  { x: 24, y: 51, color: "#3B82F6" },
  { x: 77, y: 52, color: "#3B82F6" },
  { x: 96, y: 64, color: "#10B981" },
  { x: 31, y: 92, color: "#3B82F6" },
  { x: 55, y: 76, color: "#F59E0B" },
];

export default function OrbitGraphic() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md motion-safe:[&_.orbit-dot]:animate-float"
      role="img"
      aria-label="Illustration of team members connected around the whitepace logo, representing collaboration"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#bcd6ff" strokeWidth="0.6" strokeDasharray="2 3" />
        <circle cx="50" cy="50" r="27" fill="none" stroke="#bcd6ff" strokeWidth="0.6" strokeDasharray="2 3" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-paper shadow-lg ring-1 ring-black/5 sm:h-20 sm:w-20">
        <BrandMarkIcon className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden="true" />
      </div>

      {dots.map((dot, i) => (
        <span
          key={i}
          className="orbit-dot absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md sm:h-8 sm:w-8"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            backgroundColor: dot.color,
            animationDelay: `${i * 0.3}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}