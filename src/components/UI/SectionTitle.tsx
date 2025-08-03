import banner from "@/assets/image/textile_main_image.jpg";
import Link from "next/link";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div
      className="hero h-72 mt-16"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>{" "}
      {/* Added bg-black for better contrast */}
      <div className="hero-content text-neutral-content text-center px-10">
        <div className="max-w-lg">
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
    </div>
  );
};

export default SectionTitle;
