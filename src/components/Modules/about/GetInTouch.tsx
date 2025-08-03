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
    <form
      className="card-body"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Get in touch form"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
        Get in Touch
      </h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        {errors.name && (
          <span id="name-error" className="text-red-500 text-sm">
            This field is required
          </span>
        )}
      </div>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
        />
        {errors.email && (
          <span id="email-error" className="text-red-500 text-sm">
            This field is required
          </span>
        )}
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full"
          {...register("phone", { required: true })}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby="phone-error"
        />
        {errors.phone && (
          <span id="phone-error" className="text-red-500 text-sm">
            This field is required
          </span>
        )}
      </div>

      <div className="form-control mt-6">
        <button type="submit" className="btn btn-info text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default GetInTouch;
