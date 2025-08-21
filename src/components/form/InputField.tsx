import { FieldError, UseFormRegister, Path } from "react-hook-form";

type InputFieldProps<T extends Record<string, unknown>> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  type?: "text" | "email" | "tel" | "number" | "password"; 
  error?: FieldError;
  validation?: object;
  id?: string;
  isTextArea?: boolean;
  rows?: number;
};

const InputField = <T extends Record<string, unknown>>({
  register,
  name,
  placeholder,
  type = "text",
  error,
  validation,
  id,
  isTextArea = false,
  rows = 4,
}: InputFieldProps<T>) => {
  const inputId = id || (name as string);

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="sr-only">
        {placeholder}
      </label>
      {isTextArea ? (
        <textarea
          id={inputId}
          {...register(name, validation)}
          placeholder={placeholder}
          rows={rows}
          className="textarea textarea-bordered w-full text-black"
          aria-invalid={error ? "true" : "false"}
        />
      ) : (
        <input
          id={inputId}
          {...register(name, validation)}
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full text-black"
          aria-invalid={error ? "true" : "false"}
        />
      )}
      {error && (
        <p role="alert" className="text-red-500 text-left text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
