"use client";
import Modal from "@/components/modal/Modal";
import Image from "next/image";
import { useState } from "react";

export default function GalleryClient({
  product,
}: {
  product: {
    title: string;
    subCategory: { title: string; photos: string[]; description?: string }[];
  };
}) {
  const [selectedSub, setSelectedSub] = useState<null | (typeof product.subCategory)[0]>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {product.subCategory.map((sub, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => {
              setActiveIndex(0);
              setSelectedSub(sub);
            }}
          >
            <Image
              src={sub.photos[0]}
              alt={sub.title}
              width={200}
              height={200}
              className="rounded object-cover"
            />
            <p className="mt-2 text-center font-medium">{sub.title}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedSub} onClose={() => setSelectedSub(null)}>
        {selectedSub && (
          <div className="bg-base-100 border rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Images */}
              <div className="flex flex-col items-center justify-center p-4 gap-4">
                {/* Main Image */}
                <Image
                  src={selectedSub.photos[activeIndex]}
                  alt={selectedSub.title}
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-[50vh] object-contain"
                />

                {/* Thumbnails */}
                <div className="flex gap-3 overflow-x-auto w-full">
                  {selectedSub.photos.map((photo, idx) => (
                    <div
                      key={idx}
                      className={`border-2 rounded-lg cursor-pointer ${
                        activeIndex === idx ? "border-blue-500" : "border-transparent"
                      }`}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <Image
                        src={photo}
                        alt={`Thumbnail ${idx + 1}`}
                        width={100}
                        height={100}
                        className="object-cover w-16 h-16 rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Details */}
              <div className="flex flex-col justify-center p-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  {selectedSub.title}
                </h2>
                <p className="text-base text-gray-700">
                  A detailed look at our &quot;{selectedSub.title}&quot; product.
                  It reflects both quality and comfort, ideal for modern lifestyles.
                </p>
                {selectedSub.description && (
                  <p className="mt-4 text-sm text-gray-600">
                    {selectedSub.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
