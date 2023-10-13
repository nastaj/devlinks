import { getCurrentUser } from "./apiAuth";
import supabase, { supabaseUrl } from "./supabase";

export async function getProfile() {
  // 1. Get logged in user
  const { id: userId } = await getCurrentUser();

  // 2. Get logged in user's links
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("firstName,lastName,email,avatar")
    .eq("userId", userId)
    .single();

  if (error) throw new Error(error.message);

  return profile;
}

export async function updateProfile(updateData) {
  const { firstName, lastName, email, avatar } = updateData;
  const { avatar: previousAvatar } = await getProfile();

  const hasChanged = typeof avatar !== "string";

  // 1. Get logged in user
  const { id: userId } = await getCurrentUser();

  // 2. Upload the avatar image
  const fileName = `avatar-${userId}-${Math.random()}`;
  if (hasChanged) {
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(fileName, avatar);

    if (storageError) throw new Error(storageError.message);
  }

  //  3. Update data for logged in user
  const { data, error } = await supabase
    .from("profiles")
    .update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      avatar: hasChanged
        ? `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
        : previousAvatar,
    })
    .eq("userId", userId)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
