"use client";

import { productGallery } from "@/db/data";
import Image from "next/image";
import Link from "next/link";

const GallerySection = () => {
  return (
    <section className="p-5 md:p-10">
      <div>
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Our Works
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between place-items-center">
          {productGallery.map((item) => {
            const slug = item.title.replace(/\s+/g, "-").toLowerCase();

            return (
              <Link
                href={`/gallery/${slug}`}
                key={slug}
                className="w-full"
                data-aos="fade-up"
              >
                <div className="flex flex-col items-center text-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <Image
                    width={400}
                    height={400}
                    src={item.photo}
                    alt={item.title}
                    className="h-72 object-contain mb-4 cursor-pointer"
                  />
                  <p className="text-lg font-medium">{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
