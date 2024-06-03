import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePosition } from "../../services/apiLinks";

export default function useUpdatePosition() {
  const queryClient = useQueryClient();

  const { mutate: updatePos, isLoading: isUpdating } = useMutation({
    mutationFn: (originalPos, newPos) => updatePosition(originalPos, newPos),

    onSuccess: () => {
      queryClient.invalidateQueries(["links"]);
    },
    onError: () => {
      toast.error("There was a problem updating the links");
    },
  });

  return { updatePos, isUpdating };
}
