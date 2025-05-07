"use client";

import { fabrics, styles, yarns } from "@/db/data";
import { QuoteFormData } from "@/types";
import { useForm } from "react-hook-form";

const RequestAQuote = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    console.log("Form Data Submitted:", data);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        console.log("Request sent successfully");
        reset(); // Reset form
      } else {
        console.error("Failed to send request");
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  return (
    <section className="md:p-10 p-5  text-center" id="quote">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
        Request a Quote
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full text-black"
            />
            {errors.name && (
              <p className="text-red-500 text-left">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("company")}
              type="text"
              placeholder="Company"
              className="input input-bordered w-full text-black"
            />
            {errors.company && (
              <p className="text-red-500 text-left">{errors.company.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-left">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="tel"
              placeholder="Phone"
              className="input input-bordered w-full text-black"
            />
            {errors.phone && (
              <p className="text-red-500 text-left">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("whatsapp")}
              type="tel"
              placeholder="WhatsApp (Optional)"
              className="input input-bordered w-full text-black"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-left">
                {errors.whatsapp.message}
              </p>
            )}
          </div>

          {/* Style Dropdown */}
          <div>
            <select
              {...register("category")}
              className="select select-bordered w-full text-black"
            >
              <option value="">Select Product Category</option>
              {styles.map((style, i) => (
                <option key={i} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              {...register("quantity", { required: "Quantity is required" })}
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full text-black"
            />
            {errors.quantity && (
              <p className="text-red-500 text-left">
                {errors.quantity.message}
              </p>
            )}
          </div>
          {/* Fabric Dropdown */}
          <div>
            <select
              {...register("fabric")}
              className="select select-bordered w-full text-black"
            >
              <option value="">Select Fabric Type</option>
              {fabrics.map((fabric, i) => (
                <option key={i} value={fabric}>
                  {fabric}
                </option>
              ))}
            </select>
          </div>
          {/* Yarn Dropdown */}
          <div>
            <select
              {...register("yarn")}
              className="select select-bordered w-full text-black"
            >
              <option value="">Select Yarn Type</option>
              {yarns.map((yarn, i) => (
                <option key={i} value={yarn}>
                  {yarn}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              {...register("ratio", { required: "Ratio is required" })}
              type="number"
              placeholder="Ratio"
              className="input input-bordered w-full text-black"
            />
            {errors.ratio && (
              <p className="text-red-500 text-left">{errors.ratio.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("GSM", { required: "GSM is required" })}
              type="number"
              placeholder="GSM"
              className="input input-bordered w-full text-black"
            />
            {errors.GSM && (
              <p className="text-red-500 text-left">{errors.GSM.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-info text-white w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-200 mt-2">
            Your request was sent successfully!
          </p>
        )}
      </form>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801788577329"
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
