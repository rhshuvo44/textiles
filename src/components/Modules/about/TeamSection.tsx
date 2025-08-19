"use client";

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
    <section className="py-16 px-5 md:px-10   transition-colors duration-500">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
        Meet Our Management
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl "
          >
            {/* Image with gradient overlay */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 dark:from-black/50"></div>
            </div>

            {/* Card Content */}
            <div className="p-5 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {member.name}
              </h3>

              <span className="inline-block text-sm font-medium text-white bg-secondary px-3 py-1 rounded-full mb-3 animate-pulse">
                {member.role}
              </span>

              <p className="text-sm  mb-4">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {member.social?.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-primary to-secondary text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                  >
                    <FaFacebookF size={14} />
                  </a>
                )}
                {member.social?.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-primary to-secondary text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                  >
                    <FaTwitter size={14} />
                  </a>
                )}
                {member.social?.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-primary to-secondary text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                )}
                {member.social?.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-primary to-secondary text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
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
