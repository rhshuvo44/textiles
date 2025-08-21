import { FieldError, Path, UseFormRegister } from "react-hook-form";

type SelectFieldProps<T extends Record<string, unknown>> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  options: string[];
  placeholder: string;
  error?: FieldError;
};

const SelectField = <T extends Record<string, unknown>>({
  register,
  name,
  options,
  placeholder,
  error,
}: SelectFieldProps<T>) => {
  return (
    <div>
      <select
        {...register(name, { required: `${placeholder} is required` })}
        className="select select-bordered w-full"
        aria-invalid={error ? "true" : "false"}
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
      {error && (
        <p role="alert" className="text-red-500 text-left text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default SelectField;
