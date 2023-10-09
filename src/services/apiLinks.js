import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

export async function getUserLinks() {
  // 1. Get logged in user
  const { id: userId } = await getCurrentUser();

  // 2. Get logged in user's links
  const { data: links, error } = await supabase
    .from("links")
    .select("id,platform,link")
    .eq("userId", userId);

  if (error) throw new Error(error.message);

  return links;
}

export async function deleteLink(id) {
  const { error } = await supabase.from("links").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return null;
}

export async function addUpdateLinks(forms) {
  // 1. Get logged in user
  const { id: userId } = await getCurrentUser();

  // 2. Determine if user updates or adds a new link
  const query = supabase.from("links");

  forms.map((form) => {});

  //
  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
}
