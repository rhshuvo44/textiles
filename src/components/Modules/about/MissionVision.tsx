'use client';

import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-base-100 p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <FaBullseye className="text-info text-3xl" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To deliver high-quality knit garments by blending craftsmanship with cutting-edge technology, while empowering our workforce and ensuring customer satisfaction at every step.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-base-100 p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <FaEye className="text-info text-3xl" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To be a global leader in sustainable textile manufacturing — committed to eco-friendly practices, ethical production, and innovation that shapes the future of fashion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
