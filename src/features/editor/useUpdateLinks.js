import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLinks } from "../../services/apiLinks";
import toast from "react-hot-toast";

export default function useUpdateLinks() {
  const queryClient = useQueryClient();

  const { mutate: submitUpdate, isLoading: isUpdating } = useMutation({
    mutationFn: (formData) => updateLinks(formData),

    onSuccess: () => {
      queryClient.invalidateQueries(["links"]);
      toast.success("Links successfully updated");
    },
    onError: () => {
      toast.error("There was a problem updating the links");
    },
  });

  return { submitUpdate, isUpdating };
}
