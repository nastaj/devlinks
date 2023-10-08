import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created");
      navigate("/login");
    },
    onError: () => {
      toast.error("There was a problem creating new account. Try again");
    },
  });

  return { signup, isLoading };
}
