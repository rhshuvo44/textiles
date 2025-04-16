import banner from "@/assets/image/textile_main_image.jpg";

const CareerHero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center max-w-2xl"
      
      data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold mb-4">
          Join Our Team & Weave Your Future With Us!
        </h1>
        <p className="mb-6">
          Be a part of an innovative and growing textile company.
        </p>
        <a href="#job-openings" className="btn btn-info text-white">View Open Positions</a>
      </div>
    </section>
  );
};

export default CareerHero;
