"use client";
import Modal from "@/components/modal/Modal";
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

      {/* modal  */}
      <Modal isOpen={!!isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isModalOpen && (
          <div className="bg-base-100 border rounded-lg overflow-hidden">
            <Image
              src={currentImage || ""}
              alt={currentImage ? "Enlarged Certificate" : ""}
              width={800}
              height={600}
              className="rounded-xl w-full h-[50vh] object-contain"
              loading="lazy"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default CertificationsSection;
