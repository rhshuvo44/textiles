import SectionHeader from "@/components/UI/SectionHeader";
import { howWeHire } from "@/db/data";

const HowWeHire = () => {
  return (
    <section className="px-4 md:px-10 py-16 bg-base-100 text-base-content">
      <SectionHeader
        title="Our Hiring Process"
        subtitle="Learn about the steps we take to find the right talent"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
        {howWeHire.map((step, idx) => (
          <article
            key={idx}
            className="card shadow-md rounded-lg p-6 flex items-center justify-center transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <p className="text-base">{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowWeHire;
