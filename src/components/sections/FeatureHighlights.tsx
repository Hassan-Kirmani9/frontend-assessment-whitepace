import Image from "next/image";
import SplitFeature from "@/components/sections/SplitFeature";
import OrbitGraphic from "@/components/sections/OrbitGraphic";
import Highlight from "@/components/ui/Highlight";

function PlaceholderVisual({ alt }: { alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-100 shadow-md ring-1 ring-black/5">
      <Image src="/images/placeholder-panel.svg" alt={alt} fill sizes="(min-width: 1024px) 560px, 90vw" className="object-cover" />
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <>
      <SplitFeature
        title={
          <>
            Project
            <br />
            <Highlight>Management</Highlight>
          </>
        }
        description="Images, videos, PDFs and audio files are supported. Create checklists and timelines directly from the app. Capture updates on the go and sync them to any task."
        ctaLabel="Get Started"
        imageSide="right"
        centerOnMobile
        visual={<PlaceholderVisual alt="Project management dashboard preview" />}
      />

      <SplitFeature
        title={
          <>
            Work <Highlight>together</Highlight>
          </>
        }
        description="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        ctaLabel="Try it now"
        imageSide="left"
        background="mist"
        centerOnMobile
        visual={<OrbitGraphic />}
      />

      <SplitFeature
        title={
          <>
            Customise it to
            <br />
            your <Highlight>needs</Highlight>
          </>
        }
        description="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        ctaLabel="Let's Go"
        imageSide="right"
        centerOnMobile
        visual={<PlaceholderVisual alt="Customisation and theming preview" />}
      />
    </>
  );
}