import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForms } from "../../context/FormsContext";

function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { login, isLoading } = useLogin();
  const { setForms } = useForms();
  const queryClient = useQueryClient();

  function onSubmit(data) {
    login(data, {
      onSettled: () => {
        reset();
      },
    });
  }

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
          required: "Can't be empty",
        }}
        required
        errors={errors}
        disabled={isLoading}
      />
      <Input
        placeholder="Enter your password"
        icon="icon-password.svg"
        name="password"
        label="Enter your password"
        type="password"
        register={register}
        validationSchema={{
          required: "Can't be empty",
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
