import banner from "@/assets/image/textile_main_image.jpg";
import Link from "next/link";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div
      className="hero h-72 mt-24"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center px-10">
        <div className="max-w-lg">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">{text}</h1>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>{text}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
