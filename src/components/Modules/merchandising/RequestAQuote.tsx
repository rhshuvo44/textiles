import React from "react";

const RequestAQuote = () => {
  return (
    <section className="py-16 px-4 bg-info text-white text-center">
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
  );
};

export default RequestAQuote;
