"use client";
import { certifications } from "@/db/data";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const CertificationsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleImageClick = (image: string | StaticImageData) => {
    setCurrentImage(typeof image === "string" ? image : image.src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };
  return (
    <section className="p-5 md:p-10 bg-base-200 text-base-content">
      <div>
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Membership & Certifications
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between place-items-center">
          {certifications.map((cert, index) => (
            <div key={index} className="w-full" data-aos="fade-up">
              <div
                className="flex flex-col items-center text-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => handleImageClick(cert.image)} // Open modal on click
              >
                <Image
                  width={400}
                  height={400}
                  src={cert.image}
                  alt={cert.name}
                  className="h-72 object-contain mb-4 cursor-pointer"
                />
                <p className="text-lg font-medium">{cert.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white p-4 rounded-lg relative">
            <Image
              width={800}
              height={500}
              src={currentImage || ""}
              alt="Enlarged Certificate"
              className="object-cover w-full h-96 rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
    // <section className="p-5 md:p-10 bg-base-200 text-base-content">
    //   <div className="">
    //     <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
    //       Membership & Certifications
    //     </h2>
    //     <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between place-items-center">
    //       {certifications.map((cert, index) => (
    //         <div key={index} className="w-full" data-aos="fade-up">
    //           <div className="flex flex-col items-center text-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
    //             <Image
    //               width={400}
    //               height={400}
    //               src={cert.image}
    //               alt={cert.name}
    //               className="h-72 object-contain mb-4"
    //             />
    //             <p className="text-lg font-medium">{cert.name}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default CertificationsSection;
