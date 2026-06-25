import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Highlight from "@/components/ui/Highlight";
import WavyBackground from "@/components/ui/WavyBackground";
import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-[72px]">
      <WavyBackground className="left-0 top-10 -z-10 opacity-70 dark:opacity-30" variant="light" />

      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="relative z-10 max-w-xl motion-safe:animate-[fadeUp_0.7s_ease_both]">
          <h1 className="font-display text-4xlmd:text-left text-center font-extrabold leading-[1.1] text-brand-600 sm:text-5xl lg:text-[3.4rem]">
            Get More Done with <Highlight className="text-brand-600 md:text-left text-center">{siteConfig.name}</Highlight>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-500 md:text-left text-center">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#pricing" size="lg" className="mx-auto md:mx-0">
              Try Whitepace free →
            </Button>
        
          </div>
        </div>

        <div className="relative motion-safe:animate-[heroIn_0.8s_ease_0.1s_both]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-100 shadow-xl ring-1 ring-black/5 dark:bg-brand-700/30 dark:ring-white/10">
            <Image
              src="/images/hero-mockup.svg"
              alt="Screenshot of the whitepace dashboard showing a project board with tasks organized into columns"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover dark:opacity-90"
            />
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}