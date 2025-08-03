const CTA = () => {
  return (
    <section className="text-center py-16 px-4 bg-info text-white">
      <h2
        className="text-4xl sm:text-5xl font-semibold mb-4"
        data-aos="fade-up"
      >
        Want to Join Our Network?
      </h2>
      <p className="mb-6 text-lg" data-aos="fade-up">
        Let’s create something amazing together.
      </p>
      <button
        type="button"
        className="btn bg-white text-info hover:bg-gray-100 transition-colors duration-300"
        data-aos="fade-up"
      >
        Partner With Us
      </button>
    </section>
  );
};

export default CTA;
