import banner from "@/assets/image/investor-relations.jpg";
import GetInTouch from "./GetInTouch";
const AboutBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row pt-40 md:pt-0">
        <div className=" max-w-2xl text-white">
          <h1 className="text-3xl lg:text-6xl font-bold" data-aos="fade-right">Investor Relations</h1>
          <p className="py-6" data-aos="fade-left">
            Since 1995, Manufacturer has been helping our customers build a
            better world – making sustainable progress possible and driving
            positive change on every continent.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
