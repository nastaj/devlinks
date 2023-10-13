import { useState } from "react";
import { useForm } from "react-hook-form";

import { inputSettings, linkOptions } from "../../utils/constants";
import { useForms } from "../../context/FormsContext";

import Input from "../../ui/Input";
import Select from "../../ui/Select";
import useDeleteLink from "./useDeleteLink";
import SaveButton from "./SaveButton";

function LinkForm({ form, index }) {
  const { id, platform, link, isCreating, isStored } = form;
  const { setForms, setNewFormIsOpen } = useForms();
  const [newPlatform, setNewPlatform] = useState(inputSettings[0].platform);
  const { deleteLink, isDeleting } = useDeleteLink();

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      link: link,
    },
  });

  const inputSetting = inputSettings.find(
    (setting) => newPlatform === setting.platform,
  );

  function handleDelete(e) {
    e.preventDefault();

    // Creating
    if (isCreating) setNewFormIsOpen(false);

    setForms((forms) => forms.filter((form) => form.id !== id));
    deleteLink(id);
  }

  function onSubmit(e) {
    e.preventDefault();

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
      setNewFormIsOpen(false);
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
                {!isCreating ? `Link #${index + 1}` : "New link"}
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
              onBlur: (e) => onSubmit(e),
              required: "Can't be empty",
              pattern: {
                value: inputSetting.pattern,
                message: "Please check the URL",
              },
            }}
            errors={errors}
            disabled={isDeleting}
            id={id}
          />
        </form>
      </li>

      <SaveButton name="link" errors={errors} />
    </>
  );
}

export default LinkForm;
