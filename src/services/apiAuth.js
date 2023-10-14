import useUser from "../features/authentication/useUser";
import supabase from "./supabase";

export async function signup({ email, password }) {
  // 1. Create user
  const { data: userData, userError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (userError) return new Error(userError.message);

  // 2. Get user's ID
  const { id: userId } = await getCurrentUser();

  // 2. Create user's profile
  const { data: profileData, profileError } = await supabase
    .from("profiles")
    .insert([
      {
        userId: userId,
        firstName: "",
        lastName: "",
        email: email,
        avatar: "",
      },
    ])
    .select();

  if (profileError) return new Error(profileError.message);

  return { userData, profileData };
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser(UrlUserId) {
  const { data: session } = await supabase.auth.getSession();

  // Editor page for some reason returns UrlUserId as a prefilled object with some unrelated properties. That's why it's impossible to condition it as !UrlUserId
  // If there is no logged-in session in localStorage, OR user accesses the API through the preview page, just return the userId present in URL
  if (!session.session || typeof UrlUserId === "string")
    return { id: UrlUserId };

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
