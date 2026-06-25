import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 scroll-mt-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title={
            <>
              Up and running in <Highlight>four steps</Highlight>
            </>
          }
          description="No lengthy onboarding. Most teams are planning their first project within minutes."
          className="mx-auto"
        />

        <ol className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.id} as="li" delay={i * 100}>
              <div className="relative flex flex-col gap-3">
                <span className="font-display text-5xl font-extrabold text-brand-100" aria-hidden="true">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
