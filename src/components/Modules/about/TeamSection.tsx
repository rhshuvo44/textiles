"use client";

import product05 from "@/assets/image/textile/product05.webp";
import product08 from "@/assets/image/textile/product08.webp";
import product09 from "@/assets/image/textile/product9.webp";
import product15 from "@/assets/image/textile/product15.webp";
import Image, { StaticImageData } from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Aminul Haque",
    role: "CEO & Founder",
    image: product05, 
    bio: "Aminul brings over 15 years of expertise in knit garment production and strategic leadership.",
  },
  {
    name: "Farzana Yasmin",
    role: "Head of Design",
    image: product08,
    bio: "Leading design innovation, Farzana ensures each product blends aesthetics with market trends.",
  },
  {
    name: "Tariqul Islam",
    role: "Production Manager",
    image: product09,
    bio: "Tariqul oversees all aspects of manufacturing to deliver top-notch quality on time.",
  },
  {
    name: "Nasrin Sultana",
    role: "Marketing Director",
    image: product15,
    bio: "Nasrin drives global growth and builds long-lasting partnerships worldwide.",
  },
];

const TeamSection = () => {
  return (
    <section className="p-5 md:p-10 bg-base-100 text-base-content">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet the Experts
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
            >
              <Image
                width={400}
                height={400}
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <p className="text-sm mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
