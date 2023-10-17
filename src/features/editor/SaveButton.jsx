import { useForms } from "../../context/FormsContext";

import useAddUpdateLinks from "./useAddLink";

import Button from "../../ui/Button";
import useLinks from "./useLinks";

function SaveButton() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="md:flex md:justify-end md:border-t">
      <Button
        className="md:mt-6 md:w-auto md:px-6"
        onClick={handleSubmit}
        type="button"
      >
        Save
      </Button>
    </div>
  );
}

export default SaveButton;
