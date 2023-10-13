import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile as updateProfileApi } from "../../services/apiProfile";
import toast from "react-hot-toast";

export default function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: updateProfileApi,

    onSuccess: () => {
      toast.success("Profile successfully updated");
      queryClient.invalidateQueries(["profile"]);
    },
    onError: () => {
      toast.error("There was a problem updating the profile. Try again");
    },
  });

  return { updateProfile, isUpdating };
}
