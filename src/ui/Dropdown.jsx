import { useOutsideClick } from "../hooks/useOutsideClick";

function Dropdown({ children, close }) {
  const ref = useOutsideClick(close, false);

  return (
    <ul
      ref={ref}
      className="top-15 absolute z-50 flex max-h-48 w-full flex-col divide-y overflow-auto rounded-lg border border-borders bg-white p-3"
    >
      {children}
    </ul>
  );
}

export default Dropdown;
