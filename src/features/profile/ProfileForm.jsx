import { useForm } from "react-hook-form";
import FileInput from "../../ui/FileInput";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useProfile from "./useProfile";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import useUpdateProfile from "./useUpdateProfile";

function ProfileForm() {
  const { profile = {}, isLoading } = useProfile();
  const { updateProfile, isUpdating } = useUpdateProfile();
  const [avatar, setAvatar] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    const updateData = { ...data, avatar };
    updateProfile(updateData);
  }

  useEffect(
    function () {
      setAvatar(profile.avatar);
    },
    [profile],
  );

  if (isLoading) return <Spinner />;

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-xl bg-grey-light p-5">
        <p className="mb-4 text-grey">Profile picture</p>
        <FileInput
          label="+ Upload Image"
          name="avatar"
          accept="image/png, image/jpeg"
          register={register}
          validationSchema={{
            required: avatar ? false : "Can't be empty",
          }}
          errors={errors}
          disabled={isUpdating}
          setFile={setAvatar}
          file={avatar}
        />
        <p className="mt-6 text-xs text-grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl bg-grey-light p-5">
        <Input
          label="First name*"
          placeholder="e.g John"
          name="firstName"
          register={register}
          validationSchema={{
            required: "Can't be empty",
          }}
          errors={errors}
          defaultValue={profile.firstName}
          disabled={isUpdating}
        />
        <Input
          label="Last name*"
          placeholder="e.g Appleseed"
          name="lastName"
          register={register}
          validationSchema={{
            required: "Can't be empty",
          }}
          errors={errors}
          defaultValue={profile.lastName}
          disabled={isUpdating}
        />
        <Input
          label="Email"
          placeholder="e.g example@email.com"
          name="email"
          register={register}
          validationSchema={{
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          }}
          defaultValue={profile.email}
          errors={errors}
          disabled={isUpdating}
        />
      </div>

      <div className="border-t-2 py-4">
        <Button disabled={isUpdating}>Save</Button>
      </div>
    </form>
  );
}

export default ProfileForm;