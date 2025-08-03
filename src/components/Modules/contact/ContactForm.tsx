"use client";

import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

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
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_jqd85q9", // Your EmailJS service ID
        "template_k42cntw", // Your EmailJS template ID
        form.current!,
        "SCRr6WqN7Mb9ynDv7" // Your EmailJS user/public key
      );
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 md:p-10">
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 space-y-4 bg-base-100 shadow-xl rounded-lg"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="sr-only">
              Full Name *
            </label>
            <input
              id="fullName"
              {...register("fullName", { required: "Full name is required" })}
              className="input input-bordered w-full"
              placeholder="Full Name *"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Email Address *"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">
              Phone Number *
            </label>
            <input
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 7,
                  message: "Phone number seems too short",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Phone Number *"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="whatsapp" className="sr-only">
              WhatsApp Number (Optional)
            </label>
            <input
              id="whatsapp"
              {...register("whatsapp")}
              className="input input-bordered w-full"
              placeholder="WhatsApp Number (Optional)"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="linkedin" className="sr-only">
              LinkedIn (Optional)
            </label>
            <input
              id="linkedin"
              {...register("linkedin")}
              className="input input-bordered w-full"
              placeholder="LinkedIn (Optional)"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="subject" className="sr-only">
              Subject *
            </label>
            <select
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              className="select select-bordered w-full"
            >
              <option value="">-- Select Subject --</option>
              <option>General Inquiry</option>
              <option>Buyer Inquiry</option>
              <option>Partnership</option>
              <option>Support</option>
              <option>Careers</option>
            </select>
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject.message}</span>
            )}
          </div>
        </div>

        <label htmlFor="message" className="sr-only">
          Your Message *
        </label>
        <textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          rows={5}
          placeholder="Your Message *"
          className="textarea textarea-bordered w-full"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
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
      </form>
    </div>
  );
}
