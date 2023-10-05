function Option({ option, close, onSelected, selected }) {
  const isSelected = option.value === selected.value;

  function handleClick() {
    onSelected(option);
    close();
  }

  return (
    <div
      className={`flex cursor-pointer items-center gap-3 pb-3 pt-3 first:pt-0 last:pb-0 hover:text-brand-purple--hover  ${
        isSelected ? "text-brand-purple" : ""
      }`}
      onClick={handleClick}
    >
      <img src={option.icon} alt={option.label} />
      <span>
        {option.label} {isSelected && "(Selected)"}
      </span>
    </div>
  );
}

export default Option;
