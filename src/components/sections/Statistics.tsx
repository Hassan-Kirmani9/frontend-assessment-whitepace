import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WavyBackground from "@/components/ui/WavyBackground";
import AnimatedCounter from "@/components/sections/AnimatedCounter";
import { stats } from "@/data/content";

export default function Statistics() {
  return (
    <section id="statistics" className="relative overflow-hidden bg-navy-900 py-20 text-white scroll-mt-24 sm:py-24">
      <WavyBackground className="left-0 top-0 -z-0 opacity-40" variant="dark" />
      <Container>
        <ul className="grid grid-cols-2 gap-10 text-center sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} as="li" delay={i * 100}>
              <p className="font-display text-4xl font-extrabold sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/70 sm:text-base">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
