import Button from "../../ui/Button";
import { linkOptions } from "../../utils/constants";
import useUser from "../authentication/useUser";
import useAddLink from "./useAddLink";

function AddNewLink({ setIsValid }) {
  const { user } = useUser();
  const { addLink, isAddingLink } = useAddLink();

  function handleAddLink(e) {
    e.preventDefault();

    const newLink = {
      userId: user.id,
      platform: linkOptions[0].value,
      link: "",
    };

    setIsValid(false);
    addLink(newLink);
  }

  return (
    <div>
      <h1 className="mb mb-2 text-2xl font-bold">Customise your links</h1>
      <p className="mb-10 text-grey">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Button
        variation="secondary"
        onClick={handleAddLink}
        disabled={isAddingLink}
      >
        + Add new link
      </Button>
    </div>
  );
}

export default AddNewLink;
