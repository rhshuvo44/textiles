// "use client";

// import { TContactForm } from "@/types";
// import { useForm } from "react-hook-form";

// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<TContactForm>();
//   const onSubmit = (data: TContactForm) => console.log(data);

//   return (
//     <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
//       <div className="flex flex-col md:flex-row  gap-3">
//         <div>
//           <input
//             type="text"
//             placeholder="Name"
//             className="input input-bordered w-full"
//             {...register("name", { required: true })}
//           />
//           {errors.name && (
//             <span className="border-red-500">This field is required</span>
//           )}
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Company"
//             className="input input-bordered w-full"
//             {...register("company", { required: true })}
//           />
//           {errors.company && (
//             <span className="border-red-500">This field is required</span>
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row  gap-3">
//         <div>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="input input-bordered w-full"
//             {...register("email", { required: true })}
//           />
//           {errors.email && (
//             <span className="border-red-500">This field is required</span>
//           )}
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Phone Number"
//             className="input input-bordered w-full"
//             {...register("phone", { required: true })}
//           />
//           {errors.phone && (
//             <span className="border-red-500">This field is required</span>
//           )}
//         </div>
//       </div>
//       <textarea
//         rows={4}
//         className="textarea textarea-bordered"
//         placeholder="How can we help?"
//         {...register("message", { required: true })}
//       ></textarea>
//       {errors.message && (
//         <span className="border-red-500">This field is required</span>
//       )}

//       <div className="form-control mt-6">
//         <button className="btn btn-info text-white">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  linkedin?: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: string; error?: string }>(
    {}
  );

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({ success: result.message });
        reset();
      } else {
        setStatus({ error: result.message || "Failed to send." });
      }
    } catch {
      setStatus({ error: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 md:p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" p-4 space-y-4 bg-base-100 shadow-xl rounded-lg"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              {...register("fullName", { required: true })}
              className="input input-bordered w-full"
              placeholder="Full Name *"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {/* {errors.fullName.message} */}
                Full name is required
              </span>
            )}
          </div>

          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Email Address *"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {/* {errors.email.message} */}
                Email address is required
              </span>
            )}
          </div>

          <div>
            <input
              {...register("phone", { required: true })}
              className="input input-bordered w-full"
              placeholder="Phone Number *"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {/* {errors.phone.message} */}
                Phone number is required
              </span>
            )}
          </div>

          <div>
            <input
              {...register("whatsapp")}
              className="input input-bordered w-full"
              placeholder="WhatsApp Number (Optional)"
            />
            {/* {errors.whatsapp && (
              <span className="text-red-500 text-sm">
                {errors.whatsapp.message}
              </span>
            )} */}
          </div>

          <div>
            <input
              {...register("linkedin")}
              className="input input-bordered w-full md:col-span-2"
              placeholder="LinkedIn (Optional)"
            />
            {/* {errors.linkedin && (
              <span className="text-red-500 text-sm">
                {errors.linkedin.message}
              </span>
            )} */}
          </div>

          <div>
            <select
              {...register("subject", { required: true })}
              className="select select-bordered w-full md:col-span-2"
            >
              <option value="">-- Select Subject --</option>
              <option>General Inquiry</option>
              <option>Buyer Inquiry</option>
              <option>Partnership</option>
              <option>Support</option>
              <option>Careers</option>
            </select>
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {/* {errors.subject.message} */}
                Subject is required
              </span>
            )}
          </div>
        </div>

        <textarea
          {...register("message", { required: true })}
          rows={5}
          placeholder="Your Message *"
          className="textarea textarea-bordered w-full"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">Message is required</span>
        )}

        <button
          type="submit"
          className="btn btn-info w-full text-white"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <AiOutlineLoading3Quarters className="animate-spin" />
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {status.success && (
          <p className="text-green-600 text-center">{status.success}</p>
        )}
        {status.error && (
          <p className="text-red-600 text-center">{status.error}</p>
        )}
      </form>
    </div>
  );
}
