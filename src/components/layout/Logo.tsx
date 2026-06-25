import { cn } from "@/lib/cn";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export default function Logo({ variant = "default", className }: LogoProps) {
  return (
    <Link
      href="#top"
      className={cn(
        "flex items-center gap-2 font-display text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md",
        variant === "white" ? "text-white" : "text-ink-900",
        className
      )}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4 4 12l2.1 2.1L12 8.2l5.9 5.9L20 12 12 4Z" fill="#3b7af0" />
        <path d="M12 11 4 19l2.1 2.1L12 15.2l5.9 5.9L20 19 12 11Z" fill="#3b7af0" opacity="0.55" />
      </svg>
      <span>whitepace</span>
    </Link>
  );
}
