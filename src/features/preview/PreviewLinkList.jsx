import { useForms } from "../../context/FormsContext";
import PreviewLink from "../../ui/PreviewLink";
import Spinner from "../../ui/Spinner";

function PreviewLinkList() {
  const { forms = [] } = useForms();

  return (
    <ul>
      {forms.map((form) => (
        <PreviewLink key={form.id} form={form} />
      ))}
    </ul>
  );
}

export default PreviewLinkList;
