import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const OfficeContacts = () => {
  return (
    <div className="p-5 md:p-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body w-full md:w-1/2  md:px-20">
          <h2 className="text-5xl font-bold text-[#00A9E9]">Office Contacts</h2>
          <p className="mt-10">
            The textile, textile product, and apparel manufacturing industries
            include establishments that process fiber into fabric and fabric
            into clothing and other textile products. While most apparel
            manufacturers worldwide rely on people to cut and sew pieces of
            fabric together.
          </p>

          <div className="card-actions justify-start">
            <div className="p-4 border rounded-lg shadow-lg bg-white w-full max-w-md flex items-center">
              <div className="p-2 bg-blue-100 rounded-full">
                <CiLocationOn />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Location</h3>
                <p className="text-gray-700">
                  123 Main Street, Springfield, USA
                </p>
              </div>
            </div>
            <div className="p-4 border rounded-lg shadow-lg bg-white w-full max-w-md flex items-center">
              <div className="p-2 bg-blue-100 rounded-full">
                <IoCallOutline />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-gray-700">12345678901</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
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
    </div>
  );
};

export default OfficeContacts;
