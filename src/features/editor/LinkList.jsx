import EmptyLinkList from "./EmptyLinkList";
import LinkForm from "./LinkForm";

import { useForms } from "../../context/FormsContext";
import Spinner from "../../ui/Spinner";

function LinkList() {
  const { isLoadingLinks, links, forms } = useForms();

  if (isLoadingLinks) return <Spinner />;

  if (!forms || !links.length) return <EmptyLinkList />;

  return (
    <ul className="flex flex-col gap-6">
      {forms.map((form, index) => (
        <LinkForm key={form.id} form={form} index={index} />
      ))}
    </ul>
  );
}

export default LinkList;
