"use client";
import { certifications } from "@/db/data";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

const CertificationsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleImageClick = useCallback((image: string | StaticImageData) => {
    setCurrentImage(typeof image === "string" ? image : image.src);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentImage(null);
  }, []);

  // Close modal on ESC key press
  useEffect(() => {
    if (!isModalOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen, handleCloseModal]);

  return (
    <section className="p-5 md:p-10 bg-base-200 text-base-content">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        Membership & Certifications
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between place-items-center">
        {certifications.map((cert, index) => (
          <div key={index} className="w-full" data-aos="fade-up">
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleImageClick(cert.image)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleImageClick(cert.image);
                }
              }}
              className="flex flex-col items-center text-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-info"
              aria-label={`View certificate: ${cert.name}`}
            >
              <Image
                width={400}
                height={400}
                src={cert.image}
                alt={cert.name}
                className="h-72 object-contain mb-4"
              />
              <p className="text-lg font-medium">{cert.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white p-4 rounded-lg relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // prevent modal close on clicking inside
          >
            <Image
              width={800}
              height={500}
              src={currentImage || ""}
              alt="Enlarged Certificate"
              className="object-contain w-full h-[500px] rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-info"
              aria-label="Close modal"
              type="button"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
