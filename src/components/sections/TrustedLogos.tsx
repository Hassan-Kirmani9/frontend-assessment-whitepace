import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

const logos = [
  { name: "Apple", src: "/logos/apple-173-svgrepo-com.svg" },
  { name: "Microsoft", src: "/logos/microsoft-svgrepo-com.svg" },
  { name: "Slack", src: "/logos/slack-svgrepo-com.svg" },
  { name: "Google", src: "/logos/google-icon-svgrepo-com.svg" },
];

export default function TrustedLogos() {
  return (
    <section aria-labelledby="trusted-logos-heading" className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          align="center"
          title={
            <span id="trusted-logos-heading">
              Our <Highlight>sponsors</Highlight>
            </span>
          }
        />
        <ul className="flex flex-col items-center gap-y-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-34 sm:gap-y-12">
          {logos.map((logo, i) => (
            <Reveal key={logo.name} as="li" delay={i * 80}>
              <div className="" style={{ animationDelay: `${i * 0.4}s` }}>
                <Image src={logo.src} alt={logo.name} width={80} height={32} />
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}