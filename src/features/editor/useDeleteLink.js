import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLink as deleteLinkApi } from "../../services/apiLinks";
import toast from "react-hot-toast";

export default function useDeleteLink() {
  const queryClient = useQueryClient();

  const { mutate: deleteLink, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteLinkApi(id),

    onSuccess: () => {
      toast.success("Link successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: () => {
      toast.error("Could not delete the link. Try again");
    },
  });

  return { deleteLink, isDeleting };
}
