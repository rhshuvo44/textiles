"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="flex flex-col md:flex-row  gap-3">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          {...register("name")}
        />

        <input
          type="text"
          placeholder="Company"
          className="input input-bordered w-full"
          {...register("company")}
        />
      </div>
      <div className="flex flex-col md:flex-row  gap-3">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
          {...register("email")}
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full"
          {...register("phone")}
        />
      </div>
      <textarea
        className="textarea textarea-bordered"
        placeholder="How can we help?"
      ></textarea>
      <div className="form-control mt-6">
        <button className="btn btn-info text-white">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
