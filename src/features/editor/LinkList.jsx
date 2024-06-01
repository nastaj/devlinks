import EmptyLinkList from "./EmptyLinkList";
import LinkForm from "./LinkForm";
import Spinner from "../../ui/Spinner";
import useLinks from "./useLinks";

function LinkList({ setFormData, setIsValid }) {
  const { links, isLoading } = useLinks();

  if (isLoading) return <Spinner />;
  if (!links.length) return <EmptyLinkList />;

  console.log(links);

  return (
    <ul className="flex flex-col gap-6 overflow-y-auto">
      {links.map((form, index) => (
        <LinkForm
          key={form.id}
          form={form}
          index={index}
          setFormData={setFormData}
          setIsValid={setIsValid}
        />
      ))}
    </ul>
  );
}

export default LinkList;
