import { whyWorkUs } from "@/db/data";

const WhyWorkWithUs = () => {
  return (
    <section className="px-4 md:px-12 py-10" data-aos="fade-up">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        Why Work With Us?
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {whyWorkUs.map(({ icon, title }) => (
          <div
            key={title}
            className="card bg-base-100 shadow-md rounded-lg"
            data-aos="fade-up"
          >
            <div className="card-body flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="card-title text-lg font-semibold">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
