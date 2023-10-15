import LinkList from "../features/editor/LinkList";
import AddNewLink from "../features/editor/AddNewLink";
import useLinks from "../features/editor/useLinks";
import { useEffect } from "react";

function Editor() {
  const { refetch } = useLinks();

  useEffect(
    function () {
      refetch();
    },
    [refetch],
  );

  return (
    <div className="flex flex-col gap-6 p-6">
      <AddNewLink />
      {<LinkList />}
      {/* <SaveButton /> */}
    </div>
  );
}

export default Editor;
