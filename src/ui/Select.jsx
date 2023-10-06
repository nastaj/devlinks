import { useState } from "react";
import Option from "./Option";
import Dropdown from "./Dropdown";

function Select({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const close = () => setIsOpen(false);

  function handleToggle(e) {
    e.stopPropagation();
    setIsOpen((open) => !open);
  }

  return (
    <div className="relative">
      <div className="relative" onClick={handleToggle}>
        <img
          className="absolute left-3 top-1/2 z-50 -translate-y-1/2 cursor-pointer"
          src={selected.icon}
        />
        <div
          className={`w-full cursor-pointer rounded-lg border border-borders bg-white p-3 pl-10 ${
            isOpen ? "border-brand-purple drop-shadow-3xl" : ""
          }`}
        >
          {selected.label}
        </div>
        <img
          src="icon-chevron-down.svg"
          className={`absolute right-3 top-1/2 z-50 -translate-y-1/2 cursor-pointer ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <Dropdown close={close}>
          {options.map((option) => (
            <Option
              option={option}
              key={option.value}
              close={close}
              selected={selected}
              onSelected={setSelected}
            />
          ))}
        </Dropdown>
      )}
    </div>
  );
}

export default Select;
