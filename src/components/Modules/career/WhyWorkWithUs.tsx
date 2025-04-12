import React from "react";

const WhyWorkWithUs = () => {
  return (
    <section className="px-4 md:px-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8"
      data-aos="fade-up"
      >Why Work With Us?</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: "🌍", title: "Work Environment" },
          { icon: "📈", title: "Career Growth" },
          { icon: "📚", title: "Learning & Development" },
          { icon: "🎁", title: "Employee Benefits" },
          { icon: "🌱", title: "Sustainability Efforts" },
        ].map(({ icon, title }) => (
          <div key={title} className="card bg-base-100 shadow-md"
          data-aos="fade-up"
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="card-title">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
