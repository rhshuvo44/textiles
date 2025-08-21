import { merchandisingAbout } from "@/db/data";

const MerchandisingAbout = () => {
  return (
    <section className="md:p-10 p-5 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6" data-aos="fade-up">
        Our Merchandising Process
      </h2>
      <p className="mb-12 text-lg text-gray-600" data-aos="fade-up">
        From sourcing to shipment, we offer end-to-end merchandising solutions
        tailored to meet client expectations with precision, quality, and
        timeliness.
      </p>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        {merchandisingAbout.map(({ icon, title, description }) => (
          <div
            key={title}
            className="p-6 rounded-2xl shadow hover:shadow-md transition"
            data-aos="fade-up"
            role="region"
            aria-labelledby={`${title
              .replace(/\s+/g, "-")
              .toLowerCase()}-title`}
          >
            <div className="text-4xl mb-4" aria-hidden="true">
              {icon}
            </div>
            <h3
              id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
              className="text-xl font-semibold mb-2"
            >
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchandisingAbout;
