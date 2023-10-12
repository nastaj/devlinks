function Button({
  variation = "primary",
  onClick,
  disabled,
  children,
  className,
}) {
  const btnStyles = {
    primary: `bg-brand-purple text-white hover:bg-brand-purple--hover ${
      disabled ? "bg-brand-purple--hover" : ""
    }`,
    secondary: `bg-white text-brand-purple border border-brand-purple hover:bg-brand-purple--light ${
      disabled ? "opacity-30" : ""
    }`,
  };

  return (
    <button
      className={`w-full rounded-lg px-6 py-3 font-bold transition-colors ${btnStyles[variation]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
