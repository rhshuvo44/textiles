import { FieldError, UseFormRegister } from "react-hook-form";
import { QuoteFormData } from "@/types";

type InputFieldProps = {
  register: UseFormRegister<QuoteFormData>;
  name: keyof QuoteFormData;
  placeholder: string;
  type?: string;
  error?: FieldError;
  validation?: object;
};

const InputField = ({
  register,
  name,
  placeholder,
  type = "text",
  error,
  validation,
}: InputFieldProps) => (
  <div>
    <input
      {...register(name, validation)}
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full text-black"
    />
    {error && <p className="text-red-500 text-left text-sm">{error.message}</p>}
  </div>
);

export default InputField;
