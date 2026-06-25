import Image from "next/image";
import Container from "@/components/ui/Container";
import Highlight from "@/components/ui/Highlight";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function DataSecurity() {
    return (
        <section id="security" className="scroll-mt-24">
            <Container className="grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
                <Reveal className="order-2 lg:order-1">
                    <div className="max-w-lg">
                        <h2 className="font-display text-3xl text-center md:text-left font-extrabold leading-tight text-ink-900 sm:text-4xl">
                            <Highlight>100%</Highlight> your data
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg text-center md:text-left">
                            The app is open source and your notes are saved to an open format, so you&apos;ll
                            always have access to them. Uses End-to-End Encryption (E2EE) to secure your notes
                            and ensure no one but yourself can access them.
                        </p>
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <Button href="#faq" size="lg" className="">
                                Read more →
                            </Button>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={120} className="order-1 lg:order-2">
                    <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
                        <Image
                            src="/images/diagram.png"
                            alt="Diagram showing whitepace at the center, connected to encryption key, secure storage, shield and lock icons"
                            fill
                            sizes="(min-width: 1024px) 480px, 90vw"
                            className="object-contain"
                        />
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}