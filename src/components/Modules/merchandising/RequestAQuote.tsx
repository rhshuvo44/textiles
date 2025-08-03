"use client";

import { fabrics, styles, yarns } from "@/db/data";
import { QuoteFormData } from "@/types";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RequestAQuote = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>();
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_jqd85q9",       // Your EmailJS Service ID
        "template_e3t90n8",      // Your EmailJS Template ID
        form.current,
        "SCRr6WqN7Mb9ynDv7"     // Your EmailJS User/Public Key
      );
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="md:p-10 p-5 text-center" id="quote">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6" data-aos="fade-up">
        Request a Quote
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        ref={form}
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            register={register}
            name="name"
            placeholder="Name"
            error={errors.name}
            validation={{ required: "Name is required" }}
          />

          <InputField
            register={register}
            name="company"
            placeholder="Company"
          />

          <InputField
            register={register}
            name="email"
            type="email"
            placeholder="Email"
            error={errors.email}
            validation={{
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            }}
          />

          <InputField
            register={register}
            name="phone"
            type="tel"
            placeholder="Phone"
            error={errors.phone}
            validation={{ required: "Phone is required" }}
          />

          <InputField
            register={register}
            name="whatsapp"
            type="tel"
            placeholder="WhatsApp (Optional)"
          />

          <SelectField
            register={register}
            name="category"
            options={styles}
            placeholder="Select Product Category"
          />

          <InputField
            register={register}
            name="quantity"
            type="number"
            placeholder="Quantity"
            error={errors.quantity}
            validation={{ required: "Quantity is required" }}
          />

          <SelectField
            register={register}
            name="fabric"
            options={fabrics}
            placeholder="Select Fabric Type"
          />

          <SelectField
            register={register}
            name="yarn"
            options={yarns}
            placeholder="Select Yarn Type"
          />

          <InputField
            register={register}
            name="ratio"
            type="number"
            placeholder="Ratio"
            error={errors.ratio}
            validation={{ required: "Ratio is required" }}
          />

          <InputField
            register={register}
            name="GSM"
            type="number"
            placeholder="GSM"
            error={errors.GSM}
            validation={{ required: "GSM is required" }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-info text-white w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
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

const InputField = ({
  register,
  name,
  placeholder,
  type = "text",
  error,
  validation,
}: {
  register: any;
  name: keyof QuoteFormData;
  placeholder: string;
  type?: string;
  error?: any;
  validation?: any;
}) => (
  <div>
    <input
      {...register(name, validation)}
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full text-black"
    />
    {error && <p className="text-red-500 text-left">{error.message}</p>}
  </div>
);

const SelectField = ({
  register,
  name,
  options,
  placeholder,
}: {
  register: any;
  name: keyof QuoteFormData;
  options: string[];
  placeholder: string;
}) => (
  <div>
    <select
      {...register(name)}
      className="select select-bordered w-full text-black"
      defaultValue=""
      name={name}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default RequestAQuote;
