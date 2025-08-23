"use client";

import ShowcaseSection from "@/components/UI/ShowcaseSection";
import { values } from "@/db/data";

const ValuesCommitment = () => {
  return (
    <ShowcaseSection
      title="Our Values & Commitment"
      subtitle="Explore our core values and commitment to quality"
      capabilities={values}
      capabilitiesClassName="lg:grid-cols-3"
    />
  );
};

export default ValuesCommitment;
