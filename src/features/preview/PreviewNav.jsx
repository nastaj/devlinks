import { useParams } from "react-router-dom";
import useUser from "../authentication/useUser";
import { UrlToClipboard } from "../../utils/helpers";

import Button from "../../ui/Button";

function PreviewNav() {
  const { userId: UrlUserId } = useParams();
  const { user = {}, isAuthenticated } = useUser();
  const hasCreated = UrlUserId === user.id;

  return (
    isAuthenticated &&
    hasCreated && (
      <nav className="mb-16 flex gap-4 p-4 md:justify-between">
        <>
          <Button variation="secondary" type="link" className="md:w-auto">
            Back to Editor
          </Button>
          <Button onClick={UrlToClipboard}>Share Link</Button>
        </>
      </nav>
    )
  );
}

export default PreviewNav;
