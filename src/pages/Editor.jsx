import LinkList from "../features/editor/LinkList";
import AddNewLink from "../features/editor/AddNewLink";
import useLinks from "../features/editor/useLinks";
import { useEffect, useState } from "react";
import PreviewLayout from "../features/preview/PreviewLayout";
import PreviewDetails from "../features/preview/PreviewDetails";
import PreviewLinkList from "../features/preview/PreviewLinkList";
import SaveButton from "../features/editor/SaveButton";

function Editor() {
  const { refetch } = useLinks();
  const [formData, setFormData] = useState([]);

  useEffect(
    function () {
      refetch();
    },
    [refetch],
  );

  return (
    <div className="h-full bg-grey-light xl:flex xl:justify-between xl:gap-6">
      <div className="xl:basis-[45%]">
        <PreviewLayout type="editor">
          <PreviewDetails />
          <PreviewLinkList />
        </PreviewLayout>
      </div>

      <div className="flex h-full flex-col gap-6 rounded-xl bg-white p-6 xl:basis-[55%]">
        <AddNewLink />
        <LinkList formData={formData} setFormData={setFormData} />
        <SaveButton />
      </div>
    </div>
  );
}

export default Editor;
