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

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
