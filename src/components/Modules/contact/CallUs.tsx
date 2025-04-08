import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import ContactForm from "./ContactForm";

const CallUs = () => {
  return (
    <div className="p-5 md:p-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body w-full md:w-1/2  md:px-20">
          <h2
            className="text-5xl font-bold text-[#00A9E9]"
            data-aos="fade-right"
          >
            Call Us or Fill the Form
          </h2>
          <div className="card-actions justify-start mt-10">
            <div
              className="p-4 border rounded-lg shadow-lg bg-white w-full max-w-md flex items-center"
              data-aos="fade-up"
            >
              <div className="p-2 bg-blue-100 rounded-full">
                <CiLocationOn />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Working Time</h3>
                <p className="text-gray-700">
                  Mon-Fri: 9:00 - 18:00 / Closed on weekends
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
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default CallUs;
