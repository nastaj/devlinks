import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

export async function getUserLinks(UrlUserId) {
  // 1. Get logged in user OR user assigned to the userId present in the URL
  // NOTE: userId defaults to the DEFAULT_UUID, which is an empty user in the DB. It's a fix for auth when the user is not logged in to prevent from spamming the console with unnecessary errors.
  const { id } = await getCurrentUser(UrlUserId);

  // 2. Get user's links
  const { data: links, error } = await supabase
    .from("links")
    .select("id,platform,link,order")
    .eq("userId", id)
    .order("order");
  if (error) throw new Error(error.message);

  return links;
}

export async function addLink(newLink) {
  const { error } = await supabase.from("links").insert(newLink).select();

  if (error) throw new Error(error.message);

  return null;
}

export async function deleteLink(id) {
  const { error } = await supabase.from("links").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return null;
}

export async function updatePlatform({ id, newPlatform }) {
  const { data, error } = await supabase
    .from("links")
    .update({ platform: newPlatform })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function updateLinks(formData) {
  formData.map(async (form) => {
    const { error } = await supabase
      .from("links")
      .update({ link: form.link })
      .eq("id", form.id)
      .select();

    if (error) throw new Error(error.message);

    return null;
  });
}

export async function updatePosition({ originalPos, newPos }) {
  const { error } = await supabase
    .from("links")
    .update({ order: newPos.order })
    .eq("id", originalPos.id);
  if (error) throw new Error(error.message);

  const { error2 } = await supabase
    .from("links")
    .update({ order: originalPos.order })
    .eq("id", newPos.id);
  if (error2) throw new Error(error2.message);

  return null;
}

// OLD SOLUTION USING "FORMS" ARRAY
// export async function addUpdateLinks(forms) {
//   // 1. Get logged in user
//   const { id: userId } = await getCurrentUser();

//   // 2. Determine if user updates or adds a new link
//   // Use Promise.all to await all async operations inside map
//   const results = await Promise.all(
//     forms.map(async (form) => {
//       // Adding
//       if (form.isCreating) {
//         const { error } = await supabase
//           .from("links")
//           .insert([
//             { userId: userId, platform: form.platform, link: form.link },
//           ])
//           .select();

//         if (error) throw new Error(error.message);

//         return null;
//       }

//       // Updating
//       if (!form.isCreating) {
//         const { error } = await supabase
//           .from("links")
//           .update({ platform: form.platform, link: form.link })
//           .eq("id", form.id)
//           .select();

//         if (error) throw new Error(error.message);

//         return null;
//       }
//     }),
//   );

//   return results; // Return the results of all async operations
// }
