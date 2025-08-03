"use client";

import { teamMembers } from "@/db/data";
import { BiUser } from "react-icons/bi";

const TeamSection = () => {
  return (
    <section className="p-5 md:p-10 bg-base-100 text-base-content">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        Meet Our Management
      </h2>
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card w-72 md:w-80 bg-base-200 shadow-xl flex-shrink-0"
            data-aos="fade-up"
          >
            <figure className="bg-gray-100 flex items-center justify-center h-72 overflow-hidden rounded-t-lg">
              {/* Uncomment and replace BiUser if images are available */}
              {/* <Image
                src={member.image}
                alt={member.name}
                width={320}
                height={288}
                className="w-full h-full object-cover"
              /> */}
              <BiUser size={160} className="text-gray-400" aria-hidden="true" />
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
