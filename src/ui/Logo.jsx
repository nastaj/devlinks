import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

function Logo({ type = "small" }) {
  const { windowSize } = useWindowSize();

  const imageUrl =
    windowSize.width > 600 || type === "large"
      ? "logo-devlinks-large.svg"
      : "logo-devlinks-small.svg";

  return (
    <img
      src={imageUrl}
      className={`${type === "large" ? "-mt-16 h-48 w-48" : "h-8 w-8"}`}
    />
  );
}

export default Logo;
