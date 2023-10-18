import { useForms } from "../../context/FormsContext";

import Button from "../../ui/Button";
import useUpdateLinks from "./useUpdateLinks";

function SaveButton({ formData, hasError }) {
  const { submitUpdate, isUpdating } = useUpdateLinks();

  function handleSubmit(e) {
    e.preventDefault();
    submitUpdate(formData);
  }

  return (
    <div className="md:flex md:justify-end md:border-t">
      <Button
        className="md:mt-6 md:w-auto md:px-6"
        onClick={handleSubmit}
        type="button"
        disabled={isUpdating || hasError}
      >
        Save
      </Button>
    </div>
  );
}

export default SaveButton;
