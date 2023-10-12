import { FormsProvider } from "../context/FormsContext";

import LinkList from "../features/editor/LinkList";
import AddNewLink from "../features/editor/AddNewLink";
import SaveButton from "../features/editor/SaveButton";

function Editor() {
  return (
    <FormsProvider>
      <div className="flex flex-col gap-6 p-6">
        <AddNewLink />
        <LinkList />
        {/* <SaveButton /> */}
      </div>
    </FormsProvider>
  );
}

export default Editor;
