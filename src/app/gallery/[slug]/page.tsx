// app/gallery/[slug]/page.tsx

import { productGallery } from "@/db/data";
import Image from "next/image";

export async function generateStaticParams() {
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
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Product not found.</p>;
  }

  return (
    <div className="px-5 py-24">
      <h1 className="text-2xl font-bold mb-4 text-center">{product.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {product.subCategory.map((sub, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
          >
            <Image
              src={sub.photo}
              alt={sub.title}
              width={200}
              height={200}
              className="rounded object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
