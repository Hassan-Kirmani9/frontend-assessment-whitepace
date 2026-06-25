import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Highlight from "@/components/ui/Highlight";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { featureCards } from "@/data/content";
import {
  AnalyzeIcon,
  AutomateIcon,
  CollaborateIcon,
  PlanIcon,
  SecureIcon,
  TrackIcon,
} from "@/components/ui/icons";

const iconMap = {
  collaborate: CollaborateIcon,
  plan: PlanIcon,
  analyze: AnalyzeIcon,
  automate: AutomateIcon,
  secure: SecureIcon,
  track: TrackIcon,
};

export default function Features() {
  return (
    <section id="features" className="bg-mist py-20 sm:py-28 scroll-mt-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Features"
          title={
            <>
              Everything your team needs to <Highlight>stay on track</Highlight>
            </>
          }
          description="One workspace for planning, collaborating, and tracking the work that matters."
          className="mx-auto"
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.id} as="li" delay={(i % 3) * 100}>
                <Card hoverLift className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{feature.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
