import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

const OfficeContacts = () => {
  return (
    <>
      {/* <div className="p-5 md:p-10">
        <div
          className="card lg:card-side bg-base-100 shadow-xl"
          data-aos="fade-up"
        >
          <div className="card-body w-full md:w-1/2  md:px-20">
            <h2
              className="text-5xl font-bold text-[#00A9E9]"
              data-aos="fade-right"
            >
              Office Contacts
            </h2>
            <p className="mt-10" data-aos="zoom-in">
              The textile, textile product, and apparel manufacturing industries
              include establishments that process fiber into fabric and fabric
              into clothing and other textile products. While most apparel
              manufacturers worldwide rely on people to cut and sew pieces of
              fabric together.
            </p>

            <div className="card-actions justify-start">
              <div
                className="p-4 border rounded-lg shadow-lg bg-white w-full max-w-md flex items-center"
                data-aos="fade-up"
              >
                <div className="p-2 bg-blue-100 rounded-full">
                  <CiLocationOn />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Location</h3>
                  <p className="text-gray-700">
                    13 No, New Haziganj, Narayanganj -1400, Bangladesh
                  </p>
                </div>
              </div>
              <div
                className="p-4 border rounded-lg shadow-lg bg-white w-full max-w-md flex items-center"
                data-aos="fade-up"
              >
                <div className="p-2 bg-blue-100 rounded-full">
                  <IoCallOutline />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Phone</h3>
                  <p className="text-gray-700">
                    +88 01704172061 (Cell & WhatsApp)
                    <br />
                    Sales: +88 01989624626 (Cell & WhatsApp)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14622.215073609572!2d90.48550351884809!3d23.62033136943204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10a7aa25573%3A0x17b1d57306f167d4!2sKali%20Bazar%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1731849922002!5m2!1sen!2sbd"
              className="w-full p-10 h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div> */}
      <section className="p-5 md:p-10 bg-white">
        <div className="">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Office Contact
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4" data-aos="fade-up">
                <BiMapPin className="text-info w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">
                    Factory Address
                  </h4>
                  <p className="text-gray-500">
                    13 No, New Haziganj, Narayanganj -1400, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up">
                <BiPhone className="text-info w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Phone</h4>
                  <a href="tel:+8801704172061" className="text-gray-500 block">
                    +88 01704172061
                  </a>
                  <a href="tel:+8801788577329" className="text-gray-500 block">
                    +88 01788577329
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up">
                <MdEmail className="text-info w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a
                    href="mailto:info@sarkartextilesapparel.com"
                    className="text-gray-500 block"
                  >
                    info@sarkartextilesapparel.com
                  </a>
                  <a
                    href="mailto:sarkartextilesapparel@gmail.com"
                    className="text-gray-500 block"
                  >
                    sarkartextilesapparel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up">
                <FiMessageCircle className="text-info w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">WhatsApp</h4>
                  <p className="text-gray-500">+88 01788577329</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up">
                <CgLock className="text-info w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Working Hours</h4>
                  <p className="text-gray-500">Sat - Thu: 8:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.facebook.com/sarkartextilesandapparel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-gray-500 hover:text-blue-600 w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="text-gray-500 hover:text-pink-500 w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LiaLinkedin className="text-gray-500 hover:text-blue-700 w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div
              className="w-full h-[350px] rounded-2xl overflow-hidden shadow-md"
              data-aos="fade-up"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14622.215073609572!2d90.48550351884809!3d23.62033136943204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10a7aa25573%3A0x17b1d57306f167d4!2sKali%20Bazar%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1731849922002!5m2!1sen!2sbd" // replace with actual map link
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
                data-aos="fade-up"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfficeContacts;
