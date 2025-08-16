"use client";
import banner from "@/assets/image/banner/contact.jpg";

const ContactHero = () => {
  return (
    <section
      role="banner"
      aria-label="Contact hero section"
      className="relative w-full h-[90vh] sm:h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
          Get in Touch with Us!
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto" data-aos="fade-up">
          We’re here to help. Reach out for inquiries, partnerships, or support.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
