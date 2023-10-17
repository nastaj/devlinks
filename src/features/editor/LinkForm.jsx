import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { inputSettings, linkOptions } from "../../utils/constants";

import Input from "../../ui/Input";
import Select from "../../ui/Select";
import useDeleteLink from "./useDeleteLink";
import SaveButton from "./SaveButton";
import useUpdatePlatform from "./useUpdatePlatform";

function LinkForm({ form, index, formData, setFormData }) {
  const { id, platform, link } = form;

  const [newPlatform, setNewPlatform] = useState(inputSettings[0].platform);
  const { deleteLink, isDeleting } = useDeleteLink();
  const { isUpdatingPlatform } = useUpdatePlatform();

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      link: link,
    },
  });

  const inputSetting = inputSettings.find(
    (setting) => newPlatform === setting.platform,
  );

  function handleDelete(e) {
    e.preventDefault();

    deleteLink(id);
  }

  function onSubmit(e) {
    e.preventDefault();

    const { value } = e.target;
    if (!value) return;

    const newFormData = {
      id,
      link: value,
      errors,
    };

    console.log(formData);
  }

  return (
    <>
      <li className="rounded-xl bg-grey-light p-5">
        <form className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src="icon-drag-and-drop.svg" alt="Drag and drop icon" />
              <span className="font-bold text-grey">
                {`Link #${index + 1}`}
              </span>
            </div>
            <button
              className="text-grey"
              onClick={handleDelete}
              disabled={isDeleting || isUpdatingPlatform}
              type="button"
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
            disabled={isDeleting || isUpdatingPlatform}
            form={form}
          />
          <Input
            icon="icon-link.svg"
            label="Link"
            placeholder={`e.g. ${inputSetting.placeholder}`}
            name="link"
            register={register}
            validationSchema={{
              onChange: (e) => onSubmit(e),
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
    </>
  );
}

export default LinkForm;
