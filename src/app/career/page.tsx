import CareerHero from "@/components/Modules/career/CareerHero";
import Culture from "@/components/Modules/career/Culture";
import HowWeHire from "@/components/Modules/career/HowWeHire";
import JobOpenings from "@/components/Modules/career/JobOpenings";
import WhyWorkWithUs from "@/components/Modules/career/WhyWorkWithUs";
const CareerPage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}

      <CareerHero />
      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Job Openings */}
      <JobOpenings />

      {/* How We Hire */}
      <HowWeHire />

      {/* Testimonials & Culture */}
      <Culture />
    </div>
  );
};

export default CareerPage;
