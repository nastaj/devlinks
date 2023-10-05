import { useOutsideClick } from "../hooks/useOutsideClick";

function Dropdown({ children, close }) {
  const ref = useOutsideClick(close, false);

  return (
    <div
      ref={ref}
      className="absolute top-14 flex max-h-48 w-full flex-col divide-y overflow-auto rounded-lg border border-borders bg-white p-3"
    >
      {children}
    </div>
  );
}

export default Dropdown;
