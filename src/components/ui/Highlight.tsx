import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface HighlightProps {
  children: ReactNode;
  className?: string;
  tone?: "yellow" | "blue";
}

export default function Highlight({ children, className, tone = "yellow" }: HighlightProps) {
  return (
    <span
      className={cn(tone === "yellow" ? "highlight-mark" : "highlight-mark-blue", className)}
    >
      {children}
    </span>
  );
}