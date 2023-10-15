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
  defaultValue,
  direction = "vertical",
}) {
  return (
    <div
      className={`${
        direction === "horizontal"
          ? "md:flex md:items-center md:justify-between"
          : ""
      }`}
    >
      <label
        className={`${
          direction === "horizontal"
            ? "text-base text-grey md:basis-1/2"
            : "text-xs"
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <div
        className={`${
          direction === "horizontal" ? "md:basis-3/4" : ""
        } relative flex`}
      >
        {icon && (
          <img
            className="absolute left-3 top-1/2 z-40 -translate-y-1/2"
            src={icon}
            alt={placeholder}
          />
        )}
        <input
          type={type}
          className={`w-full rounded-lg border border-borders bg-white p-3 focus:outline-brand-purple  focus:drop-shadow-3xl ${
            errors[name] ? "border-red text-red" : ""
          } ${icon && "pl-10"}`}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name, validationSchema)}
          defaultValue={defaultValue}
        />
        {errors[name] && (
          <span className="absolute -top-[1.2rem] right-0 text-xs text-red sm:right-3 sm:top-1/2 sm:-translate-y-1/2">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default Input;
