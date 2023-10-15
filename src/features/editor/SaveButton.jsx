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
    <div className="md:flex md:justify-end md:border-t [&:not(:last-child)]:hidden">
      <Button
        className="md:mt-6 md:w-auto md:px-6"
        onClick={handleSubmit}
        disabled={isUpdating || newFormIsOpen || errors[name]}
        type="button"
      >
        Save
      </Button>
    </div>
  );
}

export default SaveButton;
