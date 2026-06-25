"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { navLinks } from "@/data/content";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const SECTION_IDS = [
  "features",
  "integrations",
  "statistics",
  "how-it-works",
  "testimonials",
  "resources",
  "pricing",
  "faq",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sticky navbar background + blur once the page scrolls past the hero top.
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlighting: track which section is most visible.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu automatically if the viewport grows back to desktop.
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function openDropdownNow(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  return (
    <header
      id="top"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-paper/80 shadow-sm backdrop-blur-md border-b border-ink-900/5"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const hasDropdown = Boolean(link.dropdown?.length);
              const isOpen = openDropdown === link.label;
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && openDropdownNow(link.label)}
                  onMouseLeave={() => hasDropdown && scheduleClose()}
                >
                  <a
                    href={link.href}
                    aria-haspopup={hasDropdown ? "true" : undefined}
                    aria-expanded={hasDropdown ? isOpen : undefined}
                    onFocus={() => hasDropdown && openDropdownNow(link.label)}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                      isActive && "text-brand-700"
                    )}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDownIcon
                        className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
                      />
                    )}
                  </a>

                  {hasDropdown && (
                    <div
                      className={cn(
                        "absolute left-0 top-full w-72 rounded-xl border border-ink-900/8 bg-paper p-2 shadow-lg transition-all duration-200",
                        isOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      )}
                      onMouseEnter={() => openDropdownNow(link.label)}
                      onMouseLeave={() => scheduleClose()}
                    >
                      {link.dropdown!.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-lg px-4 py-3 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                        >
                          <span className="block text-sm font-semibold text-ink-900">{item.label}</span>
                          {item.description && (
                            <span className="mt-0.5 block text-xs text-ink-500">{item.description}</span>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="#" variant="secondary" size="sm">
            Login
          </Button>
          <Button href="#pricing" variant="primary" size="sm">
            Try Whitepace free →
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 origin-top bg-paper transition-all duration-300 ease-out lg:hidden",
          mobileOpen
            ? "visible max-h-[calc(100vh-72px)] translate-y-0 overflow-y-auto opacity-100"
            : "invisible max-h-0 -translate-y-2 overflow-hidden opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-ink-900/5 py-2">
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-2 py-2 text-base font-semibold text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="ml-2 flex flex-col gap-1 pb-1">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-2 py-1.5 text-sm text-ink-500 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <Button href="#" variant="secondary" className="w-full justify-center">
              Login
            </Button>
            <Button href="#pricing" variant="primary" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
              Try Whitepace free →
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
