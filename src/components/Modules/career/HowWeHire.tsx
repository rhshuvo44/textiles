import { howWeHire } from "@/db/data";

const HowWeHire = () => {
  return (
    <section className="px-4 md:px-12 py-10 bg-base-100 text-base-content">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        How We Hire
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        {howWeHire.map((step, idx) => (
          <div
            key={idx}
            className="card bg-white shadow-md rounded-lg p-6 flex items-center justify-center"
            data-aos="fade-up"
          >
            <p className="text-base">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeHire;
