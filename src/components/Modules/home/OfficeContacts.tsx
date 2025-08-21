"use client";

import ContactList from "@/components/UI/ContactList";
import { socialLinks } from "@/db/data";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

const OfficeContacts = () => {
  return (
    <section className="p-5 md:p-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
        Office Contact
      </h2>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6" data-aos="fade-up">
          <ContactList variant="withIcon" />

          <div className="flex items-center gap-5 pt-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-primary transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <div
          className="w-full h-[350px] rounded-2xl overflow-hidden shadow-md"
          data-aos="fade-up"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.4017517762165!2d90.50920319820935!3d23.634607970678182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10812a520a3%3A0xc83c87a5cee9a0a9!2sJGM5%2BVWX%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1745758534409!5m2!1sen!2sbd"
            loading="lazy"
            allowFullScreen
            className="w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OfficeContacts;
