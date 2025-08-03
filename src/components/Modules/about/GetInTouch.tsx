"use client";
import { TGetTouch } from "@/types";
import { useForm } from "react-hook-form";

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TGetTouch>();
  const onSubmit = (data: TGetTouch) => {
    console.log(data);
    reset();
  };
  return (
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">Get in Touch</h2>

      <div>
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="border-red-500">This field is required</span>
        )}
      </div>
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
      <div className="form-control mt-6">
        <button className="btn btn-info text-white">Submit</button>
      </div>
    </form>
  );
};

export default GetInTouch;
