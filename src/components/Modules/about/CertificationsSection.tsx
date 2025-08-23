"use client";
import Modal from "@/components/modal/Modal";
import SectionHeader from "@/components/UI/SectionHeader";
import { certifications } from "@/db/data";
import Image, { StaticImageData } from "next/image";
import { useCallback, useState } from "react";

const CertificationsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleImageClick = useCallback((image: string | StaticImageData) => {
    setCurrentImage(typeof image === "string" ? image : image.src);
    setIsModalOpen(true);
  }, []);

  return (
    <section className="relative py-16 px-5 md:px-10 bg-gradient-to-b from-base-200 via-base-100 to-base-200 text-base-content overflow-hidden">
      {/* Decorative premium gradient overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Section Header */}
      <div data-aos="fade-up" data-aos-delay="100">
        <SectionHeader
          title="Our Certifications"
          subtitle="Proudly recognized for excellence, sustainability, and global standards."
          className="font-playfair"
        />
      </div>

      {/* Certifications Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 relative z-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={150 + index * 100}
            className="w-full"
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleImageClick(cert.image)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleImageClick(cert.image);
                }
              }}
              className="group flex flex-col items-center text-center p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary relative"
              aria-label={`View certificate: ${cert.name}`}
            >
              {/* Certificate Image */}
              <div className="relative w-full h-60 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  width={400}
                  height={400}
                  src={cert.image}
                  alt={cert.name}
                  className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Certificate Name */}
              <p className="mt-4 text-lg sm:text-xl font-semibold font-montserrat group-hover:text-primary transition-colors duration-300">
                {cert.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={!!isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isModalOpen && (
          <div
            data-aos="zoom-in"
            className="bg-base-100 border rounded-2xl shadow-xl overflow-hidden p-4"
          >
            <Image
              src={currentImage || ""}
              alt={currentImage ? "Enlarged Certificate" : ""}
              width={900}
              height={700}
              className="rounded-lg w-full h-[65vh] object-contain"
              loading="lazy"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default CertificationsSection;
