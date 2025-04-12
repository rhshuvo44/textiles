import React from "react";

const MerchandisingAbout = () => {
  return (
    // <section className="py-16 px-4 max-w-6xl mx-auto text-center">
    //   <h2 className="text-3xl font-bold mb-6">About Our Merchandising</h2>
    //   <p className="mb-10 text-lg">
    //     We provide end-to-end merchandising solutions, combining industry
    //     expertise and efficient processes.
    //   </p>
    //   <div className="grid md:grid-cols-3 gap-8">
    //     {[
    //       { icon: "🧵", title: "Fabric Sourcing" },
    //       { icon: "🎨", title: "Product Development" },
    //       { icon: "💰", title: "Costing & Pricing" },
    //       { icon: "✅", title: "Quality Control" },
    //     ].map(({ icon, title }) => (
    //       <div
    //         key={title}
    //         className="p-6 border rounded-lg shadow hover:shadow-md transition"
    //       >
    //         <div className="text-4xl mb-4">{icon}</div>
    //         <h3 className="text-xl font-semibold">{title}</h3>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="md:p-10 p-5 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-6"
  data-aos="fade-up"
  >Our Merchandising Process</h2>
  <p className="mb-12 text-lg text-gray-600"
  data-aos="fade-up"
  >
    From sourcing to shipment, we offer end-to-end merchandising solutions tailored to meet client expectations with precision, quality, and timeliness.
  </p>
  <div className="grid md:grid-cols-3 gap-8 text-left">
    {[
      { icon: "🧶", title: "Yarn Sourcing", description: "We source high-quality yarn from trusted global suppliers to ensure fabric excellence from the start." },
      { icon: "🧵", title: "Knitting Fabric", description: "Utilizing advanced knitting techniques to produce a wide range of fabric types as per design requirements." },
      { icon: "🎨", title: "Product Development", description: "Collaborating with clients to develop innovative, trend-forward products with technical precision." },
      { icon: "💰", title: "Costing & Pricing", description: "We offer transparent and competitive pricing strategies to meet budget goals without compromising quality." },
      { icon: "✅", title: "Quality Control", description: "Each stage of production is closely monitored to maintain top-notch quality standards and compliance." },
      { icon: "🚚", title: "On-Time Shipment", description: "Strict adherence to timelines with efficient logistics ensures timely deliveries, every time." },
    ].map(({ icon, title, description }) => (
      <div key={title} className="p-6 border rounded-2xl shadow hover:shadow-md transition"
      data-aos="fade-up"
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default MerchandisingAbout;
