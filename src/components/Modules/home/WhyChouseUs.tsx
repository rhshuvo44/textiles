import ShowcaseSection from "@/components/UI/ShowcaseSection";
import { capabilities } from "@/db/data";

export default function WhyChooseUs() {
  return (
    <ShowcaseSection
      title="Why Choose Us?"
      subtitle="Discover what sets us apart in the textile industry."
      capabilities={capabilities}
      capabilitiesClassName="lg:grid-cols-4"
    />
  );
}
