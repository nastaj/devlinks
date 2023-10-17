import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePlatform as updatePlatformApi } from "../../services/apiLinks";

export default function useUpdatePlatform() {
  const queryClient = useQueryClient();

  const { mutate: updatePlatform, isLoading: isUpdatingPlatform } = useMutation(
    {
      mutationFn: (id, newPlatform) => updatePlatformApi(id, newPlatform),

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["links"] });
      },
    },
  );

  return { updatePlatform, isUpdatingPlatform };
}
