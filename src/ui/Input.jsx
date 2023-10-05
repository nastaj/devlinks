function Input({
  icon,
  disabled = false,
  placeholder = "Enter your data...",
  errors,
  type = "text",
  register,
  name,
  validationSchema,
}) {
  return (
    <div className="relative flex">
      {icon && (
        <img
          className="absolute left-3 top-1/2 z-50 -translate-y-1/2"
          src={icon}
          alt={placeholder}
        />
      )}
      <input
        type={type}
        className={`focus:drop-shadow-3xl w-full rounded-lg border border-borders bg-white p-3 pl-10 focus:outline-brand-purple ${
          errors ? "border-red text-red" : ""
        }`}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, validationSchema)}
      />
      {errors && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red">
          Please check again.
        </span>
      )}
    </div>
  );
}

export default Input;
