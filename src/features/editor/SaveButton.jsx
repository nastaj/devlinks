import { useForms } from "../../context/FormsContext";
import Button from "../../ui/Button";

function SaveButton() {
  const { forms } = useForms();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(forms);
  }

  return <Button onClick={handleSubmit}>Save</Button>;
}

export default SaveButton;
