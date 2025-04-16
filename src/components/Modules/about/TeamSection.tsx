"use client";

import { teamMembers } from "@/db/data";
import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="mdp-10 p-5 bg-base-100 text-base-content">
      <h2 className="text-3xl font-bold text-center mb-8">
        Meet Our Management
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="card w-80 bg-base-200 shadow-xl">
            <figure>
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-72 object-cover"
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
    </div>
    // <section className="p-5 md:p-10 bg-base-100 text-base-content">
    //   <div className="">
    //     <h2 className="text-4xl font-bold text-center mb-12">
    //       Meet with our Management
    //     </h2>
    //     <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
    //       {teamMembers.map((member, index) => (
    //         <div
    //           key={index}
    //           className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    //           data-aos="fade-up"
    //         >
    //           <Image
    //             width={400}
    //             height={400}
    //             src={member.image}
    //             alt={member.name}
    //             className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //             <h3 className="text-xl font-semibold">{member.name}</h3>
    //             <p className="text-sm">{member.role}</p>
    //             <p className="text-sm mt-2">{member.bio}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default TeamSection;
