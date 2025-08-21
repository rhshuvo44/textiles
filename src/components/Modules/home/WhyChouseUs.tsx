import { capabilities } from "@/db/data";

export default function WhyChooseUs() {
  return (
    <section className=" px-4 sm:px-6 lg:px-20 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold" data-aos="fade-up">
          Why Choose Us?
        </h2>
        <p
          className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover what sets us apart in the textile industry.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item, index) => (
          <div
            key={index}
            className=" shadow hover:shadow-lg transition-all duration-300 rounded-2xl p-6 text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
