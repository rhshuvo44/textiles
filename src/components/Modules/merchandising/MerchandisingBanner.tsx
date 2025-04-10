import banner from "@/assets/image/textile_main_image.jpg";
const MerchandisingBanner = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Merchandising Solutions
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Expert textile merchandising tailored for your business
        </p>
        <button className="btn btn-info text-white">Get a Quote</button>
      </div>
    </section>
  );
};

export default MerchandisingBanner;
