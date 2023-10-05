import { NavLink } from "react-router-dom";

function Tab({ type = "primary", to }) {
  return (
    <div className="flex rounded-lg bg-brand-purple--light px-4 py-2">
      <NavLink to={to}>
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
      </NavLink>
    </div>
  );
}

export default Tab;
