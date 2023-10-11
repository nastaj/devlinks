import EmptyLinkList from "./EmptyLinkList";
import LinkForm from "./LinkForm";

import { useForms } from "../../context/FormsContext";
import Spinner from "../../ui/Spinner";
import { linkOptions } from "../../utils/constants";

function LinkList() {
  const { isLoadingLinks, forms = [], formIsOpen } = useForms();

  const newForm = {
    id: Math.round(Math.random() * 1000),
    platform: linkOptions[0].value,
    link: "",
    isCreating: true,
    isStored: false,
  };

  console.log(forms);

  if (isLoadingLinks) return <Spinner />;
  if (!forms.length && !formIsOpen) return <EmptyLinkList />;

  return (
    <ul className="flex flex-col gap-6">
      {forms.map((form, index) => (
        <LinkForm key={form.id} form={form} index={index} />
      ))}
      {formIsOpen && <LinkForm form={newForm} />}
    </ul>
  );
}

export default LinkList;
