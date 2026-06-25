import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Highlight from "@/components/ui/Highlight";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { articles } from "@/data/content";

export default function Resources() {
  return (
    <section id="resources" className="bg-mist py-20 sm:py-28 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title={
            <>
              Guides, stories and <Highlight>tips</Highlight> from the team
            </>
          }
          description="Practical advice for running projects, teams, and the occasional process overhaul."
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.id} as="li" delay={i * 100}>
              <a href={article.href} className="group block h-full focus-visible:outline-none">
                <Card hoverLift className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[16/10] w-full bg-brand-100">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 360px, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      {article.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-brand-600 group-focus-visible:text-brand-600">
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-500">{article.excerpt}</p>
                    <span className="mt-auto text-xs text-ink-500">{article.readTime}</span>
                  </div>
                </Card>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
