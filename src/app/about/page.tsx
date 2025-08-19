import AboutBanner from "@/components/Modules/about/AboutBanner";
import CertificationsSection from "@/components/Modules/about/CertificationsSection";
import CompanyOverview from "@/components/Modules/about/CompanyOverview";
import MissionVision from "@/components/Modules/about/MissionVision";
import TeamSection from "@/components/Modules/about/TeamSection";
import ValuesCommitment from "@/components/Modules/about/ValuesCommitment";
import CTA from "@/components/Modules/customers/CTA";
import PartnerSlide from "@/components/UI/PartnerSlide";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About -Textiles & Apparel",
  description: "Ready made Garment Manufacturer (factory)",
};
const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <CompanyOverview />
      <MissionVision />
      <ValuesCommitment />
      <TeamSection />
      <CertificationsSection />
      <PartnerSlide />
      <CTA />
    </>
  );
};

export default AboutPage;
