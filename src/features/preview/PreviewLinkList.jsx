import { useParams } from "react-router-dom";
import { useForms } from "../../context/FormsContext";
import PreviewLink from "../../ui/PreviewLink";
import useLinks from "../editor/useLinks";

function PreviewLinkList() {
  const { userId: UrlUserId } = useParams();
  useLinks(UrlUserId);
  const { forms = [] } = useForms();

  return (
    <ul className="flex flex-col gap-5 self-stretch xl:gap-3">
      {forms.length > 0
        ? forms.map((form) => <PreviewLink key={form.id} form={form} />)
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
