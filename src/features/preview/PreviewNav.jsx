import Button from "../../ui/Button";
import { UrlToClipboard } from "../../utils/helpers";
import useUser from "../authentication/useUser";

function PreviewNav() {
  const { isAuthenticated } = useUser();

  return (
    <nav className="mb-16 flex gap-4 p-4">
      {isAuthenticated && (
        <>
          <Button variation="secondary" type="link">
            Back to Editor
          </Button>
          <Button onClick={UrlToClipboard}>Share Link</Button>
        </>
      )}
    </nav>
  );
}

export default PreviewNav;
