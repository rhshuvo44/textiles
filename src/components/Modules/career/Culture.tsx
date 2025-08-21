import { culture } from "@/db/data";
import Image from "next/image";

const Culture = () => {
  return (
    <section className="p-5 md:p-10">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        Our People & Culture
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {culture.map((person, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            role="region"
            aria-labelledby={`person-name-${idx}`}
          >
            <div className="card-body">
              <Image
                width={300}
                height={300}
                src={person.image}
                alt={`Photo of ${person.name}`}
                className="w-full h-48 object-cover rounded-xl mb-4"
                priority={idx < 3}
              />
              <blockquote className="italic text-sm">
                “{person.quote}”
              </blockquote>
              <p
                id={`person-name-${idx}`}
                className="font-semibold mt-2 text-primary"
              >
                — {person.name}, {person.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Culture;
