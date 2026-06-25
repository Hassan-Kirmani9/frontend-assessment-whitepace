import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import WavyBackground from "@/components/ui/WavyBackground";
import { integrationIcons } from "@/data/content";
import { BrandMarkIcon } from "@/components/ui/service-icons";

const serviceIconMap = {
  gmail: { src: "/logos/gmail-svgrepo-com.svg", label: "Gmail" },
  slack: { src: "/logos/sslack-svgrepo-com.svg", label: "Slack" },
  dropbox: { src: "/logos/dropbox-color-svgrepo-com.svg", label: "Dropbox" },
  drive: { src: "/logos/google-drive-svgrepo-com.svg", label: "Google Drive" },
  calendar: { src: "/logos/google-calendar-svgrepo-com.svg", label: "Google Calendar" },
  outlook: { src: "/logos/ms-outlook-svgrepo-com.svg", label: "Outlook" },
};

const servicePositions = [
  { id: "gmail", x: 28, y: 10 },
  { id: "slack", x: 70, y: 10 },
  { id: "dropbox", x: 4, y: 46 },
  { id: "drive", x: 94, y: 46 },
  { id: "calendar", x: 68, y: 90 },
  { id: "outlook", x: 25, y: 90 },
];

export default function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-24">
      <div className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
        <WavyBackground className="left-1/3 top-0 -z-0 opacity-40" variant="dark" />
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div
              className="relative mx-auto aspect-square w-full max-w-sm motion-safe:[&_.service-icon]:animate-float"
              role="img"
              aria-label="Illustration of whitepace connected to Gmail, Slack, Dropbox, Google Drive, Calendar and Outlook"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <circle cx="50" cy="50" r="44" fill="none" stroke="#3a5a96" strokeWidth="0.6" strokeDasharray="2 3" />
              </svg>

              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg sm:h-20 sm:w-20">
                <BrandMarkIcon className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" />
              </div>

              {servicePositions.map(({ id, x, y }, i) => {
                const { src, label } = serviceIconMap[id as keyof typeof serviceIconMap];
                return (
                  <div
                    key={id}
                    className="service-icon absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md sm:h-12 sm:w-12"
                    style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.35}s` }}
                  >
                    <Image src={src} alt={label} width={24} height={24} />
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="max-w-lg text-white">
              <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Work with Your Favorite Apps Using whitepace
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
                Whitepace teams up with your favorite software. Integrate with over 1000+ apps with
                Zapier to have all the tools you need for your project&apos;s success.
              </p>
              <div className="mt-8">
                <Button href="#faq" size="lg">
                  Read more →
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      <ul className="sr-only">
        {integrationIcons.map((i) => (
          <li key={i.id}>{i.label}</li>
        ))}
      </ul>
    </section>
  );
}