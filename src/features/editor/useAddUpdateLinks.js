import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUpdateLinks } from "../../services/apiLinks";
import toast from "react-hot-toast";

export default function useAddUpdateLinks() {
  const queryClient = useQueryClient();

  const { mutate: addUpdate, isLoading: isUpdating } = useMutation({
    mutationFn: (forms) => addUpdateLinks(forms),
    onSuccess: () => {
      toast.success("Links successfully updated!");
      queryClient.invalidateQueries(["links"]);
    },
    onError: () => {
      toast.error("There was a problem updating the links.");
    },
  });

  return { addUpdate, isUpdating };
}
