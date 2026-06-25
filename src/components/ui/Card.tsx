import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
  as?: "div" | "article" | "li";
}

export default function Card({ children, className, hoverLift = false, as = "div" }: CardProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-ink-900/8 bg-paper p-6 shadow-sm transition-all duration-300",
        hoverLift && "hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-200",
        className
      )}
    >
      {children}
    </Tag>
  );
}
