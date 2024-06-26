import { previewLinks } from "../utils/constants";

function PreviewLink({ form, page }) {
  const { platform, link } = form;
  const previewLink = previewLinks.find(
    (previewLink) => previewLink.value === platform,
  );
  const { icon, label, value, color } = previewLink;

  return (
    <li>
      <a
        className={`flex justify-between rounded-lg p-3 ${color} ${
          value === "frontendmentor"
            ? "border border-borders text-grey-dark"
            : "text-white"
        } ${page === "preview" ? "w-48" : ""}`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex gap-2">
          <img
            className={`${
              value === "frontendmentor" ? "brightness-100" : "brightness-[10]"
            }`}
            src={icon}
            alt={`${label} icon`}
          />
          <span>{label}</span>
        </div>
        <img
          className={`${value === "frontendmentor" ? "brightness-0" : ""}`}
          src="icon-arrow-right.svg"
          alt="Right arrow icon"
        />
      </a>
    </li>
  );
}

export default PreviewLink;
