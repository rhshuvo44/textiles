"use client";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
};

const CustomInput = ({ type, name, placeholder }: TInputProps) => {
  return (
    // <div className="mb-2 w-full">
      <Controller
        name={name}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`input input-bordered w-full ${
                fieldState.error ? "border-red-500" : ""
              }`}
            />
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">
                {fieldState?.error?.message}
              </p>
            )}
          </>
        )}
      />
    // </div>
  );
};

export default CustomInput;
