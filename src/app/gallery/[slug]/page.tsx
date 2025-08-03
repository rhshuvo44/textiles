// import { productGallery } from "@/db/data";
// import { slugify } from "@/utils/slugify";
// import Image from "next/image";
// import Link from "next/link";

// export async function generateStaticParams() {
//   return productGallery.map((item) => ({
//     slug: item.title.toLowerCase().replace(/\s+/g, "-"),
//   }));
// }

// export default async function GalleryPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const product = productGallery.find(
//     (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug
//   );

//   if (!product) {
//     return <p className="text-center text-red-500 mt-10">Product not found.</p>;
//   }

//   return (
//     <div className="px-5 py-24">
//           {/* Back Button */}
//       <div className="mb-6">
//         <Link href="/gallery">
//           <button className="btn btn-outline btn-sm">← Back to Gallery</button>
//         </Link>
//       </div>
//       <h1 className="text-2xl font-bold mb-4 text-center">{product.title}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {product.subCategory.map((sub, i) => (
//           <Link key={i} href={`/gallery/sub/${slugify(sub.title)}`}>
//             <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition duration-300">
//               <Image
//                 src={sub.photo}
//                 alt={sub.title}
//                 width={200}
//                 height={200}
//                 className="rounded object-cover"
//               />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { productGallery } from "@/db/data";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export async function generateStaticParams() {
//   return productGallery.map((item) => ({
//     slug: item.title.toLowerCase().replace(/\s+/g, "-"),
//   }));
// }

// export default function GalleryPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   const product = productGallery.find(
//     (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug
//   );

//   const [selectedSub, setSelectedSub] = useState<null | {
//     title: string;
//     photo: string;
//     description?: string;
//   }>(null);

//   if (!product) {
//     return <p className="text-center text-red-500 mt-10">Product not found.</p>;
//   }

//   return (
//     <div className="px-5 py-24">
//       {/* Back Button */}
//       <div className="mb-6">
//         <Link href="/gallery">
//           <button className="btn btn-outline btn-sm">← Back to Gallery</button>
//         </Link>
//       </div>

//       <h1 className="text-2xl font-bold mb-4 text-center">{product.title}</h1>

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

//       {/* Modal */}
//       {/* {selectedSub && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
//               onClick={() => setSelectedSub(null)}
//             >
//               &times;
//             </button>
//             <Image
//               src={selectedSub.photo}
//               alt={selectedSub.title}
//               width={400}
//               height={300}
//               className="rounded mb-4 object-cover w-full "
//             />
//             <h2 className="text-xl font-semibold mb-2">{selectedSub.title}</h2>
//             <p className="text-gray-700">
//               {selectedSub.description || "No description available."}
//             </p>
//           </div>
//         </div>
//       )} */}
//       {selectedSub && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-5 md:py-12 md:px-10 rounded-lg shadow-lg max-w-4xl w-full relative overflow-y-auto max-h-[85vh]">
//             {/* Close button */}
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
//               onClick={() => setSelectedSub(null)}
//             >
//               &times;
//             </button>

//             {/* Product Card */}
//             <div className="bg-base-100 border rounded-lg overflow-hidden">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Image Section */}
//                 <div className="flex items-center justify-center p-4">
//                   <Image
//                     src={selectedSub.photo}
//                     alt={selectedSub.title}
//                     width={600}
//                     height={600}
//                     className="rounded-xl w-full h-auto object-contain"
//                   />
//                 </div>

//                 {/* Text Section */}
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
//     </div>
//   );
// }
import GalleryClient from "@/components/Modules/gallery/GalleryClient";
import { productGallery } from "@/db/data";
import Link from "next/link"; // 👈 Client component

export function generateStaticParams() {
  return productGallery.map((item) => ({
    slug: item.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = productGallery.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Product not found.</p>;
  }

  return (
    <div className="px-5 py-24">
      <div className="mb-6">
        <Link href="/gallery">
          <button className="btn btn-outline btn-sm">← Back to Gallery</button>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center">{product.title}</h1>

      {/* Pass product to client component for modal interaction */}
      <GalleryClient
        product={{
          ...product,
          subCategory: product.subCategory.map((sub) => ({
            title: sub.title,
            photos:
              typeof sub.photo === "string"
                ? [sub.photo]
                : Array.isArray(sub.photo)
                  ? sub.photo.map((p) => (typeof p === "string" ? p : p.src))
                  : [(sub.photo as { src: string }).src],
            description: sub.description,
          })),
        }}
      />
    </div>
  );
}
