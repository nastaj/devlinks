import { useForms } from "../../context/FormsContext";
import Button from "../../ui/Button";
import useAddUpdateLinks from "./useAddUpdateLinks";

function SaveButton() {
  const { forms } = useForms();
  const { addUpdate, isUpdating } = useAddUpdateLinks();

  function handleSubmit(e) {
    e.preventDefault();
    addUpdate(forms);
  }

  return <Button onClick={handleSubmit}>Save</Button>;
}

export default SaveButton;
