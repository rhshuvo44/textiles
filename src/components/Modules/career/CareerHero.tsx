// import banner from "@/assets/image/banner/carrer.jpg";

// const CareerHero = () => {
//   return (
//     <section
//       className="relative h-[80vh] bg-cover bg-center text-white flex items-center justify-center"
//       style={{ backgroundImage: `url(${banner.src})` }}
//       aria-label="Career Hero Banner"
//     >
//       <div
//         className="bg-black bg-opacity-50 p-6 rounded-xl text-center max-w-2xl"
//         data-aos="fade-up"
//       >
//         <h1 className="text-4xl font-bold mb-4">
//           Join Our Team & Weave Your Future With Us!
//         </h1>
//         <p className="mb-6">
//           Be a part of an innovative and growing textile company.
//         </p>
//         <a
//           href="#job-openings"
//           className="btn btn-info text-white"
//           role="button"
//         >
//           View Open Positions
//         </a>
//       </div>
//     </section>
//   );
// };

// export default CareerHero;
import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/image/banner/carrer.jpg";
import Button from "@/components/UI/Button";

const CareerHero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-white"
      aria-label="Career Hero Banner"
    >
      <Image
        src={banner}
        alt="A vibrant textile factory with a bright atmosphere"
        placeholder="blur"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
      />
      <div
        className="relative z-10 bg-black bg-opacity-50 p-6 rounded-xl text-center max-w-2xl"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold mb-4">
          Join Our Team & Weave Your Future With Us!
        </h1>
        <p className="mb-6">
          Be a part of an innovative and growing textile company.
        </p>
        <Button
          href="#job-openings"
          text="View Open Positions"
          ariaLabel="View Open Positions"
          variant="solid"
        />
      </div>
    </section>
  );
};

export default CareerHero;
