// app/gallery/sub/[subSlug]/page.tsx

import { productGallery } from "@/db/data";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const params: { subSlug: string }[] = [];

  productGallery.forEach((item) => {
    item.subCategory.forEach((sub) => {
      params.push({
        subSlug: slugify(sub.title),
      });
    });
  });

  return params;
}

export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ subSlug: string }>;
}) {
  const { subSlug } = await params;

  const subProduct = productGallery
    .flatMap((item) => item.subCategory)
    .find((sub) => slugify(sub.title) === subSlug);

  if (!subProduct) {
    return <p className="text-center text-red-500 mt-10">Product not found.</p>;
  }

  return (
    <div className="p-5 md:py-24 md:px-10">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/gallery">
          <button className="btn btn-outline btn-sm">← Back to Gallery</button>
        </Link>
      </div>

      {/* Product Card */}
      <div className="bg-base-100 shadow-md border rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="p-6 flex items-center justify-center">
            <Image
              src={subProduct.photo}
              alt={subProduct.title}
              width={600}
              height={600}
              className="rounded-xl w-full h-auto object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-neutral-content">
              {subProduct.title}
            </h2>
            <p className="text-base text-gray-600">
              A detailed look at our &quot;{subProduct.title}&quot; product. It reflects both quality and comfort, ideal for modern lifestyles.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
