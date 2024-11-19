"use client";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  placeholder?: string;
  row?: number;
};

const CustomTextarea = ({ name, placeholder, row }: TInputProps) => {
  return (
    <div className="mb-2 w-full">
      <Controller
        name={name}
        render={({ field, fieldState }) => (
          <>
            <textarea
              rows={row}
              {...field}
              placeholder={placeholder}
              className={`textarea textarea-bordered w-full ${
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
    </div>
  );
};

export default CustomTextarea;
