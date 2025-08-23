"use client";

import ShowcaseSection from "@/components/UI/ShowcaseSection";
import { services } from "@/db/data";

const HomeServices = () => {
  return (
    <ShowcaseSection
      title="What We Offer"
      subtitle="Explore our premium services and solutions"
      capabilities={services}
    />
  );
};

export default HomeServices;
