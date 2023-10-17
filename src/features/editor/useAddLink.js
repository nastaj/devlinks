import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLink as addLinkApi } from "../../services/apiLinks";

export default function useAddLink() {
  const queryClient = useQueryClient();

  const { mutate: addLink, isLoading: isAddingLink } = useMutation({
    mutationFn: addLinkApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["links"]);
    },
  });

  return { addLink, isAddingLink };
}
