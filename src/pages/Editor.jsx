import { useEffect, useState } from "react";

import LinkList from "../features/editor/LinkList";
import AddNewLink from "../features/editor/AddNewLink";
import useLinks from "../features/editor/useLinks";
import PreviewLayout from "../features/preview/PreviewLayout";
import PreviewDetails from "../features/preview/PreviewDetails";
import PreviewLinkList from "../features/preview/PreviewLinkList";
import SaveButton from "../features/editor/SaveButton";

function Editor() {
  const { links, refetch } = useLinks();
  const [formData, setFormData] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(
    function () {
      refetch();
      setFormData(links);
    },
    [refetch, links],
  );

  return (
    <div className="h-full xl:flex xl:justify-between xl:gap-6">
      <div className="hidden justify-center bg-white md:rounded-3xl xl:flex xl:h-[85vh] xl:basis-[45%] xl:py-6">
        <PreviewLayout page="editor">
          <PreviewDetails />
          <PreviewLinkList />
        </PreviewLayout>
      </div>

      <div className="flex h-full flex-col gap-6 rounded-xl bg-white p-6 xl:h-[85vh] xl:basis-[55%]">
        <AddNewLink setIsValid={setIsValid} />
        <LinkList
          formData={formData}
          setFormData={setFormData}
          setIsValid={setIsValid}
        />
        {links?.length && formData?.length ? (
          <SaveButton
            formData={formData}
            isValid={isValid}
            setIsValid={setIsValid}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Editor;
