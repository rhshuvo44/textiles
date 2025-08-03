import banner from "@/assets/image/banner/banner.jpg";

const GalleryHero = () => {
  return (
    <section
      role="banner"
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
          Gallery
        </h1>
        <p className="text-lg md:text-2xl mb-6" data-aos="fade-up">
          Explore our collection of products, projects, and creativity.
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;
