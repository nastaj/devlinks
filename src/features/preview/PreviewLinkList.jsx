import { useParams } from "react-router-dom";
import PreviewLink from "../../ui/PreviewLink";
import useLinks from "../editor/useLinks";
import Spinner from "../../ui/Spinner";

function PreviewLinkList() {
  const { userId: UrlUserId } = useParams();
  const { links = [], isLoadingLinks } = useLinks(UrlUserId);

  if (isLoadingLinks) return <Spinner />;

  return (
    <ul className="flex flex-col gap-5 xl:gap-3">
      {links.length > 0
        ? links.map((form) => <PreviewLink key={form.id} form={form} />)
        : Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
            <div
              className="rounded-lg bg-[#EEEEEE] p-4 xl:p-6 xl:px-28"
              key={i}
            />
          ))}
    </ul>
  );
}

export default PreviewLinkList;
