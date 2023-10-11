import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { inputSettings, linkOptions } from "../../utils/constants";
import useDeleteLink from "./useDeleteLink";
import { useForms } from "../../context/FormsContext";
import SaveButton from "./SaveButton";
import { useState } from "react";

function LinkForm({ form, index }) {
  const { id, platform, link, isCreating, isStored } = form;
  const { forms, setForms, setFormIsOpen } = useForms();
  const [newPlatform, setNewPlatform] = useState("");
  const { deleteLink, isDeleting } = useDeleteLink();

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      link: link,
    },
  });

  console.log(form);

  const inputSetting = inputSettings.find(
    (setting) => form.platform === setting.platform,
  );

  function handleDelete(e) {
    e.preventDefault();

    // Creating
    if (isCreating) setFormIsOpen(false);

    setForms((forms) => forms.filter((form) => form.id !== id));
    deleteLink(id);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(forms);

    const { value } = e.target;
    if (!value) return;

    // Creating
    if (isCreating && !isStored) {
      const newForm = {
        id,
        platform: newPlatform,
        link: value,
        isCreating,
        isStored: true,
      };
      setForms((forms) => [...forms, newForm]);
      setFormIsOpen(false);
    }

    // Editing
    if (!isCreating || isStored) {
      setForms((forms) =>
        forms.map((form) => (form.id === id ? { ...form, link: value } : form)),
      );
    }
  }

  return (
    <>
      <li className="flex flex-col gap-3 rounded-xl bg-grey-light p-5">
        <form>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src="icon-drag-and-drop.svg" alt="Drag and drop icon" />
              <span className="font-bold text-grey">
                {isStored ? `Link #${index + 1}` : "New link"}
              </span>
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
            setNewPlatform={setNewPlatform}
            isStored={isStored}
            disabled={isDeleting}
            form={form}
          />
          <Input
            icon="icon-link.svg"
            label="Link"
            placeholder={`e.g. ${inputSetting.placeholder}`}
            name="link"
            register={register}
            validationSchema={{
              onBlur: (e) => {
                onSubmit(e);
              },
              required: "This field is required",
            }}
            errors={errors}
            disabled={isDeleting}
            id={id}
          />
        </form>
      </li>
    </>
  );
}

export default LinkForm;
