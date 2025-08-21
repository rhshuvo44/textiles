import Image from "next/image";
import Button from "@/components/UI/Button";
import merchandisingBanner from "@/assets/image/banner/merchandising.jpg";

const MerchandisingBanner = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex flex-col items-center justify-center text-white text-center"
      aria-label="Merchandising Solutions Banner"
    >
      <Image
        src={merchandisingBanner}
        alt="Creative textile merchandising display"
        placeholder="blur"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
      />
      <div className="relative z-10 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
          Merchandising Solutions
        </h1>
        <p className="text-lg md:text-2xl mb-6" data-aos="fade-up">
          Expert textile merchandising tailored for your business
        </p>
        <Button
          href="#quote"
          text="Get a Quote"
          ariaLabel="View Get a Quote"
          variant="solid"
        />
      </div>
    </section>
  );
};

export default MerchandisingBanner;
