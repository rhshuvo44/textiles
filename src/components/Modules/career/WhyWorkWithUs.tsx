import ShowcaseSection from "@/components/UI/ShowcaseSection";
import { whyWorkUs } from "@/db/data";

const WhyWorkWithUs = () => {
  return (
    <ShowcaseSection
      title="Why Work With Us?"
      subtitle="Discover the unique benefits and culture that set us apart"
      capabilities={whyWorkUs}
      capabilitiesClassName="lg:grid-cols-3"
    />
  );
};

export default WhyWorkWithUs;
