import { productGallery } from "@/db/data";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";

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
          {/* Back Button */}
      <div className="mb-6">
        <Link href="/gallery">
          <button className="btn btn-outline btn-sm">← Back to Gallery</button>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center">{product.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {product.subCategory.map((sub, i) => (
          <Link key={i} href={`/gallery/sub/${slugify(sub.title)}`}>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition duration-300">
              <Image
                src={sub.photo}
                alt={sub.title}
                width={200}
                height={200}
                className="rounded object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
