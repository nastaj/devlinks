import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { login, isLoading } = useLogin();

  function onSubmit(data) {
    login(data, {
      onSettled: () => {
        reset();
      },
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
          required: "This field is required",
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
          required: "This field is required",
        }}
        required
        errors={errors}
        disabled={isLoading}
      />
      <Button disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
