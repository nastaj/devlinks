import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiProfile";

export default function useProfile() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return { profile, isLoading };
}
