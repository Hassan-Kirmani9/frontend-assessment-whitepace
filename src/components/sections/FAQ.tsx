import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Highlight from "@/components/ui/Highlight";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import { faqItems } from "@/data/content";

export default function FAQ() {
  return (
    <section id="faq" className="bg-mist py-20 sm:py-28 scroll-mt-24">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={
            <>
              Questions, <Highlight>answered</Highlight>
            </>
          }
          className="mx-auto"
        />

        <Reveal className="mt-12">
          <Accordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
