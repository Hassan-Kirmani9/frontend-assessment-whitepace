import Container from "@/components/ui/Container";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import WavyBackground from "@/components/ui/WavyBackground";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-center text-white sm:py-24">
      <WavyBackground className="left-0 top-0 -z-0 opacity-30" variant="dark" />
      <Container className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-xl font-extrabold leading-tight text-white whitespace-nowrap sm:text-3xl md:text-4xl lg:text-5xl">
            Your work,everywhere <Highlight tone="highlight-mark-blue" className="text-white"> you are</Highlight>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Access your notes from your computer, phone or tablet by synchronising with various
            services, including whitepace, Dropbox and OneDrive. The app is available on Windows,
            macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <div className="mt-9">
            <Button href="#pricing" size="lg">
              Try Today →
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}