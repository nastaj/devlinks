import { useForms } from "../context/FormsContext";

function Option({ option, close, onSelected, selected, isStored, id }) {
  const isSelected = option.value === selected.value;
  const { setForms } = useForms();

  function handleClick() {
    onSelected(option);

    if (isStored) {
      setForms((forms) =>
        forms.map((form) =>
          form.id === id ? { ...form, platform: option.value } : form,
        ),
      );
    }

    close();
  }

  return (
    <li
      className={`flex cursor-pointer items-center gap-3 pb-3 pt-3 first:pt-0 last:pb-0 hover:text-brand-purple--hover  ${
        isSelected ? "text-brand-purple" : ""
      }`}
      onClick={handleClick}
    >
      <img src={option.icon} alt={option.label} />
      <span>
        {option.label} {isSelected && "(Selected)"}
      </span>
    </li>
  );
}

export default Option;
