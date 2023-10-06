import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { linkOptions } from "../utils/constants";

function Editor() {
  return (
    <div className="px-12">
      <p>Links editor</p>
      <Select options={linkOptions} />
    </div>
  );
}

export default Editor;
