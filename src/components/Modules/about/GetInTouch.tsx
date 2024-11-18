"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const GetInTouch = () => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <h2 className="text-2xl font-bold text-center">Get in Touch</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="input input-bordered w-full"
        {...register("name")}
      />
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

      <div className="form-control mt-6">
        <button className="btn btn-info text-white">Submit</button>
      </div>
    </form>
  );
};

export default GetInTouch;
