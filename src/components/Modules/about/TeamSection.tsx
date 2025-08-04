"use client";

import { teamMembers } from "@/db/data";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="p-5 md:p-10 bg-base-100 text-base-content">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        Meet Our Management
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl flex-shrink-0"
            data-aos="fade-up"
          >
            <figure className="bg-gray-100 flex items-center justify-center h-72 overflow-hidden rounded-t-lg">
              {/* Uncomment and replace BiUser if images are available */}
              <Image
                src={member.image}
                alt={member.name}
                width={320}
                height={288}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">{member.name}</h3>
              <p className="text-sm font-semibold text-info">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
