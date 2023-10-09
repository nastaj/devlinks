import { useForms } from "../../context/FormsContext";
import Button from "../../ui/Button";
import { linkOptions } from "../../utils/constants";

function AddNewLink() {
  const { forms, setForms } = useForms();

  function handleAddForm(e) {
    e.preventDefault();

    const newForm = {
      id: Math.round(Math.random() * 1000),
      platform: linkOptions[0].value,
      link: "",
    };

    setForms((forms) => [...forms, newForm]);
  }

  console.log(forms);

  return (
    <div>
      <h1 className="mb mb-2 text-2xl font-bold">Customise your links</h1>
      <p className="mb-10 text-grey">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Button variation="secondary" onClick={handleAddForm}>
        + Add new link
      </Button>
    </div>
  );
}

export default AddNewLink;
