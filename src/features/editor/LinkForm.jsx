import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { linkOptions } from "../../utils/constants";
import useDeleteLink from "./useDeleteLink";
import { useForms } from "../../context/FormsContext";

function LinkForm({ form, index }) {
  form;
  const { id, platform, link: url } = form;
  const { setForms } = useForms();
  const { deleteLink, isDeleting } = useDeleteLink();

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      link: url,
    },
  });

  function handleDelete() {
    deleteLink(id);
  }

  function handleInputChange(e) {
    setForms((forms) =>
      forms.map((form) =>
        form.id === id ? { ...form, link: e.target.value } : form,
      ),
    );
  }

  return (
    <li className="flex flex-col gap-3 rounded-xl bg-grey-light p-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="icon-drag-and-drop.svg" alt="Drag and drop icon" />
          <span className="font-bold text-grey">Link #{index + 1}</span>
        </div>
        <button
          className="text-grey"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          Remove
        </button>
      </div>

      <Select
        options={linkOptions}
        label="Platform"
        id={id}
        selectedPlatform={platform}
        disabled={isDeleting}
      />
      <Input
        icon="icon-link.svg"
        label="Link"
        placeholder="e.g. https://www.github.com/johnappleseed"
        name="link"
        register={register}
        validationSchema={{
          onChange: (e) => {
            handleInputChange(e);
          },
        }}
        errors={errors}
        disabled={isDeleting}
        id={id}
      />
    </li>
  );
}

export default LinkForm;
