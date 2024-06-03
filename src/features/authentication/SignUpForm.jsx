import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useSignUp from "./useSignUp";
import SpinnerMini from "../../ui/SpinnerMini";

// Email regex: /\S+@\S+\.\S+/

function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const { signup, isLoading } = useSignUp();

  function onSubmit(data) {
    signup(data, {
      onSettled: reset(),
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Input
        placeholder="e.g. alex@email.com"
        icon="icon-email.svg"
        name="email"
        label="Email address"
        register={register}
        validationSchema={{
          required: "Can't be empty",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address",
          },
        }}
        required
        errors={errors}
        disabled={isLoading}
      />
      <Input
        placeholder="At least 8 characters"
        icon="icon-password.svg"
        name="password"
        label="Create password"
        type="password"
        register={register}
        validationSchema={{
          required: "Field required",
          minLength: {
            value: 8,
            message: "Password is too short",
          },
        }}
        required
        errors={errors}
        disabled={isLoading}
      />
      <Input
        placeholder="At least 8 characters"
        icon="icon-password.svg"
        name="confirmPassword"
        label="Confirm password"
        type="password"
        register={register}
        validationSchema={{
          required: "Field required",
          minLength: {
            value: 8,
            message: "Password is too short",
          },
          validate: (value) =>
            value === getValues().password || "Please check again",
        }}
        required
        errors={errors}
        disabled={isLoading}
      />
      <span className="text-xs text-grey">
        Password must contain at least 8 characters
      </span>
      <Button type="submit">
        {isLoading ? <SpinnerMini /> : "Create new account"}
      </Button>
    </form>
  );
}

export default SignUpForm;
