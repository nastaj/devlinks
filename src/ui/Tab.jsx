import { NavLink } from "react-router-dom";

function Tab({ type = "primary", to }) {
  return (
    <NavLink
      to={to}
      className={`flex rounded-lg px-6 py-2 ${
        type === "secondary"
          ? "border border-brand-purple px-[0.85rem] py-2"
          : ""
      }`}
    >
      <>
        {to === "editor" && (
          <img src="icon-link.svg" alt="Link icon" className="h-6 w-6" />
        )}
        {to === "profile" && (
          <img
            src="icon-profile-details-header.svg"
            alt="Profile icon"
            className="h-6 w-6"
          />
        )}
        {to === "preview" && (
          <img
            src="icon-preview-header.svg"
            alt="Header icon"
            className="h-6 w-6"
          />
        )}
      </>
    </NavLink>
  );
}

export default Tab;
