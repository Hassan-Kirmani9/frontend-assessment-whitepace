import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";
import { footerLinks } from "@/data/content";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="text-center sm:text-left">
      <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/70">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
          <a  
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    
     <a href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-5">
          <div className="flex flex-col items-center sm:col-span-2 sm:items-start lg:col-span-2">
            <Logo variant="white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              whitepace was created for the new ways we live and work. We make a better workspace
              around the world.
            </p>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
          <FooterColumn title="Company" links={footerLinks.company} />
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div>
              <h3 className="font-display text-base font-semibold">Try it today</h3>
              <p className="mt-1 text-sm text-white/70">
                Get started for free. Add your whole team as your needs grow.
              </p>
            </div>
            <Button href="#pricing" variant="primary">
              Start today →
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <span>© {new Date().getFullYear()} whitepace</span>
            <a href="#" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-sm">
              Terms &amp; privacy
            </a>
            <a href="#" className="hidden hover:text-white sm:inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-sm">
              Security
            </a>
            <a href="#" className="hidden hover:text-white sm:inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-sm">
              Status
            </a>
          </div>
          <div className="flex items-center gap-3">
            <SocialIcon label="Facebook" path="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.4l.6-3H14V9.5c0-.3.2-.5.5-.5Z" />
            <SocialIcon label="Twitter" path="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1A3.6 3.6 0 0 0 12.6 8c0 .3 0 .6.1.9-3-.1-5.7-1.6-7.5-3.9-.3.5-.5 1.2-.5 1.8 0 1.3.7 2.4 1.7 3-.6 0-1.2-.2-1.7-.4 0 1.8 1.3 3.3 3 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.5 2.6A6.4 6.4 0 0 1 2 17.6 9 9 0 0 0 6.9 19c5.8 0 9-4.8 9-9v-.4c.8-.6 1.5-1.3 2.1-2.1Z" />
            <SocialIcon label="LinkedIn" path="M6.5 8.5h-3V19h3V8.5Zm-1.5-4A1.7 1.7 0 1 0 5 8.2a1.7 1.7 0 0 0 0-3.4ZM19 19h-3v-5.5c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3s.1-9.6 0-10.5h3v1.5c.4-.6 1.2-1.5 2.8-1.5 2.1 0 3.5 1.4 3.5 4.2V19Z" />
          </div>
        </div>
      </Container>
    </footer>
  );
}