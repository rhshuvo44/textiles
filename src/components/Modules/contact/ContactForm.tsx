"use client";

import { TContactForm } from "@/types";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>();
  const onSubmit = (data: TContactForm) => console.log(data);

  return (
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row  gap-3">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="border-red-500">This field is required</span>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Company"
            className="input input-bordered w-full"
            {...register("company", { required: true })}
          />
          {errors.company && (
            <span className="border-red-500">This field is required</span>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-3">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="border-red-500">This field is required</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="border-red-500">This field is required</span>
          )}
        </div>
      </div>
      <textarea
        rows={4}
        className="textarea textarea-bordered"
        placeholder="How can we help?"
        {...register("message", { required: true })}
      ></textarea>
      {errors.message && (
        <span className="border-red-500">This field is required</span>
      )}

      <div className="form-control mt-6">
        <button className="btn btn-info text-white">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
