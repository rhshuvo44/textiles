"use client";

import SectionHeader from "@/components/UI/SectionHeader";
import { teamMembers } from "@/db/data";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const TeamSection = () => {
  return (
    <section className="py-16 px-5 md:px-10 transition-colors duration-500">
      {/* Header */}
      <div data-aos="fade-up" data-aos-delay="100">
        <SectionHeader
          title="Our Team"
          subtitle="Meet the minds behind our success"
          className="font-rubik"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group bg-base-100"
            data-aos="zoom-in-up"
            data-aos-delay={150 + index * 100} // staggered reveal
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role} at our company`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3
                className="text-xl sm:text-2xl font-bold mb-1 font-rubik"
                data-aos="fade-up"
                data-aos-delay={250 + index * 100}
              >
                {member.name}
              </h3>

              <span
                className="inline-block text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary px-4 py-1.5 rounded-full mb-3 font-montserrat tracking-wide shadow-md"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                {member.role}
              </span>

              <p
                className="text-sm text-base-content/80 mb-5 font-montserrat leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={350 + index * 100}
              >
                {member.bio}
              </p>

              {/* Social Icons */}
              <div
                className="flex justify-center gap-3"
                data-aos="fade-up"
                data-aos-delay={400 + index * 100}
              >
                {member.social?.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-base-200 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm"
                    aria-label={`Visit ${member.name}'s Facebook profile`}
                  >
                    <FaFacebookF size={14} />
                  </a>
                )}
                {member.social?.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-base-200 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm"
                    aria-label={`Visit ${member.name}'s Twitter profile`}
                  >
                    <FaTwitter size={14} />
                  </a>
                )}
                {member.social?.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-base-200 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                )}
                {member.social?.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-base-200 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm"
                    aria-label={`Visit ${member.name}'s Instagram profile`}
                  >
                    <FaInstagram size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
