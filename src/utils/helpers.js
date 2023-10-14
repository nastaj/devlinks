import toast from "react-hot-toast";

export async function UrlToClipboard() {
  try {
    await navigator.clipboard.writeText(location.href);
    toast.success("Link copied to clipboard");
  } catch (error) {
    toast.error(`There was a problem copying the link: ${error}`);
  }
}
