"use client";

import { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

/**
 * Fades and lifts children into place once they enter the viewport.
 * Respects prefers-reduced-motion via the [data-reveal] rules in globals.css.
 */
export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, visible } = useReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      data-reveal
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
