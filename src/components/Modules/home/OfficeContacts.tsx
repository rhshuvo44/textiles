"use client";

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
          <div className="flex items-start gap-4">
            <BiMapPin className="text-info w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold">Factory Address</h4>
              <p className="">13 No, New Market, Dhaka -1200, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <BiPhone className="text-info w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold ">Phone</h4>
              <a href="tel:+88011111111" className=" block">
                +88 0111111111
              </a>
              <a href="tel:+88011111112" className=" block">
                +88 0111111112
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdEmail className="text-info w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold ">Email</h4>
              <a href="mailto:rhshuvo121@gmail.com" className=" block">
                rhshuvo121@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiMessageCircle className="text-info w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold ">WhatsApp</h4>
              <p className="">+88 01111111111</p>
            </div>
          </div>

          <div className="flex items-start gap-4" data-aos="fade-up">
            <CgLock className="text-info w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold ">Working Hours</h4>
              <p className="">Sat - Thu: 8:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-4">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
  >
    <FaFacebook className="w-6 h-6" />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
  >
    <BsInstagram className="w-6 h-6" />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
  >
    <LiaLinkedin className="w-6 h-6" />
  </a>
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
