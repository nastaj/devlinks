import { useQuery } from "@tanstack/react-query";
import { getUserLinks } from "../../services/apiLinks";

export default function useLinks() {
  const { data: links, isLoading } = useQuery({
    queryKey: ["links"],
    queryFn: getUserLinks,
  });

  return { links, isLoading };
}
