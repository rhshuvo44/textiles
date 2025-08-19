"use client";

const CTA = () => {
  return (
    <section className="text-center py-20 px-5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
      <span className="absolute -top-16 -left-16 w-72 h-72 bg-white/10 rounded-full animate-ping dark:bg-gray-700/20"></span>
      <span className="absolute -bottom-16 -right-16 w-72 h-72 bg-white/10 rounded-full animate-ping dark:bg-gray-700/20"></span>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Want to Join Our Network?
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-white/90">
          Let’s create something amazing together.
        </p>
        <button className="group relative inline-block bg-white text-blue-700 font-semibold px-10 py-4 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <span className="absolute inset-0 bg-white/20 rounded-xl blur opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
          <span className="relative flex items-center gap-2">
            Partner With Us
            <span className="inline-block transform transition-transform duration-300 group-hover:rotate-45">
              →
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default CTA;
