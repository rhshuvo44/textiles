import PartnerSlide from "@/components/UI/PartnerSlide";
// const industryPartners: Customer[] = [
//   { name: "Partner A", logo: "/logos/partner-a.png", description: "" },
//   { name: "Partner B", logo: "/logos/partner-b.png", description: "" },
// ];
const IndustryPartners = () => {
  return (
    <div className="md:p-10 p-5">
      
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
