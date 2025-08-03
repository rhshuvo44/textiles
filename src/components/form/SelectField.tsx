import { UseFormRegister } from "react-hook-form";
import { QuoteFormData } from "@/types";

type SelectFieldProps = {
  register: UseFormRegister<QuoteFormData>;
  name: keyof QuoteFormData;
  options: string[];
  placeholder: string;
};

const SelectField = ({
  register,
  name,
  options,
  placeholder,
}: SelectFieldProps) => (
  <div>
    <select
      {...register(name)}
      className="select select-bordered w-full text-black"
      defaultValue=""
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
