
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
