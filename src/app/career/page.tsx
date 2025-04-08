import banner from "@/assets/image/textile_main_image.jpg";
import Image from "next/image";
const CareerPage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Join Our Team & Weave Your Future With Us!
          </h1>
          <p className="mb-6">
            Be a part of an innovative and growing textile company.
          </p>
          <button className="btn btn-primary">View Open Positions</button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Work With Us?
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🌍", title: "Work Environment" },
            { icon: "📈", title: "Career Growth" },
            { icon: "📚", title: "Learning & Development" },
            { icon: "🎁", title: "Employee Benefits" },
            { icon: "🌱", title: "Sustainability Efforts" },
          ].map(({ icon, title }) => (
            <div key={title} className="card bg-base-100 shadow-md">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">{icon}</div>
                <h3 className="card-title">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Current Opportunities
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by job title..."
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Department"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-full"
          />
        </div>
        <div className="grid gap-6">
          {[1, 2, 3].map((job) => (
            <div key={job} className="card bg-base-100 shadow-md">
              <div className="card-body flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="card-title">Textile Designer</h3>
                  <p>Design Department • Factory</p>
                  <p className="text-sm text-gray-500">
                    Deadline: May 15, 2025
                  </p>
                </div>
                <button className="btn btn-secondary">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Hire */}
      <section className="px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">How We Hire</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
          {[
            "Submit Application 📩",
            "HR Review 📋",
            "Interview Rounds 🎤",
            "Job Offer 💼",
            "Onboarding 🏆",
          ].map((step, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <p>{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials & Culture */}
      <section className="px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our People & Culture
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <Image
                width={300}
                height={300}
                  src="/images/employee.jpg"
                  alt="Employee"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <blockquote className="italic text-sm">
                  “Working here has helped me grow professionally and
                  personally.”
                </blockquote>
                <p className="font-semibold mt-2">
                  — Fatima, Production Supervisor
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-12 text-center py-12 bg-gray-100 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Stay updated on job openings & career tips!
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-accent">Subscribe</button>
        </div>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" className="hover:text-blue-600">
            🔗 LinkedIn
          </a>
          <a href="#" className="hover:text-blue-500">
            📘 Facebook
          </a>
          <a href="#" className="hover:text-pink-500">
            📸 Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
