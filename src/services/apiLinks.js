import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

export async function getUserLinks(UrlUserId) {
  // 1. Get logged in user OR user assigned to the userId present in the URL
  const { id } = await getCurrentUser(UrlUserId);

  // 2. Get user's links
  const { data: links, error } = await supabase
    .from("links")
    .select("id,platform,link")
    .eq("userId", id);

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
  // Use Promise.all to await all async operations inside map
  const results = await Promise.all(
    forms.map(async (form) => {
      console.log(form);
      // Adding
      if (form.isCreating) {
        const { error } = await supabase
          .from("links")
          .insert([
            { userId: userId, platform: form.platform, link: form.link },
          ])
          .select();

        if (error) throw new Error(error.message);

        return null;
      }

      // Updating
      if (!form.isCreating) {
        const { error } = await supabase
          .from("links")
          .update({ platform: form.platform, link: form.link })
          .eq("id", form.id)
          .select();

        if (error) throw new Error(error.message);

        return null;
      }
    }),
  );

  return results; // Return the results of all async operations
}
