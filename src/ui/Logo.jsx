import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

function Logo({ type = "small", classname }) {
  const { windowSize } = useWindowSize();

  const imageUrl =
    windowSize.width > 768 || type === "large"
      ? "logo-devlinks-large.svg"
      : "logo-devlinks-small.svg";

  return (
    <img
      src={imageUrl}
      className={`${
        type === "large" ? "-mt-16 h-48 w-48" : "h-8 w-8"
      } ${classname}`}
    />
  );
}

export default Logo;
