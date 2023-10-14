import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiProfile";

export default function useProfile(UrlUserId) {
  // UrlUserId is optional. If it's not passed, the API will return profile of the currently logged in user. When UrlUserId is passed, it will return the profile of the user assigned to that specific URL. Necessary for sharing functionality.

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(UrlUserId),
  });

  return { profile, isLoading };
}
