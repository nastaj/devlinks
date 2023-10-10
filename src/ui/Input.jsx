import { useForms } from "../context/FormsContext";

function Input({
  icon,
  disabled = false,
  placeholder = "Enter your data...",
  errors,
  type = "text",
  register,
  name,
  validationSchema,
  label,
}) {
  return (
    <div>
      <label className="text-xs" htmlFor={name}>
        {label}
      </label>
      <div className="relative flex">
        {icon && (
          <img
            className="absolute left-3 top-1/2 z-40 -translate-y-1/2"
            src={icon}
            alt={placeholder}
          />
        )}
        <input
          type={type}
          className={`w-full rounded-lg border border-borders bg-white p-3 pl-10 focus:outline-brand-purple focus:drop-shadow-3xl ${
            errors[name] ? "border-red text-red" : ""
          }`}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name, validationSchema)}
        />
        {errors[name] && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default Input;
