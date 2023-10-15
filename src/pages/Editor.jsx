import LinkList from "../features/editor/LinkList";
import AddNewLink from "../features/editor/AddNewLink";

function Editor() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <AddNewLink />
      {<LinkList />}
      {/* <SaveButton /> */}
    </div>
  );
}

export default Editor;
