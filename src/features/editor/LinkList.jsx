import { useForms } from "../../context/FormsContext";
import { linkOptions } from "../../utils/constants";

import EmptyLinkList from "./EmptyLinkList";
import LinkForm from "./LinkForm";
import Spinner from "../../ui/Spinner";

function LinkList() {
  const { isLoadingLinks, forms = [], newFormIsOpen } = useForms();

  const newForm = {
    id: Math.round(Math.random() * 1000),
    platform: linkOptions[0].value,
    link: "",
    isCreating: true,
    isStored: false,
  };

  if (isLoadingLinks) return <Spinner />;
  if (!forms.length && !newFormIsOpen) return <EmptyLinkList />;

  return (
    <ul className="flex flex-col gap-6 overflow-y-auto">
      {forms.map((form, index) => (
        <LinkForm key={form.id} form={form} index={index} />
      ))}
      {newFormIsOpen && <LinkForm form={newForm} />}
    </ul>
  );
}

export default LinkList;
