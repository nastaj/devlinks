import { Link } from "react-router-dom";

function Button({
  variation = "primary",
  type = "button",
  onClick,
  disabled,
  children,
  className = "",
}) {
  const btnStyles = {
    primary: `bg-brand-purple text-white hover:bg-brand-purple--hover ${
      disabled ? "bg-brand-purple--hover" : ""
    }`,
    secondary: `bg-white text-brand-purple border border-brand-purple hover:bg-brand-purple--light ${
      disabled ? "opacity-30" : ""
    }`,
  };

  if (type === "button" || type === "submit") {
    return (
      <button
        className={`w-full rounded-lg px-6 py-3 font-bold transition-colors ${btnStyles[variation]} ${className}`}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }

  if (type === "link") {
    return (
      <Link
        className={`inline-block w-full rounded-lg px-6 py-3 text-center font-bold transition-colors ${btnStyles[variation]} ${className}`}
        disabled={disabled}
        to="/editor"
      >
        {children}
      </Link>
    );
  }
}

export default Button;
