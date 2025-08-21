import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/image/banner/textile_main_image.jpg";

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <section className="relative w-full h-[90vh] sm:h-[80vh] flex items-center justify-center">
      <Image
        src={banner}
        alt="A vibrant image of textiles or a textile factory"
        placeholder="blur"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-center text-white px-10">
        <div className="max-w-lg mx-auto">
          <h1
            className="mb-5 text-2xl md:text-5xl font-bold"
            data-aos="fade-up"
          >
            {text}
          </h1>
          <nav className="breadcrumbs text-sm" aria-label="Breadcrumb">
            <ul className="inline-flex space-x-2 justify-center">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-current="page" className="font-semibold">
                {text}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
