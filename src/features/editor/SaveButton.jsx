import { useForms } from "../../context/FormsContext";
import Button from "../../ui/Button";
import useAddUpdateLinks from "./useAddUpdateLinks";

function SaveButton() {
  const { forms = [] } = useForms();
  const { addUpdate, isUpdating } = useAddUpdateLinks();

  function handleSubmit(e) {
    e.preventDefault();
    addUpdate(forms);
  }

  if (!forms.length) return null;

  return (
    <Button onClick={handleSubmit} disabled={isUpdating}>
      Save
    </Button>
  );
}

export default SaveButton;
