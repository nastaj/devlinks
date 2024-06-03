import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useLogin } from "./useLogin";
import { useForms } from "../../context/FormsContext";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { login, isLoading } = useLogin();
  const { setForms } = useForms();

  function onSubmit(data) {
    login(data, {
      onSettled: () => {
        reset();
      },
    });
  }

  // Reset all remote state
  useEffect(
    function () {
      queryClient.removeQueries();
      setForms([]);
    },
    [queryClient, setForms],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Input
        placeholder="e.g. alex@email.com"
        icon="icon-email.svg"
        name="email"
        label="Email address"
        register={register}
        validationSchema={{
          required: "Field required",
        }}
        required
        errors={errors}
        disabled={isLoading}
      />
      <Input
        placeholder="Enter your password"
        icon="icon-password.svg"
        name="password"
        label="Password"
        type="password"
        register={register}
        validationSchema={{
          required: "Field required",
        }}
        required
        errors={errors}
        disabled={isLoading}
      />
      <Button disabled={isLoading} type="submit">
        {isLoading ? <SpinnerMini /> : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
