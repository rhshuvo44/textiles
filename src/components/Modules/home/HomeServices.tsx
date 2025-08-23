"use client";

import ShowcaseSection from "@/components/UI/ShowcaseSection";
import { services } from "@/db/data";

const HomeServices = () => {
  return (
    <ShowcaseSection
      title="What We Offer"
      subtitle="Explore our premium services and solutions"
      capabilities={services}
      capabilitiesClassName="lg:grid-cols-4"
    />
  );
};

export default HomeServices;
