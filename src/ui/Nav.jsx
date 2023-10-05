import Tab from "./Tab";

function Nav() {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-12">
        <li>
          <Tab to="editor" />
        </li>
        <li>
          <Tab to="profile" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
