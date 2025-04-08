import PartnerSlide from "@/components/UI/PartnerSlide";
// const industryPartners: Customer[] = [
//   { name: "Partner A", logo: "/logos/partner-a.png", description: "" },
//   { name: "Partner B", logo: "/logos/partner-b.png", description: "" },
// ];
const IndustryPartners = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Industry Partners
      </h2>
      <PartnerSlide />
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {industryPartners.map((partner, index) => (
            <Image
            fill
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-14 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div> */}
    </div>
  );
};

export default IndustryPartners;
