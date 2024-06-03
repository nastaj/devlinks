import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import useDeleteLink from "./useDeleteLink";
import useUpdatePlatform from "./useUpdatePlatform";
import { inputSettings, linkOptions } from "../../utils/constants";

import Input from "../../ui/Input";
import Select from "../../ui/Select";

function LinkForm({ form, index, setFormData, setIsValid }) {
  const { id, platform, link } = form;
  const [newPlatform, setNewPlatform] = useState(inputSettings[0].platform);
  const { deleteLink, isDeleting } = useDeleteLink();
  const { isUpdatingPlatform } = useUpdatePlatform();

  // DND Hooks & Styles
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const inputSetting = inputSettings.find(
    (setting) => newPlatform === setting.platform,
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      link: link,
    },
  });

  function handleDelete(e) {
    e.preventDefault();

    deleteLink(id);
  }

  function onSubmit(e) {
    const { value } = e.target;

    if (!value || Object.keys(errors).length > 0) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    setFormData((formData) =>
      formData.map((data) =>
        data.id === id ? { ...data, link: value } : data,
      ),
    );
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="touch-none rounded-xl bg-grey-light p-5"
    >
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              {...attributes}
              {...listeners}
              src="icon-drag-and-drop.svg"
              alt="Drag and drop icon"
            />
            <span className="font-bold text-grey">{`Link #${index + 1}`}</span>
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
  );
}

export default LinkForm;
