"use client";

import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import PolymorphicButton from "@/components/UI/PolymorphicButton";
import { subjects } from "@/db/data";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useForm } from "react-hook-form";
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
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_FORM_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_FORM_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_FORM_PUBLIC_KEY!
      );
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
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
          <InputField
            register={register}
            name="fullName"
            placeholder="Name *"
            error={errors.fullName}
            validation={{ required: "Name is required" }}
          />

          <InputField
            register={register}
            name="email"
            type="email"
            placeholder="Email *"
            error={errors.email}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
          />
          <InputField
            register={register}
            name="phone"
            type="tel"
            placeholder="Phone *"
            error={errors.phone}
            validation={{ required: "Phone is required" }}
          />
          <InputField
            register={register}
            name="whatsapp"
            type="tel"
            placeholder="WhatsApp (Optional)"
          />
          <InputField
            register={register}
            name="linkedin"
            placeholder="LinkedIn (Optional)"
          />
          <SelectField
            register={register}
            name="subject"
            options={subjects}
            placeholder="-- Select Subject --"
            error={errors.subject}
          />
        </div>

        <InputField
          register={register}
          name="message"
          isTextArea
          placeholder="Your Message *"
          error={errors.message}
          validation={{ required: "Message is required" }}
        />
        <PolymorphicButton text="Send Message" isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
