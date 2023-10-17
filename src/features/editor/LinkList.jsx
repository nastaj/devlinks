import EmptyLinkList from "./EmptyLinkList";
import LinkForm from "./LinkForm";
import Spinner from "../../ui/Spinner";
import useLinks from "./useLinks";

function LinkList({ formData, setFormData }) {
  const { links, isLoading } = useLinks();

  if (isLoading) return <Spinner />;
  if (!links.length) return <EmptyLinkList />;

  return (
    <ul className="flex flex-col gap-6 overflow-y-auto">
      {links.map((form, index) => (
        <LinkForm
          key={form.id}
          form={form}
          index={index}
          formData={formData}
          setFormData={setFormData}
        />
      ))}
    </ul>
  );
}

export default LinkList;
