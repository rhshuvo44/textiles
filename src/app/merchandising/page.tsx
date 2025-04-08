import banner from "@/assets/image/textile_main_image.jpg";
import Image from "next/image";

const MerchandisingPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Merchandising Solutions
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Expert textile merchandising tailored for your business
          </p>
          <button className="btn btn-primary">Get a Quote</button>
        </div>
      </section>

      {/* About Merchandising */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Our Merchandising</h2>
        <p className="mb-10 text-lg">
          We provide end-to-end merchandising solutions, combining industry
          expertise and efficient processes.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🧵", title: "Fabric Sourcing" },
            { icon: "🎨", title: "Product Development" },
            { icon: "💰", title: "Costing & Pricing" },
            { icon: "📦", title: "Order Management" },
            { icon: "✅", title: "Quality Control" },
          ].map(({ icon, title }) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Product Categories
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <Image
                src={`/images/product-${i + 1}.jpg`}
                alt={`Product ${i + 1}`}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition">
                View More
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Merchandising Process */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Process</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          {[
            "Consultation",
            "Design & Sampling",
            "Sourcing & Production",
            "Quality Assurance",
            "Delivery",
          ].map((step, idx) => (
            <div key={step} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-full text-lg font-bold mb-2">
                {idx + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-16 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Testimonials
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="mb-4 italic">
                Great service and top-notch quality!
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src={`/images/client-${i}.jpg`}
                  alt={`Client ${i}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Client Name {i}</p>
                  <p className="text-sm text-gray-500">Company {i}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Request a Quote */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Company"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Product Requirements"
          ></textarea>
          <button className="btn btn-neutral">Submit</button>
        </form>
        <a
          href="https://wa.me/yourwhatsapplink"
          className="fixed bottom-6 right-6 btn btn-success rounded-full shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬
        </a>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="collapse collapse-plus bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Question {i + 1}
              </div>
              <div className="collapse-content">
                <p>Answer to question {i + 1} goes here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MerchandisingPage;
