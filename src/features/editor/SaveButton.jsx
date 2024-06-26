import useUpdateLinks from "./useUpdateLinks";

import Button from "../../ui/Button";

function SaveButton({ formData, isValid, setIsValid }) {
  const { submitUpdate, isUpdating } = useUpdateLinks();

  function handleSubmit(e) {
    e.preventDefault();
    setIsValid(false);
    submitUpdate(formData);
  }

  return (
    <div className="md:flex md:justify-end md:border-t">
      <Button
        className="md:mt-6 md:w-auto md:px-6"
        onClick={handleSubmit}
        type="button"
        disabled={isUpdating || !isValid}
      >
        Save
      </Button>
    </div>
  );
}

export default SaveButton;
