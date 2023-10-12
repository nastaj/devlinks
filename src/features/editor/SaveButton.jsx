import { useForms } from "../../context/FormsContext";

import useAddUpdateLinks from "./useAddUpdateLinks";

import Button from "../../ui/Button";

function SaveButton({ errors, name }) {
  const { forms = [], newFormIsOpen } = useForms();

  const { addUpdate, isUpdating } = useAddUpdateLinks();

  function handleSubmit(e) {
    e.preventDefault();
    addUpdate(forms);
  }

  if (!forms.length) return null;

  return (
    <Button
      className="[&:not(:last-child)]:hidden"
      onClick={handleSubmit}
      disabled={isUpdating || newFormIsOpen || errors[name]}
    >
      Save
    </Button>
  );
}

export default SaveButton;
