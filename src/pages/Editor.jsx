import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { linkOptions } from "../utils/constants";

function Editor() {
  return (
    <div className="px-12">
      <p>Links editor</p>
      {/* <Input placeholder="Text field empty" icon={"icon-link.svg"} /> */}
      {/* <Select options={linkOptions} /> */}
      <Button variation="primary" disabled={true} />
      <div className="mb-6"></div>
      <Button variation="secondary" disabled={true} />
    </div>
  );
}

export default Editor;
