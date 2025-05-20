// "use client";

// import Image from "next/image";
// import { useState } from "react";

// export default function GalleryClient({
//   product,
// }: {
//   product: {
//     title: string;
//     subCategory: { title: string; photo: string; description?: string }[];
//   };
// }) {
//   const [selectedSub, setSelectedSub] = useState<
//     null | (typeof product.subCategory)[0]
//   >(null);

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {product.subCategory.map((sub, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition duration-300"
//             onClick={() => setSelectedSub(sub)}
//           >
//             <Image
//               src={sub.photo}
//               alt={sub.title}
//               width={200}
//               height={200}
//               className="rounded object-cover"
//             />
//             <p className="mt-2 text-center font-medium">{sub.title}</p>
//           </div>
//         ))}
//       </div>

//       {selectedSub && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           onClick={() => setSelectedSub(null)}
//         >
//           <div
//             className="bg-white p-5 md:py-12 md:px-10 rounded-lg shadow-lg max-w-4xl w-full relative overflow-y-auto max-h-[90vh]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
//               onClick={() => setSelectedSub(null)}
//             >
//               &times;
//             </button>

//             <div className="bg-base-100 border rounded-lg overflow-hidden">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex items-center justify-center p-4">
//                   <Image
//                     src={selectedSub.photo}
//                     alt={selectedSub.title}
//                     width={600}
//                     height={600}
//                     className="rounded-xl w-full h-auto object-contain"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-center p-4">
//                   <h2 className="text-2xl font-bold mb-4 text-gray-800">
//                     {selectedSub.title}
//                   </h2>
//                   <p className="text-base text-gray-700">
//                     A detailed look at our &quot;{selectedSub.title}&quot;
//                     product. It reflects both quality and comfort, ideal for
//                     modern lifestyles.
//                   </p>
//                   {selectedSub.description && (
//                     <p className="mt-4 text-sm text-gray-600">
//                       {selectedSub.description}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";
import Modal from "@/components/modal/Modal";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GalleryClient({
  product,
}: {
  product: {
    title: string;
    subCategory: { title: string; photos: string[]; description?: string }[];
  };
}) {
  const [selectedSub, setSelectedSub] = useState<
    null | (typeof product.subCategory)[0]
  >(null);
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

      {/* <Modal isOpen={!!selectedSub} onClose={() => setSelectedSub(null)}>
        {selectedSub && (
          <div className="bg-base-100 border rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center flex-col p-4">
                <Image
                  src={selectedSub.photo}
                  alt={selectedSub.title}
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-[69vh] object-contain"
                />
               
              </div>
              <div className="flex flex-col justify-center p-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  {selectedSub.title}
                </h2>
                <p className="text-base text-gray-700">
                  A detailed look at our &quot;{selectedSub.title}&quot;
                  product. It reflects both quality and comfort, ideal for
                  modern lifestyles.
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
      </Modal> */}

      <Modal isOpen={!!selectedSub} onClose={() => setSelectedSub(null)}>
        {selectedSub && (
          <div className="bg-base-100 border rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Images */}
              <div className="flex gap-5 items-center justify-center p-4">
                {/* Main image */}
                <Image
                  src={selectedSub.photos[activeIndex]}
                  alt={selectedSub.title}
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-[50vh] object-contain mb-4 cursor-pointer"
                />

                {/* Thumbnail carousel */}
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={4}
                  navigation
                  className="w-full "
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                  {selectedSub.photos.map((photo: string, idx: number) => (
                    <SwiperSlide key={idx} onClick={() => setActiveIndex(idx)}>
                      <Image
                        src={photo}
                        alt={`Thumbnail ${idx + 1}`}
                        width={200}
                        height={200}
                        className={`rounded-lg w-full h-20 object-cover border-2 cursor-pointer ${
                          activeIndex === idx
                            ? "border-blue-500"
                            : "border-transparent"
                        }`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right: Details */}
              <div className="flex flex-col justify-center p-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  {selectedSub.title}
                </h2>
                <p className="text-base text-gray-700">
                  A detailed look at our &quot;{selectedSub.title}&quot;
                  product. It reflects both quality and comfort, ideal for
                  modern lifestyles.
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
