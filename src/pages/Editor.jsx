import LinkList from "../features/editor/LinkList";
import AddNewLink from "../features/editor/AddNewLink";
import { FormsProvider } from "../context/FormsContext";
import SaveButton from "../features/editor/SaveButton";

function Editor() {
  return (
    <FormsProvider>
      <form className="flex flex-col gap-6 p-6">
        <AddNewLink />
        <LinkList />
        <SaveButton />
      </form>
    </FormsProvider>
  );
}

export default Editor;
