import { useQuery } from "@tanstack/react-query";
import { getUserLinks } from "../../services/apiLinks";

export default function useLinks(UrlUserId) {
  // UrlUserId is optional. If it's not passed, the API will return links of the currently logged in user. When UrlUserId is passed, it will return the links of the user assigned to that specific URL. Necessary for sharing functionality.

  const {
    data: links,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["links"],
    queryFn: () => getUserLinks(UrlUserId),
  });

  return { links, isLoading, refetch };
}
