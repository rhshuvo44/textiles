import { culture } from "@/db/data";
import Image from "next/image";
const Culture = () => {
  return (
    <section className="p-5 md:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our People & Culture
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {culture.map((person, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
          >
            <div className="card-body">
              <Image
                width={300}
                height={300}
                src={person.image}
                alt={person.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <blockquote className="italic text-sm">
                “{person.quote}”
              </blockquote>
              <p className="font-semibold mt-2">
                — {person.name}, {person.title}
              </p>
            </div>
          </div>
        ))}

        {/* {[1, 2, 3].map((item) => (
          <div key={item} className="card bg-base-100 shadow-md"
          data-aos="fade-up"
          >
            <div className="card-body">
              <Image
                width={300}
                height={300}
                src={img1}
                alt="Employee"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <blockquote className="italic text-sm">
                “Working here has helped me grow professionally and personally.”
              </blockquote>
              <p className="font-semibold mt-2">
                — Fatima, Production Supervisor
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Culture;
